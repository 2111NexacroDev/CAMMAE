package org.kh.campus.grade.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.grade.domain.Grade;
import org.kh.campus.grade.store.GradeStore;
import org.springframework.stereotype.Repository;

@Repository
public class GradeStoreLogic implements GradeStore {

	@Override
	public List<Grade> selectGradeStudent(Grade grade, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("");
		return gList;
	}

	@Override
	public List<Grade> selectFeedbackStudent(Grade grade, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("");
		return gList;
	}

	@Override
	public int insertObjection(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.insert("");
		return result;
	}

	@Override
	public List<Grade> selectGradeProfessor(Grade grade, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("");
		return gList;
	}
	
	@Override
	public int insertGrade(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.insert("");
		return result;
	}

	@Override
	public int updateGrade(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.update("");
		return result;
	}


	@Override
	public List<Grade> selectFeedbackProfessor(Grade grade, SqlSession sqlSession) {
		List<Grade> gList = sqlSession.selectList("");
		return gList;
	}

	@Override
	public int insertFeedBack(Grade grade, SqlSession sqlSession) {
		int result = sqlSession.insert("");
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
}
