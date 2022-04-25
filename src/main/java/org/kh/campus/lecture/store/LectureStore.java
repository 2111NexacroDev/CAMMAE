package org.kh.campus.lecture.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.lecture.domain.Lecture;

public interface LectureStore {

	List<Lecture> selectAllLecture(SqlSession sqlSession);

	int insertLecture(SqlSession sqlSession, Lecture lecture);

	int updateLecture(SqlSession sqlSession, Lecture lecture);

	int deleteLecture(SqlSession sqlSession, int lectureNo);

	Lecture selectOneLecture(SqlSession sqlSession, int lectureNo);



}
