package org.kh.campus.recruitment.domain;

public class Recruitment {
	private int recruitmentNo;
	private String recruitmentTitle;
	private String recruitmentCompanyName;
	private String recruitmentCareer;
	private String recruitmentEducation;
	private String recruitmentPrefer;
	private String recruitmentType;
	private int recruitmentSalary;
	private String recruitmentRegion;
	private String recruitmentStartDate;
	private String recruitmentEndDate;
	private String recruitmentWriter;
	
	public Recruitment() {}

	public Recruitment(int recruitmentNo, String recruitmentTitle, String recruitmentCompanyName,
			String recruitmentCareer, String recruitmentEducation, String recruitmentPrefer, String recruitmentType,
			int recruitmentSalary, String recruitmentRegion, String recruitmentStartDate, String recruitmentEndDate,
			String recruitmentWriter) {
		super();
		this.recruitmentNo = recruitmentNo;
		this.recruitmentTitle = recruitmentTitle;
		this.recruitmentCompanyName = recruitmentCompanyName;
		this.recruitmentCareer = recruitmentCareer;
		this.recruitmentEducation = recruitmentEducation;
		this.recruitmentPrefer = recruitmentPrefer;
		this.recruitmentType = recruitmentType;
		this.recruitmentSalary = recruitmentSalary;
		this.recruitmentRegion = recruitmentRegion;
		this.recruitmentStartDate = recruitmentStartDate;
		this.recruitmentEndDate = recruitmentEndDate;
		this.recruitmentWriter = recruitmentWriter;
	}

	public int getRecruitmentNo() {
		return recruitmentNo;
	}

	public void setRecruitmentNo(int recruitmentNo) {
		this.recruitmentNo = recruitmentNo;
	}

	public String getRecruitmentTitle() {
		return recruitmentTitle;
	}

	public void setRecruitmentTitle(String recruitmentTitle) {
		this.recruitmentTitle = recruitmentTitle;
	}

	public String getRecruitmentCompanyName() {
		return recruitmentCompanyName;
	}

	public void setRecruitmentCompanyName(String recruitmentCompanyName) {
		this.recruitmentCompanyName = recruitmentCompanyName;
	}

	public String getRecruitmentCareer() {
		return recruitmentCareer;
	}

	public void setRecruitmentCareer(String recruitmentCareer) {
		this.recruitmentCareer = recruitmentCareer;
	}

	public String getRecruitmentEducation() {
		return recruitmentEducation;
	}

	public void setRecruitmentEducation(String recruitmentEducation) {
		this.recruitmentEducation = recruitmentEducation;
	}

	public String getRecruitmentPrefer() {
		return recruitmentPrefer;
	}

	public void setRecruitmentPrefer(String recruitmentPrefer) {
		this.recruitmentPrefer = recruitmentPrefer;
	}

	public String getRecruitmentType() {
		return recruitmentType;
	}

	public void setRecruitmentType(String recruitmentType) {
		this.recruitmentType = recruitmentType;
	}

	public int getRecruitmentSalary() {
		return recruitmentSalary;
	}

	public void setRecruitmentSalary(int recruitmentSalary) {
		this.recruitmentSalary = recruitmentSalary;
	}

	public String getRecruitmentRegion() {
		return recruitmentRegion;
	}

	public void setRecruitmentRegion(String recruitmentRegion) {
		this.recruitmentRegion = recruitmentRegion;
	}

	public String getRecruitmentStartDate() {
		return recruitmentStartDate;
	}

	public void setRecruitmentStartDate(String recruitmentStartDate) {
		this.recruitmentStartDate = recruitmentStartDate;
	}

	public String getRecruitmentEndDate() {
		return recruitmentEndDate;
	}

	public void setRecruitmentEndDate(String recruitmentEndDate) {
		this.recruitmentEndDate = recruitmentEndDate;
	}

	public String getRecruitmentWriter() {
		return recruitmentWriter;
	}

	public void setRecruitmentWriter(String recruitmentWriter) {
		this.recruitmentWriter = recruitmentWriter;
	}

	@Override
	public String toString() {
		return "Recruitment [recruitmentNo=" + recruitmentNo + ", recruitmentTitle=" + recruitmentTitle
				+ ", recruitmentCompanyName=" + recruitmentCompanyName + ", recruitmentCareer=" + recruitmentCareer
				+ ", recruitmentEducation=" + recruitmentEducation + ", recruitmentPrefer=" + recruitmentPrefer
				+ ", recruitmentType=" + recruitmentType + ", recruitmentSalary=" + recruitmentSalary
				+ ", recruitmentRegion=" + recruitmentRegion + ", recruitmentStartDate=" + recruitmentStartDate
				+ ", recruitmentEndDate=" + recruitmentEndDate + ", recruitmentWriter=" + recruitmentWriter + "]";
	}



	
}
