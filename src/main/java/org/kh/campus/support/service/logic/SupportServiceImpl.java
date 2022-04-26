package org.kh.campus.support.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.Support;
import org.kh.campus.support.service.SupportService;
import org.kh.campus.support.store.SupportStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupportServiceImpl implements SupportService{

	@Autowired
	private SupportStore sStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int insertSuport(Support support) {
		int result = sStore.insertSupport(sqlSession, support);
		return result;
	}

	@Override
	public List<Support> printAllSupport() {
		List<Support> sList = sStore.selectAllSupport(sqlSession);
		return sList;
	}
}
