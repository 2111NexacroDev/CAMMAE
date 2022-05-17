package org.kh.campus.tuition.store;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.tuition.domain.Tuition;

public interface TuitionStore {

	public List<Tuition> selectAllTuition(SqlSession sqlSession, String uniCode);

	public int insertTuition(SqlSession sqlSession, Tuition tuition);

	public int selectTuition(SqlSession sqlSession, Tuition tuition);

	public List<Tuition> selectAll(SqlSession sqlSession, HashMap<String, String> search);

	public int updateSave(SqlSession sqlSession, Tuition tuition);

	public List<Tuition> selectOne(SqlSession sqlSession, HashMap<String, String> search);

}
