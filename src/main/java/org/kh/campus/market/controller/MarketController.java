package org.kh.campus.market.controller;


import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kh.campus.market.domain.Market;
import org.kh.campus.market.domain.MarketReply;
import org.kh.campus.market.service.MarketService;
import org.kh.campus.question.domain.QuestionReply;
import org.kh.campus.student.domain.Student;
import org.kh.campus.market.domain.PageInfo;
import org.kh.campus.market.domain.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class MarketController {

	@Autowired
	private MarketService mService;

	// 게시글 리스트
	@RequestMapping(value = "/market/list", method = RequestMethod.GET)
	public ModelAndView marketListView(ModelAndView mv,
			@RequestParam(value = "page", required = false) Integer page
			, @ModelAttribute PageInfo pageInfo ) {

		int currentPage = (page != null) ? page : 1;

		int totalCount = mService.getListCount(pageInfo);

		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount, pageInfo.getSearchCondition(), pageInfo.getSearchValue());

		mv.addObject("pi", pi);
		/*
		 * pi.setSearchCondition(pageInfo.getSearchCondition());
		 * pi.setSearchValue(pageInfo.getSearchValue());
		 */

		
		List<Market> mList = mService.printAllMarket(pi);
		try {
			if (!mList.isEmpty()) {
				mv.addObject("mList", mList);
				mv.addObject("pageInfo", pageInfo);
				mv.addObject("menu", "market");
				mv.addObject("currentPage", currentPage);
				mv.setViewName("market/marketList");
			} else {
				mv.setViewName("market/marketList");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	// 게시글 상세 조회
	@RequestMapping(value = "/market/detail", method = RequestMethod.GET)
	public ModelAndView marketDetailView(ModelAndView mv, @RequestParam("marketNo") int marketNo) {
		try {
			Market market = mService.printOneMarket(marketNo);
			if (market != null) {
				// 조회수 증가
				mService.marketCountUpdate(market.getMarketNo());

				mv.addObject("market", market);
				mv.setViewName("/market/marketDetail");
				mv.addObject("menu", "market");

			} else {
				System.out.println("상세조회실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}

		return mv;
	}
	
	// 게시글 검색
	/*
	 * @RequestMapping(value = "/market/search", method = RequestMethod.GET) public
	 * ModelAndView questionSearchList(ModelAndView mv, @ModelAttribute Search
	 * search) {
	 * 
	 * try { List<Market> searchList = mService.printSearchMarket(search); if
	 * (!searchList.isEmpty()) { mv.addObject("mList", searchList);
	 * mv.setViewName("market/marketList"); } } catch (Exception e) {
	 * System.out.println(e.toString()); } return mv; }
	 */
	

	// 게시글 등록 페이지
	@RequestMapping(value = "/market/registerView")
	public String marketWirteView(Model model, HttpSession session) {
		if(session.getAttribute("loginUser")==null) {
			return "/login/login";
		}
		Student student = (Student)session.getAttribute("loginUser");
		model.addAttribute("marketId", student.getStudentNo());
		model.addAttribute("marketWriter", student.getStudentName());
		model.addAttribute("menu", "market");
		return "market/marketWriteForm";
	}

	// 게시글 등록
	@RequestMapping(value = "/market/register", method = RequestMethod.POST)
	public ModelAndView marketRegistr(ModelAndView mv, @ModelAttribute Market market) {

		int result = mService.registerMarket(market);
		if (result > 0) {
			mv.setViewName("redirect:/market/list");
		} else {
			System.out.println("등록 실패");
		}

		return mv;
	}
	
	// 이미지 업로드
		@RequestMapping(value = "/market/imageUpload", method = RequestMethod.POST)
		public void imageUpload(HttpServletRequest request, HttpServletResponse response,
				MultipartHttpServletRequest multiFile, @RequestParam MultipartFile upload) throws Exception {
			// 랜덤 문자 생성
			UUID uid = UUID.randomUUID();

			OutputStream out = null;
			PrintWriter printWriter = null;

			// 인코딩
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			try {
				// 파일 이름 가져오기
				String fileName = upload.getOriginalFilename();
				byte[] bytes = upload.getBytes();

				// 이미지파일 경로 설정
				String root = request.getSession().getServletContext().getRealPath("resources");
				// 저장 폴더 선택
				String savePath = root + "\\marketuploadFiles";
				String ckUploadPath = savePath + "\\" + uid + "_" + fileName;
				// 폴더 없으면 생성
				File folder = new File(savePath);
				if (!folder.exists())
					folder.mkdir();

				// 이미지 저장경로 console에 확인
				System.out.println("path:" + savePath);

				out = new FileOutputStream(new File(ckUploadPath));
				out.write(bytes);
				out.flush(); // outputStram에 저장된 데이터를 전송하고 초기화

				String callback = request.getParameter("CKEditorFuncNum");
				printWriter = response.getWriter();
				String fileUrl = "/market/ckImgSubmit.kh?uid=" + uid + "&fileName=" + fileName; // 작성화면

				// 업로드시 메시지 출력
				printWriter.println("{\"filename\" : \"" + fileName + "\", \"uploaded\" : 1, \"url\":\"" + fileUrl + "\"}");
				printWriter.flush();

			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					if (out != null) {
						out.close();
					}
					if (printWriter != null) {
						printWriter.close();
					}
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			return;
		}

		// 서버로 전송된 이미지 출력
		@RequestMapping(value = "/market/ckImgSubmit.kh")
		public void ckSubmit(@RequestParam(value = "uid") String uid, @RequestParam(value = "fileName") String fileName,
				HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

			// 파일 경로 설정
			String root = request.getSession().getServletContext().getRealPath("resources");
			// 저장 폴더 선택
			String savePath = root + "\\marketuploadFiles";
			String sDirPath = savePath  + "\\" + uid + "_" + fileName;

			File imgFile = new File(sDirPath);

			// 사진 이미지 찾지 못하는 경우 예외처리로 빈 이미지 파일을 설정한다.
			if (imgFile.isFile()) {
				byte[] buf = new byte[1024];
				int readByte = 0;
				int length = 0;
				byte[] imgBuf = null;

				FileInputStream fileInputStream = null;
				ByteArrayOutputStream outputStream = null;
				ServletOutputStream out = null;

				try {
					fileInputStream = new FileInputStream(imgFile);
					outputStream = new ByteArrayOutputStream();
					out = response.getOutputStream();

					while ((readByte = fileInputStream.read(buf)) != -1) {
						outputStream.write(buf, 0, readByte);
					}

					imgBuf = outputStream.toByteArray();
					length = imgBuf.length;
					out.write(imgBuf, 0, length);
					out.flush();

				} catch (IOException e) {
					e.printStackTrace();
				} finally {
					outputStream.close();
					fileInputStream.close();
					out.close();
				}
			}
		}
	

	
	// 게시판 수정페이지
	@RequestMapping(value = "/market/modifyView", method = RequestMethod.GET)
	public ModelAndView marketModifyView(ModelAndView mv, @RequestParam("marketNo") int marketNo) {

		try {
			Market market = mService.printOneMarket(marketNo);
			if (market != null) {
				mv.addObject("market", market);
				mv.addObject("menu", "market");
				mv.setViewName("market/marketUpdateView");
			} else {
				System.out.println("데이터 없음");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}
	// 게시글 수정
	@RequestMapping(value = "/market/update", method = RequestMethod.POST)
	public ModelAndView marketUpdate(ModelAndView mv, @ModelAttribute Market market) {

		try {

			int result = mService.modifyMarket(market);
			if (result > 0) {
				mv.setViewName("redirect:/market/detail?marketNo=" + market.getMarketNo());
			} else {
				System.out.println("수정실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	
	
	//게시글 삭제
	@RequestMapping(value = "/market/delete", method = RequestMethod.GET)
	public ModelAndView marketDelete(ModelAndView mv, @RequestParam("marketNo") int marketNo) {
		try {
			int result = mService.removeMarket(marketNo);
			if (result > 0) {
				mv.setViewName("redirect:/market/list");
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
		@RequestMapping(value = "/market/replyAdd", method = RequestMethod.POST)
		public String questionReplyAdd(@ModelAttribute MarketReply marketReply) {
			// 로그인 완성 후 변경 예정
			//String mReplyWriter = "학생";
			//marketReply.setmReplyWriter(mReplyWriter);

			int result = mService.registerReply(marketReply);
			if (result > 0) {
				return "success";
			} else {
				return "fail";
			}
		}

		// 댓글 조회(전달값 1개 ->Requestparam)
		@ResponseBody
		@RequestMapping(value = "/market/replyList", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
		public String marketReplyList(@RequestParam("marketNo") int marketNo) {

			List<MarketReply> mReplyList = mService.printAllMarketReply(marketNo);

			if (!mReplyList.isEmpty()) {
				Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
				return gson.toJson(mReplyList); // list->json
			}

			return "";
		}

		// 댓글 수정
		@ResponseBody
		@RequestMapping(value = "/market/replyModify", method = RequestMethod.POST)
		public String questionReplyModify(@ModelAttribute MarketReply marketReply) {
			int result = mService.modifyMarketReply(marketReply);
			if (result > 0) {
				return "success";
			} else {
				return "fail";
			}
		}

		// 댓글 삭제
		@ResponseBody
		@RequestMapping(value = "/market/replyDelete", method = RequestMethod.GET)
		public String questionReplyDelete(@ModelAttribute MarketReply marketReply) {

			int result = mService.removeMarketReply(marketReply);
			if (result > 0) {
				return "success";
			} else {
				return "fail";
			}
		}

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	