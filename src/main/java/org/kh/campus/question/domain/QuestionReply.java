package org.kh.campus.question.domain;

public class QuestionReply {
	private int questionReplyNo;
	private int questionNo;
	private String questionReplyId;
	private String questionReplyWriter;
	private String questionReplyContent;
	private String questionReplyDate;
	private String questionReplyUpdateDate;
	
	public QuestionReply () {}

	public QuestionReply(int questionReplyNo, int questionNo, String questionReplyId, String questionReplyWriter,
			String questionReplyContent, String questionReplyDate, String questionReplyUpdateDate) {
		super();
		this.questionReplyNo = questionReplyNo;
		this.questionNo = questionNo;
		this.questionReplyId = questionReplyId;
		this.questionReplyWriter = questionReplyWriter;
		this.questionReplyContent = questionReplyContent;
		this.questionReplyDate = questionReplyDate;
		this.questionReplyUpdateDate = questionReplyUpdateDate;
	}

	public int getQuestionReplyNo() {
		return questionReplyNo;
	}

	public void setQuestionReplyNo(int questionReplyNo) {
		this.questionReplyNo = questionReplyNo;
	}

	public int getQuestionNo() {
		return questionNo;
	}

	public void setQuestionNo(int questionNo) {
		this.questionNo = questionNo;
	}

	public String getQuestionReplyId() {
		return questionReplyId;
	}

	public void setQuestionReplyId(String questionReplyId) {
		this.questionReplyId = questionReplyId;
	}

	public String getQuestionReplyWriter() {
		return questionReplyWriter;
	}

	public void setQuestionReplyWriter(String questionReplyWriter) {
		this.questionReplyWriter = questionReplyWriter;
	}

	public String getQuestionReplyContent() {
		return questionReplyContent;
	}

	public void setQuestionReplyContent(String questionReplyContent) {
		this.questionReplyContent = questionReplyContent;
	}

	public String getQuestionReplyDate() {
		return questionReplyDate;
	}

	public void setQuestionReplyDate(String questionReplyDate) {
		this.questionReplyDate = questionReplyDate;
	}

	public String getQuestionReplyUpdateDate() {
		return questionReplyUpdateDate;
	}

	public void setQuestionReplyUpdateDate(String questionReplyUpdateDate) {
		this.questionReplyUpdateDate = questionReplyUpdateDate;
	}

	@Override
	public String toString() {
		return "QuestionReply [questionReplyNo=" + questionReplyNo + ", questionNo=" + questionNo + ", questionReplyId="
				+ questionReplyId + ", questionReplyWriter=" + questionReplyWriter + ", questionReplyContent="
				+ questionReplyContent + ", questionReplyDate=" + questionReplyDate + ", questionReplyUpdateDate="
				+ questionReplyUpdateDate + "]";
	}

	
	
	

}
