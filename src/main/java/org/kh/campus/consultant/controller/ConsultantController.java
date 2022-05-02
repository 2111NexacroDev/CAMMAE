package org.kh.campus.consultant.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.consultant.domain.Pagination;
import org.kh.campus.consultant.service.ConsultantService;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.manager.service.ManagerService;
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

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class ConsultantController {
	@Autowired
	private ConsultantService cService;
	@Autowired
	private ManagerService mService;

	
	@RequestMapping(value="/consultant/list.kh", method=RequestMethod.GET)
	public String consultantListView(Model model, HttpServletRequest request) {
		try {
		HttpSession session = request.getSession();
		int cons_student_no = ((Student)(session.getAttribute("loginUser"))).getStudentNo();
		List<Consultant> cList = cService.printAllCons(cons_student_no);
		
		if(!cList.isEmpty()) {
			model.addAttribute("cList", cList);
			return "consultant/consultantListView";
		}else {
			model.addAttribute("msg", "상담 전체 조회 실패");
			return "common/errorPage";
			}
		
		}catch(Exception e) {
			return "login/login";
		}
		
	}
	
	@RequestMapping(value="/consultant/writeView.kh", method=RequestMethod.GET)
	public String consultantWriteView() {
		return "consultant/consultantWriteForm";
		
	}

	@RequestMapping(value="/consultant/register.kh", method=RequestMethod.POST)
	public String consultantRegister(Model model, @ModelAttribute Consultant consultant,
			HttpServletRequest request) {
		
		int result = cService.insertCons(consultant);
	
		if(result >0) {
			HttpSession session = request.getSession();
			int studentNo = ((Student)(session.getAttribute("loginUser"))).getStudentNo();
			
		
	
			Consultant studentOne = cService.printOneByStNo(studentNo);
			if(studentOne != null) {
			model.addAttribute("consultant", studentOne);
			return "redirect:/consultant/list.kh";	
			}else {
				model.addAttribute("msg", "등록실패");
				return "common/errorPage";
			}
		  }else {
			model.addAttribute("msg", "상담신청 등록 실패");
			return "common/errorPage";
	
		}
		
	}
	
	@RequestMapping(value="/consultant/Detail.kh", method=RequestMethod.GET)
	public String consultantDetailView(Model model, @RequestParam("cons_student_no")int cons_no) {
		Consultant consultant = cService.printDetailCons(cons_no);
		if(consultant != null) {
			model.addAttribute("consultant", consultant);
			return "consultant/consultantDetailView";		
		}else {
			model.addAttribute("msg", "관리자 상담 전체 조회 실패");
			return "common/errorPage";
		}
	}
	
	@RequestMapping(value="/consultant/adlist.kh", method=RequestMethod.GET)
	public String consultantAdminListView(Model model, @RequestParam(value = "page", required = false) Integer page) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = cService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<Consultant>cList = cService.printAdminAllCons(pi);
		if(!cList.isEmpty()) {
			model.addAttribute("cList", cList);
			model.addAttribute("pi", pi);
			return "consultant/consultantAdminListView";
		}else {
			model.addAttribute("msg", "상담 전체 조회 실패");
			return "common/errorPage";
		}
	}
	
	@RequestMapping(value="/consultant/adDetail.kh", method=RequestMethod.GET)
	public String consultantAdminDetailView(Model model,  @RequestParam("consultant_no")Integer consultant_no) {	
		Consultant consultant = cService.printAdminDetailCons(consultant_no);
		if(consultant != null) {
			model.addAttribute("consultant", consultant);
			return "consultant/consultantAdminDetailView";		
		}else {
			model.addAttribute("msg", "관리자 상담 디테일 조회 실패");
			return "common/errorPage";
		}
		
		
	}
	
	@ResponseBody
	@RequestMapping(value="/consultant/replyAdd.kh", method=RequestMethod.POST) 
	public String consultantAdminWriteReply(Model model, @ModelAttribute ConsultantReply consultantreply) {
		int result = cService.insertAdminConsReply(consultantreply);
		if(result >0) {
			return "success";
		}else {
			return "fail";
		}
	}
	
	@ResponseBody
	@RequestMapping(value="/consultant/replyList.kh", method=RequestMethod.GET,
		produces="application/json;charset=utf-8")
	public String consultantAdminReplyList(@RequestParam("cons_no")int cons_no) {
		List<ConsultantReply>crList = cService.printAllAdminReply(cons_no);
		if(!crList.isEmpty()) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(crList);
		}
		return null;
	}
	
	@ResponseBody
	@RequestMapping(value="/consultant/statusChange.kh" , method=RequestMethod.POST)
	 	public String consultantStatusUpdate(@RequestParam("cons_no") int cons_no, Model model) {
		int result = cService.modifyStatus(cons_no);
		if(result >0) {
			return "success";
		}else {
			
			return "fail";
		}
	}
	
	// 관리자  정보 가져오기
		@ResponseBody
		@RequestMapping(value = "/consultant/JoinViewCounselor.kh", method=RequestMethod.GET, produces="application/json;charset=utf-8")
		public String consJoinViewCounselor(Model model) throws UnsupportedEncodingException {
		
			List<Manager> mList = mService.printAllManager();
			if(!mList.isEmpty()) {
				
				
				return new Gson().toJson(mList);
			}
			
			return null;
		}
}
