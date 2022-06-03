package org.kh.campus.lecture.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.board.domain.University;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.store.LectureStore;
import org.kh.campus.professor.domain.Professor;
import org.springframework.stereotype.Repository;

@Repository
public class LectureStoreLogic implements LectureStore {

	@Override
	public List<Lecture> selectAllLecture(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectAllLecture");
		return lList;
	}

	@Override
	public List<Professor> selectAllProName(SqlSession sqlSession) {
		List<Professor> lList = sqlSession.selectList("LectureMapper.selectAllProName");
		return lList;
	}

	@Override
	public List<University> selectAllDept(SqlSession sqlSession) {
		List<University> lList = sqlSession.selectList("LectureMapper.selectAllDept");
		return lList;
	}

	@Override
	public int insertLecture(SqlSession sqlSession, Lecture lecture) {
		int result = sqlSession.insert("LectureMapper.insertLecture", lecture);
		return result;
	}

	@Override
	public int updateLecture(SqlSession sqlSession, Lecture lecture) {
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

	@Override
	public List<Professor> selectAllUniName(SqlSession sqlSession) {
		List<Professor> pList = sqlSession.selectList("LectureMapper.selectAllUniName");
		return pList;
	}

	@Override
	public List<Professor> selectProName(SqlSession sqlSession, String lectureDepartment) {
		List<Professor> pList = sqlSession.selectList("LectureMapper.selectProName", lectureDepartment);
		return pList;
	}

	@Override
	public List<Lecture> selectAllLecture2(SqlSession sqlSession, String lectureDepartment) {
		List<Lecture> lList = sqlSession.selectList("LectureMapper.selectAllLecture2", lectureDepartment);
		return lList;
	}

	@Override
	public int updateLecturePeriod(SqlSession sqlSession, Lecture lecture) {
		int result = sqlSession.update("LectureMapper.updateLecturePeriod", lecture);
		return result;
	}

	// 교수번호
	@Override
	public List<Professor> selectAllProNo(SqlSession sqlSession, String professorName) {
		List<Professor> pList = sqlSession.selectList("LectureMapper.selectProNo", professorName);
		return pList;
	}
}
