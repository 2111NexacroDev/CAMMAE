package org.kh.campus.cart.service.logic;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.kh.campus.cart.store.CartStore;
import org.kh.campus.grade.store.GradeStore;
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
	public int removeCart(int cartNo) {
		int result = cStore.deleteCart(sqlSession, cartNo);
		return result;
	}

	@Override
	public List<Cart> printMyCart() {
		List<Cart> cList = cStore.selectMyCart(sqlSession);
		return cList;
	}

	
	// 수강신청 파트
	
	
	@Override
	public List<Lecture> printAllenroll(String lectureDepartment) {
		List<Lecture> lList = cStore.selectAllEnroll(sqlSession, lectureDepartment);
		return lList;
	}

	@Override
	public int registerEnroll(Lecture lecture) {
		int result = cStore.insertEnroll(sqlSession, lecture);
		return result;
	}

	@Override
	public List<Lecture> printMyEnroll() {
		List<Lecture> lList = cStore.selectMyEnroll(sqlSession);
		return lList;
	}
		
	@Override
	public int removeEnroll(HashMap<String, Integer> map) {
		int result = cStore.deleteEnroll(sqlSession, map);
		return result;
	}





}
