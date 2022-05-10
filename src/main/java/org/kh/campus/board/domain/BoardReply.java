package org.kh.campus.board.domain;

public class BoardReply {
	
	private int boardreplyNo;
	private int boardNo;
	private String boardreplyWriter;
	private String boardreplyContent;
	private String boardreplyDate;
	private String boardreplyUpdatedate;
	private int boardId;
	
	
	public BoardReply() {}


	public BoardReply(int boardreplyNo, int boardNo, String boardreplyWriter, String boardreplyContent,
			String boardreplyDate, String boardreplyUpdatedate, int boardId) {
		super();
		this.boardreplyNo = boardreplyNo;
		this.boardNo = boardNo;
		this.boardreplyWriter = boardreplyWriter;
		this.boardreplyContent = boardreplyContent;
		this.boardreplyDate = boardreplyDate;
		this.boardreplyUpdatedate = boardreplyUpdatedate;
		this.boardId = boardId;
	}


	public int getBoardreplyNo() {
		return boardreplyNo;
	}


	public void setBoardreplyNo(int boardreplyNo) {
		this.boardreplyNo = boardreplyNo;
	}


	public int getBoardNo() {
		return boardNo;
	}


	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}


	public String getBoardreplyWriter() {
		return boardreplyWriter;
	}


	public void setBoardreplyWriter(String boardreplyWriter) {
		this.boardreplyWriter = boardreplyWriter;
	}


	public String getBoardreplyContent() {
		return boardreplyContent;
	}


	public void setBoardreplyContent(String boardreplyContent) {
		this.boardreplyContent = boardreplyContent;
	}


	public String getBoardreplyDate() {
		return boardreplyDate;
	}


	public void setBoardreplyDate(String boardreplyDate) {
		this.boardreplyDate = boardreplyDate;
	}


	public String getBoardreplyUpdatedate() {
		return boardreplyUpdatedate;
	}


	public void setBoardreplyUpdatedate(String boardreplyUpdatedate) {
		this.boardreplyUpdatedate = boardreplyUpdatedate;
	}


	public int getBoardId() {
		return boardId;
	}


	public void setBoardId(int boardId) {
		this.boardId = boardId;
	}


	@Override
	public String toString() {
		return "BoardReply [boardreplyNo=" + boardreplyNo + ", boardNo=" + boardNo + ", boardreplyWriter="
				+ boardreplyWriter + ", boardreplyContent=" + boardreplyContent + ", boardreplyDate=" + boardreplyDate
				+ ", boardreplyUpdatedate=" + boardreplyUpdatedate + ", boardId=" + boardId + "]";
	}
	
	
	

}
