package org.kh.campus.cart.service.logic;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
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
	public int registerCart(HashMap<String, Integer> map) {
		int result = cStore.insertCart(sqlSession, map);
		return result;
	}
	

	@Override
	public int removeCart(int cartNo) {
		int result = cStore.deleteCart(sqlSession, cartNo);
		return result;
	}

	@Override
	public List<Cart> printMyCart(int studentNo) {
		List<Cart> cList = cStore.selectMyCart(sqlSession, studentNo);
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
		
		// 현재 날짜 구하기
		LocalDate now = LocalDate.now();
		// 포맷 정의
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy");
		// 포맷 적용
		String formatedNow = now.format(formatter);
		
		formatter = DateTimeFormatter.ofPattern("MM");
		int formatedNow2 = Integer.parseInt(now.format(formatter));
		if( formatedNow2 <7) {
			lecture.setGradeSession("1학기");
		}else {
			lecture.setGradeSession("2학기");
		}
		lecture.setGradeYear(formatedNow);
		
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

	@Override
	public List<Lecture> printAllenroll2(String lectureDepartment) {
		if(lectureDepartment.contentEquals("전체")) {
			List<Lecture> lList = cStore.selectAllEnroll(sqlSession, lectureDepartment);
			return lList;

		}else {
			List<Lecture> lList = cStore.selectAllEnroll2(sqlSession, lectureDepartment);
			return lList;
		}
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@Override
//	public long countByEnrollPeole(Lecture lecture) {
//		long totalCount = cStore.selectEnrollCount(sqlSession, lecture);
//		return totalCount;
//	}





}
