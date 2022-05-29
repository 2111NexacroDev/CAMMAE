package org.kh.campus.cart.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.kh.campus.cart.domain.Cart;
import org.kh.campus.cart.service.CartService;
import org.kh.campus.grade.domain.Grade;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
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
	
	@Autowired
	private StudentService stdService;

	// 되돌리다가 원본 훼손 방지 라인

	// 예비수강신청 목록, 등록페이지
	@RequestMapping(value = "/cart/preCartListView.kh", method = RequestMethod.GET)
	public ModelAndView cartListView(ModelAndView mv , HttpSession session) {
		List<Lecture> lList = cService.printAllCart();
		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
		student.getStudentNo();

		if (session.getAttribute("loginUser") == null) {
			mv.setViewName("/login/login");
		}
		mv.addObject("studentNo", student.getStudentNo());
		try {
			if (!lList.isEmpty()) {
				mv.addObject("lList", lList);
				mv.setViewName("cart/preCartListView");
				mv.addObject("menu", "cart");

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
	public ModelAndView cartRegister(ModelAndView mv, @RequestParam("lectureNo") int lectureNo
			, HttpSession session) {
		
		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
		int studentNo = student.getStudentNo();

		if (session.getAttribute("loginUser") == null) {
			mv.setViewName("/login/login");
		}
		mv.addObject("studentNo", student.getStudentNo());
		try {
			HashMap<String, Integer> map = new HashMap<String, Integer>();
			map.put("lectureNo", lectureNo);
			map.put("studentNo", studentNo);
			int result = cService.registerCart(map);
			if (result > 0) {
//				Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
//				int studentNo1 = student.getStudentNo();
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
	public ModelAndView myCartList(ModelAndView mv, HttpSession session) {
		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
		int studentNo = student.getStudentNo();

		if (session.getAttribute("loginUser") == null) {
			mv.setViewName("/login/login");
		}
		mv.addObject("studentNo", student.getStudentNo());
		List<Cart> cList = cService.printMyCart(studentNo);

		
		// 수강 기간 값 가져오기
		String lectureStart = ((Cart) cList.get(0)).getLectureStart();
		String lectureEnd = ((Cart) cList.get(0)).getLectureEnd();
		

		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
		Date today = new Date();
		String sToday = dateFormat.format(today);

		int result1 = sToday.compareTo(lectureStart); // sToday가 start보다 큼 (양수)
		int result2 = sToday.compareTo(lectureEnd); // sToday가 end보다 작음 (음수)



		String aFlag = "N";
		if (result1 >= 1 && result2 <= -1) {
			aFlag = "Y";
		}

		try {
			if (!cList.isEmpty()) {
				mv.addObject("menu", "cartlist");
				mv.addObject("cList", cList);
				mv.addObject("aFlag", aFlag);
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
		if (result > 0) {
			return "redirect:/cart/myCartList.kh";
		} else {
			model.addAttribute("msg", "찜 삭제 실패");
			return "common/errorPage";
		}
	}

	// 수강신청 신청목록 페이지 보여주는곳
	@RequestMapping(value = "/cart/enrollRegister.kh", method = RequestMethod.GET)
	public ModelAndView enrollListView(ModelAndView mv,
			HttpSession session, 
			@RequestParam(value = "lecturedep", required = false) String lectureDepartment) {
		
		try {
			List<Lecture> lList = cService.printAllenroll(lectureDepartment);
			if (!lList.isEmpty()) {
				mv.addObject("menu", "enroll");
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

	// 수강신청 신청목록 페이지 리스트 출력기능
	@ResponseBody
	@RequestMapping(value = "/cart/enrollRegister2.kh", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String enrollListView2(Model model, @RequestParam(value = "lecturedep", required = false) String lectureDepartment,HttpSession session) {
		try {
			if (lectureDepartment.contentEquals("1")) {
				lectureDepartment = "컴퓨터공학과";
			} else if (lectureDepartment.contentEquals("2")) {
				lectureDepartment = "전자전기공학과";
			} else if (lectureDepartment.contentEquals("3")) {
				lectureDepartment = "산업디자인학과";
			} else if (lectureDepartment.contentEquals("4")) {
				lectureDepartment = "중국어학과";
			} else if (lectureDepartment.contentEquals("5")) {
				lectureDepartment = "유비쿼터스학과";
			} else if (lectureDepartment.contentEquals("6")) {
				lectureDepartment = "국어국문학과";
			} else {
				lectureDepartment = "전체";
			}
		
			List<Lecture> lList = cService.printAllenroll2(lectureDepartment);
			if (!lList.isEmpty()) {
				Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
				System.out.println(lList.toString() + "test1233");
				return gson.toJson(lList);

			} else {
				System.out.println("실패했습니다.");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return null;
	}

	// 예비수강신청 목록에서 수강신청 목록으로 넣어주는 기능
	@RequestMapping(value = "/cart/cartEnroll.kh", method = RequestMethod.GET)
	public ModelAndView cartListInsert(ModelAndView mv, @RequestParam("lectureNo") int lectureNo, HttpSession session) {
		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
		int studentNo = student.getStudentNo();

		if (session.getAttribute("loginUser") == null) {
			mv.setViewName("/login/login");
		}
		mv.addObject("studentNo", student.getStudentNo());
		try {
			HashMap<String, Integer> map = new HashMap<String, Integer>();
			map.put("lectureNo", lectureNo);
			map.put("studentNo", studentNo);
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
	public ModelAndView enrollListInsert(ModelAndView mv, @RequestParam("lectureNo") int lectureNo
			, HttpSession session) {
		int studentNo = (((Student) (session.getAttribute("loginUser"))).getStudentNo());
	

		if (session.getAttribute("loginUser") == null) {
			mv.setViewName("/login/login");
		}
		mv.addObject("studentNo", studentNo);
		try {
			Lecture lecture = lService.printOneLecture(lectureNo );
			lecture.setStudentNo(studentNo);
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

	// 수강 내역 목록 출력
	@RequestMapping(value = "/cart/enrollList.kh", method = RequestMethod.GET)
	public ModelAndView enrollMyListView(ModelAndView mv, HttpSession session) {
		int studentNo = (((Student) (session.getAttribute("loginUser"))).getStudentNo());

		if (session.getAttribute("loginUser") == null) {
			mv.setViewName("/login/login");
		}
		mv.addObject("studentNo",studentNo);
		
		List<Lecture> lList = cService.printMyEnroll(studentNo);
		
		System.out.println("lList Test : " + lList);
		String lectureStart = ((Lecture) lList.get(0)).getLectureStart();
		String lectureEnd = ((Lecture) lList.get(0)).getLectureEnd();
		System.out.println("lectureStart test : " + lectureStart);
		System.out.println("lectureEnd test : " + lectureEnd);

		
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
		Date today = new Date();
		System.out.println("today test : " + today);
		String sToday = dateFormat.format(today);
		System.out.println("sToday test : " + sToday);
		
		int result1 = sToday.compareTo(lectureStart); // sToday가 start보다 큼 (양수)
		int result2 = sToday.compareTo(lectureEnd); // sToday가 end보다 작음 (음수)

		System.out.println("result1 test : " + result1);
		System.out.println("result2 test2 : " + result2);
		
		String aFlag = "N";
		if (result1 >= 1 && result2 <= -1) {
			aFlag = "Y";
		}
		
		try {
			
			if (!lList.isEmpty()) {
				mv.addObject("menu", "enrolllist");
				mv.addObject("lList", lList);
				mv.addObject("aFlag", aFlag);
				mv.setViewName("cart/enrollList");
				System.out.println(lList.toString());

//				long count = cService.countByEnrollPeole(lecture);
//				System.out.println(count);

			} else {
				mv.setViewName("common/errorPage");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 수강신청 내역 내 삭제(신청취소)
	@RequestMapping(value = "/cart/enrollRemove.kh", method = RequestMethod.GET)
	public String lectureRemove(Model model, @RequestParam("lectureNo") int lectureNo) {
		try {
			int studentNo = 0;
			HashMap<String, Integer> map = new HashMap<String, Integer>();
			map.put("lectureNo", lectureNo);
			map.put("studentNo", studentNo);
			int result = cService.removeEnroll(map);
			if (result > 0) {
				return "redirect:/cart/enrollList.kh";
			} else {
				model.addAttribute("msg", "수강신청 취소 실패");
				return "common/errorPage";
			}

		} catch (Exception e) {
			model.addAttribute("msg", e.toString());
			return "common/errorPage";
		}
	}

}
