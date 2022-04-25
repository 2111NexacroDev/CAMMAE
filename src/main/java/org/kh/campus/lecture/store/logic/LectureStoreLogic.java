package org.kh.campus.lecture.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.store.LectureStore;
import org.springframework.stereotype.Repository;

@Repository
public class LectureStoreLogic implements LectureStore{

	@Override
	public List<Lecture> selectAllLecture(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectAllLecture");
		return lList;
	}

	@Override
	public int insertLecture(SqlSession sqlSession, Lecture lecture) {
		int result = sqlSession.insert("LectureMapper.insertLecture", lecture);
		return result;
	}

	@Override
	public int updateLecture(SqlSession sqlSession,Lecture lecture) {
		int result = sqlSession.update("LectureMapper.updateLecture", lecture);
		return result;
	}

	@Override
	public int deleteLecture(SqlSession sqlSession, int lectureNo) {
		int result = sqlSession.delete("LectureMapper.deleteLecture", lectureNo);
		return result;
	}

	@Override
	public Lecture selectOneLecture(SqlSession sqlSession, int lectureNo) {
		Lecture lecture = sqlSession.selectOne("LectureMapper.selectOneLecture", lectureNo);
		return lecture;
	}

}
