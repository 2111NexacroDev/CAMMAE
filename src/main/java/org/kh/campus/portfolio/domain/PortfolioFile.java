package org.kh.campus.portfolio.domain;

public class PortfolioFile {
	private int port_fileNo;
	private int port_no;
	private String port_fileName;
	private String port_fileRename;
	private String port_filePath;

	public PortfolioFile() {
	}

	public int getPort_fileNo() {
		return port_fileNo;
	}

	public void setPort_fileNo(int port_fileNo) {
		this.port_fileNo = port_fileNo;
	}

	public int getPort_no() {
		return port_no;
	}

	public void setPort_no(int port_no) {
		this.port_no = port_no;
	}

	public String getPort_fileName() {
		return port_fileName;
	}

	public void setPort_fileName(String port_fileName) {
		this.port_fileName = port_fileName;
	}

	public String getPort_fileRename() {
		return port_fileRename;
	}

	public void setPort_fileRename(String port_fileRename) {
		this.port_fileRename = port_fileRename;
	}

	public String getPort_filePath() {
		return port_filePath;
	}

	public void setPort_filePath(String port_filePath) {
		this.port_filePath = port_filePath;
	}

	@Override
	public String toString() {
		return "PortfolioFile [port_fileNo=" + port_fileNo + ", port_no=" + port_no + ", port_fileName=" + port_fileName
				+ ", port_fileRename=" + port_fileRename + ", port_filePath=" + port_filePath + "]";
	}

}
