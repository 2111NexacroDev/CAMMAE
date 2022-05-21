package org.kh.campus.login.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.kh.campus.login.service.LoginService;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

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
			, HttpSession session
			, @RequestParam(value = "user-id", required = false) int id
			, @RequestParam(value = "user-pwd", required = false) String pw
			, @RequestParam(value = "login_type", required = false) String type) {
	
		try {	// 학생
			if(type.equals("student")) {
				Student student = new Student();
				student.setStudentNo(id);
				student.setStudentPassword(pw);
				Student loginUser = lService.loginStudent(student);
				if(loginUser != null) {
					session.setAttribute("loginUser", loginUser);
					mv.setViewName("redirect:/main.kh");
				}
				// 교수
			} else if(type.equals("professor")) {
				Professor professor = new Professor();
				professor.setProfessorNo(id);
				professor.setProfessorPassword(pw);
				
				Professor loginProfessor = lService.loginProfessor(professor);
				if(loginProfessor != null) {
					session.setAttribute("loginProfessor", loginProfessor);
					mv.setViewName("redirect:/main.kh");
				}
				// 관리자
			} else if(type.equals("manager")) {
				Manager manager = new Manager();
				manager.setManagerNo(id);
				manager.setManagerPassword(pw);
				
				Manager loginManager = lService.loginManager(manager);
				if(loginManager != null) {
					session.setAttribute("loginManager", loginManager);
					mv.setViewName("redirect:/main.kh");
				}
			}
			mv.addObject("msg", "로그인 정보가 일치하지 않습니다.");
			
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
	@PostMapping("/login/findPwd.kh")
	public String findPwd(@RequestParam("type") String type
			, @RequestParam("userNo") String id
			, @RequestParam("userName") String name
			, @RequestParam("userPhone") String phone) throws Exception {
		String email = "";
		
		// 비밀번호 찾기를 위한 정보 map
		HashMap<String, String> userInfo = new HashMap<String, String>();
		userInfo.put("type", type);
		userInfo.put("id", id);
		userInfo.put("name", name);
		userInfo.put("phone", phone);
		
		email = lService.findPwd(userInfo);
	
		String pw = "";
		for (int i = 0; i < 12; i++) {
			pw += (char) ((Math.random() * 26) + 97);
		}
		
		userInfo.put("pw", pw);
		userInfo.put("email", email);
		
		if(email != null) {
			lService.sendEmail(userInfo);
			lService.pwdChange(type, Integer.parseInt(id), pw);
		}
		
		return email;
	}
	
	// 비밀번호 일치여부 확인
	@PostMapping("/login/pwdSame.kh")
	public NexacroResult pwdSame(
			@ParamVariable(name="in_pwd") String pwd
			,HttpSession session) {
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		String type = "";
		int id =0;
		
		// 로그인 연동시 타입과 아이디 같이 넘겨주기
		if(session.getAttribute("loginUser")!= null) {
			type = "std";
			id = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
		} else if (session.getAttribute("loginProfessor")!= null) {
			type = "prf";
			id = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		} else {
			type = "mag";
			id = ((Manager) (session.getAttribute("loginManager"))).getManagerNo();
		}
		
		int result1 = lService.pwdSame(type ,id, pwd);
		
		result.addVariable("ErrorCode", result1);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@PostMapping("/login/pwdChange.kh")
	public NexacroResult pwdChange(
			@ParamVariable(name="in_pwd") String pwd, HttpSession session) {
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		// 로그인 연동시 타입과 아이디 같이 넘겨주기
		String type = "";
		int id =0;
		
		// 로그인 연동시 타입과 아이디 같이 넘겨주기
		if(session.getAttribute("loginUser")!= null) {
			type = "std";
			id = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
		} else if (session.getAttribute("loginProfessor")!= null) {
			type = "prf";
			id = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		} else {
			type = "mag";
			id = ((Manager) (session.getAttribute("loginManager"))).getManagerNo();
		}
		
		int result1 = lService.pwdChange(type ,id, pwd);
		
		result.addVariable("ErrorCode", result1);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	// 넥사에 로그인 타입 보내주기
	@GetMapping("/login/nexaInfo.kh")
	public NexacroResult nexaInfo(HttpSession session) {
		String  strErrorMsg = "START";
		int ErrorCode = 0;
		NexacroResult result = new NexacroResult();
		String type = "";
		
		// 로그인 되있으면 타입 주기
		if(session.getAttribute("loginUser")!=null) {
			type= "std";
			ErrorCode = 1;
		} else if(session.getAttribute("loginProfessor")!=null) {
			type= "prf";
			ErrorCode = 1;
		} else {
			type = "mag";
			ErrorCode = 1;
		}
		
		result.addVariable("type", type);
		result.addVariable("ErrorCode", ErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
}
