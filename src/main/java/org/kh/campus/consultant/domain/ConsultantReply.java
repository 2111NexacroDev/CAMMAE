package org.kh.campus.consultant.domain;

public class ConsultantReply {
	private int cons_reply_no;
	private int cons_no;
	private String cons_reply_date;
	private String cons_reply_writer;
	
	public ConsultantReply() {}

	public int getCons_reply_no() {
		return cons_reply_no;
	}

	public void setCons_reply_no(int cons_reply_no) {
		this.cons_reply_no = cons_reply_no;
	}

	public int getCons_no() {
		return cons_no;
	}

	public void setCons_no(int cons_no) {
		this.cons_no = cons_no;
	}

	public String getCons_reply_date() {
		return cons_reply_date;
	}

	public void setCons_reply_date(String cons_reply_date) {
		this.cons_reply_date = cons_reply_date;
	}

	public String getCons_reply_writer() {
		return cons_reply_writer;
	}

	public void setCons_reply_writer(String cons_reply_writer) {
		this.cons_reply_writer = cons_reply_writer;
	}

	@Override
	public String toString() {
		return "ConsultantReply [cons_reply_no=" + cons_reply_no + ", cons_no=" + cons_no + ", cons_reply_date="
				+ cons_reply_date + ", cons_reply_writer=" + cons_reply_writer + "]";
	}
	
	
}
