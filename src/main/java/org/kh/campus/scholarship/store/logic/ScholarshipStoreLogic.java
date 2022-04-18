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
		List<Scholarship> sList = sqlSession.selectList("ScholarMapper.selectAllScholar");
		return sList;
	}

	@Override
	public int insertScholar(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.insert("ScholarMapper.insertScholar", scholarship);
		return result;
	}

	@Override
	public List<Scholarship> selectResult(SqlSession sqlSession) {
		List<Scholarship>sList = sqlSession.selectList("ScholarMapper.selectResult");
		return sList;
	}

	@Override
	public int registerScholar(SqlSession sqlSession, Scholarship scholarship) {
		int result = sqlSession.insert("ScholarMapper.registerScholar", scholarship);
		return result;
	}

}
