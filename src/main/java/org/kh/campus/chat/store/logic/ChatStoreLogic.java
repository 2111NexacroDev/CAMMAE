package org.kh.campus.chat.store.logic;

import org.kh.campus.chat.domain.ChatRoom;
import org.kh.campus.chat.store.ChatStore;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ChatStoreLogic implements ChatStore {

	@Override
	public int insertChatRoom(ChatRoom chatRoom, SqlSessionTemplate sqlSession) {
		int result = sqlSession.insert("ChatMapper.insertChatRoom", chatRoom);
		return result;
	}

	@Override
	public ChatRoom selectOneChatRoom(SqlSessionTemplate sqlSession, Integer marketNo) {
		ChatRoom chatRoom = sqlSession.selectOne("ChatMapper.selectOneChatRoom", marketNo);
		return chatRoom;
	}

}
