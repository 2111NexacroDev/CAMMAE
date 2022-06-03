package org.kh.campus.cart.store;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.cart.domain.Cart;
import org.kh.campus.lecture.domain.Lecture;

public interface CartStore {

	List<Lecture> selectAllCart(SqlSession sqlSession);

	List<Cart> selectMyCart(SqlSession sqlSession, int studentNo);

	int insertCart(SqlSession sqlSession, HashMap<String, Integer> map);

	int deleteCart(SqlSession sqlSession, int cartNo);

	List<Lecture> selectAllEnroll(SqlSession sqlSession, String lectureDepartment);

	List<Lecture> selectMyEnroll(SqlSession sqlSession, int studentNo);

	int insertEnroll(SqlSession sqlSession, Lecture lecture);

	int deleteEnroll(SqlSession sqlSession, HashMap<String, Integer> map);

	List<Lecture> selectAllEnroll2(SqlSession sqlSession, String lectureDepartment);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	long selectEnrollCount(SqlSession sqlSession, Lecture lecture);


}
