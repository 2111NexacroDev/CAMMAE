package org.kh.campus.login.service;

import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface LoginService {
	public Student loginStudent(Student student);
	public Professor loginProfessor(Professor professor);
	public Manager loginManager(Manager manager);
	
	
}
