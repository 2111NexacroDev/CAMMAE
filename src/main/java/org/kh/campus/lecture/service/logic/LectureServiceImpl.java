package org.kh.campus.lecture.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.kh.campus.lecture.store.LectureStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LectureServiceImpl implements LectureService{

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
		Lecture lecture =  lStore.selectOneLecture(sqlSession,lectureNo);
		return lecture;
	}


}
