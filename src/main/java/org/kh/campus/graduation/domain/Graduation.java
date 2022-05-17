package org.kh.campus.graduation.domain;

public class Graduation {
	private int studentNo;
	private String graduationStatus;
	private String graduationFilename;
	private String graduationFilerename;
	private String graduationFilepath;
	private String graduationStuName;    
	private	String graduationStuDep;	
	private int graduationStuGrade;
	private String graduationYear;
	private String chk;

	
	public Graduation() {}



	public Graduation(int studentNo, String graduationStatus, String graduationFilename, String graduationFilerename,
			String graduationFilepath, String graduationStuName, String graduationStuDep, int graduationStuGrade,
			String graduationYear, String chk) {
		super();
		this.studentNo = studentNo;
		this.graduationStatus = graduationStatus;
		this.graduationFilename = graduationFilename;
		this.graduationFilerename = graduationFilerename;
		this.graduationFilepath = graduationFilepath;
		this.graduationStuName = graduationStuName;
		this.graduationStuDep = graduationStuDep;
		this.graduationStuGrade = graduationStuGrade;
		this.graduationYear = graduationYear;
		this.chk = chk;
		
	}



	public Graduation(String graduationStuName, String graduationStuDep, int graduationStuGrade) {
		super();
		this.graduationStuName = graduationStuName;
		this.graduationStuDep = graduationStuDep;
		this.graduationStuGrade = graduationStuGrade;
		
	}



	public Graduation(String graduationYear, String graduationStuDep) {
		super();
		this.graduationYear = graduationYear;
		this.graduationStuDep = graduationStuDep;
		
	}



	public Graduation(int studentNo) {
		super();
		this.studentNo = studentNo;
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



	public String getGraduationStuName() {
		return graduationStuName;
	}



	public void setGraduationStuName(String graduationStuName) {
		this.graduationStuName = graduationStuName;
	}



	public String getGraduationStuDep() {
		return graduationStuDep;
	}



	public void setGraduationStuDep(String graduationStuDep) {
		this.graduationStuDep = graduationStuDep;
	}






	public int getGraduationStuGrade() {
		return graduationStuGrade;
	}



	public void setGraduationStuGrade(int graduationStuGrade) {
		this.graduationStuGrade = graduationStuGrade;
	}



	public String getGraduationYear() {
		return graduationYear;
	}



	public void setGraduationYear(String graduationYear) {
		this.graduationYear = graduationYear;
	}

	
	


	public String getChk() {
		return chk;
	}



	public void setChk(String chk) {
		this.chk = chk;
	}



	@Override
	public String toString() {
		return "Graduation [studentNo=" + studentNo + ", graduationStatus=" + graduationStatus + ", graduationFilename="
				+ graduationFilename + ", graduationFilerename=" + graduationFilerename + ", graduationFilepath="
				+ graduationFilepath + ", graduationStuName=" + graduationStuName + ", graduationStuDep="
				+ graduationStuDep + ", graduationStuGrade=" + graduationStuGrade + ", graduationYear=" + graduationYear
				+ ", chk=" + chk + "]";
	}

	

}
