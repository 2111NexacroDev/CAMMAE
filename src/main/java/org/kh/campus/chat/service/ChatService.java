package org.kh.campus.chat.service;

import org.kh.campus.chat.domain.ChatRoom;

public interface ChatService {
	//게시글 작성 시 채팅방 생성
	public int createChatRoom(ChatRoom chatRoom);

	//채팅방 생성
	public ChatRoom visitChatRoom(Integer marketNo);

}
