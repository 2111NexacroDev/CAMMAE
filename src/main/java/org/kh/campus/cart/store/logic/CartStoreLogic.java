package org.kh.campus.cart.store.logic;

import java.util.HashMap;
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
	public int insertCart(SqlSession sqlSession, HashMap<String, Integer> map) {
		int result = sqlSession.insert("CartMapper.insertCart", map);
		return result;
	}

	@Override
	public int deleteCart(SqlSession sqlSession, int cartNo) {
		int result = sqlSession.delete("CartMapper.deleteCart",cartNo);
		return result;
	}

	@Override
	public List<Cart> selectMyCart(SqlSession sqlSession, int studentNo) {
		List<Cart> cList = sqlSession.selectList("CartMapper.selectMyCart", studentNo);
		return cList;
	}

	@Override
	public List<Lecture> selectAllEnroll(SqlSession sqlSession, String lectureDepartment) {
		List<Lecture> lList = sqlSession.selectList("CartMapper.selectAllEnroll", lectureDepartment);
		return lList;
	}

	@Override
	public int insertEnroll(SqlSession sqlSession, Lecture lecture) {
		int result = sqlSession.insert("CartMapper.insertEnroll", lecture);
		return result;
	}

	@Override
	public int deleteEnroll(SqlSession sqlSession, HashMap<String, Integer> map) {
		int result =  sqlSession.delete("CartMapper.deleteEnroll",map);
		return result;
	}

	@Override
	public List<Lecture> selectMyEnroll(SqlSession sqlSession) {
		List<Lecture> lList = sqlSession.selectList("CartMapper.selectMyEnroll");
		return lList;
	}

	@Override
	public List<Lecture> selectAllEnroll2(SqlSession sqlSession, String lectureDepartment) {
		List<Lecture> lList = sqlSession.selectList("CartMapper.selectAllEnroll2", lectureDepartment);
		return lList;
	}




	
}
