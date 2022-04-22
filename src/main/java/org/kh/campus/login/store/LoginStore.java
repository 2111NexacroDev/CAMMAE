package org.kh.campus.login.store;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface LoginStore {

	public int selectStudent(SqlSession sqlSession, Student student);

	public int selectProfessor(SqlSession sqlSession, Professor professor);

	public int selectManager(SqlSession sqlSession, Manager manager);

}
