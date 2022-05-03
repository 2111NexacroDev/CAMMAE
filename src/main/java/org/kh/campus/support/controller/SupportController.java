package org.kh.campus.support.controller;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.kh.campus.support.domain.PageInfo;
import org.kh.campus.support.domain.Pagination;
import org.kh.campus.support.domain.Support;
import org.kh.campus.support.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SupportController {

	@Autowired
	private SupportService sService;
	
	//지원현황 목록 조회
	@RequestMapping(value="/support/list.kh", method=RequestMethod.GET)
	public ModelAndView supportListView(ModelAndView mv
			, @RequestParam(value="page", required=false)Integer page
			, @ModelAttribute PageInfo pageInfo) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = sService.getListCount(pageInfo);
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		mv.addObject("pi",pi);
		pi.setSearchCondition(pageInfo.getSearchCondition());
		pi.setSearchValue(pageInfo.getSearchValue());
		List<Support> sList = sService.printAllSupport(pi);
		try {
			
			if(!sList.isEmpty()) {
				mv.addObject("sList",sList);
				mv.addObject("pageInfo", pageInfo);
				mv.setViewName("support/supportList");
			}else {
				mv.setViewName("support/supportList");
			}
		}catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;
	}
	
	//이력서 등록
	@RequestMapping(value="/support/register.kh", method=RequestMethod.POST)
	public ModelAndView supportRegisterView(ModelAndView mv
			, @ModelAttribute Support support
			, @RequestParam(value="uploadFile", required=false)MultipartFile uploadFile
			, @RequestParam(value="uploadFile1", required=false)MultipartFile uploadFile1
			, @RequestParam(value="recruitmentNo")int recruitmentNo
			, HttpServletRequest request) throws UnsupportedEncodingException {
		try {
			if(uploadFile != null && !uploadFile.getOriginalFilename().equals("") || uploadFile1 != null && !uploadFile1.getOriginalFilename().equals("")) {
				HashMap<String, String> fileMap = saveFile(uploadFile, request, uploadFile1);
				String filePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				String filePath1= fileMap.get("filePath1");
				String fileRename1 = fileMap.get("fileName1");
				if(filePath != null && !filePath.equals("")) {
					support.setSupFileName(uploadFile.getOriginalFilename());
					support.setSupFileRename(fileRename);
					support.setSupFilePath(filePath);
					support.setSupPortFileName(uploadFile1.getOriginalFilename());
					support.setSupPortFileRename(fileRename1);
					support.setSupPortFilePath(filePath1);
				}
			}
			int result = sService.insertSuport(support);
			if(result > 0) {
				mv.setViewName("redirect:/recruitment/detail.kh?recruitmentNo=" + recruitmentNo);
			}else {
				mv.addObject("msg","이력서 등록 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.setViewName("common/errorPage");
			mv.addObject("msg", e.toString());
		}
		return mv;
	}
	
	 // 파일 경로
	   public HashMap<String, String> saveFile(MultipartFile file, HttpServletRequest request, MultipartFile uploadFile) {
	      String filePath = "";
	      String filePath1 = "";
	      HashMap<String, String> fileMap = new HashMap<String, String>();
	      String root = request.getSession().getServletContext().getRealPath("resources");
	      String savePath = root + "\\supportUploadFiles";
	      
	      File folder = new File(savePath);
	      if (!folder.exists())
	         folder.mkdir();
	      
	      SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	      SimpleDateFormat sd = new SimpleDateFormat("yyyyMMdd");
	      String originalFileName = file.getOriginalFilename();
	      String originalFileName1 = uploadFile.getOriginalFilename();
	      String extesionName = originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
	      String extesionName1 = originalFileName1.substring(originalFileName1.lastIndexOf(".") + 1);
	      String renameFileName = sdf.format(new Date(System.currentTimeMillis())) + "." + extesionName;
	      String renameFileName1 = sd.format(new Date(System.currentTimeMillis())) + "." + extesionName1;
	      filePath = folder + "\\" + renameFileName;
	      filePath1 = folder + "\\" + renameFileName1;
	      fileMap.put("filePath", filePath);
	      fileMap.put("fileName", renameFileName);
	      fileMap.put("filePath1", filePath1);
	      fileMap.put("fileName1", renameFileName1);
	      try {
	         file.transferTo(new File(filePath));
	         uploadFile.transferTo(new File(filePath1));
	      } catch (Exception e) {
	         e.printStackTrace();
	      }
	      return fileMap;
	   }
	
	//선택삭제
	   @ResponseBody
	   @RequestMapping(value="/deleteSupport", method=RequestMethod.POST)
	   public String ajaxDelete(HttpServletRequest request) {
		   
		   String[] ajaxMsg = request.getParameterValues("valueArr");
		   int size = ajaxMsg.length;
		   for(int i=0; i<size; i++) {
			   sService.checkDelete (Integer.parseInt(ajaxMsg[i]));
			   System.out.println(ajaxMsg[i]);
		   }
		   
		   return "redirect:support/list.kh";
	   }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
