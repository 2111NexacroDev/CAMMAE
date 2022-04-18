package org.kh.campus.manager.service;

import java.util.List;

import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface ManagerService {
	// 학생
	public List<Student> printAllStudent();
	public int registerStudent(Student student);
	public int modifyrStudent(Student student);
	public int deleteStudent(int studentNo);
	
	// 교수
	public List<Professor> printAllProfessor();
	public int registerProfessor(Professor professor);
	public int modifyrProfessor(Professor professor);
	public int deleteProfessor(int professorNo);
	
	// 관리자
	public List<Manager> printAllManager();
	public int registerManager(Manager manager);
	public int modifyrManager(Manager manager);
	public int deleteManager(int managerNo);
	
	
}
