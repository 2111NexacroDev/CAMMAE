package org.kh.campus.professor.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.professor.domain.Professor;

public interface ProfessorStore {

	public List<Professor> selectProfessor(SqlSession sqlSession, Professor professor);

	public int updateProfessor(SqlSession sqlSession, Professor professor);

}
