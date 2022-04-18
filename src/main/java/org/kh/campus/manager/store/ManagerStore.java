package org.kh.campus.manager.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;

public interface ManagerStore {

	public List<Student> selectAllStudent(SqlSession sqlSession);

	public int insertStudent(SqlSession sqlSession, Student student);

	public int updateStudent(SqlSession sqlSession, Student student);

	public int deleteStudent(SqlSession sqlSession, int studentNo);

	public List<Professor> selectAllProfessor(SqlSession sqlSession);

	public int insertProfessor(SqlSession sqlSession, Professor professor);

	public int updateProfessor(SqlSession sqlSession, Professor professor);

	public int deleteProfessor(SqlSession sqlSession, int professorNo);

	public List<Manager> selectAllManager(SqlSession sqlSession);

	public int insertManager(SqlSession sqlSession, Manager manager);

	public int updateManager(SqlSession sqlSession, Manager manager);

	public int deleteManager(SqlSession sqlSession, int managerNo);


}
