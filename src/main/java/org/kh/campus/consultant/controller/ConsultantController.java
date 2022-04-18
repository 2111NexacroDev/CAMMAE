package org.kh.campus.consultant.controller;

import java.util.List;

import org.kh.campus.common.PageInfo;
import org.kh.campus.common.Pagination;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.service.ConsultantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ConsultantController {
	@Autowired
	private ConsultantService cService;
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantListView(Model model, @RequestParam(value = "page", required = false) Integer page) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = cService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<Consultant> cList = cService.printAllCons(pi);
		return null;
		
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
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantAdminReplyWriteView(Model model, @ModelAttribute ConsultantReply consultantreply) {
		int result = cService.insertAdminConsReply(consultantreply);
		return null;
		
	}
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantDetailView(Model model, @RequestParam("consultant_title")String consultant_title) {
		Consultant consultant = cService.printDetailCons(consultant_title);
		return null;
	}
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantReplyView(Model model, @RequestParam(value = "page", required = false) Integer page) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = cService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<ConsultantReply> crList = cService.printByConReply(pi);
		return null;
	}
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantAdminListView(Model model, @RequestParam(value = "page", required = false) Integer page) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = cService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<Consultant>cList = cService.printAdminAllCons(pi);
		return null;
	}
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantAdminDetailView(Model model,  @RequestParam("consultant_title")String consultant_title) {
		
		Consultant consultant = cService.printAdminDetailCons(consultant_title);
		return null;
		
	}
	
	/* @RequestMapping(value="", method=RequestMethod.GET) */
	public String consultantAdminWriteReply(Model model, @ModelAttribute ConsultantReply consultantreply) {
		int result = cService.insertAdminConsReply(consultantreply);
		return null;
	}
	
	
}
