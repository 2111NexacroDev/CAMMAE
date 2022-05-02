package org.kh.campus.student.domain;

public class Student {
	private int studentNo;
	private String universityCollege;
	private String departmentName;
	private String studentName;
	private int studentGrade;
	private String studentBirth;
	private String studentAddress;
	private String studentPhonenumber;
	private String studentEmail;
	private String studentPassword;
	private String professorNo;
	private String studentState;
	private String professorName;
	private int universityCode;
	
	public Student() {}

	public Student(int studentNo, String universityCollege, String departmentName, String studentName, int studentGrade,
			String studentBirth, String studentAddress, String studentPhonenumber, String studentEmail,
			String studentPassword, String professorNo, String studentState, String professorName) {
		super();
		this.studentNo = studentNo;
		this.universityCollege = universityCollege;
		this.departmentName = departmentName;
		this.studentName = studentName;
		this.studentGrade = studentGrade;
		this.studentBirth = studentBirth;
		this.studentAddress = studentAddress;
		this.studentPhonenumber = studentPhonenumber;
		this.studentEmail = studentEmail;
		this.studentPassword = studentPassword;
		this.professorNo = professorNo;
		this.studentState = studentState;
		this.professorName = professorName;
	}
	
	

	public Student(int studentNo, String universityCollege, String departmentName, String studentName, int studentGrade,
			String studentBirth, String studentAddress, String studentPhonenumber, String studentEmail,
			String professorNo, String studentState, String professorName) {
		super();
		this.studentNo = studentNo;
		this.universityCollege = universityCollege;
		this.departmentName = departmentName;
		this.studentName = studentName;
		this.studentGrade = studentGrade;
		this.studentBirth = studentBirth;
		this.studentAddress = studentAddress;
		this.studentPhonenumber = studentPhonenumber;
		this.studentEmail = studentEmail;
		this.professorNo = professorNo;
		this.studentState = studentState;
		this.professorName = professorName;
	}

	public Student(String studentAddress, String studentPhonenumber, String studentEmail) {
		super();
		this.studentAddress = studentAddress;
		this.studentPhonenumber = studentPhonenumber;
		this.studentEmail = studentEmail;
	}
	
	

	public Student(int studentNo, String universityCollege, String departmentName, String studentName, int studentGrade,
			String studentBirth, String studentAddress, String studentPhonenumber, String studentEmail,
			String studentPassword, String professorNo, String studentState, String professorName, int universityCode) {
		super();
		this.studentNo = studentNo;
		this.universityCollege = universityCollege;
		this.departmentName = departmentName;
		this.studentName = studentName;
		this.studentGrade = studentGrade;
		this.studentBirth = studentBirth;
		this.studentAddress = studentAddress;
		this.studentPhonenumber = studentPhonenumber;
		this.studentEmail = studentEmail;
		this.studentPassword = studentPassword;
		this.professorNo = professorNo;
		this.studentState = studentState;
		this.professorName = professorName;
		this.universityCode = universityCode;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public String getUniversityCollege() {
		return universityCollege;
	}

	public void setUniversityCollege(String universityCollege) {
		this.universityCollege = universityCollege;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getStudentGrade() {
		return studentGrade;
	}

	public void setStudentGrade(int studentGrade) {
		this.studentGrade = studentGrade;
	}

	public String getStudentBirth() {
		return studentBirth;
	}

	public void setStudentBirth(String studentBirth) {
		this.studentBirth = studentBirth;
	}

	public String getStudentAddress() {
		return studentAddress;
	}

	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}

	public String getStudentPhonenumber() {
		return studentPhonenumber;
	}

	public void setStudentPhonenumber(String studentPhonenumber) {
		this.studentPhonenumber = studentPhonenumber;
	}

	public String getStudentEmail() {
		return studentEmail;
	}

	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}

	public String getStudentPassword() {
		return studentPassword;
	}

	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}

	public String getProfessorNo() {
		return professorNo;
	}

	public void setProfessorNo(String professorNo) {
		this.professorNo = professorNo;
	}

	public String getStudentState() {
		return studentState;
	}

	public void setStudentState(String studentState) {
		this.studentState = studentState;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public int getUniversityCode() {
		return universityCode;
	}

	public void setUniversityCode(int universityCode) {
		this.universityCode = universityCode;
	}

	@Override
	public String toString() {
		return "Student [studentNo=" + studentNo + ", universityCollege=" + universityCollege + ", departmentName="
				+ departmentName + ", studentName=" + studentName + ", studentGrade=" + studentGrade + ", studentBirth="
				+ studentBirth + ", studentAddress=" + studentAddress + ", studentPhonenumber=" + studentPhonenumber
				+ ", studentEmail=" + studentEmail + ", studentPassword=" + studentPassword + ", professorNo="
				+ professorNo + ", studentState=" + studentState + ", professorName=" + professorName
				+ ", universityCode=" + universityCode + "]";
	}
	
	
	
}
