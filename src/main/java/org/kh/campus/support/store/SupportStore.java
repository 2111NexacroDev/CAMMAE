package org.kh.campus.support.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.PageInfo;
import org.kh.campus.support.domain.Support;
import org.kh.campus.support.domain.SupportSearch;

public interface SupportStore {

	public List<Support> selectAllSupport(SqlSession sqlSession, PageInfo pi);
	public List<Support> selectSearchSupport(SupportSearch supportSearch, SqlSession sqlSession);
	public int insertSupport(SqlSession sqlSession, Support support);
	public int selectListCount(SqlSession sqlSession);
	public int deletCheck(int supportNo, SqlSession sqlSession);
	


}
