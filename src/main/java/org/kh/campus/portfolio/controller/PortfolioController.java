package org.kh.campus.portfolio.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.portfolio.domain.PageInfo;
import org.kh.campus.portfolio.domain.Pagination;
import org.kh.campus.portfolio.domain.Portfolio;
import org.kh.campus.portfolio.service.PortfolioService;
import org.kh.campus.student.domain.Student;
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
public class PortfolioController {
	@Autowired
	private PortfolioService pService;

	@RequestMapping(value = "/portfolio/listView.kh", method = RequestMethod.GET)
	public String portListView(Model model, @RequestParam(value = "page", required = false) Integer page) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = pService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<Portfolio> pList = pService.printAllPort(pi);
		if (!pList.isEmpty()) {
			model.addAttribute("pList", pList);
			model.addAttribute("pi", pi);
			return "portfolio/portfolioListView";
		} else {
			model.addAttribute("msg", "포트폴리오 전체조회 실패");
			return "common/errorPage";
		}

	}

	@RequestMapping(value = "/portfolio/writeView.kh", method = RequestMethod.GET)
	public String portWriteView() {
		return "portfolio/portfolioWriteForm";
	}

	@RequestMapping(value = "/portfolio/register.kh", method = RequestMethod.POST)
	public ModelAndView portRegisterView(ModelAndView mv, @ModelAttribute Portfolio portfolio,
			@RequestParam(value = "uploadFile", required = false) MultipartFile uploadFile,
			@RequestParam(value = "uploadFile1", required = false) MultipartFile uploadFile1,
			HttpServletRequest request) throws UnsupportedEncodingException {
		try {
			if (uploadFile != null && !uploadFile.getOriginalFilename().equals("") || uploadFile1 != null && !uploadFile1.getOriginalFilename().equals("")) {
				HashMap<String, String> fileMap = saveFile(uploadFile, request , uploadFile1);
				String filePath = fileMap.get("filePath");
				String fileRename = fileMap.get("fileName");
				String filePath1 = fileMap.get("filePath1");
				String fileRename1 = fileMap.get("fileName1");
				if (filePath != null && !filePath.equals("")) {
					portfolio.setPort_license(uploadFile.getOriginalFilename());
					portfolio.setPort_licenseRename(fileRename);
					portfolio.setPort_licenseFilePath(filePath);
					portfolio.setPort_award_history(uploadFile1.getOriginalFilename());
					portfolio.setPort_award_historyRename(fileRename1);
					portfolio.setPort_awardFilePath(filePath1);
				}

			}

			int result = pService.insertPort(portfolio);
			if (result > 0) {
				HttpSession session = request.getSession();
				int studentNo = ((Student)(session.getAttribute("loginUser"))).getStudentNo();
				Portfolio portOne = pService.printOneByStNo(studentNo);
				if(portOne != null) {
					mv.addObject("portfolio", portOne);
					mv.setViewName("redirect:/portfolio/listView.kh");
				}	
			} else {
				mv.addObject("msg", "포트폴리오 등록실패");
				mv.setViewName("common/errorPage");

			}
		} catch (Exception e) {
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
		String savePath = root + "\\puploadFiles";
		
		File folder = new File(savePath);
		if (!folder.exists())
			folder.mkdir();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		SimpleDateFormat sd = new SimpleDateFormat("yyyyMMddHH");
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

	@RequestMapping(value = "/portfolio/adminListView.kh", method = RequestMethod.GET)
	public String portAdminListView(Model model, @RequestParam(value = "page", required = false) Integer page) {
		int currentPage = (page != null) ? page : 1;
		int totalCount = pService.getListCount();
		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);
		List<Portfolio> pList = pService.printAdminAllPort(pi);
		if (!pList.isEmpty()) {
			model.addAttribute("pList", pList);
			model.addAttribute("pi", pi);
			return "portfolio/portfolioAdminListView";
		} else {
			model.addAttribute("msg", "포트폴리오 전체조회 실패");
			return "common/errorPage";
		}

	}

	@RequestMapping(value = "/portfolio/adminDetail.kh", method = RequestMethod.GET)
	public String portAdminDetailView(Model model, @RequestParam("port_no") int port_no) {
		Portfolio portfolio = pService.printAdminDetailPort(port_no);
		if (portfolio != null) {
			model.addAttribute("portfolio", portfolio);
			return "portfolio/portfolioAdminDetailView";
		} else {
			model.addAttribute("msg", "관리자 포트폴리오 디테일 조회 실패");
			return "common/errorPage";
		}

	}

	@RequestMapping(value = "/portfolio/Detail.kh", method = RequestMethod.GET)
	public String portDetailView(Model model, @RequestParam("port_no") int port_no) {
		Portfolio portfolio = pService.printDetailPort(port_no);
		if (portfolio != null) {
			model.addAttribute("portfolio", portfolio);
			return "portfolio/portfolioDetailView";
		} else {
			model.addAttribute("msg", "관리자 포트폴리오 디테일 조회 실패");
			return "common/errorPage";
		}

	}

	@RequestMapping(value = "/portfolio/updateView.kh", method = RequestMethod.GET)
	public String portfolioUpdateView(Model model, @RequestParam("port_no") Integer port_no) {

		Portfolio portfolio = pService.printOneByNo(port_no);
		if (portfolio != null) {
			model.addAttribute("portfolio", portfolio);
			return "portfolio/portfolioUpdateForm";
		} else {
			model.addAttribute("msg", "게시글 조회 실패");
			return "common/errorPage";
		}

	}

	@RequestMapping(value = "/portfolio/modify.kh", method = RequestMethod.POST)
	public String portfolioModify(@RequestParam("port_no") Integer port_no, Model model,
			@ModelAttribute Portfolio portfolio) {

		try {
			int result = pService.modifyPortfolio(portfolio);
			if (result > 0) {
				model.addAttribute("port_no", portfolio);
				return "redirect:/portfolio/list.kh";
			} else {
				model.addAttribute("msg", "포트폴리오 수정 실패!");
				return "common/errorPage";
			}
		} catch (Exception e) {
			model.addAttribute("msg", e.toString());
			return "common/errorPage";
		}

	}
	@RequestMapping(value="/portfolio/delete.kh")
	 public String portfolioDelete(Model model, @RequestParam("port_no")int port_no) {
		try {
			int result = pService.deletePortfolio(port_no);
			if (result > 0) {
				model.addAttribute("portfolio", port_no);
				return "redirect:/portfolio/listView.kh";
			} else {
				model.addAttribute("msg", "공지사항 수정 실패!");
				return "common/errorPage";
			}
		} catch (Exception e) {
			model.addAttribute("msg", e.toString());
			return "common/errorPage";
		}
	}
}

	

