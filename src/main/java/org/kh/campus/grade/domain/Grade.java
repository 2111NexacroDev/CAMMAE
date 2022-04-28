package org.kh.campus.grade.domain;

public class Grade {
	private int lectureNo;
	private int studentNo;
	private String gradeYear;
	private String gradeSession;
	private String gradeSubject;
	private String gradeComplete;
	private int lectureGrade;
	private int gradeScore;
	private int gradeAvg;
	private String gradeFeedback;
	private String gradeObjection;
	private String gradeChange;
	private String objectionContent;
	private String feedbackContent;
	
	public Grade() {}

	@Override
	public String toString() {
		return "Grade [lectureNo=" + lectureNo + ", studentNo=" + studentNo + ", gradeYear=" + gradeYear
				+ ", gradeSession=" + gradeSession + ", gradeSubject=" + gradeSubject + ", gradeComplete="
				+ gradeComplete + ", lectureGrade=" + lectureGrade + ", gradeScore=" + gradeScore + ", gradeAvg="
				+ gradeAvg + ", gradeFeedback=" + gradeFeedback + ", gradeObjection=" + gradeObjection
				+ ", gradeChange=" + gradeChange + ", objectionContent=" + objectionContent + ", feedbackContent="
				+ feedbackContent + "]";
	}

	public Grade(int lectureNo, int studentNo, String gradeYear, String gradeSession, String gradeSubject,
			String gradeComplete, int lectureGrade, int gradeScore, int gradeAvg, String gradeFeedback,
			String gradeObjection, String gradeChange, String objectionContent, String feedbackContent) {
		super();
		this.lectureNo = lectureNo;
		this.studentNo = studentNo;
		this.gradeYear = gradeYear;
		this.gradeSession = gradeSession;
		this.gradeSubject = gradeSubject;
		this.gradeComplete = gradeComplete;
		this.lectureGrade = lectureGrade;
		this.gradeScore = gradeScore;
		this.gradeAvg = gradeAvg;
		this.gradeFeedback = gradeFeedback;
		this.gradeObjection = gradeObjection;
		this.gradeChange = gradeChange;
		this.objectionContent = objectionContent;
		this.feedbackContent = feedbackContent;
	}

	public int getLectureNo() {
		return lectureNo;
	}

	public void setLectureNo(int lectureNo) {
		this.lectureNo = lectureNo;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public String getGradeYear() {
		return gradeYear;
	}

	public void setGradeYear(String gradeYear) {
		this.gradeYear = gradeYear;
	}

	public String getGradeSession() {
		return gradeSession;
	}

	public void setGradeSession(String gradeSession) {
		this.gradeSession = gradeSession;
	}

	public String getGradeSubject() {
		return gradeSubject;
	}

	public void setGradeSubject(String gradeSubject) {
		this.gradeSubject = gradeSubject;
	}

	public String getGradeComplete() {
		return gradeComplete;
	}

	public void setGradeComplete(String gradeComplete) {
		this.gradeComplete = gradeComplete;
	}

	public int getLectureGrade() {
		return lectureGrade;
	}

	public void setLectureGrade(int lectureGrade) {
		this.lectureGrade = lectureGrade;
	}

	public int getGradeScore() {
		return gradeScore;
	}

	public void setGradeScore(int gradeScore) {
		this.gradeScore = gradeScore;
	}

	public int getGradeAvg() {
		return gradeAvg;
	}

	public void setGradeAvg(int gradeAvg) {
		this.gradeAvg = gradeAvg;
	}

	public String getGradeFeedback() {
		return gradeFeedback;
	}

	public void setGradeFeedback(String gradeFeedback) {
		this.gradeFeedback = gradeFeedback;
	}

	public String getGradeObjection() {
		return gradeObjection;
	}

	public void setGradeObjection(String gradeObjection) {
		this.gradeObjection = gradeObjection;
	}

	public String getGradeChange() {
		return gradeChange;
	}

	public void setGradeChange(String gradeChange) {
		this.gradeChange = gradeChange;
	}

	public String getObjectionContent() {
		return objectionContent;
	}

	public void setObjectionContent(String objectionContent) {
		this.objectionContent = objectionContent;
	}

	public String getFeedbackContent() {
		return feedbackContent;
	}

	public void setFeedbackContent(String feedbackContent) {
		this.feedbackContent = feedbackContent;
	}
	
	
	
	
}
