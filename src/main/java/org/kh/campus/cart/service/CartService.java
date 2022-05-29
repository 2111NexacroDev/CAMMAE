package org.kh.campus.cart.service;

import java.util.HashMap;
import java.util.List;

import org.kh.campus.cart.domain.Cart;
import org.kh.campus.lecture.domain.Lecture;

public interface CartService {
	
	// 예비수강신청 부분
	
	// 예비수강신청 목록  출력
	public List<Lecture>printAllCart();  
	
	// 예비수강신청 내역 출력
	public List<Cart>printMyCart(int studentNo);
	
	// 예비수강신청 등록(찜하기)
	public int registerCart(HashMap<String, Integer> map);
	
	// 예비수강신청 찜하기취소
	public int removeCart(int cartNo);

	//수강신청 부분
	
	// 수강신청 목록 출력
	public List<Lecture> printAllenroll(String lectureDepartment);
	
	// 수강신청 등록(신청)
	public int registerEnroll(Lecture lecture);
	
	// 수강신청 내역 출력
	public List<Lecture> printMyEnroll(int studentNo);

	// 수강신청 신청 취소(신청취소)
	public int removeEnroll(HashMap<String, Integer> map);

	public List<Lecture> printAllenroll2(String lectureDepartment);

	
	
	
	
	
	
	
	
	
	
	
	
//	public long countByEnrollPeole(Lecture lecture);
}
