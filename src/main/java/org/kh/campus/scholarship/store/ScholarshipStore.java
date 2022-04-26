package org.kh.campus.scholarship.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.scholarship.domain.Scholarship;

public interface ScholarshipStore {

	List<Scholarship> selectAllScholar(SqlSession sqlSession);
	int insertScholar(SqlSession sqlSession, Scholarship scholarship);
	List<Scholarship> selectResult(SqlSession sqlSession, int studentNo);
	int registerScholar(SqlSession sqlSession, Scholarship scholarship);
	
}
