package org.kh.campus.chat.domain;

public class ChatRoom {
	private int chatRoomNo;
	private int marketNo;
	private String marketTitle;
	
	public ChatRoom() {}

	public ChatRoom(int chatRoomNo, int marketNo, String marketTitle) {
		super();
		this.chatRoomNo = chatRoomNo;
		this.marketNo = marketNo;
		this.marketTitle = marketTitle;
	}

	public int getChatRoomNo() {
		return chatRoomNo;
	}

	public void setChatRoomNo(int chatRoomNo) {
		this.chatRoomNo = chatRoomNo;
	}

	public int getMarketNo() {
		return marketNo;
	}

	public void setMarketNo(int marketNo) {
		this.marketNo = marketNo;
	}

	public String getMarketTitle() {
		return marketTitle;
	}

	public void setMarketTitle(String marketTitle) {
		this.marketTitle = marketTitle;
	}

	@Override
	public String toString() {
		return "ChatRoom [chatRoomNo=" + chatRoomNo + ", marketNo=" + marketNo + ", marketTitle=" + marketTitle + "]";
	}

	

}
