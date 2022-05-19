package org.kh.campus.chat.service;

import org.kh.campus.chat.domain.ChatRoom;

public interface ChatService {
	
	public int createChatRoom(ChatRoom chatRoom);

	public ChatRoom visitChatRoom(Integer marketNo);

}
