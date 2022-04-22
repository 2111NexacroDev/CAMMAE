package org.kh.campus.recruitment.controller;

import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.service.RecruitmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RecruitmentController {

	
	  @Autowired 
	  private RecruitmentService rService;
	 
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
}
