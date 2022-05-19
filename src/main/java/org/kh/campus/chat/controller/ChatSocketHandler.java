package org.kh.campus.chat.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.kh.campus.chat.domain.ChatMessage;
import org.kh.campus.student.domain.Student;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;

public class ChatSocketHandler extends TextWebSocketHandler {

	// 연결된 모든 sessions 저장
	private List<Map<String, Object>> sessions = new ArrayList<Map<String, Object>>();

	// 접속한 유저의 http세션을 조회하여 userId를 얻는 함수
	private String getUserName(WebSocketSession session) {
		Map<String, Object> httpSession = session.getAttributes();
		// String userId = (String) httpSession.get("loginName"); // 세션에 저장된 userId 기준
		// 조회
		String userName = ((Student) httpSession.get("loginUser")).getStudentName();
		return userName == null ? null : userName;
	}

	/**
	 * websocket 연결 성공 시
	 */
	
	/*
	 * @Override public void afterConnectionEstablished(WebSocketSession session) throws Exception {
	 * }
	 */
	
	/**
	 * websocket 메세지 수신 및 송신
	 */
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		// userName 알아내기
		String senderName = getUserName(session);
		Gson gson = new Gson();
		ChatMessage cMsg = gson.fromJson(message.getPayload(), ChatMessage.class);
		String marketNo = cMsg.getMarketNo();
		String cmd = cMsg.getCmd();

		if (cmd.equals("CMD_ENTER")) {
			Map<String, Object> infoMap = new HashMap<String, Object>();
			infoMap.put("marketNo", marketNo);
			infoMap.put("session", session);
			// 채팅방에 접속한 사용자 세션을 리스트에 저장
			sessions.add(infoMap);

			// 채팅 전달

			for (Map<String, Object> sMap : sessions) {
				System.out.println("sessionsTest : " + sessions);
				WebSocketSession mSession = (WebSocketSession) sMap.get("session");
				System.out.println("sessionTest : " + session);
				if (((String) sMap.get("marketNo")).equals(marketNo)) {
					mSession.sendMessage(new TextMessage(senderName + "님이 입장하셨습니다."));
				}
			}

		}
		if (cmd.equals("CMD_MSG_SEND")) {
			/*
			 * Map<String, Object> infoMap = new HashMap<String, Object>();
			 * infoMap.put("boardNo", boardNo); infoMap.put("session", session); // 채팅방에 접속한
			 * 사용자 세션을 리스트에 저장 sessions.add(infoMap);
			 */

			// 채팅 전달
			for (Map<String, Object> sMap : sessions) {
				WebSocketSession mSession = (WebSocketSession) sMap.get("session");
				// 내가 접속하려는 방 번호와 디비에서 가져온 방 번호가 같을 때 채팅방에 들어가는것
				if (((String) sMap.get("marketNo")).equals(marketNo)) {
					mSession.sendMessage(new TextMessage(senderName + " : " + cMsg.getMsg()));
				}

			}
		}
	}

	/**
	 * websocket 연결 종료 시
	 */
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		String senderName = getUserName(session); // userId 알아내기
		String marketNo = ((Integer) session.getAttributes().get("marketNo")) + "";
		Map<String, Object> infoMap = new HashMap<String, Object>();
		infoMap.put("marketNo", marketNo);
		infoMap.put("session", session);

		// 채팅방에서 퇴장한 사용자 세션을 리스트에서 제거
		sessions.remove(infoMap);

		// 채팅 전달
		for (Map<String, Object> sMap : sessions) {
			if (((String) sMap.get("marketNo")).equals(marketNo)) {
				WebSocketSession mSession = (WebSocketSession) sMap.get("session");
				mSession.sendMessage(new TextMessage(senderName + "님이 퇴장하셨습니다."));
			}
		}
	}
}
