package org.kh.campus.question.controller;

import org.kh.campus.question.domain.Question;
import org.kh.campus.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class QuestionController {
	
	@Autowired
	private QuestionService qService;

	//게시글 등록페이지
	@RequestMapping(value="question/registerView")
	public String questionWriteView(Model model) {
		
		return "/question/questionWriteForm";
	}
	
	
	//게시글 등록
	@RequestMapping(value="/question/register", method = RequestMethod.POST)
	public ModelAndView questionRegister(ModelAndView mv, @ModelAttribute Question question) {
		
		int result = qService.registerQuestion(question);
		
		if(result >0 ) {
			mv.setViewName("redirect:/question/registerView");			
		} else {
			System.out.println("등록 실패");
		}
		
		return mv;
	}
	

}
