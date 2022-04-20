package org.kh.campus.question.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.kh.campus.question.domain.Question;
import org.kh.campus.question.domain.QuestionReply;
import org.kh.campus.question.domain.QuestionSearch;
import org.kh.campus.question.service.QuestionService;
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
	
	// 게시글 검색
	@RequestMapping(value="/question/search", method = RequestMethod.GET)
	public ModelAndView questionSearchList(ModelAndView mv, @ModelAttribute QuestionSearch questionSearch) {
		
		try {
			List<Question> searchList = qService.printSearchQuestion(questionSearch);
			if(!searchList.isEmpty()) {
				mv.addObject("qList", searchList);
				mv.setViewName("question/questionList");
			}
		}catch(Exception e) {
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
				//조회수 증가
				qService.questionCountUpdate(question.getQuestionNo());
				
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
					question.setQuestionFileReNeme(fileRename);
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
				mv.addObject("question", question);
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
			if(reloadFile != null && !reloadFile.isEmpty()) {
				// 기존 파일 삭제 (파일 이름 필요)
				deleteFile(question.getQuestionFilePath(), request); // 해당파일 이름 삭제
				// 새로운 파일 업로드
				HashMap<String, String> fileMap = saveFile(reloadFile, request);// 새롭게 저장
				String savePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if (savePath != null) {
					question.setQuestionFileName(reloadFile.getOriginalFilename()); // 파일이름이 저장
					question.setQuestionFileReNeme(fileRename);
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
	
	
	//댓글
	
	// 댓글 등록
	@ResponseBody
	@RequestMapping(value="/question/replyAdd", method = RequestMethod.POST)
	public String questionReplyAdd(@ModelAttribute QuestionReply questionReply) {
		//로그인 완성 후 변경 예정
		String questionReplyWriter = "교수"; 
		questionReply.setQuestionReplyWriter(questionReplyWriter);
		
		int result = qService.registerReply(questionReply);
		if(result>0) {
			return "success";
		}else {
			return "fail";
		}
	} 
	
	//댓글 조회(전달값 1개 ->Requestparam)
	@ResponseBody
	@RequestMapping(value="/question/replyList", method = RequestMethod.GET
			, produces="application/json;charset=utf-8")
	public String questionReplyList(@RequestParam("questionNo") int questionNo) {
		
		List<QuestionReply> qReplyList = qService.printAllQuetionReply(questionNo);
		
		if(!qReplyList.isEmpty()) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(qReplyList); //list->json
		}
		
		return "";
	}
	
	
	
	
	
	
}
