package org.kh.campus.grade.service;

import java.util.List;

import org.kh.campus.grade.domain.Grade;

public interface GradeService {
	// 학생
	// 학생의 학년 학기로 조회
	public List<Grade> printGradeStudent(int studentNo);

	// 이의신청 조회
	public List<Grade> printFeedbackStudent(Grade grade);
	// 이의신청 등록
	public int registerObjection(Grade grade);
	
	// 교수
	// 교수의 년도 학기 과목으로 성적 조회
	public List<Grade> printGradeProfessor(int prfNo);
	// 교수 성적 등록
	public int registerGrade(Grade grade);
	// 교수 성적 수정
	public int modifyGrade(Grade grade);
	// 이의신청 조회
	public List<Grade> printFeedbackProfessor(Grade grade);
	// 피드백 등록
	public int registerFeedBack(Grade grade);
	// 피드백 수정
	public int modifyFeedBack(Grade grade);
	// 피드백 삭제
	public int deleteFeedBack(int pNo);
	
}
