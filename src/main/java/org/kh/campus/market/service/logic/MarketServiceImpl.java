package org.kh.campus.market.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.market.service.MarketService;
import org.kh.campus.market.store.MarketStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarketServiceImpl implements MarketService {

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private MarketStore mStore;
	
}
