package org.kh.campus.portfolio.domain;

public class Portfolio {

	private int port_no;
	private String port_student_no;
	private String port_title;
	private String port_content;
	private String port_writerDate;
	private String port_name;
	private String port_college;
	private String port_student_number;
	private String port_license;
	private String port_licenseRename;
	private String port_licenseFilePath;
	private String port_award_historyRename;
	private String port_award_history;
	private String port_awardFilePath;
	private String port_university_code;

	public Portfolio() {
	}

	public int getPort_no() {
		return port_no;
	}

	public void setPort_no(int port_no) {
		this.port_no = port_no;
	}

	public String getPort_student_no() {
		return port_student_no;
	}

	public void setPort_student_no(String port_student_no) {
		this.port_student_no = port_student_no;
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

	public String getPort_name() {
		return port_name;
	}

	public void setPort_name(String port_name) {
		this.port_name = port_name;
	}

	public String getPort_college() {
		return port_college;
	}

	public void setPort_college(String port_college) {
		this.port_college = port_college;
	}

	public String getPort_student_number() {
		return port_student_number;
	}

	public void setPort_student_number(String port_student_number) {
		this.port_student_number = port_student_number;
	}

	public String getPort_license() {
		return port_license;
	}

	public void setPort_license(String port_license) {
		this.port_license = port_license;
	}

	public String getPort_licenseRename() {
		return port_licenseRename;
	}

	public void setPort_licenseRename(String port_licenseRename) {
		this.port_licenseRename = port_licenseRename;
	}

	public String getPort_award_historyRename() {
		return port_award_historyRename;
	}

	public void setPort_award_historyRename(String port_award_historyRename) {
		this.port_award_historyRename = port_award_historyRename;
	}

	public String getPort_award_history() {
		return port_award_history;
	}

	public void setPort_award_history(String port_award_history) {
		this.port_award_history = port_award_history;
	}

	public String getPort_licenseFilePath() {
		return port_licenseFilePath;
	}

	public void setPort_licenseFilePath(String port_licenseFilePath) {
		this.port_licenseFilePath = port_licenseFilePath;
	}

	public String getPort_awardFilePath() {
		return port_awardFilePath;
	}

	public void setPort_awardFilePath(String port_awardFilePath) {
		this.port_awardFilePath = port_awardFilePath;
	}

	public String getPort_university_code() {
		return port_university_code;
	}

	public void setPort_university_code(String port_university_code) {
		this.port_university_code = port_university_code;
	}

	@Override
	public String toString() {
		return "Portfolio [port_no=" + port_no + ", port_student_no=" + port_student_no + ", port_title=" + port_title
				+ ", port_content=" + port_content + ", port_writerDate=" + port_writerDate + ", port_name=" + port_name
				+ ", port_college=" + port_college + ", port_student_number=" + port_student_number + ", port_license="
				+ port_license + ", port_licenseRename=" + port_licenseRename + ", port_licenseFilePath="
				+ port_licenseFilePath + ", port_award_historyRename=" + port_award_historyRename
				+ ", port_award_history=" + port_award_history + ", port_awardFilePath=" + port_awardFilePath
				+ ", port_university_code=" + port_university_code + "]";
	}

}
