package org.kh.campus.login.service;

import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface LoginService {
	public int loginStudent(Student student);
	public int loginProfessor(Professor professor);
	public int loginManager(Manager manager);
	
	
}
