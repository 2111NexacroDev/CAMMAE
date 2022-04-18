package org.kh.campus.consultant.domain;

public class Consultant {
	
	private int cons_no; //글번호
	private int student_no; //학번
	private String cons_title; //상담제목
	private String cons_college; //단과대학
	private String cons_content;  //상담내용
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

	public int getStudent_no() {
		return student_no;
	}

	public void setStudent_no(int student_no) {
		this.student_no = student_no;
	}

	public String getCons_title() {
		return cons_title;
	}

	public void setCons_title(String cons_title) {
		this.cons_title = cons_title;
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
	
	

	public String getCons_college() {
		return cons_college;
	}

	public void setCons_college(String cons_college) {
		this.cons_college = cons_college;
	}

	@Override
	public String toString() {
		return "Consultant [cons_no=" + cons_no + ", student_no=" + student_no + ", cons_title=" + cons_title
				+ ", cons_college=" + cons_college + ", cons_content=" + cons_content + ", cons_date=" + cons_date
				+ ", cons_time=" + cons_time + ", cons_status=" + cons_status + ", cons_counselor=" + cons_counselor
				+ "]";
	}

	
	

}
