package org.kh.campus.tuition.store.logic;

import java.util.HashMap;
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

	@Override
	public int insertTuition(SqlSession sqlSession, Tuition tuition) {
		int result = sqlSession.insert("tuitionMapper.insertTuition", tuition);
		return result;
	}

	@Override
	public int selectTuition(SqlSession sqlSession, Tuition tuition) {
		int result = sqlSession.selectOne("tuitionMapper.selectCount",tuition);
		return result;
	}

	@Override
	public List<Tuition> selectAll(SqlSession sqlSession, HashMap<String, String> search) {
		List<Tuition> tList = sqlSession.selectList("tuitionMapper.selectAll",search);
		return tList;
	}

	@Override
	public int updateSave(SqlSession sqlSession, Tuition tuition) {
		int result = sqlSession.update("tuitionMapper.updateSave", tuition);
		return result;
	}

	@Override
	public List<Tuition> selectOne(SqlSession sqlSession, HashMap<String, String> search) {
		List<Tuition> tList = sqlSession.selectList("tuitionMapper.selectOne",search);
		return tList;
	}

}
