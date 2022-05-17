package org.kh.campus.grade.service.logic;

import java.util.HashMap;
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
	public List<Grade> printGradeStudent(HashMap<String, String> searchInfo) {
		List<Grade> gList = gStore.selectGradeStudent(searchInfo, sqlSession);
		return gList;
	}
	@Override
	public List<Grade> printFeedbackStudent(HashMap<String, String> searchInfo) {
		List<Grade> gList = gStore.selectFeedbackStudent(searchInfo, sqlSession);
		return gList;
	}
	@Override
	public int registerObjection(Grade grade) {
		int result = gStore.insertObjection(grade, sqlSession);
		return result;
	}
	@Override
	public List<Grade> printSubject(HashMap<String, String> searchInfo) {
		List<Grade> gList = gStore.selectSubject(searchInfo, sqlSession);
		return gList;
	}
	
	@Override
	public List<Grade> printGradeProfessor(HashMap<String, String> searchInfo) {
		List<Grade> gList = gStore.selectGradeProfessor(searchInfo, sqlSession);
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
	public List<Grade> printFeedbackProfessor(HashMap<String, String> searchInfo) {
		List<Grade> gList = gStore.selectFeedbackProfessor(searchInfo, sqlSession);
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
