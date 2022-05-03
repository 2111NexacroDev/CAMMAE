package org.kh.campus.lecture.domain;

public class Lecture {
	private int lectureNo;
	private int professorNo;
	private String universityCollege;
	private String lectureDepartment;
	private String lectureName;
	private String professorName;
	private String lectureDivision;
	private int lectureGrade;
	private String lectureRoom;
	private int lecturePeople;
	private String lectureTime;
	private int studentNo;
	private String gradeYear;
	private String gradeSession; 
	
	public Lecture() {}

	public Lecture(int lectureNo, int professorNo, String universityCollege, String lectureDepartment,
			String lectureName, String professorName, String lectureDivision, int lectureGrade, String lectureRoom,
			int lecturePeople, String lectureTime, int studentNo, String gradeYear, String gradeSession) {
		super();
		this.lectureNo = lectureNo;
		this.professorNo = professorNo;
		this.universityCollege = universityCollege;
		this.lectureDepartment = lectureDepartment;
		this.lectureName = lectureName;
		this.professorName = professorName;
		this.lectureDivision = lectureDivision;
		this.lectureGrade = lectureGrade;
		this.lectureRoom = lectureRoom;
		this.lecturePeople = lecturePeople;
		this.lectureTime = lectureTime;
		this.studentNo = studentNo;
		this.gradeYear = gradeYear;
		this.gradeSession = gradeSession;
	}

	public int getLectureNo() {
		return lectureNo;
	}

	public void setLectureNo(int lectureNo) {
		this.lectureNo = lectureNo;
	}

	public int getProfessorNo() {
		return professorNo;
	}

	public void setProfessorNo(int professorNo) {
		this.professorNo = professorNo;
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

	@Override
	public String toString() {
		return "Lecture [lectureNo=" + lectureNo + ", professorNo=" + professorNo + ", universityCollege="
				+ universityCollege + ", lectureDepartment=" + lectureDepartment + ", lectureName=" + lectureName
				+ ", professorName=" + professorName + ", lectureDivision=" + lectureDivision + ", lectureGrade="
				+ lectureGrade + ", lectureRoom=" + lectureRoom + ", lecturePeople=" + lecturePeople + ", lectureTime="
				+ lectureTime + ", studentNo=" + studentNo + ", gradeYear=" + gradeYear + ", gradeSession="
				+ gradeSession + "]";
	}

	
}	