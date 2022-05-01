package org.kh.campus.cart.service;

import java.util.List;

import org.kh.campus.cart.domain.Cart;
import org.kh.campus.lecture.domain.Lecture;

public interface CartService {

	public List<Lecture>printAllCart();  
	
	public List<Cart>printMyCart();
	
	public int registerCart(int lectureNo);
	
	public int removeCart(int cartNo);

	public List<Lecture> printAllenroll();
	
	public int registerEnroll(Lecture lecture);

}
