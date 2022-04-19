package org.kh.campus.graduation.domain;

public class Graduation {
	private int studentNo;
	private String graduationStatus;
	private String graduationFilename;
	private String graduationFilerename;
	private String graduationFilepath;
	
	public Graduation() {}

	public Graduation(int studentNo, String graduationStatus, String graduationFilename, String graduationFilerename,
			String graduationFilepath) {
		super();
		this.studentNo = studentNo;
		this.graduationStatus = graduationStatus;
		this.graduationFilename = graduationFilename;
		this.graduationFilerename = graduationFilerename;
		this.graduationFilepath = graduationFilepath;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public String getGraduationStatus() {
		return graduationStatus;
	}

	public void setGraduationStatus(String graduationStatus) {
		this.graduationStatus = graduationStatus;
	}

	public String getGraduationFilename() {
		return graduationFilename;
	}

	public void setGraduationFilename(String graduationFilename) {
		this.graduationFilename = graduationFilename;
	}

	public String getGraduationFilerename() {
		return graduationFilerename;
	}

	public void setGraduationFilerename(String graduationFilerename) {
		this.graduationFilerename = graduationFilerename;
	}

	public String getGraduationFilepath() {
		return graduationFilepath;
	}

	public void setGraduationFilepath(String graduationFilepath) {
		this.graduationFilepath = graduationFilepath;
	}

	@Override
	public String toString() {
		return "Graduation [studentNo=" + studentNo + ", graduationStatus=" + graduationStatus + ", graduationFilename="
				+ graduationFilename + ", graduationFilerename=" + graduationFilerename + ", graduationFilepath="
				+ graduationFilepath + "]";
	}
	
	
	
	

}
