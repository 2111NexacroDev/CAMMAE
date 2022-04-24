package org.kh.campus.market.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.kh.campus.market.domain.Market;
import org.kh.campus.market.domain.Search;
import org.kh.campus.market.service.MarketService;
import org.kh.campus.question.domain.Question;
import org.kh.campus.market.domain.PageInfo;
import org.kh.campus.market.domain.Pagination;
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
public class MarketController {

	@Autowired
	private MarketService mService;

	// 게시글 리스트
	@RequestMapping(value = "/market/list", method = RequestMethod.GET)
	public ModelAndView marketListView(ModelAndView mv,
			@RequestParam(value = "page", required = false) Integer page) {

		int currentPage = (page != null) ? page : 1;

		int totalCount = mService.getListCount();

		PageInfo pi = Pagination.getPageInfo(currentPage, totalCount);

		mv.addObject("pi", pi);

		
		List<Market> mList = mService.printAllMarket(pi);
		try {
			if (!mList.isEmpty()) {
				mv.addObject("mList", mList);
				mv.setViewName("market/marketList");
			} else {
				System.out.println("조회 실패");
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

			} else {
				System.out.println("상세조회실패");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}

		return mv;
	}
	
	// 게시글 검색
	@RequestMapping(value = "/market/search", method = RequestMethod.GET)
	public ModelAndView questionSearchList(ModelAndView mv, @ModelAttribute Search search) {

		try {
			List<Market> searchList = mService.printSearchMarket(search);
			if (!searchList.isEmpty()) {
				mv.addObject("mList", searchList);
				mv.setViewName("market/marketList");
			}
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		return mv;
	}

	

	// 게시글 등록 페이지
	@RequestMapping(value = "/market/registerView")
	public String marketWirteView(Model model) {

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
	
	// 게시판 수정페이지
	@RequestMapping(value = "/market/modifyView", method = RequestMethod.GET)
	public ModelAndView marketModifyView(ModelAndView mv, @RequestParam("marketNo") int marketNo) {

		try {
			Market market = mService.printOneMarket(marketNo);
			if (market != null) {
				mv.addObject("market", market);
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
}
