package org.kh.campus.chat.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.kh.campus.student.domain.Student;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class ChatSocketHandler extends TextWebSocketHandler{
	
private List<WebSocketSession> sessions = new ArrayList<WebSocketSession>(); // 연결된 모든 sessions 저장
	
	// 접속한 유저의 http세션을 조회하여 userId를 얻는 함수
	private String getUserName(WebSocketSession session) {
		Map<String, Object> httpSession = session.getAttributes();
		//String userId = (String) httpSession.get("loginName"); // 세션에 저장된 userId 기준 조회
		String userName = ((Student) httpSession.get("loginUser")).getStudentName();
		return userName == null ? null : userName;
	}

	/**
	 * websocket 연결 성공 시
	 */
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {

		String senderId = getUserName(session); // userId 알아내기

		// 채팅방에 접속한 사용자 세션을 리스트에 저장
		sessions.add(session);

		// 모든 세션에 채팅 전달
		for (WebSocketSession s : sessions) {
			s.sendMessage(new TextMessage(senderId + "님이 입장하셨습니다."));
		}

	}

	/**
	 * websocket 연결 종료 시
	 */
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		String senderId = getUserName(session); // userId 알아내기

		// 채팅방에서 퇴장한 사용자 세션을 리스트에서 제거
		sessions.remove(session);
		
		// 모든 세션에 채팅 전달
		for (WebSocketSession s: sessions) {
			s.sendMessage(new TextMessage(senderId + "님이 퇴장하셨습니다."));
		}

	}

	/**
	 * websocket 메세지 수신 및 송신
	 */
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		String senderId = getUserName(session); // userId 알아내기

		// 모든 세션에 채팅 전달
		for (WebSocketSession s : sessions) {
			s.sendMessage(new TextMessage(senderId + " : " + message.getPayload()));
		}

	}


}
