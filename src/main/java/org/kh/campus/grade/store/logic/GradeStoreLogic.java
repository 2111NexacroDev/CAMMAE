package org.kh.campus.grade.store.logic;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.grade.domain.Grade;
import org.kh.campus.grade.store.GradeStore;
import org.springframework.stereotype.Repository;

@Repository
public class GradeStoreLogic implements GradeStore {

	@Override
	public List<Grade> selectGradeStudent(HashMap<String, String> searchInfo, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("GradeMapper.selectGradeStudent", searchInfo);
		return gList;
	}

	@Override
	public List<Grade> selectFeedbackStudent(HashMap<String, String> searchInfo, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("GradeMapper.selectFeedbackStudent", searchInfo);
		return gList;
	}

	@Override
	public int insertObjection(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.insert("GradeMapper.insertObjection", grade);
		return result;
	}

	@Override
	public List<Grade> selectSubject(HashMap<String, String> searchInfo, SqlSession sqlSession) {
		List<Grade> sList = sqlSession.selectList("GradeMapper.selectSubject", searchInfo);
		return sList;
	}
	
	@Override
	public List<Grade> selectGradeProfessor(HashMap<String, String> searchInfo, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("GradeMapper.selectGradeProfessor", searchInfo);
		return gList;
	}
	
	@Override
	public int insertGrade(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.insert("");
		return result;
	}

	@Override
	public int updateGrade(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.update("GradeMapper.updateGrade", grade);
		return result;
	}


	@Override
	public List<Grade> selectFeedbackProfessor(HashMap<String, String> searchInfo, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("GradeMapper.selectFeedbackProfessor", searchInfo);
		return gList;
	}

	@Override
	public int insertFeedBack(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.insert("GradeMapper.insertFeedBack", grade);
		return result;
	}

	@Override
	public int updateFeedBack(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.update("");
		return result;
	}

	@Override
	public int deleteFeedBack(int pNo, SqlSession sqlSession) {
		int result = sqlSession.delete("");
		return result;
	}

	@Override
	public double selectAvg(HashMap<String, String> grade, SqlSession sqlSession) {
		double result = sqlSession.selectOne("GradeMapper.selectAvg", grade);
		return result;
	}
}
