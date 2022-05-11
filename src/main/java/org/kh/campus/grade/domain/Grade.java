package org.kh.campus.grade.domain;

public class Grade {
	private int lectureNo;
	private int studentNo;
	private String gradeYear;
	private String gradeSession;
	private String gradeSubject;
	private String gradeComplete;
	private int lectureGrade;
	private String gradeScore;
	private String gradeAvg;
	private String gradeFeedback;
	private String gradeObjection;
	private String gradeChange;
	private String objectionContent;
	private String feedbackContent;
	private String studentName;
	
	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

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
	
	

	// 교수의 학생 성적 입력할때
	public Grade(String feedbackContent, int lectureNo, int studentNo) {
		super();
		this.lectureNo = lectureNo;
		this.studentNo = studentNo;
		this.feedbackContent = feedbackContent;
	}

	// 학생이 이의 신청할때
	public Grade(int lectureNo, int studentNo, String objectionContent) {
		super();
		this.lectureNo = lectureNo;
		this.studentNo = studentNo;
		this.objectionContent = objectionContent;
	}

	// 성적조회
	public Grade(int lectureNo, int studentNo, String gradeScore, String gradeAvg) {
		super();
		this.lectureNo = lectureNo;
		this.studentNo = studentNo;
		this.gradeScore = gradeScore;
		this.gradeAvg = gradeAvg;
	}
	
	

	public Grade(int lectureNo, int studentNo, String gradeYear, String gradeSession, String gradeSubject,
			String gradeComplete, int lectureGrade, String gradeScore, String gradeAvg, String gradeFeedback,
			String gradeObjection, String gradeChange, String objectionContent, String feedbackContent,
			String studentName) {
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
		this.studentName = studentName;
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

	public String getGradeScore() {
		return gradeScore;
	}

	public void setGradeScore(String gradeScore) {
		this.gradeScore = gradeScore;
	}

	public String getGradeAvg() {
		return gradeAvg;
	}

	public void setGradeAvg(String gradeAvg) {
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
