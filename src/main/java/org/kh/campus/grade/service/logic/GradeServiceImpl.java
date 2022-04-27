package org.kh.campus.grade.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.grade.domain.Grade;
import org.kh.campus.grade.service.GradeService;
import org.kh.campus.grade.store.GradeStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeServiceImpl implements GradeService {
	@Autowired
	private GradeStore gStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Grade> printGradeStudent(int studentNo) {
		List<Grade> gList = gStore.selectGradeStudent(studentNo, sqlSession);
		return gList;
	}
	@Override
	public List<Grade> printFeedbackStudent(Grade grade) {
		List<Grade> gList = gStore.selectFeedbackStudent(grade, sqlSession);
		return gList;
	}
	@Override
	public int registerObjection(Grade grade) {
		int result = gStore.insertObjection(grade, sqlSession);
		return result;
	}
	@Override
	public List<Grade> printGradeProfessor(int prfNo) {
		List<Grade> gList = gStore.selectGradeProfessor(prfNo, sqlSession);
		return gList;
	}
	
	@Override
	public int registerGrade(Grade grade) {
		int result = gStore.insertGrade(grade, sqlSession);
		return result;
	}
	@Override
	public int modifyGrade(Grade grade) {
		int result = gStore.updateGrade(grade, sqlSession);
		return result;
	}
	
	@Override
	public List<Grade> printFeedbackProfessor(Grade grade) {
		List<Grade> gList = gStore.selectFeedbackProfessor(grade, sqlSession);
		return gList;
	}
	@Override
	public int registerFeedBack(Grade grade) {
		int result = gStore.insertFeedBack(grade, sqlSession);
		return result;
	}
	@Override
	public int modifyFeedBack(Grade grade) {
		int result = gStore.updateFeedBack(grade, sqlSession);
		return result;
	}
	@Override
	public int deleteFeedBack(int pNo) {
		int result = gStore.deleteFeedBack(pNo, sqlSession);
		return result;
	}
	
}
