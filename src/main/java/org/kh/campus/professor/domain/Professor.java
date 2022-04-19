package org.kh.campus.professor.domain;

public class Professor {
	private int professorNo;
	private String departmentName;
	private String professorName;
	private String professorBirth;
	private String professorAddress;
	private String professorPhonenumber;
	private String professorEmail;
	private String professorPassword;
	
	public Professor() {}
	
	public Professor(int professorNo, String departmentName, String professorName, String professorBirth,
			String professorAddress, String professorPhonenumber, String professorEmail, String professorPassword) {
		super();
		this.professorNo = professorNo;
		this.departmentName = departmentName;
		this.professorName = professorName;
		this.professorBirth = professorBirth;
		this.professorAddress = professorAddress;
		this.professorPhonenumber = professorPhonenumber;
		this.professorEmail = professorEmail;
		this.professorPassword = professorPassword;
	}

	@Override
	public String toString() {
		return "Professor [professorNo=" + professorNo + ", departmentName=" + departmentName + ", professorName="
				+ professorName + ", professorBirth=" + professorBirth + ", professorAddress=" + professorAddress
				+ ", professorPhonenumber=" + professorPhonenumber + ", professorEmail=" + professorEmail
				+ ", professorPassword=" + professorPassword + "]";
	}

	public int getProfessorNo() {
		return professorNo;
	}

	public void setProfessorNo(int professorNo) {
		this.professorNo = professorNo;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public String getProfessorBirth() {
		return professorBirth;
	}

	public void setProfessorBirth(String professorBirth) {
		this.professorBirth = professorBirth;
	}

	public String getProfessorAddress() {
		return professorAddress;
	}

	public void setProfessorAddress(String professorAddress) {
		this.professorAddress = professorAddress;
	}

	public String getProfessorPhonenumber() {
		return professorPhonenumber;
	}

	public void setProfessorPhonenumber(String professorPhonenumber) {
		this.professorPhonenumber = professorPhonenumber;
	}

	public String getProfessorEmail() {
		return professorEmail;
	}

	public void setProfessorEmail(String professorEmail) {
		this.professorEmail = professorEmail;
	}

	public String getProfessorPassword() {
		return professorPassword;
	}

	public void setProfessorPassword(String professorPassword) {
		this.professorPassword = professorPassword;
	}
	
	
}
