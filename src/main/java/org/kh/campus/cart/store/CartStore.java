package org.kh.campus.cart.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;

public interface CartStore {

	List<Cart> selectAllCart(SqlSession sqlSession);

	int insertCart(SqlSession sqlSession, Cart cart);

	int deleteCart(SqlSession sqlSession, int lectureNo);

}
