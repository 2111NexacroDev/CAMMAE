package org.kh.campus.support.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.PageInfo;
import org.kh.campus.support.domain.Support;
import org.kh.campus.support.domain.SupportSearch;
import org.kh.campus.support.store.SupportStore;
import org.springframework.stereotype.Repository;

@Repository
public class SupportSotreLogic implements SupportStore{
	
	@Override
	public List<Support> selectAllSupport(SqlSession sqlSession, PageInfo pi) {
		int limit = pi.getSupportLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage -1) * limit;
		RowBounds rowBounds = new RowBounds(offset,limit);
		List<Support> sList = sqlSession.selectList("SupportMapper.selectAllSupport",pi, rowBounds);
		return sList;
	}
	
	@Override
	public int insertSupport(SqlSession sqlSession, Support support) {
		int result = sqlSession.insert("SupportMapper.insertSupport", support);
		return result;
	}

	@Override
	public int selectListCount(SqlSession sqlSession, PageInfo pageInfo) {
		int totalCount = sqlSession.selectOne("SupportMapper.selectListCount", pageInfo);
		return totalCount;
	}

	@Override
	public int deletCheck(int supportNo, SqlSession sqlSession) {
		int result = sqlSession.delete("SupportMapper.deleteSupport", supportNo);
		return result;
	}

	



}
