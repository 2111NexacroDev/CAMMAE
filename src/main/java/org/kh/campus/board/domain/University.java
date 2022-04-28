package org.kh.campus.board.domain;

public class University {
	private int universityCode;
	private String universityName;
	private String universityCollege;
	
	public University() {}

	public University(int universityCode, String universityName, String universityCollege) {
		super();
		this.universityCode = universityCode;
		this.universityName = universityName;
		this.universityCollege = universityCollege;
	}

	public int getUniversityCode() {
		return universityCode;
	}

	public void setUniversityCode(int universityCode) {
		this.universityCode = universityCode;
	}

	public String getUniversityName() {
		return universityName;
	}

	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}

	public String getUniversityCollege() {
		return universityCollege;
	}

	public void setUniversityCollege(String universityCollege) {
		this.universityCollege = universityCollege;
	}

	@Override
	public String toString() {
		return "University [universityCode=" + universityCode + ", universityName=" + universityName
				+ ", universityCollege=" + universityCollege + "]";
	}
	
	
}
