package org.kh.campus.professor.store;


import org.apache.ibatis.session.SqlSession;
import org.kh.campus.professor.domain.Professor;

public interface ProfessorStore {

	public Professor selectProfessor(SqlSession sqlSession, int professorNo);

	public int updateProfessor(SqlSession sqlSession, Professor professor);

}
