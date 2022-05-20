package org.kh.campus.support.domain;

public class Support {
	private int supportNo;
	private int recruitmentNo;
	private String recruitmentTitle;
	private int studentNo;
	private String supportDate;
	private String supFileName;
	private String supFileRename;
	private String supFilePath;
	private String supPortFileName;
	private String supPortFileRename;
	private String supPortFilePath;
	private String studentName;
	
	public Support () {}

	public Support(int supportNo, int recruitmentNo, String recruitmentTitle, int studentNo, String supportDate,
			String supFileName, String supFileRename, String supFilePath, String supPortFileName,
			String supPortFileRename, String supPortFilePath, String studentName) {
		super();
		this.supportNo = supportNo;
		this.recruitmentNo = recruitmentNo;
		this.recruitmentTitle = recruitmentTitle;
		this.studentNo = studentNo;
		this.supportDate = supportDate;
		this.supFileName = supFileName;
		this.supFileRename = supFileRename;
		this.supFilePath = supFilePath;
		this.supPortFileName = supPortFileName;
		this.supPortFileRename = supPortFileRename;
		this.supPortFilePath = supPortFilePath;
		this.studentName = studentName;
	}

	public int getSupportNo() {
		return supportNo;
	}

	public void setSupportNo(int supportNo) {
		this.supportNo = supportNo;
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

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public String getSupportDate() {
		return supportDate;
	}

	public void setSupportDate(String supportDate) {
		this.supportDate = supportDate;
	}

	public String getSupFileName() {
		return supFileName;
	}

	public void setSupFileName(String supFileName) {
		this.supFileName = supFileName;
	}

	public String getSupFileRename() {
		return supFileRename;
	}

	public void setSupFileRename(String supFileRename) {
		this.supFileRename = supFileRename;
	}

	public String getSupFilePath() {
		return supFilePath;
	}

	public void setSupFilePath(String supFilePath) {
		this.supFilePath = supFilePath;
	}

	public String getSupPortFileName() {
		return supPortFileName;
	}

	public void setSupPortFileName(String supPortFileName) {
		this.supPortFileName = supPortFileName;
	}

	public String getSupPortFileRename() {
		return supPortFileRename;
	}

	public void setSupPortFileRename(String supPortFileRename) {
		this.supPortFileRename = supPortFileRename;
	}

	public String getSupPortFilePath() {
		return supPortFilePath;
	}

	public void setSupPortFilePath(String supPortFilePath) {
		this.supPortFilePath = supPortFilePath;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	@Override
	public String toString() {
		return "Support [supportNo=" + supportNo + ", recruitmentNo=" + recruitmentNo + ", recruitmentTitle="
				+ recruitmentTitle + ", studentNo=" + studentNo + ", supportDate=" + supportDate + ", supFileName="
				+ supFileName + ", supFileRename=" + supFileRename + ", supFilePath=" + supFilePath
				+ ", supPortFileName=" + supPortFileName + ", supPortFileRename=" + supPortFileRename
				+ ", supPortFilePath=" + supPortFilePath + ", studentName=" + studentName + "]";
	}

	
	
}
