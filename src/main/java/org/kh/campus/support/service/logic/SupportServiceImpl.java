package org.kh.campus.support.service.logic;

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
}
