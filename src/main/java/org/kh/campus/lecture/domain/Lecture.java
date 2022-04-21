package org.kh.campus.lecture.domain;

public class Lecture {
	private int lectureNo;
	private String universityCollege;
	private String lectureDepartment;
	private String lectureName;
	private String professorName;
	private String lectureDivision;
	private int lectureGrade;
	private String lectureRoom;
	private int lecturePeople;
	private String lectureTime;
	private int professorNo;
	
	public Lecture() {}

	public int getLectureNo() {
		return lectureNo;
	}

	public void setLectureNo(int lectureNo) {
		this.lectureNo = lectureNo;
	}

	public String getUniversityCollege() {
		return universityCollege;
	}

	public void setUniversityCollege(String universityCollege) {
		this.universityCollege = universityCollege;
	}

	public String getLectureDepartment() {
		return lectureDepartment;
	}

	public void setLectureDepartment(String lectureDepartment) {
		this.lectureDepartment = lectureDepartment;
	}

	public String getLectureName() {
		return lectureName;
	}

	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public String getLectureDivision() {
		return lectureDivision;
	}

	public void setLectureDivision(String lectureDivision) {
		this.lectureDivision = lectureDivision;
	}

	public int getLectureGrade() {
		return lectureGrade;
	}

	public void setLectureGrade(int lectureGrade) {
		this.lectureGrade = lectureGrade;
	}

	public String getLectureRoom() {
		return lectureRoom;
	}

	public void setLectureRoom(String lectureRoom) {
		this.lectureRoom = lectureRoom;
	}

	public int getLecturePeople() {
		return lecturePeople;
	}

	public void setLecturePeople(int lecturePeople) {
		this.lecturePeople = lecturePeople;
	}

	public String getLectureTime() {
		return lectureTime;
	}

	public void setLectureTime(String lectureTime) {
		this.lectureTime = lectureTime;
	}

	public int getProfessorNo() {
		return professorNo;
	}

	public void setProfessorNo(int professorNo) {
		this.professorNo = professorNo;
	}

	@Override
	public String toString() {
		return "Lecture [lectureNo=" + lectureNo + ", universityCollege=" + universityCollege + ", lectureDepartment="
				+ lectureDepartment + ", lectureName=" + lectureName + ", professorName=" + professorName
				+ ", lectureDivision=" + lectureDivision + ", lectureGrade=" + lectureGrade + ", lectureRoom="
				+ lectureRoom + ", lecturePeople=" + lecturePeople + ", lectureTime=" + lectureTime + ", professorNo="
				+ professorNo + "]";
	}

	

}
