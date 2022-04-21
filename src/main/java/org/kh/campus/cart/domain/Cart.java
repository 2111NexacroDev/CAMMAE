package org.kh.campus.cart.domain;

import java.sql.Date;

public class Cart {
	private int cartNo;
	private int lectureNo;
	private int studentNo;
	private Date cartYear;
	private String cartTerm;
	
	public Cart() {}

	@Override
	public String toString() {
		return "Cart [cartNo=" + cartNo + ", lectureNo=" + lectureNo + ", studentNo=" + studentNo + ", cartYear="
				+ cartYear + ", cartTerm=" + cartTerm + "]";
	}

	public int getCartNo() {
		return cartNo;
	}

	public void setCartNo(int cartNo) {
		this.cartNo = cartNo;
	}

	public int getLectureNo() {
		return lectureNo;
	}

	public void setLectureNo(int lectureNo) {
		this.lectureNo = lectureNo;
	}

	public int getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(int studentNo) {
		this.studentNo = studentNo;
	}

	public Date getCartYear() {
		return cartYear;
	}

	public void setCartYear(Date cartYear) {
		this.cartYear = cartYear;
	}

	public String getCartTerm() {
		return cartTerm;
	}

	public void setCartTerm(String cartTerm) {
		this.cartTerm = cartTerm;
	}

	public Cart(int cartNo, int lectureNo, int studentNo, Date cartYear, String cartTerm) {
		super();
		this.cartNo = cartNo;
		this.lectureNo = lectureNo;
		this.studentNo = studentNo;
		this.cartYear = cartYear;
		this.cartTerm = cartTerm;
	}

}
