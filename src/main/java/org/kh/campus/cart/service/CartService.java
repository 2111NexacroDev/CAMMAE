package org.kh.campus.cart.service;

import java.util.List;

import org.kh.campus.cart.domain.Cart;

public interface CartService {

	public List<Cart>printAllCart();  
	public int registerCart(Cart cart);
	public int removeCart(int lectureNo);


}
