package org.kh.campus.question.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.question.domain.PageInfo;
import org.kh.campus.question.domain.Pagination;
import org.kh.campus.question.domain.Question;
import org.kh.campus.question.domain.QuestionReply;
import org.kh.campus.question.service.QuestionService;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class QuestionController {

	@Autowired
	private QuestionService qService;

	// 게시글 리스트조회
	@RequestMapping(value = "/question/list", method = RequestMethod.GET)
	public ModelAndView questionListView(ModelAndView mv, @RequestParam(value = "page", required = false) Integer page,
			@ModelAttribute PageInfo pageInfo) {

		int currentPage = (page != null) ? page : 1;

		int totalCount = qService.getListCount(pageInfo);

		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);

		mv.addObject("pi", pi);
		pi.setSearchCondition(pageInfo.getSearchCondition());
		pi.setSearchValue(pageInfo.getSearchValue());

		List<Question> qList = qService.printAllQuestion(pi);
		try {
			if (!qList.isEmpty()) {
				mv.addObject("qList", qList);
				mv.addObject("pageInfo", pageInfo);
				mv.addObject("menu", "question");
				mv.addObject("currentPage", currentPage);
				mv.setViewName("question/questionList");
			} else {
				mv.addObject("menu", "question");
				mv.setViewName("question/questionList");
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
				// 조회수 증가
				qService.questionCountUpdate(question.getQuestionNo());

				mv.addObject("question", question);
				mv.setViewName("/question/questionDetail");
				mv.addObject("menu", "question");

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
	public String questionWriteView(Model model, HttpSession session) {

		List<Lecture> lList = qService.printAllPro();
		Student student = (Student) session.getAttribute("loginUser");

		if (session.getAttribute("loginUser") == null) {
			return "/login/login";
		}

		if (!lList.isEmpty()) {
			model.addAttribute("questionId", student.getStudentNo());
			model.addAttribute("questionWriter", student.getStudentName());
			model.addAttribute("lList", lList);
			model.addAttribute("menu", "question");
		}
		return "question/questionWriteForm";
	}

	// 게시판 셀렉트박스
	@ResponseBody
	@RequestMapping(value = "/question/selectLeture", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String questionProList(@RequestParam("professorName") String professorName) {
		List<Lecture> lList = qService.printAllLec(professorName);

		if (!lList.isEmpty()) {
			Gson gson = new Gson();
			return gson.toJson(lList);
		}

		return null;
	}

	// 게시글 등록
	@RequestMapping(value = "/question/register", method = RequestMethod.POST)
	public ModelAndView questionRegister(ModelAndView mv, @ModelAttribute Question question,
			@RequestParam(value = "uploadFile", required = false) MultipartFile uploadFile,
			HttpServletRequest request) {
		try {

			if (uploadFile != null && !uploadFile.getOriginalFilename().equals("")) {
				HashMap<String, String> fileMap = saveFile(uploadFile, request);
				String filePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if (filePath != null) {
					question.setQuestionFileName(uploadFile.getOriginalFilename());
					question.setQuestionFileReName(fileRename);
					question.setQuestionFilePath(filePath);
				}
			}

			int result = qService.registerQuestion(question);
			if (result > 0) {
				mv.setViewName("redirect:/question/list");
			} else {
				System.out.println("등록 실패");

			}
		} catch (Exception e) {
			System.out.println(e.toString());

		}
		return mv;
	}

	// 파일저장
	public HashMap<String, String> saveFile(MultipartFile file, HttpServletRequest request) {
		String filePath = "";
		HashMap<String, String> fileMap = new HashMap<String, String>();
		// 파일 경로 설정
		String root = request.getSession().getServletContext().getRealPath("resources");
		// 저장 폴더 선택
		String savePath = root + "\\questionUploadFiles";
		// 없으면 생성
		File folder = new File(savePath);
		if (!folder.exists())
			folder.mkdir();

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		// 업로드한 파일명
		String originalFileName = file.getOriginalFilename();
		// 파일확장자명
		String extensionName = originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
		// 변경할 파일명, 변경할 때에는 SimpleDataFormt 객체를 이용해서
		// 업로드 당시 시각을 파일의 이름으로 바꿔줌
		String renameFileName = sdf.format(new Date(System.currentTimeMillis())) + "." + extensionName;
		filePath = folder + "\\" + renameFileName;
		// 두 가지 값을 map에 저장하여 리턴
		fileMap.put("filePath", filePath);
		fileMap.put("fileName", renameFileName);
		// 파일저장
		try {
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			e.printStackTrace();
		}
		// 파일 경로 리턴
		return fileMap;
	}

	// 게시판 수정페이지
	@RequestMapping(value = "/question/modifyView", method = RequestMethod.GET)
	public ModelAndView questionModifyView(ModelAndView mv, @RequestParam("questionNo") int questionNo) {

		try {
			Question question = qService.printOneQuestion(questionNo);
			if (question != null) {
				List<Lecture> lList = qService.printAllPro();
				mv.addObject("lList", lList);
				mv.addObject("question", question);
				mv.addObject("menu", "question");
				mv.setViewName("question/questionUpdateView");
			} else {
				System.out.println("데이터 없음");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 게시글 수정
	@RequestMapping(value = "/question/update", method = RequestMethod.POST)
	public ModelAndView questionUpdate(ModelAndView mv, @ModelAttribute Question question,
			@RequestParam(value = "reloadFile", required = false) MultipartFile reloadFile,
			HttpServletRequest request) {

		try {
			if (reloadFile != null && !reloadFile.isEmpty()) {
				// 기존 파일 삭제 (파일 이름 필요)
				deleteFile(question.getQuestionFilePath(), request); // 해당파일 이름 삭제
				// 새로운 파일 업로드
				HashMap<String, String> fileMap = saveFile(reloadFile, request);// 새롭게 저장
				String savePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if (savePath != null) {
					question.setQuestionFileName(reloadFile.getOriginalFilename()); // 파일이름이 저장
					question.setQuestionFileReName(fileRename);
					question.setQuestionFilePath(savePath); // 새로운 경로로 업데이트
				}
			}

			int result = qService.modifyQuestion(question);
			if (result > 0) {
				mv.setViewName("redirect:/question/detail?questionNo=" + question.getQuestionNo());
			} else {
				System.out.println("수정실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	public void deleteFile(String filePath, HttpServletRequest request) {
		// 저장 폴더 선택
		File deleteFile = new File(filePath);
		if (deleteFile.exists()) {
			// 파일이 존재하면 파일 삭제
			deleteFile.delete();
		}
	}

	// 게시글 삭제
	@RequestMapping(value = "/question/delete", method = RequestMethod.GET)
	public ModelAndView questionDelete(ModelAndView mv, @RequestParam("questionNo") int questionNo) {

		try {
			int result = qService.removeQuestion(questionNo);
			if (result > 0) {
				mv.setViewName("redirect:/question/list");
			} else {
				System.out.println("삭제 실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 댓글

	// 댓글 등록
	@ResponseBody
	@RequestMapping(value = "/question/replyAdd", method = RequestMethod.POST)
	public String questionReplyAdd(@ModelAttribute QuestionReply questionReply) {

		int result = qService.registerReply(questionReply);
		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

	// 댓글 조회(전달값 1개 ->Requestparam)
	@ResponseBody
	@RequestMapping(value = "/question/replyList", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String questionReplyList(@RequestParam("questionNo") int questionNo) {

		List<QuestionReply> qReplyList = qService.printAllQuetionReply(questionNo);

		if (!qReplyList.isEmpty()) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(qReplyList); // list->json
		}

		return "";
	}

	// 댓글 수정
	@ResponseBody
	@RequestMapping(value = "/question/replyModify", method = RequestMethod.POST)
	public String questionReplyModify(@ModelAttribute QuestionReply questionReply) {
		int result = qService.modifyQuestionReply(questionReply);
		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

	// 댓글 삭제
	@ResponseBody
	@RequestMapping(value = "/question/replyDelete", method = RequestMethod.GET)
	public String questionReplyDelete(@ModelAttribute QuestionReply questionReply) {

		int result = qService.removeQuestionReply(questionReply);
		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

}
