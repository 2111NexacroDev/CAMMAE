package org.kh.campus.recruitment.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.kh.campus.recruitment.domain.PageInfo;
import org.kh.campus.recruitment.domain.Pagination;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.domain.RecruitmentSearch;
import org.kh.campus.recruitment.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RecruitmentController {

	
	  @Autowired 
	  private RecruitmentService rService;
	
	//채용공고 목록 조회
	@RequestMapping(value="/recruitment/list.kh", method=RequestMethod.GET)
	public ModelAndView recruitmentListView(ModelAndView mv, @RequestParam(value = "page", required = false)Integer page) {
		try {
			int currentPage = (page != null) ? page : 1;
			int totalCount = rService.getListCount();
			PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
			List<Recruitment> rList = rService.printAllRecruitment(pi);
			if(!rList.isEmpty()) {
				mv.addObject("rList", rList);
				mv.addObject("pi", pi);
				mv.addObject("menu", "recruitment");
				mv.setViewName("recruitment/recruitmentList");
			}else {
				mv.addObject("msg","공지사항 조회 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.addObject("msg",e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;
	}
	
	//채용공고 상세 조회
	@RequestMapping(value="/recruitment/detail.kh", method=RequestMethod.GET)
	public ModelAndView recruitmentOneView(ModelAndView mv, @RequestParam("recruitmentNo")int recruitmentNo	) {
		try {
			Recruitment recruitment = rService.printOneRecruitment(recruitmentNo);
			if(recruitment != null) {
				rService.recruitmentCountUpdate(recruitment.getRecruitmentNo());
				
				mv.addObject("recruitment",recruitment);
				mv.setViewName("/recruitment/recruitmentDetail");
			}else {
				System.out.println("상세조회실패");
			}
		}catch(Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	
	//채용공고 검색
	@RequestMapping(value="/recruitment/search", method=RequestMethod.GET)
	public ModelAndView RecruitmentSearchList(ModelAndView mv, @ModelAttribute RecruitmentSearch recruitmentSearch) {
		try {
			List<Recruitment> searchList = rService.printSearchRecruitment(recruitmentSearch);
			if(!searchList.isEmpty()) {
				mv.addObject("rList", searchList);
				mv.setViewName("recruitment/recruitmentList");
			}
		}catch(Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	 
	//채용공고 등록 화면
	@RequestMapping(value="/recruitment/writeView.kh")
	public String recruitmentWriteView() {
		return "/recruitment/recruitmentWriteForm";
	}
	
	//채용공고 등록 실행
	@RequestMapping(value="/recruitment/register.kh", method=RequestMethod.POST)
	public ModelAndView recruitmentRegister(ModelAndView mv
			,@ModelAttribute Recruitment recruitment) {
		try {
			int result = rService.registerRecruitment(recruitment);
			if(result > 0) {
				mv.setViewName("redirect:/recruitment/list.kh");
			}else {
				mv.addObject("msg", "채용공고 등록 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.setViewName("common/errorPage");
			mv.addObject("msg", e.toString());
		}
		return mv;
	}
	
	//채용공고 수정
	@RequestMapping(value="/recruitment/modifyView.kh", method=RequestMethod.GET)
	public String recruitmentModifyView(Model model
			, @RequestParam("recruitmentNo")int recruitmentNo) {
		try {
			Recruitment recruitment = rService.printOneRecruitment(recruitmentNo);
			if(recruitment != null) {
				model.addAttribute("recruitment", recruitment);
				return "recruitment/recruitmentUpdateView";
			}else {
				model.addAttribute("msg","No Data");
				return "common/errorPage";
			}
		}catch(Exception e) {
			return null;
		}
	}
	
	//채용공고 수정 실행
	@RequestMapping(value="/recruitment/update.kh", method=RequestMethod.POST)
	public ModelAndView recruitmentUpdate(
			ModelAndView mv
			, @ModelAttribute Recruitment recruitment
			, HttpServletRequest request) {
		try {
			int result = rService.modifyRecruitment(recruitment);
			if(result > 0) {
				mv.setViewName("recruitment/recruitmentDetail");
			}else {
				mv.addObject("msg","채용공고 수정 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;
	}
	
	
	
	//채용공고 삭제
	@RequestMapping(value="/recruitment/delete.kh", method=RequestMethod.GET)
	public String recruitmentDelete(
			Model model
			, @RequestParam("recruitmentNo")int recruitmentNo) {
		try {
			int result = rService.removeRecruitment(recruitmentNo);
			if(result > 0) {
				return "redirect:/recruitment/list.kh";
			}else {
				model.addAttribute("msg", "채용공고 삭제 실패");
				return "common/errorPage";
			}
		}catch(Exception e) {
			model.addAttribute("msg", e.toString());
			return "common/errorPage";
		}
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
