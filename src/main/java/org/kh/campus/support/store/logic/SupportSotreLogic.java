package org.kh.campus.support.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.Support;
import org.kh.campus.support.store.SupportStore;
import org.springframework.stereotype.Repository;

@Repository
public class SupportSotreLogic implements SupportStore{

	@Override
	public int insertSupport(SqlSession sqlSession, Support support) {
		int result = sqlSession.insert("SupportMapper.insertSupport", support);
		return result;
	}

}
