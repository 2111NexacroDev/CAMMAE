package org.kh.campus.professor.store.logic;


import org.apache.ibatis.session.SqlSession;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.professor.store.ProfessorStore;
import org.springframework.stereotype.Repository;

@Repository
public class ProfessorStoreLogic implements ProfessorStore {

	@Override
	public Professor selectProfessor(SqlSession sqlSession, int professorNo) {
		Professor professor = sqlSession.selectOne("ProfessorMapper.selectProfessorInfoOne", professorNo);
		return professor;
	}

	@Override
	public int updateProfessor(SqlSession sqlSession, Professor professor) {
		int result = sqlSession.update("");
		return result;
	}

}
