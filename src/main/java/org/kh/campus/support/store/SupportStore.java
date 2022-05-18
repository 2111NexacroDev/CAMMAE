package org.kh.campus.support.store;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.PageInfo;
import org.kh.campus.support.domain.Support;

public interface SupportStore {

	public List<Support> selectAllSupport(SqlSession sqlSession, PageInfo pi);
	public int insertSupport(SqlSession sqlSession, Support support);
	public int selectListCount(SqlSession sqlSession, PageInfo pageInfo);
	public int deletCheck(int supportNo, SqlSession sqlSession);
	public int selectOneSupport(SqlSession sqlSession, HashMap<String, Integer> countInfo);
	


}
