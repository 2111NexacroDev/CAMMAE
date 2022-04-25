package org.kh.campus.cart.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.store.CartStore;
import org.kh.campus.lecture.domain.Lecture;
import org.springframework.stereotype.Repository;

@Repository
public class CartStoreLogic implements CartStore {

	@Override
	public List<Lecture> selectAllCart(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("CartMapper.selectAllCart");
		return lList;
	}

	@Override
	public int insertCart(SqlSession sqlSession, int lectureNo) {
		int result = sqlSession.insert("CartMapper.insertCart", lectureNo);
		return result;
	}

	@Override
	public int deleteCart(SqlSession sqlSession, int lectureNo) {
		int result = sqlSession.delete("",lectureNo);
		return result;
	}




	
}
