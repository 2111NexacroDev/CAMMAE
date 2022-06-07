package org.kh.campus.portfolio.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.portfolio.domain.PageInfo;
import org.kh.campus.portfolio.domain.Portfolio;
import org.kh.campus.portfolio.store.PortfolioStore;
import org.springframework.stereotype.Repository;

@Repository
public class PortfolioStoreLogic implements PortfolioStore {

	@Override
	public List<Portfolio> selectAllPort(SqlSession sqlSession, int studentNo, PageInfo pi) {
		int limit = pi.getPortfolioLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage - 1) * limit;
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Portfolio> pList = sqlSession.selectList("PortfolioMapper.selectAllPort", studentNo, rowBounds);
		return pList;
	}

	@Override
	public int insertPort(SqlSession sqlSession, Portfolio portfolio) {
		int result = sqlSession.insert("PortfolioMapper.insertPort", portfolio);
		return result;
	}

	@Override
	public List<Portfolio> selectAdminAllPort(SqlSession sqlSession, PageInfo pi) {
		int limit = pi.getPortfolioLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage - 1) * limit;
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Portfolio> pList = sqlSession.selectList("PortfolioMapper.selectAdminAllPort", pi, rowBounds);
		return pList;
	}

	@Override
	public Portfolio selectprintAdminDetailPort(SqlSession sqlSession, int port_no) {
		Portfolio portfolio = sqlSession.selectOne("PortfolioMapper.selectprintAdminDetailPort", port_no);
		return portfolio;
	}

	@Override
	public int selectListCount(SqlSession sqlSession) {
		int totalCount = sqlSession.selectOne("PortfolioMapper.selectListCount");
		return totalCount;
	}

	@Override
	public Portfolio selectprintDetailPort(SqlSession sqlSession, int port_no) {
		Portfolio portfolio = sqlSession.selectOne("PortfolioMapper.selectprintDetailPort", port_no);
		return portfolio;
	}

	@Override
	public Portfolio selectprintOneByNo(SqlSession sqlSession, Integer port_no) {
		Portfolio portfolio = sqlSession.selectOne("PortfolioMapper.selectprintOneByNo", port_no);
		return portfolio;
	}

	@Override
	public int updatePortfolio(SqlSession sqlSession, Portfolio portfolio) {
		int result = sqlSession.update("PortfolioMapper.updatePortfolio", portfolio);
		return result;
	}

	@Override
	public int deletePortfolio(SqlSession sqlSession, int port_no) {
		int result = sqlSession.delete("PortfolioMapper.deletePortfolio", port_no);
		return result;
	}

	@Override
	public List<Portfolio> selectBySt(SqlSession sqlSession, int port_student_no) {
		List<Portfolio> pList = sqlSession.selectList("PortfolioMapper.selectBySt", port_student_no);
		return pList;
	}

}
