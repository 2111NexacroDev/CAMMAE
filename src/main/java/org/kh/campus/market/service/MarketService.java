package org.kh.campus.market.service;

import java.util.List;

import org.kh.campus.market.domain.Market;
import org.kh.campus.market.domain.MarketReply;
import org.kh.campus.market.domain.Search;
import org.kh.campus.market.domain.PageInfo;

public interface MarketService {
	//게시글 전체 리스트 조회
	public List<Market> printAllMarket(PageInfo pi);
	//게시글 상세 조회
	public Market printOneMarket(int marketNo);
	//게시글 검색
	public List<Market> printSearchMarket(Search search);
	
	//게시글 등록
	public int registerMarket(Market market);
	
	//게시글 조회수
	public int marketCountUpdate(int marketNo);
	//게시글 수정
	public int modifyMarket(Market market);
	
	//게시글 삭제
	public int removeMarket(int marketNo);
	
	//페이징
	public int getListCount();
	
	//댓글
	public int registerReply(MarketReply marketReply);
	public List<MarketReply> printAllMarketReply(int marketNo);
	public int modifyMarketReply(MarketReply marketReply);
	public int removeMarketReply(MarketReply marketReply);
	



}
