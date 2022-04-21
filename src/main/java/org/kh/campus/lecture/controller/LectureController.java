package org.kh.campus.lecture.controller;

import java.util.List;

import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LectureController {
	@Autowired
	private LectureService lService;
	
	/* @RequestMapping(value="" ) */
	public String lectureListView(Model model){
		List<Lecture> lList = lService.printAllLecture();
		if(!lList.isEmpty()) {
			model.addAttribute("lList", lList);
			return "";
		}else {
			model.addAttribute("msg", "과목개설 실패");
			return "common/errorPage";
		}
	
		
	}
	
	@RequestMapping(value = "/lecture/writeView.kh", method = RequestMethod.GET)
	public String lectureWriteView() {
		return  "lecture/lectureWriteView";
		
	}
	@RequestMapping(value="/lecture/register.kh", method=RequestMethod.POST)
	public String lectureRegister(Model model, @ModelAttribute Lecture lecture) {
		int result = lService.registerLecture(lecture);
		if(result >0 ) {
			return "main.kh";
		}else {
			model.addAttribute("msg", "과목개설 실패");
			return "common/errorPage";
		}
	}
	
	/* @RequestMapping(value = "", method = RequestMethod.GET) */
	public String lectureModify(Model model, @RequestParam("lectureNo") int lectureNo) {
		int result = lService.modifyLecture(lectureNo);
		
		return "";
	}

	/* @RequestMapping(value = "", method = RequestMethod.GET) */
	public String lectureRemove(Model model, @RequestParam("lectureNo") int lectureNo) {
		int result = lService.removeLecture(lectureNo);
		
		return "";
	}

}
