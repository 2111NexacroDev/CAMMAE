package org.kh.campus.cart.controller;

import java.util.HashMap;
import java.util.List;

import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.kh.campus.grade.domain.Grade;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class CartController {

	@Autowired
	private CartService cService;
	
	@Autowired
	private LectureService lService;

	// 예비수강신청 목록, 등록페이지 ㅎㅎ
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

	// 예비수강신청 등록 기능
	@RequestMapping(value = "/cart/cartPick.kh", method = RequestMethod.GET)
	public ModelAndView cartRegister(ModelAndView mv, @RequestParam("lectureNo") int lectureNo) {
		try {
			int studentNo = 0;
			HashMap<String, Integer> map = new HashMap<String, Integer>();
			map.put("lectureNo", lectureNo);
			map.put("studentNo", studentNo);
			int result = cService.registerCart(map);
			if (result > 0) {
				mv.setViewName("redirect:/cart/preCartListView.kh");
			} else {
				mv.addObject("msg", "실패했습니다");
				mv.setViewName("common/errorPage");
			}
		} catch (Exception e) {
			mv.setViewName("redirect:/cart/preCartListView.kh");
		
		}
		return mv;
	}

//	 예비수강신청 내역 목록
	@RequestMapping(value = "/cart/myCartList.kh", method = RequestMethod.GET)
	public ModelAndView myCartList(ModelAndView mv) {
		int studentNo = 0;
		List<Cart> cList = cService.printMyCart(studentNo);
		try {
			if (!cList.isEmpty()) {
				mv.addObject("cList", cList);
				mv.setViewName("cart/myCartList");
			} else {
				System.out.println("찜하기 실패.");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	
	// 예비수강신청 내역삭제
	@RequestMapping(value = "/cart/remove.kh", method = RequestMethod.GET)
	public String cartRemove(Model model, @RequestParam("cartNo") int cartNo) {
		int result = cService.removeCart(cartNo);
		if(result > 0) {
			return "redirect:/cart/myCartList.kh";
		}else {
			model.addAttribute("msg", "찜 삭제 실패");
			return "common/errorPage";
		}
	}
	
	// 수강신청 신청목록 페이지 보여주는곳
	@RequestMapping(value = "/cart/enrollRegister.kh", method = RequestMethod.GET)
	public ModelAndView enrollListView(ModelAndView mv,
			@RequestParam(value = "lecturedep", required = false) String lectureDepartment) {
		try {
			List<Lecture> lList = cService.printAllenroll(lectureDepartment);
			if (!lList.isEmpty()) {
				mv.addObject("lList", lList);
				mv.setViewName("cart/enrollRegister");
				
			} else {
				System.out.println("실패했습니다.");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	
	@ResponseBody
	@RequestMapping(value = "/cart/enrollRegister2.kh", method = RequestMethod.GET , produces="application/json;charset=utf-8" )
	public String enrollListView2(@RequestParam(value = "lecturedep", required = false) String lectureDepartment) {
		try {
			if(lectureDepartment.contentEquals("1")) {
				lectureDepartment = "컴퓨터공학과";
			} else if(lectureDepartment.contentEquals("2")) {
				lectureDepartment = "전자전기공학과";
			} else if(lectureDepartment.contentEquals("3")) {
				lectureDepartment = "산업디자인학과";
			} else if(lectureDepartment.contentEquals("4")) {
				lectureDepartment = "중국어학과";
			} else if(lectureDepartment.contentEquals("5")) {
				lectureDepartment = "유비쿼터스학과";
			} else {
				lectureDepartment = "국어국문학과";
			}
			List<Lecture> lList = cService.printAllenroll2(lectureDepartment);
			if (!lList.isEmpty()) {
				Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
				System.out.println(lList.toString() +"test1233");
				return gson.toJson(lList);
				
			} else {
				System.out.println("실패했습니다.");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return null;
	}
	
	@RequestMapping(value = "/cart/cartEnroll.kh", method = RequestMethod.GET)
	public ModelAndView cartListInsert(ModelAndView mv, @RequestParam("lectureNo") int lectureNo) {
		try {
			Lecture lecture = lService.printOneLecture(lectureNo);
			int result = cService.registerEnroll(lecture);
			if (result > 0) {
				mv.setViewName("redirect:/cart/myCartList.kh");
			} else {
				mv.addObject("msg", "실패했습니다");
				mv.setViewName("common/errorPage");
			}
		} catch (Exception e) {
			mv.setViewName("redirect:/cart/myCartList.kh");
		}
		return mv;
	}
	
	
	// 수강신청 등록 기능
	@RequestMapping(value = "/cart/lectureEnroll.kh", method = RequestMethod.GET)
	public ModelAndView enrollListInsert(ModelAndView mv, @RequestParam("lectureNo") int lectureNo) {
		try {
			Lecture lecture = lService.printOneLecture(lectureNo);
			int result = cService.registerEnroll(lecture);
			if (result > 0) {
				mv.setViewName("redirect:/cart/enrollRegister.kh");
			} else {
				mv.addObject("msg", "실패했습니다");
				mv.setViewName("common/errorPage");
			}
		} catch (Exception e) {
			mv.setViewName("redirect:/cart/enrollRegister.kh");
		}
		return mv;
	}
	
	
	
	
	@RequestMapping(value = "/cart/enrollList.kh", method = RequestMethod.GET)
	public ModelAndView enrollMyListView(ModelAndView mv) {
		List<Lecture> lList = cService.printMyEnroll();
		try {
			if (!lList.isEmpty()) {
				mv.addObject("lList", lList);
				mv.setViewName("cart/enrollList");
				System.out.println(lList.toString());
			} else {
				System.out.println("실패했습니다.");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	
	@RequestMapping(value = "/cart/enrollRemove.kh", method = RequestMethod.GET)
	public String lectureRemove(Model model, @RequestParam("lectureNo") int lectureNo) {
	try {
		int studentNo = 0;
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		map.put("lectureNo", lectureNo);
		map.put("studentNo", studentNo);
		int result = cService.removeEnroll(map);
		if(result > 0 ) {
			return "redirect:/cart/enrollList.kh";
		} else {
			model.addAttribute("msg", "수강신청 취소 실패");
			return "common/errorPage";
		}
		
	} catch (Exception e) {
		model.addAttribute("msg",e.toString());
		return "common/errorPage";
	}
	}
	
	
	
	
}
