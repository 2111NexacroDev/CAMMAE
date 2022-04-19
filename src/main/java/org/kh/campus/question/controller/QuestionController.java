package org.kh.campus.question.controller;

import java.util.List;

import org.kh.campus.question.domain.Question;
import org.kh.campus.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class QuestionController {

	@Autowired
	private QuestionService qService;

	// 게시글 리스트조회
	@RequestMapping(value = "/question/list", method = RequestMethod.GET)
	public ModelAndView questionListView(ModelAndView mv) {

		List<Question> qList = qService.printAllQuestion();
		try {
			if (!qList.isEmpty()) {
				mv.addObject("qList", qList);
				mv.setViewName("question/questionList");
			} else {
				System.out.println("조회 실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 게시판 상세페이지 조회
	@RequestMapping(value = "/question/detail", method = RequestMethod.GET)
	public ModelAndView questionDetailView(ModelAndView mv, @RequestParam("questionNo") int questionNo) {
		try {
			Question question = qService.printOneQuestion(questionNo);
			if (question != null) {
				mv.addObject("question", question);
				mv.setViewName("/question/questionDetail");
			} else {
				System.out.println("상세조회실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 게시글 등록페이지
	@RequestMapping(value = "/question/registerView")
	public String questionWriteView(Model model) {

		return "/question/questionWriteForm";
	}

	// 게시글 등록
	@RequestMapping(value = "/question/register", method = RequestMethod.POST)
	public ModelAndView questionRegister(ModelAndView mv, @ModelAttribute Question question) {

		int result = qService.registerQuestion(question);

		if (result > 0) {
			mv.setViewName("redirect:/question/list");
		} else {
			System.out.println("등록 실패");
		}

		return mv;
	}

}
