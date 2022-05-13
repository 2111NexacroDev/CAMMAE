package org.kh.campus.scholarship.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.scholarship.domain.Scholarship;

public interface ScholarshipStore {

	List<Scholarship> selectAllScholar(SqlSession sqlSession, Scholarship scholarship);
	List<Scholarship> selectResult(SqlSession sqlSession, int studentNo);
	int registerScholar(SqlSession sqlSession, Scholarship scholarship);
	List<Scholarship> selectScholarIns(SqlSession sqlSession, String inVar1);
	int updateScholarAccept(SqlSession sqlSession, Scholarship scholarship);
	int updateScholarDenine(SqlSession sqlSession, Scholarship scholarship);


}
