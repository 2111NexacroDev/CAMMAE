package org.kh.campus.lecture.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.board.domain.University;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.professor.domain.Professor;

public interface LectureStore {

	List<Lecture> selectAllLecture(SqlSession sqlSession );

	int insertLecture(SqlSession sqlSession, Lecture lecture);

	int updateLecture(SqlSession sqlSession, Lecture lecture);

	int deleteLecture(SqlSession sqlSession, int lectureNo);

	Lecture selectOneLecture(SqlSession sqlSession, int lectureNo);

	List<Professor> selectAllProName(SqlSession sqlSession);

	List<University> selectAllDept(SqlSession sqlSession);

	List<Professor> selectAllUniName(SqlSession sqlSession);

	List<Professor> selectProName(SqlSession sqlSession, String lectureDepartment);

	List<Lecture> selectAllLecture2(SqlSession sqlSession, String lectureDepartment);




}
