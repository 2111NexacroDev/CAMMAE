package org.kh.campus.graduation.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.graduation.domain.Graduation;
import org.kh.campus.graduation.store.GraduationStore;
import org.springframework.stereotype.Repository;

@Repository
public class GraduationStoreLogic implements GraduationStore{

	@Override
	public List<Graduation> selectPrintStu(SqlSession sqlSession, Graduation graduation) {
		List<Graduation> gList = sqlSession.selectList("GraduationMapper", graduation);
		return gList;
	}

}
