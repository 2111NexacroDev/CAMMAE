package org.kh.campus.scholarship.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.scholarship.store.ScholarshipStore;
import org.springframework.stereotype.Repository;

@Repository
public class ScholarshipStoreLogic implements ScholarshipStore {

	@Override
	public List<Scholarship> selectAllScholar(SqlSession sqlSession) {
		List<Scholarship> sList = sqlSession.selectList("ScholarshipMapper.selectAllScholar");
		return sList;
	}

	@Override
	public int insertScholar(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.insert("ScholarshipMapper.insertScholar", scholarship);
		return result;
	}

	@Override
	public List<Scholarship> selectResult(SqlSession sqlSession) {
		List<Scholarship>sList = sqlSession.selectList("ScholarshipMapper.selectResult");
		return sList;
	}

	@Override
	public int registerScholar(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.insert("ScholarshipMapper.registerScholar", scholarship);
		return result;
	}

}
