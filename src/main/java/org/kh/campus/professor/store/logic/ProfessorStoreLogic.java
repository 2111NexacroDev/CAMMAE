package org.kh.campus.professor.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.professor.store.ProfessorStore;
import org.springframework.stereotype.Repository;

@Repository
public class ProfessorStoreLogic implements ProfessorStore {

	@Override
	public List<Professor> selectProfessor(SqlSession sqlSession, Professor professor) {
		List<Professor> pList = sqlSession.selectList("");
		return pList;
	}

	@Override
	public int updateProfessor(SqlSession sqlSession, Professor professor) {
		int result = sqlSession.update("");
		return result;
	}

}
