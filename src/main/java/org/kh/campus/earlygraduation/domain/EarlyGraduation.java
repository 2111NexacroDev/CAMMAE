package org.kh.campus.earlygraduation.domain;

public class EarlyGraduation {
	
	private int studentNo;
	private int erGraduationAvgScore;
	private String erGraduationStatus;
	
	public EarlyGraduation() {}

	public EarlyGraduation(int studentNo, int erGraduationAvgScore, String erGraduationStatus) {
		super();
		this.studentNo = studentNo;
		this.erGraduationAvgScore = erGraduationAvgScore;
		this.erGraduationStatus = erGraduationStatus;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public int getErGraduationAvgScore() {
		return erGraduationAvgScore;
	}

	public void setErGraduationAvgScore(int erGraduationAvgScore) {
		this.erGraduationAvgScore = erGraduationAvgScore;
	}

	public String getErGraduationStatus() {
		return erGraduationStatus;
	}

	public void setErGraduationStatus(String erGraduationStatus) {
		this.erGraduationStatus = erGraduationStatus;
	}

	@Override
	public String toString() {
		return "EarlyGraduation [studentNo=" + studentNo + ", erGraduationAvgScore=" + erGraduationAvgScore
				+ ", erGraduationStatus=" + erGraduationStatus + "]";
	}
	
	
	
	

}
