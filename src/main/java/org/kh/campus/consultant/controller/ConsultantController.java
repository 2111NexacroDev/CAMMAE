package org.kh.campus.consultant.controller;

import java.util.List;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.consultant.domain.Pagination;
import org.kh.campus.consultant.service.ConsultantService;
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
	
	@RequestMapping(value="/consultant/list.kh", method=RequestMethod.GET)
	public String consultantListView(Model model, @RequestParam(value = "page", required = false) Integer page) {

		int currentPage = (page != null) ? page : 1;
		int totalCount = cService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<Consultant> cList = cService.printAllCons(pi);
		if(!cList.isEmpty()) {
			model.addAttribute("cList", cList);
			model.addAttribute("pi", pi);
			return "consultant/consultantListView";
		}else {
			model.addAttribute("msg", "상담 전체 조회 실패");
			return "common/errorPage";
		}
		
		
	}
	
	@RequestMapping(value="/consultant/writeView.kh", method=RequestMethod.GET)
	public String consultantWriteView() {
		return "consultant/consultantWriteForm";
		
	}

	@RequestMapping(value="/consultant/register.kh", method=RequestMethod.POST)
	public String consultantRegister(Model model, @ModelAttribute Consultant consultant) {
		int result = cService.insertCons(consultant);
		if(result >0) {
			return "redirect:/consultant/list.kh";
		}else {
			model.addAttribute("msg", "상담신청 등록 실패");
			return "common/errorPage";
		}
		
		
	}
	@RequestMapping(value="/consultant/replyAdd.kh", method=RequestMethod.GET)
	public String consultantAdminReplyWriteView(Model model, @ModelAttribute ConsultantReply consultantreply) {
		int result = cService.insertAdminConsReply(consultantreply);
		if(result >0) {
			return "redirect:/consultant/replyList.kh";
		}else {
			model.addAttribute("msg", "댓글 등록 실패");
			return "common/errorPage";
		}
		
	}
	@RequestMapping(value="/consultant/Detail.kh", method=RequestMethod.GET)
	public String consultantDetailView(Model model, @RequestParam("consultant_title")String consultant_title) {
		Consultant consultant = cService.printDetailCons(consultant_title);
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
	
	
	
}
