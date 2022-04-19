package org.kh.campus.attendance.domain;

public class AttendanceIssue {
	
	private int studentNo;
	private int lectureNo;
	private String issueContent;
	private String issueDate;
	
	public AttendanceIssue() {}

	public AttendanceIssue(int studentNo, int lectureNo, String issueContent, String issueDate) {
		super();
		this.studentNo = studentNo;
		this.lectureNo = lectureNo;
		this.issueContent = issueContent;
		this.issueDate = issueDate;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public int getLectureNo() {
		return lectureNo;
	}

	public void setLectureNo(int lectureNo) {
		this.lectureNo = lectureNo;
	}

	public String getIssueContent() {
		return issueContent;
	}

	public void setIssueContent(String issueContent) {
		this.issueContent = issueContent;
	}

	public String getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}

	@Override
	public String toString() {
		return "AttendanceIssue [studentNo=" + studentNo + ", lectureNo=" + lectureNo + ", issueContent=" + issueContent
				+ ", issueDate=" + issueDate + "]";
	}
	
	

}
