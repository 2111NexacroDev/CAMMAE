package org.kh.campus.tuition.domain;

public class Tuition {
	private int tuitionNo;
	private int studentNo;
	private String tutionYear;
	private String tuitionTerm;
	private int studentGrade;
	private String studentName;
	private int tuitionFee;
	private int tuitionScholarship;
	private int tuitionTotal;
	private String tuitionStatus;
	private String chk;
	private String departmentName;
	
	public Tuition() {}

	public Tuition(int tuitionNo, int studentNo, String tutionYear, String tuitionTerm, int studentGrade,
			String studentName, int tuitionFee, int tuitionScholarship, int tuitionTotal, String tuitionStatus,
			String chk, String departmentName) {
		super();
		this.tuitionNo = tuitionNo;
		this.studentNo = studentNo;
		this.tutionYear = tutionYear;
		this.tuitionTerm = tuitionTerm;
		this.studentGrade = studentGrade;
		this.studentName = studentName;
		this.tuitionFee = tuitionFee;
		this.tuitionScholarship = tuitionScholarship;
		this.tuitionTotal = tuitionTotal;
		this.tuitionStatus = tuitionStatus;
		this.chk = chk;
		this.departmentName = departmentName;
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

	public int getStudentGrade() {
		return studentGrade;
	}

	public void setStudentGrade(int studentGrade) {
		this.studentGrade = studentGrade;
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

	public int getTuitionScholarship() {
		return tuitionScholarship;
	}

	public void setTuitionScholarship(int tuitionScholarship) {
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

	@Override
	public String toString() {
		return "Tuition [tuitionNo=" + tuitionNo + ", studentNo=" + studentNo + ", tutionYear=" + tutionYear
				+ ", tuitionTerm=" + tuitionTerm + ", studentGrade=" + studentGrade + ", studentName=" + studentName
				+ ", tuitionFee=" + tuitionFee + ", tuitionScholarship=" + tuitionScholarship + ", tuitionTotal="
				+ tuitionTotal + ", tuitionStatus=" + tuitionStatus + ", chk=" + chk + ", departmentName="
				+ departmentName + "]";
	}

	
	
	
}
