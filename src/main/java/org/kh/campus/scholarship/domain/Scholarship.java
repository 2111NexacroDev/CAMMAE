package org.kh.campus.scholarship.domain;

public class Scholarship {
	private int scholarship_inno;
	private double scholarship_avg_grade;
	private String scholarship_year;
	private String scholarship_term;
	private String scholarship_status;
	private int scholarship_amount;
	private String scholarship_name;
	private String scholarship_phonenumber;
	private String scholarship_college;
	private int scholarship_student_no;
	private String chk;
	private int scholarship_manager_no;

	public Scholarship() {
	}

	public Scholarship(int scholarship_student_no) {
		super();
		this.scholarship_student_no = scholarship_student_no;
	}

	public Scholarship(String scholarship_year, String scholarship_term, String scholarship_college,
			int scholarship_manager_no) {
		super();
		this.scholarship_year = scholarship_year;
		this.scholarship_term = scholarship_term;
		this.scholarship_college = scholarship_college;
		this.scholarship_manager_no = scholarship_manager_no;
	}

	public Scholarship(String scholarship_name, int scholarship_student_no, String scholarship_phonenumber) {
		super();
		this.scholarship_name = scholarship_name;
		this.scholarship_student_no = scholarship_student_no;
		this.scholarship_phonenumber = scholarship_phonenumber;
	}

	public Scholarship(int scholarship_inno, double scholarship_avg_grade, String scholarship_year,
			String scholarship_term, String scholarship_status, int scholarship_amount, String scholarship_name,
			String scholarship_phonenumber, String scholarship_college, int scholarship_student_no, String chk,
			int scholarship_manager_no) {
		super();
		this.scholarship_inno = scholarship_inno;
		this.scholarship_avg_grade = scholarship_avg_grade;
		this.scholarship_year = scholarship_year;
		this.scholarship_term = scholarship_term;
		this.scholarship_status = scholarship_status;
		this.scholarship_amount = scholarship_amount;
		this.scholarship_name = scholarship_name;
		this.scholarship_phonenumber = scholarship_phonenumber;
		this.scholarship_college = scholarship_college;
		this.scholarship_student_no = scholarship_student_no;
		this.chk = chk;
		this.scholarship_manager_no = scholarship_manager_no;
	}

	public Scholarship(int scholarship_student_no, String scholarship_status) {
		this.scholarship_student_no = scholarship_student_no;
		this.scholarship_status = scholarship_status;
	}

	public int getScholarship_inno() {
		return scholarship_inno;
	}

	public void setScholarship_inno(int scholarship_inno) {
		this.scholarship_inno = scholarship_inno;
	}

	public double getScholarship_avg_grade() {
		return scholarship_avg_grade;
	}

	public void setScholarship_avg_grade(double scholarship_avg_grade) {
		this.scholarship_avg_grade = scholarship_avg_grade;
	}

	public String getScholarship_year() {
		return scholarship_year;
	}

	public void setScholarship_year(String scholarship_year) {
		this.scholarship_year = scholarship_year;
	}

	public String getScholarship_term() {
		return scholarship_term;
	}

	public void setScholarship_term(String scholarship_term) {
		this.scholarship_term = scholarship_term;
	}

	public String getScholarship_status() {
		return scholarship_status;
	}

	public void setScholarship_status(String scholarship_status) {
		this.scholarship_status = scholarship_status;
	}

	public int getScholarship_amount() {
		return scholarship_amount;
	}

	public void setScholarship_amount(int scholarship_amount) {
		this.scholarship_amount = scholarship_amount;
	}

	public String getScholarship_name() {
		return scholarship_name;
	}

	public void setScholarship_name(String scholarship_name) {
		this.scholarship_name = scholarship_name;
	}

	public String getScholarship_phonenumber() {
		return scholarship_phonenumber;
	}

	public void setScholarship_phonenumber(String scholarship_phonenumber) {
		this.scholarship_phonenumber = scholarship_phonenumber;
	}

	public String getScholarship_college() {
		return scholarship_college;
	}

	public void setScholarship_college(String scholarship_college) {
		this.scholarship_college = scholarship_college;
	}

	public int getScholarship_student_no() {
		return scholarship_student_no;
	}

	public void setScholarship_student_no(int scholarship_student_no) {
		this.scholarship_student_no = scholarship_student_no;
	}

	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}

	public int getScholarship_manager_no() {
		return scholarship_manager_no;
	}

	public void setScholarship_manager_no(int scholarship_manager_no) {
		this.scholarship_manager_no = scholarship_manager_no;
	}

	@Override
	public String toString() {
		return "Scholarship [scholarship_inno=" + scholarship_inno + ", scholarship_avg_grade=" + scholarship_avg_grade
				+ ", scholarship_year=" + scholarship_year + ", scholarship_term=" + scholarship_term
				+ ", scholarship_status=" + scholarship_status + ", scholarship_amount=" + scholarship_amount
				+ ", scholarship_name=" + scholarship_name + ", scholarship_phonenumber=" + scholarship_phonenumber
				+ ", scholarship_college=" + scholarship_college + ", scholarship_student_no=" + scholarship_student_no
				+ ", chk=" + chk + ", scholarship_manager_no=" + scholarship_manager_no + "]";
	}

}
