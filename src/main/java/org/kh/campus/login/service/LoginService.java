package org.kh.campus.login.service;

import java.util.HashMap;

import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface LoginService {
	public Student loginStudent(Student student);
	public Professor loginProfessor(Professor professor);
	public Manager loginManager(Manager manager);
	public String findPwd(HashMap<String, String> userInfo);
	public int pwdSame(String type, int id, String pwd);
	public int pwdChange(String type, int id, String pwd);
	
	public void sendEmail(HashMap<String, String> userInfo) throws Exception;
}
