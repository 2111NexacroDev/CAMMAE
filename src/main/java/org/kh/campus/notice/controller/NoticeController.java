package org.kh.campus.notice.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;


import org.kh.campus.notice.domain.Notice;
import org.kh.campus.notice.domain.PageInfo;
import org.kh.campus.notice.domain.Pagination;
import org.kh.campus.notice.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NoticeController {

	@Autowired
	private NoticeService nService;
	
	//공지사항 목록 조회
	@RequestMapping(value="/notice/list.kh", method=RequestMethod.GET)
	public ModelAndView noticeListView(ModelAndView mv, @RequestParam(value = "page", required = false)Integer page) {
		try {
			int currentPage = (page != null) ? page : 1;
			int totalCount = nService.getListCount();
			PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
			List<Notice> nList = nService.printAllNotice(pi);
			if(!nList.isEmpty()) {
				mv.addObject("nList", nList);
				mv.addObject("pi", pi);
				mv.setViewName("notice/noticeList");
			}else {
				mv.setViewName("notice/noticeList");
				/*
				 * mv.addObject("msg","공지사항 조회 실패"); mv.setViewName("common/errorPage");
				 */
			}
		}catch(Exception e){
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;
	}
	
	//공지사항 상세조회
	@RequestMapping(value="/notice/detail.kh", method=RequestMethod.GET)
	public ModelAndView noticeOneView(ModelAndView mv, @RequestParam("noticeNo")int noticeNo) {
		try {
			Notice notice = nService.printOneNotice(noticeNo);
			if(notice != null) {
				nService.noticeCountUpdate(notice.getNoticeNo());
				
				mv.addObject("notice",notice);
				mv.setViewName("/notice/noticeDetail");
			}else {
				System.out.println("상세조회실패");
			}
		}catch(Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	
	
	
	//관리자 공지사항 등록화면
	@RequestMapping(value="/notice/writeView.kh", method=RequestMethod.GET)
	public String noticeWriteView() {
		return "notice/noticeWriteForm";
	}
	
	//관리자 공지사항 등록 실행
	@RequestMapping(value="/notice/register.kh", method=RequestMethod.POST)
	public ModelAndView noticeRegister(ModelAndView mv
			,@ModelAttribute Notice notice
			,@RequestParam(value="uploadFile", required=false) MultipartFile uploadFile
			,HttpServletRequest request) {
		
		try {
			if(uploadFile != null && !uploadFile.getOriginalFilename().equals("")) {
				HashMap<String, String> fileMap = saveFile(uploadFile, request);
				String filePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if(filePath != null && !filePath.equals("")) {
					notice.setNoticeFileName(uploadFile.getOriginalFilename());
					notice.setNoticeFileRename(fileRename);
					notice.setNoticeFilePath(filePath);
				}
			}
			int result = nService.registerNotice(notice);
			if(result > 0) {
				mv.setViewName("redirect:/notice/list.kh");
			}else {
				mv.addObject("msg","공지사항등록 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.setViewName("common/errorPage");
			mv.addObject("msg", e.toString());
		}
		return mv;
	}
	
	//공지사항 첨부파일 저장
	public HashMap<String, String> saveFile(MultipartFile file, HttpServletRequest request){
		String filePath = "";
		HashMap<String, String> fileMap = new HashMap<String, String>();
		String root = request.getSession().getServletContext().getRealPath("resources");
		String savePath = root + "\\nuploadFiles";
		File folder = new File(savePath);
		if(!folder.exists()) folder.mkdir();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		String originalFileName = file.getOriginalFilename();
		String extesionName = originalFileName.substring(originalFileName.lastIndexOf(".")+1);
		String renameFileName = sdf.format(new Date(System.currentTimeMillis()))+"."+extesionName;
		filePath = folder + "\\" + renameFileName;
		fileMap.put("filePath",filePath);
		fileMap.put("fileName", renameFileName);
		try {
			file.transferTo(new File(filePath));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return fileMap;
	}
	
	//공지사항 수정
	@RequestMapping(value="/notice/modifyView.kh", method=RequestMethod.GET)
	public String noticeModifyView(Model model
			, @RequestParam("noticeNo")int noticeNo) {
		try {
			Notice notice = nService.printOneNotice(noticeNo);
			if(notice != null) {
				model.addAttribute("notice",notice);
				return "notice/noticeUpdateView";
			}else {
				model.addAttribute("msg","No Data");
				return "common/errorPage";
			}
		}catch (Exception e){
			model.addAttribute("msg", e.toString());
			return null;
		}
	}
	
	//공지사항 수정 실행
	@RequestMapping(value="/notice/update.kh", method=RequestMethod.POST)
	public ModelAndView noticeUpdate(
			ModelAndView mv
			, @ModelAttribute Notice notice
			, @RequestParam(value="reloadFile", required=false) MultipartFile reloadFile
			, HttpServletRequest request) {
		try {
			if(reloadFile != null && !reloadFile.isEmpty()) {
				deleteFile(notice.getNoticeFilePath(), request);
				HashMap<String, String> fileMap = saveFile(reloadFile, request);
				String savePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if(savePath != null) {
					notice.setNoticeFileName(reloadFile.getOriginalFilename());
					notice.setNoticeFileRename(fileRename);
					notice.setNoticeFilePath(savePath);
				}
			}
			int result = nService.modifyNotice(notice);
			if(result > 0) {
				mv.setViewName("notice/noticeDetail");
			}else {
				mv.addObject("msg","공지사항 수정 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;
	}

	//파일삭제
	public void deleteFile(String filePath, HttpServletRequest request) {
		// 파일저장경로 설정
		
		// 저장폴더 선택
		File deleteFile = new File(filePath);
		if(deleteFile.exists()) { // 파일이 존재하면
			// 파일 삭제
			deleteFile.delete();
		}
	}
	
	//공지사항 삭제
	@RequestMapping(value="/notice/delete.kh", method=RequestMethod.GET)
	public String noticeDelete(
			Model model
			, @RequestParam("noticeNo")int noticeNo) {
		try {
			int result = nService.removeNotice(noticeNo);
			if(result > 0) {
				return "redirect:/notice/list.kh";
			}else {
				model.addAttribute("msg", "공지사항 삭제 실패");
				return "common/errorPage";
			}
		}catch (Exception e) {
			model.addAttribute("msg",e.toString());
			return "common/errorPage";
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
