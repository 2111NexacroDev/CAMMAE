package org.kh.campus.consultant.domain;

public class Consultant {
	private int cons_no; 
	private int cons_student_no;
	private String cons_student_name;
	private String cons_student_number;
	private String cons_title;
	private String cons_college; 
	private String cons_content;
	private String cons_date;
	private String cons_time;
	private String cons_status;
	private String cons_counselor;
	
	public Consultant() {}

	public int getCons_no() {
		return cons_no;
	}

	public void setCons_no(int cons_no) {
		this.cons_no = cons_no;
	}

	public int getCons_student_no() {
		return cons_student_no;
	}

	public void setCons_student_no(int cons_student_no) {
		this.cons_student_no = cons_student_no;
	}

	public String getCons_student_name() {
		return cons_student_name;
	}

	public void setCons_student_name(String cons_student_name) {
		this.cons_student_name = cons_student_name;
	}

	public String getCons_student_number() {
		return cons_student_number;
	}

	public void setCons_student_number(String cons_student_number) {
		this.cons_student_number = cons_student_number;
	}

	public String getCons_title() {
		return cons_title;
	}

	public void setCons_title(String cons_title) {
		this.cons_title = cons_title;
	}

	public String getCons_college() {
		return cons_college;
	}

	public void setCons_college(String cons_college) {
		this.cons_college = cons_college;
	}

	public String getCons_content() {
		return cons_content;
	}

	public void setCons_content(String cons_content) {
		this.cons_content = cons_content;
	}

	public String getCons_date() {
		return cons_date;
	}

	public void setCons_date(String cons_date) {
		this.cons_date = cons_date;
	}

	public String getCons_time() {
		return cons_time;
	}

	public void setCons_time(String cons_time) {
		this.cons_time = cons_time;
	}

	public String getCons_status() {
		return cons_status;
	}

	public void setCons_status(String cons_status) {
		this.cons_status = cons_status;
	}

	public String getCons_counselor() {
		return cons_counselor;
	}

	public void setCons_counselor(String cons_counselor) {
		this.cons_counselor = cons_counselor;
	}

	@Override
	public String toString() {
		return "Consultant [cons_no=" + cons_no + ", cons_student_no=" + cons_student_no + ", cons_student_name="
				+ cons_student_name + ", cons_student_number=" + cons_student_number + ", cons_title=" + cons_title
				+ ", cons_college=" + cons_college + ", cons_content=" + cons_content + ", cons_date=" + cons_date
				+ ", cons_time=" + cons_time + ", cons_status=" + cons_status + ", cons_counselor=" + cons_counselor
				+ "]";
	}


	
	

}
