package org.kh.campus.graduation.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.graduation.domain.Graduation;

public interface GraduationStore {

	List<Graduation> selectPrintStu(SqlSession sqlSession, Graduation graduation);

}
