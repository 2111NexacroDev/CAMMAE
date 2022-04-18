package org.kh.campus.login.store;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface LoginStore {

	public Student selectStudent(SqlSession sqlSession, Student student);

	public Professor selectProfessor(SqlSession sqlSession, Professor professor);

	public Manager selectManager(SqlSession sqlSession, Manager manager);

}
