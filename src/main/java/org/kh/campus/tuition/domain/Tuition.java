package org.kh.campus.tuition.domain;

public class Tuition {
	private int tuitionNo;
	private int studentNo;
	private String tutionYear;
	private String tuitionTerm;
	private String studentName;
	private int tuitionFee;
	private String tuitionScholarship;
	private int tuitionTotal;
	private String tuitionStatus;
	private String chk;
	private String departmentName;
	private String studentGrade;
	
	public Tuition() {}

	public Tuition(int tuitionNo, int studentNo, String tutionYear, String tuitionTerm, String studentName,
			int tuitionFee, String tuitionScholarship, int tuitionTotal, String tuitionStatus, String chk,
			String departmentName, String studentGrade) {
		super();
		this.tuitionNo = tuitionNo;
		this.studentNo = studentNo;
		this.tutionYear = tutionYear;
		this.tuitionTerm = tuitionTerm;
		this.studentName = studentName;
		this.tuitionFee = tuitionFee;
		this.tuitionScholarship = tuitionScholarship;
		this.tuitionTotal = tuitionTotal;
		this.tuitionStatus = tuitionStatus;
		this.chk = chk;
		this.departmentName = departmentName;
		this.studentGrade = studentGrade;
	}

	public int getTuitionNo() {
		return tuitionNo;
	}

	public void setTuitionNo(int tuitionNo) {
		this.tuitionNo = tuitionNo;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public String getTutionYear() {
		return tutionYear;
	}

	public void setTutionYear(String tutionYear) {
		this.tutionYear = tutionYear;
	}

	public String getTuitionTerm() {
		return tuitionTerm;
	}

	public void setTuitionTerm(String tuitionTerm) {
		this.tuitionTerm = tuitionTerm;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getTuitionFee() {
		return tuitionFee;
	}

	public void setTuitionFee(int tuitionFee) {
		this.tuitionFee = tuitionFee;
	}

	public String getTuitionScholarship() {
		return tuitionScholarship;
	}

	public void setTuitionScholarship(String tuitionScholarship) {
		this.tuitionScholarship = tuitionScholarship;
	}

	public int getTuitionTotal() {
		return tuitionTotal;
	}

	public void setTuitionTotal(int tuitionTotal) {
		this.tuitionTotal = tuitionTotal;
	}

	public String getTuitionStatus() {
		return tuitionStatus;
	}

	public void setTuitionStatus(String tuitionStatus) {
		this.tuitionStatus = tuitionStatus;
	}

	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public String getStudentGrade() {
		return studentGrade;
	}

	public void setStudentGrade(String studentGrade) {
		this.studentGrade = studentGrade;
	}

	@Override
	public String toString() {
		return "Tuition [tuitionNo=" + tuitionNo + ", studentNo=" + studentNo + ", tutionYear=" + tutionYear
				+ ", tuitionTerm=" + tuitionTerm + ", studentName=" + studentName + ", tuitionFee=" + tuitionFee
				+ ", tuitionScholarship=" + tuitionScholarship + ", tuitionTotal=" + tuitionTotal + ", tuitionStatus="
				+ tuitionStatus + ", chk=" + chk + ", departmentName=" + departmentName + ", studentGrade="
				+ studentGrade + "]";
	}

	

	
	
	
	
}
