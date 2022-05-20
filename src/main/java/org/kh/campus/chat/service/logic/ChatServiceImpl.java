package org.kh.campus.chat.service.logic;

import org.kh.campus.chat.domain.ChatRoom;
import org.kh.campus.chat.service.ChatService;
import org.kh.campus.chat.store.ChatStore;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {

	@Autowired
	private ChatStore cStore;
	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public int createChatRoom(ChatRoom chatRoom) {
		int result = cStore.insertChatRoom(chatRoom, sqlSession);
		return result;
	}
	
	@Override
	public ChatRoom visitChatRoom(Integer marketNo) {
		ChatRoom chatRoom = cStore.selectOneChatRoom(sqlSession, marketNo);
		return chatRoom;
	}

}
