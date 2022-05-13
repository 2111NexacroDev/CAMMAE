package org.kh.campus.tuition.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.tuition.domain.Tuition;

public interface TuitionStore {

	public List<Tuition> selectAllTuition(SqlSession sqlSession, String uniCode);

}
