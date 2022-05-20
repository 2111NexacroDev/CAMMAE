package org.kh.campus.chat.store;

import org.kh.campus.chat.domain.ChatRoom;
import org.mybatis.spring.SqlSessionTemplate;

public interface ChatStore {
	
	public int insertChatRoom(ChatRoom chatRoom, SqlSessionTemplate sqlSession);

	public ChatRoom selectOneChatRoom(SqlSessionTemplate sqlSession, Integer marketNo);

}
