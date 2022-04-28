package org.kh.campus.cart.domain;

import java.sql.Date;

public class Cart {
	private int cartNo;
	private int studentNo;
	private String lectureNo;
	private String cartYear;
	private String cartTerm;
	
	public Cart() {}

	public Cart(int cartNo, int studentNo, String lectureNo, String cartYear, String cartTerm) {
		super();
		this.cartNo = cartNo;
		this.studentNo = studentNo;
		this.lectureNo = lectureNo;
		this.cartYear = cartYear;
		this.cartTerm = cartTerm;
	}

	public int getCartNo() {
		return cartNo;
	}

	public void setCartNo(int cartNo) {
		this.cartNo = cartNo;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public String getLectureNo() {
		return lectureNo;
	}

	public void setLectureNo(String lectureNo) {
		this.lectureNo = lectureNo;
	}

	public String getCartYear() {
		return cartYear;
	}

	public void setCartYear(String cartYear) {
		this.cartYear = cartYear;
	}

	public String getCartTerm() {
		return cartTerm;
	}

	public void setCartTerm(String cartTerm) {
		this.cartTerm = cartTerm;
	}

	@Override
	public String toString() {
		return "Cart [cartNo=" + cartNo + ", studentNo=" + studentNo + ", lectureNo=" + lectureNo + ", cartYear="
				+ cartYear + ", cartTerm=" + cartTerm + "]";
	}

	

	

	
}
