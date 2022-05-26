package org.kh.campus.grade.service;

import java.util.HashMap;
import java.util.List;

import org.kh.campus.grade.domain.Grade;

public interface GradeService {
	// 학생
	// 학생의 학년 학기로 조회
	public List<Grade> printGradeStudent(HashMap<String, String> searchInfo);
	
	// 학생의 년도 학기의 평균 점수
	public double printAVG(HashMap<String, Integer> grade);

	// 이의신청 조회
	public List<Grade> printFeedbackStudent(HashMap<String, String> searchInfo);
	// 이의신청 등록
	public int registerObjection(Grade grade);
	
	// 교수
	// 교수의 과목 가져오기
	public List<Grade> printSubject(HashMap<String, String> searchInfo);
	// 교수의 년도 학기 과목으로 성적 조회
	public List<Grade> printGradeProfessor(HashMap<String, String> searchInfo);
	// 교수 성적 등록
	public int registerGrade(Grade grade);
	// 교수 성적 수정
	public int modifyGrade(Grade grade);
	// 이의신청 조회
	public List<Grade> printFeedbackProfessor(HashMap<String, String> searchInfo);
	// 피드백 등록
	public int registerFeedBack(Grade grade);
	// 피드백 수정
	public int modifyFeedBack(Grade grade);
	// 피드백 삭제
	public int deleteFeedBack(int pNo);
	
}
