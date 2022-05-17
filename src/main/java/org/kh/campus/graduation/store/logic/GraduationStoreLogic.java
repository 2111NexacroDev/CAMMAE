package org.kh.campus.graduation.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.graduation.domain.Graduation;
import org.kh.campus.graduation.store.GraduationStore;
import org.springframework.stereotype.Repository;

@Repository
public class GraduationStoreLogic implements GraduationStore{

	

	@Override
	public int insertGraduation(SqlSession sqlSession, Graduation graduation) {
		int result = sqlSession.insert("GraduationMapper.insertGraduation", graduation);
		return result;
	}

	@Override
	public List<Graduation> selectGraduResult(SqlSession sqlSession, Graduation graduation) {
		List<Graduation>gList = sqlSession.selectList("GraduationMapper.selectGraduResult", graduation);
		return gList;
	}

	@Override
	public int updateGraduationAccept(SqlSession sqlSession, Graduation graduation) {
		int result = sqlSession.update("GraduationMapper.updateGraduationAccept", graduation);
		return result;
	}

}
