package org.kh.campus.scholarship.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.scholarship.store.ScholarshipStore;
import org.springframework.stereotype.Repository;

@Repository
public class ScholarshipStoreLogic implements ScholarshipStore {

	@Override
	public List<Scholarship> selectResult(SqlSession sqlSession, int studentNo) {
		List<Scholarship> sList = sqlSession.selectList("ScholarshipMapper.selectResult", studentNo);
		return sList;
	}

	@Override
	public int registerScholar(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.insert("ScholarshipMapper.registerScholar", scholarship);
		return result;
	}

	@Override

	public List<Scholarship> selectScholarIns(SqlSession sqlSession, String inVar1) {
		List<Scholarship> sList = sqlSession.selectList("ScholarshipMapper.selectScholarIns", inVar1);
		return sList;
	}

	@Override
	public int updateScholarAccept(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.update("ScholarshipMapper.updateScholarAccept", scholarship);
		return result;
	}

	@Override
	public List<Scholarship> selectAllScholar(SqlSession sqlSession, Scholarship scholarship) {
		List<Scholarship> sList = sqlSession.selectList("ScholarshipMapper.selectAllScholar", scholarship);
		return sList;
	}

	@Override
	public int updateScholarDenine(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.update("ScholarshipMapper.updateScholarDenine", scholarship);
		return result;
	}

}
