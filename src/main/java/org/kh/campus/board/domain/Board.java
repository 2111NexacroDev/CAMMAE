package org.kh.campus.board.domain;

public class Board {
	
	private int boardNo;
	private String boardTitle;
	private String boardContent;
	private String boardWriter;
	private String boardDate;
	private String boardUpdatedate;
	private int boardCount;
	private String boardFilename;
	private String boardFilerename;
	private String boardFilepath;
	private String universityCode;
	
	public Board() {}

	public Board(int boardNo, String boardTitle, String boardContent, String boardWriter, String boardDate,
			String boardUpdatedate, int boardCount, String boardFilename, String boardFilerename, String boardFilepath,
			String universityCode) {
		super();
		this.boardNo = boardNo;
		this.boardTitle = boardTitle;
		this.boardContent = boardContent;
		this.boardWriter = boardWriter;
		this.boardDate = boardDate;
		this.boardUpdatedate = boardUpdatedate;
		this.boardCount = boardCount;
		this.boardFilename = boardFilename;
		this.boardFilerename = boardFilerename;
		this.boardFilepath = boardFilepath;
		this.universityCode = universityCode;
	}

	public int getBoardNo() {
		return boardNo;
	}

	public void setBoardNo(int boardNo) {
		this.boardNo = boardNo;
	}

	public String getBoardTitle() {
		return boardTitle;
	}

	public void setBoardTitle(String boardTitle) {
		this.boardTitle = boardTitle;
	}

	public String getBoardContent() {
		return boardContent;
	}

	public void setBoardContent(String boardContent) {
		this.boardContent = boardContent;
	}

	public String getBoardWriter() {
		return boardWriter;
	}

	public void setBoardWriter(String boardWriter) {
		this.boardWriter = boardWriter;
	}

	public String getBoardDate() {
		return boardDate;
	}

	public void setBoardDate(String boardDate) {
		this.boardDate = boardDate;
	}

	public String getBoardUpdatedate() {
		return boardUpdatedate;
	}

	public void setBoardUpdatedate(String boardUpdatedate) {
		this.boardUpdatedate = boardUpdatedate;
	}

	public int getBoardCount() {
		return boardCount;
	}

	public void setBoardCount(int boardCount) {
		this.boardCount = boardCount;
	}

	public String getBoardFilename() {
		return boardFilename;
	}

	public void setBoardFilename(String boardFilename) {
		this.boardFilename = boardFilename;
	}

	public String getBoardFilerename() {
		return boardFilerename;
	}

	public void setBoardFilerename(String boardFilerename) {
		this.boardFilerename = boardFilerename;
	}

	public String getBoardFilepath() {
		return boardFilepath;
	}

	public void setBoardFilepath(String boardFilepath) {
		this.boardFilepath = boardFilepath;
	}

	public String getUniversityCode() {
		return universityCode;
	}

	public void setUniversityCode(String universityCode) {
		this.universityCode = universityCode;
	}

	@Override
	public String toString() {
		return "Board [boardNo=" + boardNo + ", boardTitle=" + boardTitle + ", boardContent=" + boardContent
				+ ", boardWriter=" + boardWriter + ", boardDate=" + boardDate + ", boardUpdatedate=" + boardUpdatedate
				+ ", boardCount=" + boardCount + ", boardFilename=" + boardFilename + ", boardFilerename="
				+ boardFilerename + ", boardFilepath=" + boardFilepath + ", universityCode=" + universityCode + "]";
	}

	
	

}
