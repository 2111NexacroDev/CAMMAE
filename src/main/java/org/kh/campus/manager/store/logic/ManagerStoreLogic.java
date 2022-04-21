package org.kh.campus.manager.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.manager.store.ManagerStore;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.stereotype.Repository;

@Repository
public class ManagerStoreLogic implements ManagerStore {

	// 학생
	@Override
	public List<Student> selectAllStudent(SqlSession sqlSession) {
		List<Student> sList = sqlSession.selectList("ManagerMapper.selectStudentList");
		return sList;
	}

	@Override
	public int insertStudent(SqlSession sqlSession, Student student) {
		int result = sqlSession.insert("ManagerMapper.insertStudent", student);
		return result;
	}

	@Override
	public int updateStudent(SqlSession sqlSession, Student student) {
		int result = sqlSession.update("ManagerMapper.updateStudent", student);
		return result;
	}

	@Override
	public int deleteStudent(SqlSession sqlSession, int studentNo) {
		int result = sqlSession.delete("ManagerMapper.deleteStudent", studentNo);
		return result;
	}

	// 교수
	@Override
	public List<Professor> selectAllProfessor(SqlSession sqlSession) {
		List<Professor> pList = sqlSession.selectList("ManagerMapper.selectProfessorList");
		return pList;
	}

	@Override
	public int insertProfessor(SqlSession sqlSession, Professor professor) {
		int result = sqlSession.insert("");
		return result;
	}

	@Override
	public int updateProfessor(SqlSession sqlSession, Professor professor) {
		int result = sqlSession.update("");
		return result;
	}

	@Override
	public int deleteProfessor(SqlSession sqlSession, int professorNo) {
		int result = sqlSession.delete("");
		return result;
	}

	// 관리자
	@Override
	public List<Manager> selectAllManager(SqlSession sqlSession) {
		List<Manager> mList = sqlSession.selectList("ManagerMapper.selectManagerList");
		return mList;
	}

	@Override
	public int insertManager(SqlSession sqlSession, Manager manager) {
		int result = sqlSession.insert("");
		return result;
	}

	@Override
	public int updateManager(SqlSession sqlSession, Manager manager) {
		int result = sqlSession.update("");
		return result;
	}

	@Override
	public int deleteManager(SqlSession sqlSession, int managerNo) {
		int result = sqlSession.delete("");
		return result;
	}

}
