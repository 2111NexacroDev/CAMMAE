package org.kh.campus.login.controller;

import javax.servlet.http.HttpServletRequest;
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
import org.springframework.web.servlet.ModelAndView;

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
			, HttpServletRequest request
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
				
				if(stdNo != 0) {
					HttpSession session = request.getSession();
					session.setAttribute("login", "std");
					session.setAttribute("id", stdNo);
				}
				// 교수
			} else if(type.equals("professor")) {
				Professor professor = new Professor();
				professor.setProfessorNo(id);
				professor.setProfessorPassword(pw);
				int prfNo = 0;
				prfNo = lService.loginProfessor(professor);
				
				if(prfNo != 0) {
					HttpSession session = request.getSession();
					session.setAttribute("login", "prf");
					session.setAttribute("id", prfNo);
				}
				// 관리자
			} else {
				Manager manager = new Manager();
				manager.setManagerNo(id);
				manager.setManagerPassword(pw);
				int magNo = 0;
				magNo = lService.loginManager(manager);
				
				if(magNo != 0) {
					HttpSession session = request.getSession();
					session.setAttribute("login", "mag");
					session.setAttribute("id", magNo);
				}
			}
			
			mv.setViewName("login/login");
		} catch (Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		return mv;
	}
}
