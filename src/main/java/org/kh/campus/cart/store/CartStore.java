package org.kh.campus.cart.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.lecture.domain.Lecture;

public interface CartStore {

	List<Lecture> selectAllCart(SqlSession sqlSession);

	int insertCart(SqlSession sqlSession, int lectureNo);

	int deleteCart(SqlSession sqlSession, int lectureNo);


}
