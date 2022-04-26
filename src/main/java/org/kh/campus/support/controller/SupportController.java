package org.kh.campus.support.controller;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.kh.campus.support.domain.Support;
import org.kh.campus.support.service.SupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SupportController {

	@Autowired
	private SupportService sService;
	
	@RequestMapping(value="/support/register.kh", method=RequestMethod.POST)
	public ModelAndView supportRegisterView(ModelAndView mv
			, @ModelAttribute Support support
			, @RequestParam(value="upladFile", required=false)MultipartFile uploadFile
			, @RequestParam(value="uploadFile1", required=false)MultipartFile uploadFile1
			, HttpServletRequest request) throws UnsupportedEncodingException {
		try {
			if(uploadFile != null && !uploadFile.getOriginalFilename().equals("")) {
				HashMap<String, String> fileMap = saveFile(uploadFile, request);
				String filePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if(filePath != null && !filePath.equals("")) {
					support.setSupFileName(uploadFile.getOriginalFilename());
					support.setSupFileRename(fileRename);
					support.setSupFilePath(filePath);
				}
			} else if(uploadFile1 != null && !uploadFile1.getOriginalFilename().equals("")) {
				HashMap<String, String> fileMap = saveFile(uploadFile1,request);
				String filePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				if(filePath != null && !filePath.equals("")) {
					support.setSupPortFileName(uploadFile1.getOriginalFilename());
					support.setSupPortFileRename(fileRename);
					support.setSupPortFilePath(filePath);
				}
			}
			int result = sService.insertSuport(support);
			if(result > 0) {
				mv.setViewName("redicrt:/support/listView.kh");
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
		public HashMap<String, String> saveFile(MultipartFile file, HttpServletRequest request) {
			String filePath = "";
			HashMap<String, String> fileMap = new HashMap<String, String>();
			String root = request.getSession().getServletContext().getRealPath("resources");
			String savePath = root + "\\nuploadFiles";
			File folder = new File(savePath);
			if (!folder.exists())
				folder.mkdir();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
			String originalFileName = file.getOriginalFilename();
			String extesionName = originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
			String renameFileName = sdf.format(new Date(System.currentTimeMillis())) + "." + extesionName;
			filePath = folder + "\\" + renameFileName;
			fileMap.put("filePath", filePath);
			fileMap.put("fileName", renameFileName);
			try {
				file.transferTo(new File(filePath));
			} catch (Exception e) {
				e.printStackTrace();
			}
			return fileMap;
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
