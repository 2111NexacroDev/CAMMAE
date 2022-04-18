package org.kh.campus.portfolio.domain;

public class Portfolio {
	
	private int port_no;
	private String student_no;
	private String port_title;
	private String port_content;
	private String port_writerDate;
	
	public Portfolio() {}

	public int getPort_no() {
		return port_no;
	}

	public void setPort_no(int port_no) {
		this.port_no = port_no;
	}

	public String getStudent_no() {
		return student_no;
	}

	public void setStudent_no(String student_no) {
		this.student_no = student_no;
	}

	public String getPort_title() {
		return port_title;
	}

	public void setPort_title(String port_title) {
		this.port_title = port_title;
	}

	public String getPort_content() {
		return port_content;
	}

	public void setPort_content(String port_content) {
		this.port_content = port_content;
	}

	public String getPort_writerDate() {
		return port_writerDate;
	}

	public void setPort_writerDate(String port_writerDate) {
		this.port_writerDate = port_writerDate;
	}

	@Override
	public String toString() {
		return "Portfolio [port_no=" + port_no + ", student_no=" + student_no + ", port_title=" + port_title
				+ ", port_content=" + port_content + ", port_writerDate=" + port_writerDate + "]";
	}
	
	
	

}
