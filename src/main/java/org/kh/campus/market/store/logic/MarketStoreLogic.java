package org.kh.campus.market.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;

import org.kh.campus.market.domain.Market;
import org.kh.campus.market.domain.MarketReply;
import org.kh.campus.market.domain.PageInfo;
import org.kh.campus.market.domain.Search;
import org.kh.campus.market.store.MarketStore;
import org.kh.campus.question.domain.QuestionReply;
import org.springframework.stereotype.Repository;

@Repository
public class MarketStoreLogic implements MarketStore {
	
	
	@Override
	public List<Market> selectAllMarket(SqlSession sqlSession, PageInfo pi) {
		int limit = pi.getMarketLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage - 1 ) * limit;
		
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Market> mList = sqlSession.selectList("MarketMapper.selectAllMarket", pi, rowBounds);
		return mList;
	}
	
	@Override
	public Market selectOneMarket(SqlSession sqlSession, int marketNo) {
		Market market = sqlSession.selectOne("MarketMapper.selectOneMarket", marketNo);
		return market;
	}
	
	@Override
	public List<Market> selectSearchMarket(Search search, SqlSession sqlSession) {
		List<Market> mList = sqlSession.selectList("MarketMapper.selectSearchMarket", search);
		return mList;
	}

	@Override
	public int insertMarket(Market market, SqlSession sqlSession) {
		int result = sqlSession.insert("MarketMapper.insertMarket", market);
		return result;
	}

	@Override
	public int updateCount(int marketNo, SqlSession sqlSession) {
		int result = sqlSession.update("MarketMapper.updateCount", marketNo);
		return result;
	}
	
	@Override
	public int updateMarket(Market market, SqlSession sqlSession) {
		int result = sqlSession.update("MarketMapper.updateMarket", market);
		return result;
	}


	@Override
	public int deleteMarket(int marketNo, SqlSession sqlSession) {
		int result = sqlSession.delete("MarketMapper.deleteMarket", marketNo);
		return result;
	}
	//페이징
	@Override
	public int selectListCount(SqlSession sqlSession, PageInfo pageInfo) {
		int totalCount = sqlSession.selectOne("MarketMapper.selectListCount",pageInfo);
		return totalCount;
	}


	
	//댓글

		@Override
		public List<MarketReply> selectAllReply(int marketNo, SqlSession sqlSession) {
			List<MarketReply> mReplyList = sqlSession.selectList("MarketMapper.selectAllReply", marketNo);
			return mReplyList;
		}
		
		@Override
		public int insertReply(MarketReply marketReply, SqlSession sqlSession) {
			int result = sqlSession.insert("MarketMapper.insertReply", marketReply);
			return result;
		}

		@Override
		public int updateReply(MarketReply marketReply, SqlSession sqlSession) {
			int result = sqlSession.update("MarketMapper.updateReply", marketReply);
			return result;
		}

		@Override
		public int deleteReply(MarketReply marketReply, SqlSession sqlSession) {
			int result = sqlSession.delete("MarketMapper.deleteReply", marketReply);
			return result;
		}





}
