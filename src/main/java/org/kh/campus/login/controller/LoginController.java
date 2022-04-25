package org.kh.campus.login.controller;

import javax.servlet.http.HttpSession;

import org.kh.campus.login.service.LoginService;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;

@Controller
public class LoginController {

	@Autowired
	private LoginService lService;
	
	// 로그인 페이지
	@RequestMapping(value="/login/loginPage.kh", method=RequestMethod.GET)
	public ModelAndView loginPage(ModelAndView mv) {
		mv.setViewName("login/login");
		
		return mv;
	}
	
	// 타입에 따라 로그인
	@RequestMapping(value="/login/login.kh", method=RequestMethod.POST)
	public ModelAndView login(ModelAndView mv
			, HttpSession session
			, @RequestParam("user-id") int id
			, @RequestParam("user-pwd") String pw
			, @RequestParam(value = "login_type", required = false) String type) {
		try {
			// 학생
			if(type.equals("student")) {
				Student student = new Student();
				student.setStudentNo(id);
				student.setStudentPassword(pw);
				int stdNo = 0;
				stdNo = lService.loginStudent(student);
				
				
				session.setAttribute("login", "std");
				session.setAttribute("id", stdNo);
				// 교수
			} else if(type.equals("professor")) {
				Professor professor = new Professor();
				professor.setProfessorNo(id);
				professor.setProfessorPassword(pw);
				int prfNo = 0;
				prfNo = lService.loginProfessor(professor);
				
				session.setAttribute("login", "prf");
				session.setAttribute("id", prfNo);
				// 관리자
			} else {
				Manager manager = new Manager();
				manager.setManagerNo(id);
				manager.setManagerPassword(pw);
				int magNo = 0;
				magNo = lService.loginManager(manager);
				
				session.setAttribute("login", "mag");
				session.setAttribute("id", magNo);
			}
			
			mv.setViewName("redirect:/main.kh");
		} catch (Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		return mv;
	}
	
	// 로그아웃
	@RequestMapping(value="/login/logout.kh", method=RequestMethod.GET)
	public ModelAndView logout(ModelAndView mv
			,HttpSession session) {
		if(session != null) {
			session.invalidate();
			mv.setViewName("redirect:/main.kh");
		}
		
		return mv;
	}
	
	// 비밀번호 찾기
	@ResponseBody
	@RequestMapping(value="/login/findPwd.kh", method=RequestMethod.POST)
	public String findPwd(@RequestParam("type") String type
			, @RequestParam("userNo") String userNo
			, @RequestParam("userName") String userName
			, @RequestParam("userPhone") String userPhone) {
		String email = "";
		if(type.contentEquals("student")) {
			Student std = new Student();
			std.setStudentNo(Integer.parseInt(userNo));
			std.setStudentName(userName);
			std.setStudentPhonenumber(userPhone);
			
			email = lService.findPwdStd(std);
			
			
		} else if(type.contentEquals("professor")) {
			System.out.println("교수 입니다.");
		} else {
			System.out.println("관리자 입니다.");
		}
		
		return email;
	}
}
