package org.kh.campus.manager.domain;

public class Manager {
	private int managerNo;
	private String managerName;
	private String managerBirth;
	private String managerAddress;
	private String managerPhonenumber;
	private String managerEmail;
	private String managerPassword;
	private String managerTeam;
	private String chk;
	
	public Manager() {}

	@Override
	public String toString() {
		return "Manager [managerNo=" + managerNo + ", managerName=" + managerName + ", managerBirth=" + managerBirth
				+ ", managerAddress=" + managerAddress + ", managerPhonenumber=" + managerPhonenumber
				+ ", managerEmail=" + managerEmail + ", managerPassword=" + managerPassword + ", managerTeam="
				+ managerTeam + "]";
	}

	public Manager(int managerNo, String managerName, String managerBirth, String managerAddress,
			String managerPhonenumber, String managerEmail, String managerPassword, String managerTeam) {
		super();
		this.managerNo = managerNo;
		this.managerName = managerName;
		this.managerBirth = managerBirth;
		this.managerAddress = managerAddress;
		this.managerPhonenumber = managerPhonenumber;
		this.managerEmail = managerEmail;
		this.managerPassword = managerPassword;
		this.managerTeam = managerTeam;
	}

	public int getManagerNo() {
		return managerNo;
	}

	public void setManagerNo(int managerNo) {
		this.managerNo = managerNo;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getManagerBirth() {
		return managerBirth;
	}

	public void setManagerBirth(String managerBirth) {
		this.managerBirth = managerBirth;
	}

	public String getManagerAddress() {
		return managerAddress;
	}

	public void setManagerAddress(String managerAddress) {
		this.managerAddress = managerAddress;
	}

	public String getManagerPhonenumber() {
		return managerPhonenumber;
	}

	public void setManagerPhonenumber(String managerPhonenumber) {
		this.managerPhonenumber = managerPhonenumber;
	}

	public String getManagerEmail() {
		return managerEmail;
	}

	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}

	public String getManagerPassword() {
		return managerPassword;
	}

	public void setManagerPassword(String managerPassword) {
		this.managerPassword = managerPassword;
	}

	public String getManagerTeam() {
		return managerTeam;
	}

	public void setManagerTeam(String managerTeam) {
		this.managerTeam = managerTeam;
	}

	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}
	
	
	
}
