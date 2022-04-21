package org.kh.campus.cart.controller;

import java.util.List;

import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CartController {
	
	@Autowired
	private CartService cService;
	
	public List<Cart> cartListView() {
		List<Cart> cList = cService.printAllCart();
		return cList;
	}
	
	@RequestMapping(value = "/cart/List", method = RequestMethod.GET)
	public String cartRegister(Model model, @ModelAttribute Cart cart) {
		int result = cService.registerCart(cart);
		return  "";
	}

	@RequestMapping(value = "", method = RequestMethod.GET)
	public String cartRemove(Model model, @RequestParam("lectureNo") int lectureNo) {
		int result = cService.removeCart(lectureNo);
		
		return "";
	}
}
