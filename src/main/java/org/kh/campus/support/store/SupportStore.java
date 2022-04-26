package org.kh.campus.support.store;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.Support;

public interface SupportStore {

	public int insertSupport(SqlSession sqlSession, Support support);

}
