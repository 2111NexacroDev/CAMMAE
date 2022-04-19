package org.kh.campus.question.controller;

import org.kh.campus.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class QuestionController {
	

	//게시글 등록페이지
	@RequestMapping(value="question/registerView")
	public String questionWriteView(Model model) {
		
		return "/question/questionWriteForm";
	}

}
