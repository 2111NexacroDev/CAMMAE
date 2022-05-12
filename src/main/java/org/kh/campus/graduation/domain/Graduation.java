package org.kh.campus.graduation.domain;

public class Graduation {
	private int studentNo;
	private String graduationStatus;
	private String graduationFilename;
	private String graduationFilerename;
	private String graduationFilepath;
	private String graduationStuName;    
	private	String graduationStuDep;	
	private int graduationStuAvg;			
	
	public Graduation() {}

	public Graduation(int studentNo, String graduationStatus, String graduationFilename, String graduationFilerename,
			String graduationFilepath, String graduationStuName, String graduationStuDep, int graduationStuAvg) {
		super();
		this.studentNo = studentNo;
		this.graduationStatus = graduationStatus;
		this.graduationFilename = graduationFilename;
		this.graduationFilerename = graduationFilerename;
		this.graduationFilepath = graduationFilepath;
		this.graduationStuName = graduationStuName;
		this.graduationStuDep = graduationStuDep;
		this.graduationStuAvg = graduationStuAvg;
	}

	public Graduation(int studentNo, String graduationStuName, String graduationStuDep, int graduationStuAvg) {
		super();
		this.studentNo = studentNo;
		this.graduationStuName = graduationStuName;
		this.graduationStuDep = graduationStuDep;
		this.graduationStuAvg = graduationStuAvg;
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

	public int getGraduationStuAvg() {
		return graduationStuAvg;
	}

	public void setGraduationStuAvg(int graduationStuAvg) {
		this.graduationStuAvg = graduationStuAvg;
	}

	@Override
	public String toString() {
		return "Graduation [studentNo=" + studentNo + ", graduationStatus=" + graduationStatus + ", graduationFilename="
				+ graduationFilename + ", graduationFilerename=" + graduationFilerename + ", graduationFilepath="
				+ graduationFilepath + ", graduationStuName=" + graduationStuName + ", graduationStuDep="
				+ graduationStuDep + ", graduationStuAvg=" + graduationStuAvg + "]";
	}

	
	
	
	

}
