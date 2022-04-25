package org.kh.campus.cart.controller;

import java.util.List;

import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.kh.campus.lecture.domain.Lecture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CartController {

	@Autowired
	private CartService cService;
	//예비수강신청 목록, 등록페이지
	@RequestMapping(value = "/cart/preCartListView.kh", method = RequestMethod.GET)
	public ModelAndView cartListView(ModelAndView mv) {
		List<Lecture> lList = cService.printAllCart();

		try {
			if (!lList.isEmpty()) {
				mv.addObject("lList", lList);
				mv.setViewName("cart/preCartListView");

			} else {
				System.out.println("실패했습니다.");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 예비수강신청 등록
	@RequestMapping(value = "/cart/cartPick.kh", method = RequestMethod.GET)
	public ModelAndView cartRegister(ModelAndView mv, @RequestParam("lectureNo") int lectureNo) {
		int result = cService.registerCart(lectureNo);
		try {
			if(result>0) {
				mv.setViewName("/cart/preCartListView.kh");
			}else {
				System.out.println("실패했습니다.");
			}
		}catch(Exception e) {
			System.out.println(e.toString());

		}
		
		return mv;
	}
//	@RequestMapping(value = "", method = RequestMethod.GET)
//	public String cartRemove(Model model, @RequestParam("lectureNo") int lectureNo) {
//		int result = cService.removeCart(lectureNo);
//		
//		return "";
//	}
}
