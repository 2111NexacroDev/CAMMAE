package org.kh.campus.grade.store;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.grade.domain.Grade;

public interface GradeStore {

	public List<Grade> selectGradeStudent(HashMap<String, String> searchInfo, SqlSession sqlSession);

	public List<Grade> selectFeedbackStudent(HashMap<String, String> searchInfo, SqlSession sqlSession);

	public int insertObjection(Grade grade, SqlSession sqlSession);

	public List<Grade> selectSubject(HashMap<String, String> searchInfo, SqlSession sqlSession);
	
	public List<Grade> selectGradeProfessor(HashMap<String, String> searchInfo, SqlSession sqlSession);

	public int insertGrade(Grade grade, SqlSession sqlSession);

	public int updateGrade(Grade grade, SqlSession sqlSession);
	
	public List<Grade> selectFeedbackProfessor(HashMap<String, String> searchInfo, SqlSession sqlSession);

	public int insertFeedBack(Grade grade, SqlSession sqlSession);

	public int updateFeedBack(Grade grade, SqlSession sqlSession);

	public int deleteFeedBack(int pNo, SqlSession sqlSession);

	public double selectAvg(HashMap<String, String> grade, SqlSession sqlSession);
}