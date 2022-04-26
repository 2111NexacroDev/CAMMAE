package org.kh.campus.support.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.support.domain.Support;

public interface SupportStore {

	public List<Support> selectAllSupport(SqlSession sqlSession);
	public int insertSupport(SqlSession sqlSession, Support support);


}
