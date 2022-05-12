package org.kh.campus.tuition.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.tuition.domain.Tuition;
import org.kh.campus.tuition.store.TuitionStore;
import org.springframework.stereotype.Repository;

@Repository
public class TuitionStoreLogic implements TuitionStore{

	@Override
	public List<Tuition> selectAllTuition(SqlSession sqlSession, String uniCode) {
		List<Tuition> tList = sqlSession.selectList("tuitionMapper.selectTuition",uniCode);
		return tList;
	}

}
