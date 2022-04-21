package org.kh.campus.cart.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.store.CartStore;
import org.springframework.stereotype.Repository;

@Repository
public class CartStoreLogic implements CartStore {

	@Override
	public List<Cart> selectAllCart(SqlSession sqlSession) {
		List<Cart> cList = sqlSession.selectList("");
		return cList;
	}

	@Override
	public int insertCart(SqlSession sqlSession, Cart cart) {
		int result =  sqlSession.insert("", cart);
		return result;
	}

	@Override
	public int deleteCart(SqlSession sqlSession, int lectureNo) {
		int result = sqlSession.delete("",lectureNo);
		return result;
	}

	
}
