package org.kh.campus.portfolio.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.portfolio.domain.PageInfo;
import org.kh.campus.portfolio.domain.Portfolio;

public interface PortfolioStore {

	public List<Portfolio> selectAllPort(SqlSession sqlSession, int studentNo, PageInfo pi);
	public int insertPort(SqlSession sqlSession, Portfolio portfolio);
	public List<Portfolio> selectAdminAllPort(SqlSession sqlSession, PageInfo pi);
	public Portfolio selectprintAdminDetailPort(SqlSession sqlSession, int port_no);
	public int selectListCount(SqlSession sqlSession);
	public Portfolio selectprintDetailPort(SqlSession sqlSession, int port_no);
	public Portfolio selectprintOneByNo(SqlSession sqlSession, Integer port_no);
	public int updatePortfolio(SqlSession sqlSession, Portfolio portfolio);
	public int deletePortfolio(SqlSession sqlSession, int port_no);
	public List<Portfolio> selectBySt(SqlSession sqlSession, int port_student_no);
	

}
