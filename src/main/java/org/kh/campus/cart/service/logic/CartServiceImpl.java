package org.kh.campus.cart.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.kh.campus.cart.store.CartStore;
import org.kh.campus.lecture.domain.Lecture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartStore cStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Lecture> printAllCart() {
		List<Lecture> lList = cStore.selectAllCart(sqlSession);
		return lList;
	}

	@Override
	public int registerCart(int lectureNo) {
		int result = cStore.insertCart(sqlSession, lectureNo);
		return result;
	}
	

	@Override
	public int removeCart(int lectureNo) {
		int result = cStore.deleteCart(sqlSession, lectureNo);
		return result;
	}

	@Override
	public List<Cart> printMyCart() {
		List<Cart> cList = cStore.selectMyCart(sqlSession);
		return cList;
	}




}
