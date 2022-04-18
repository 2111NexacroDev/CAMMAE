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
	public Student selectStudent(SqlSession sqlSession, Student student) {
		Student std = sqlSession.selectOne("");
		return std;
	}

	@Override
	public Professor selectProfessor(SqlSession sqlSession, Professor professor) {
		Professor prf = sqlSession.selectOne("");
		return prf;
	}

	@Override
	public Manager selectManager(SqlSession sqlSession, Manager manager) {
		Manager mag = sqlSession.selectOne("");
		return mag;
	}
	
}
