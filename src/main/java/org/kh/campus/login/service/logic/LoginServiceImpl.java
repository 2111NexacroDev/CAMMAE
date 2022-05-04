package org.kh.campus.login.service.logic;

import java.util.HashMap;

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
	@Override
	public String findPwdStd(Student std) {
		String result = lStore.selectPwdStd(sqlSession, std);
		return result;
	}
	
	// 타입에 따라 비밀번호 일치 여부
	@Override
	public int pwdSame(String type, int id, String pwd) {
		int result = 0;
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("id", Integer.toString(id));
		map.put("pwd", pwd);
		
		if(type.contentEquals("std")) {
			result = lStore.stdPwdSame(sqlSession, map);
		} else if(type.contentEquals("prf")) {
			result = lStore.prfPwdSame(sqlSession, map);
		} else {
			result = lStore.magPwdSame(sqlSession, map);
		}
			
			
		return result;
	}
	
	// 타입에 따라 비밀번호 변경
	@Override
	public int pwdChange(String type, int id, String pwd) {
		int result = 0;
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("id", Integer.toString(id));
		map.put("pwd", pwd);
		
		if(type.contentEquals("std")) {
			result = lStore.stdPwdChange(sqlSession, map);
		} else if(type.contentEquals("prf")) {
			result = lStore.prfPwdChange(sqlSession, map);
		} else {
			result = lStore.magPwdChange(sqlSession, map);
		}
			
		return result;
	}
}
