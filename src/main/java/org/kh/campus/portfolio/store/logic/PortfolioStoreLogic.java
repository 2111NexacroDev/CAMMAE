package org.kh.campus.portfolio.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.portfolio.domain.Portfolio;
import org.kh.campus.portfolio.store.PortfolioStore;
import org.springframework.stereotype.Repository;

@Repository
public class PortfolioStoreLogic implements PortfolioStore {

	@Override
	public List<Portfolio> selectAllPort(SqlSession sqlSession) {
	 List<Portfolio> pList = sqlSession.selectList("PortfolioMapper.selectAllPort");
		return pList;
	}

	@Override
	public int insertPort(SqlSession sqlSession, Portfolio portfolio) {
		int result = sqlSession.insert("PortfolioMapper.insertPort", portfolio);
		return result;
	}

	@Override
	public Portfolio selectDetailPort(SqlSession sqlSession, String port_title) {
		Portfolio portfolio = sqlSession.selectOne("PortfolioMapper.selectDetailPort", port_title);
		return portfolio;
	}

	@Override
	public int updatePort(SqlSession sqlSession, String port_title) {
		int result = sqlSession.update("PortfolioMapper.updatePort", port_title);
		return result;
	}

	@Override
	public int deletePort(SqlSession sqlSession, String port_title) {
		int result = sqlSession.delete("PortfolioMapper.deletePort", port_title);
		return result;
	}

	@Override
	public List<Portfolio> selectAdminAllPort(SqlSession sqlSession) {
		List<Portfolio>pList = sqlSession.selectList("PortfolioMapper.selectAdminAllPort");
		return pList;
	}

	@Override
	public Portfolio selectprintAdminDetailPort(SqlSession sqlSession, String port_title) {
		Portfolio portfolio = sqlSession.selectOne("PortfolioMapper.selectprintAdminDetailPort", port_title);
		return portfolio;
	}

	@Override
	public int selectListCount(SqlSession sqlSession) {
		int totalCount = sqlSession.selectOne("PortfolioMapper.selectListCount");
		return totalCount;
	}
	

}
