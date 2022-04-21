package org.kh.campus.cart.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.kh.campus.cart.store.CartStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartStore cStore;
	private SqlSession sqlSession;
	
	@Override
	public List<Cart> printAllCart() {
		List<Cart> cList = cStore.selectAllCart(sqlSession);
		return cList;
	}

	@Override
	public int registerCart(Cart cart) {
		int result = cStore.insertCart(sqlSession, cart);
		return result;
	}

	@Override
	public int removeCart(int lectureNo) {
		int result = cStore.deleteCart(sqlSession, lectureNo);
		return result;
	}

}
