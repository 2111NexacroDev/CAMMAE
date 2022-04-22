package org.kh.campus.login.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.login.service.LoginService;
import org.kh.campus.login.store.LoginStore;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LoginStore lStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int loginStudent(Student student) {
		int result = lStore.selectStudent(sqlSession, student);
		return result;
	}
	@Override
	public int loginProfessor(Professor professor) {
		int result = lStore.selectProfessor(sqlSession, professor);
		return result;
	}
	@Override
	public int loginManager(Manager manager) {
		int result = lStore.selectManager(sqlSession, manager);
		return result;
	}
}
