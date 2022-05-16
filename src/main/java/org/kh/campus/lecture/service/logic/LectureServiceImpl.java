package org.kh.campus.lecture.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.board.domain.University;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.kh.campus.lecture.store.LectureStore;
import org.kh.campus.professor.domain.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LectureServiceImpl implements LectureService {

	@Autowired
	private LectureStore lStore;
	@Autowired
	private SqlSession sqlSession;

	@Override
	public List<Lecture> printAllLecture() {
		List<Lecture> lList = lStore.selectAllLecture(sqlSession);
		return lList;
	}

	@Override
	public int registerLecture(Lecture lecture) {
		int result = lStore.insertLecture(sqlSession, lecture);
		return result;
	}

	@Override
	public int modifyLecture(Lecture lecture) {
		int result = lStore.updateLecture(sqlSession, lecture);
		return result;
	}

	@Override
	public int removeLecture(int lectureNo) {
		int result = lStore.deleteLecture(sqlSession, lectureNo);
		return result;
	}

	@Override
	public Lecture printOneLecture(int lectureNo) {
		Lecture lecture = lStore.selectOneLecture(sqlSession, lectureNo);
		return lecture;
	}

	@Override
	public List<Professor> printAllProName() {
		List<Professor> lList = lStore.selectAllProName(sqlSession);
		return lList;
	}

	@Override
	public List<University> printAllDep() {
		List<University> lList = lStore.selectAllDept(sqlSession);
		return lList;
	}

	// 교수테이블->학과명 출력
	@Override
	public List<Professor> PrintAllUni() {
		List<Professor> pList = lStore.selectAllUniName(sqlSession);
		return pList;
	}

	@Override
	public List<Professor> printAllProName(String universityName) {
		List<Professor> pList = lStore.selectProName(sqlSession,universityName);
		return pList;
	}

	@Override
	public List<Lecture> printAlllecture2(String lectureDepartment) {
		List<Lecture> lList = lStore.selectAllLecture2(sqlSession, lectureDepartment);
		return lList;
	}

}
