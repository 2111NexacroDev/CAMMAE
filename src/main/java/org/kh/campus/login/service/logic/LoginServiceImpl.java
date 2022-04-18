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
	public Student loginStudent(Student student) {
		Student std = lStore.selectStudent(sqlSession, student);
		return std;
	}
	@Override
	public Professor loginProfessor(Professor professor) {
		Professor prf = lStore.selectProfessor(sqlSession, professor);
		return prf;
	}
	@Override
	public Manager loginManager(Manager manager) {
		Manager mag = lStore.selectManager(sqlSession, manager);
		return mag;
	}
}
