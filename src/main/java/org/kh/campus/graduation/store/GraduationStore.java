package org.kh.campus.graduation.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.graduation.domain.Graduation;

public interface GraduationStore {


	int insertGraduation(SqlSession sqlSession, Graduation graduation);

	List<Graduation> selectGraduResult(SqlSession sqlSession, Graduation graduation);

	int updateGraduationAccept(SqlSession sqlSession, Graduation graduation);

}
