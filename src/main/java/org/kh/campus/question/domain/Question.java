package org.kh.campus.question.domain;

public class Question {
	private int questionNo;
	private String professorName;
	private String lectureName;
	private String questionTitle;
	private String questionContent;
	private String questionWriter;
	private String questionDate;
	private String questionUpdateDate;
	private int questionCount;
	private String questionFileName;
	private String questionFileReNeme;
	private String questionFilePath;
	
	public Question() {}

	public Question(int questionNo, String professorName, String lectureName, String questionTitle,
			String questionContent, String questionWriter, String questionDate, String questionUpdateDate,
			int questionCount, String questionFileName, String questionFileReNeme, String questionFilePath) {
		super();
		this.questionNo = questionNo;
		this.professorName = professorName;
		this.lectureName = lectureName;
		this.questionTitle = questionTitle;
		this.questionContent = questionContent;
		this.questionWriter = questionWriter;
		this.questionDate = questionDate;
		this.questionUpdateDate = questionUpdateDate;
		this.questionCount = questionCount;
		this.questionFileName = questionFileName;
		this.questionFileReNeme = questionFileReNeme;
		this.questionFilePath = questionFilePath;
	}

	public int getQuestionNo() {
		return questionNo;
	}

	public void setQuestionNo(int questionNo) {
		this.questionNo = questionNo;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public String getLectureName() {
		return lectureName;
	}

	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}

	public String getQuestionTitle() {
		return questionTitle;
	}

	public void setQuestionTitle(String questionTitle) {
		this.questionTitle = questionTitle;
	}

	public String getQuestionContent() {
		return questionContent;
	}

	public void setQuestionContent(String questionContent) {
		this.questionContent = questionContent;
	}

	public String getQuestionWriter() {
		return questionWriter;
	}

	public void setQuestionWriter(String questionWriter) {
		this.questionWriter = questionWriter;
	}

	public String getQuestionDate() {
		return questionDate;
	}

	public void setQuestionDate(String questionDate) {
		this.questionDate = questionDate;
	}

	public String getQuestionUpdateDate() {
		return questionUpdateDate;
	}

	public void setQuestionUpdateDate(String questionUpdateDate) {
		this.questionUpdateDate = questionUpdateDate;
	}

	public int getQuestionCount() {
		return questionCount;
	}

	public void setQuestionCount(int questionCount) {
		this.questionCount = questionCount;
	}

	public String getQuestionFileName() {
		return questionFileName;
	}

	public void setQuestionFileName(String questionFileName) {
		this.questionFileName = questionFileName;
	}

	public String getQuestionFileReNeme() {
		return questionFileReNeme;
	}

	public void setQuestionFileReNeme(String questionFileReNeme) {
		this.questionFileReNeme = questionFileReNeme;
	}

	public String getQuestionFilePath() {
		return questionFilePath;
	}

	public void setQuestionFilePath(String questionFilePath) {
		this.questionFilePath = questionFilePath;
	}

	@Override
	public String toString() {
		return "Question [questionNo=" + questionNo + ", professorName=" + professorName + ", lectureName="
				+ lectureName + ", questionTitle=" + questionTitle + ", questionContent=" + questionContent
				+ ", questionWriter=" + questionWriter + ", questionDate=" + questionDate + ", questionUpdateDate="
				+ questionUpdateDate + ", questionCount=" + questionCount + ", questionFileName=" + questionFileName
				+ ", questionFileReNeme=" + questionFileReNeme + ", questionFilePath=" + questionFilePath + "]";
	}

	
	

}
