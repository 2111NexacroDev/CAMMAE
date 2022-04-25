package org.kh.campus.lecture.controller;

import java.util.List;

import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.kh.campus.notice.domain.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LectureController {
	@Autowired
	private LectureService lService;
	
	// 수강개설 조회
	@RequestMapping(value="/lecture/list.kh", method=RequestMethod.GET )
	public String lectureListView(Model model){
		List<Lecture> lList = lService.printAllLecture();
		if(!lList.isEmpty()) {
			model.addAttribute("lList", lList);
			return "lecture/lectureListView";
		}else {
			model.addAttribute("msg", "과목개설 실패");
			return "common/errorPage";
		}
	
		
	}
	// 수강개설 페이지
	@RequestMapping(value = "/lecture/writeView.kh", method = RequestMethod.GET)
	public String lectureWriteView() {
		return  "lecture/lectureWriteView";
	}
	
	//수강 개설 등록 실행
	@RequestMapping(value="/lecture/register.kh", method=RequestMethod.POST)
	public String lectureRegister(Model model, @ModelAttribute Lecture lecture) {
		int result = lService.registerLecture(lecture);
		if(result >0 ) {
			return "redirect:/lecture/list.kh";
		}else {
			model.addAttribute("msg", "과목개설 실패");
			return "common/errorPage";
		}
	}
	// 강의 수정 페이지
	@RequestMapping(value = "/lecture/modifyView.kh", method = RequestMethod.GET)
	public String lectureModify(Model model, 
			@RequestParam("lectureNo") int lectureNo) {
		Lecture lecture = lService.printOneLecture(lectureNo);
		if(lecture != null ) {
			model.addAttribute("lecture", lecture );
			return "lecture/lectureUpdateView";
		}else {
			model.addAttribute("msg", "과목 수정 실패");
			return "common/errorPage";
		}
	}
	
	//강의 수 정 실 행(수정예정)
	@RequestMapping(value = "/lecture/update.kh", method=RequestMethod.POST)
	public String lectureUpdate(Model model,
			@ModelAttribute  Lecture lecture) {
		try {
			lecture.setLectureNo(lecture.getLectureNo());
			lecture.setLectureDepartment(lecture.getLectureDepartment());
			lecture.setLectureName(lecture.getLectureName());
			lecture.setProfessorName(lecture.getProfessorName());
			lecture.setLectureDivision(lecture.getLectureDivision());
			lecture.setLectureRoom(lecture.getLectureRoom());
			lecture.setLecturePeople(lecture.getLecturePeople());
			lecture.setLectureTime(lecture.getLectureTime());
			
			model.addAttribute("msg", "강의 수정 완료");
			return "redirect:/lecture/list.kh";
		} catch (Exception e) {
			e.printStackTrace();
			return "redirect:/main.kh";
		}
	}
	
	
	// 강의 상세 조회
	@RequestMapping(value="/lecture/Detail.kh", method = RequestMethod.GET)
	public String lectureDetail(Model model, @RequestParam("lectureNo")int lectureNo) {
		Lecture lecture = lService.printOneLecture(lectureNo);
		if(lecture != null) {
			model.addAttribute("lecture", lecture);
			return "lecture/lectureDetailView";
		}else {
			model.addAttribute("msg", "디테일 조회 실패");
			return "common/errorPage";
		}
	}
	
	// 강의 삭제
	@RequestMapping(value = "/lecture/remove.kh", method = RequestMethod.GET)
	public String lectureRemove(Model model, @RequestParam("lectureNo") int lectureNo) {
	try {
		int result = lService.removeLecture(lectureNo);
		if(result > 0 ) {
			return "redirect:/lecture/list.kh";
		} else {
			model.addAttribute("msg", "과목 삭제 실패");
			return "common/errorPage";
		}
		
	} catch (Exception e) {
		model.addAttribute("msg",e.toString());
		return "common/errorPage";
	}
	}
	
	
	
	

}
