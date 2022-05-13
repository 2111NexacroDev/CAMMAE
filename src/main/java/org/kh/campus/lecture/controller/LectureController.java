package org.kh.campus.lecture.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.kh.campus.board.domain.University;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.lecture.service.LectureService;
import org.kh.campus.notice.domain.Notice;
import org.kh.campus.professor.domain.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;

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
	
	//강의 수 정 실 행
	@RequestMapping(value="/lecture/update.kh", method=RequestMethod.POST)
	public ModelAndView lectureUpdate(ModelAndView mv
			, @ModelAttribute Lecture lecture
			, HttpServletRequest request) {
		try {
			int result = lService.modifyLecture(lecture);
			if(result > 0) {
				mv.setViewName("lecture/lectureDetailView");
			} else {
				mv.addObject("msg", "수강개설 수정 실패!");
				mv.setViewName("common/errorPage");
			}
		}catch (Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		return mv;
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
	
	// 수강개설 할때 교수명 db에서 불러오는 기능
	@ResponseBody
	@RequestMapping(value = "/lecture/selectLecture.kh", method =RequestMethod.GET, produces = "application/json;charset=utf-8") 
	public String lectureProList(Model model) {
		List<Professor> lList = lService.printAllProName();
	  
	  if (!lList.isEmpty()) { 
		 Gson gson = new Gson();
		 return gson.toJson(lList);
	  }
	  
	  return null;
	  }
	
	
	// 수강개설할때 학과명 db에서 불러오는 기능
	@ResponseBody
	@RequestMapping(value = "/lecture/selectDepartment.kh", method=RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String lecturedepList(Model model) {
		List<University> lList = lService.printAllDep();
		
		if (!lList.isEmpty()) { 
			 Gson gson = new Gson();
			 return gson.toJson(lList);
		  }
		
		return null;
	}
	
	

}
