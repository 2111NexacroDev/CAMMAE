package org.kh.campus.professor.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.professor.service.ProfessorService;
import org.kh.campus.professor.store.ProfessorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessorServiceImpl implements ProfessorService {

	@Autowired
	private ProfessorStore pStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Professor> printProfessor(Professor professor) {
		List<Professor> pList = pStore.selectProfessor(sqlSession, professor);
		return pList;
	}
	@Override
	public int modifyProfessor(Professor professor) {
		int result = pStore.updateProfessor(sqlSession, professor);
		return result;
	}
}
