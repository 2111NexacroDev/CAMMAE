package org.kh.campus.login.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.login.store.LoginStore;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.stereotype.Repository;

@Repository
public class LoginStoreLogic implements LoginStore {

	@Override
	public int selectStudent(SqlSession sqlSession, Student student) {
		int result = sqlSession.selectOne("LoginMapper.studentLogin", student);
		return result;
	}

	@Override
	public int selectProfessor(SqlSession sqlSession, Professor professor) {
		int result = sqlSession.selectOne("LoginMapper.professorLogin", professor);
		return result;
	}

	@Override
	public int selectManager(SqlSession sqlSession, Manager manager) {
		int result = sqlSession.selectOne("LoginMapper.managerLogin", manager);
		return result;
	}
	
}
