package org.kh.campus.attendance.domain;

public class Attendance {
	private int studentNo;
	private int lectureNo;
	private String attDate;
	private String attStatus;
	private String attObjection;
	private String lectureName;
	private String studentName;
	
	public Attendance() {}



	public Attendance(int studentNo, int lectureNo, String attDate, String attStatus, String attObjection,
			String lectureName, String studentName) {
		super();
		this.studentNo = studentNo;
		this.lectureNo = lectureNo;
		this.attDate = attDate;
		this.attStatus = attStatus;
		this.attObjection = attObjection;
		this.lectureName = lectureName;
		this.studentName = studentName;
	}



	public Attendance(String lectureName) {
		this.lectureName = lectureName;
	}

	public Attendance(String studentName, String lectureName, int lectureNo, int studentNo, String attStatus) {
		super();
		this.studentNo = studentNo;
		this.lectureNo = lectureNo;
		this.lectureName = lectureName;
		this.studentName = studentName;
		this.attStatus = attStatus;
	}



	public Attendance(int lectureNo, int studentNo) {
		this.studentNo = studentNo;
		this.lectureNo = lectureNo;
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

	public String getAttDate() {
		return attDate;
	}

	public void setAttDate(String attDate) {
		this.attDate = attDate;
	}

	public String getAttStatus() {
		return attStatus;
	}

	public void setAttStatus(String attStatus) {
		this.attStatus = attStatus;
	}

	public String getAttObjection() {
		return attObjection;
	}

	public void setAttObjection(String attObjection) {
		this.attObjection = attObjection;
	}

	
	public String getLectureName() {
		return lectureName;
	}

	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}

	
	
	
	public String getStudentName() {
		return studentName;
	}



	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}



	@Override
	public String toString() {
		return "Attendance [studentNo=" + studentNo + ", lectureNo=" + lectureNo + ", attDate=" + attDate
				+ ", attStatus=" + attStatus + ", attObjection=" + attObjection + ", lectureName=" + lectureName
				+ ", studentName=" + studentName + "]";
	}




	
	
}
