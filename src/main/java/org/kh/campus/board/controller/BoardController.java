package org.kh.campus.board.controller;

import java.util.List;

import org.kh.campus.board.domain.Board;
import org.kh.campus.board.domain.Search;
import org.kh.campus.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	//게시판 목록 조회
	@RequestMapping(value="/board/list.kh", method=RequestMethod.GET)
	public ModelAndView boardListView(ModelAndView mv) {
		try {
			List<Board> bList = service.printAllBoard();
			if(!bList.isEmpty()) {
				mv.addObject("bList", bList);
				mv.setViewName("notice/noticeList");
			}else{
				mv.addObject("msg","학과게시판 조회 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("commmon/errorPage");
		}
		return mv;
		}
	//게시판 상세 조회
	@RequestMapping(value="/board/detail.kh", method=RequestMethod.GET)
	public ModelAndView boardOneView(
			ModelAndView mv
			, @RequestParam("boardNo") int boardNo) {
		try{
			Board board = service.printOneBoard(boardNo);
			if(board != null) {
				mv.addObject("board", board);
				mv.setViewName("board/boardDetail");
			}else {
				mv.addObject("msg"," 학과게시판 상세조회 실패");
				mv.setViewName("common/errorPage");
			}
		}catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		return mv;		
	}
	
	//학과게시판 검색기능
	/*
	 * @RequestMapping(value="/board/search.kh", method=RequestMethod.GET) public
	 * ModelAndView boardSearchList( ModelAndView mv , @ModelAttribute Search
	 * search) { try { List<Board> searchList = service.printSearchBoard(search);
	 * if(!searchList.isEmpty()) { mv.addObject("bList", searchList);
	 * mv.setViewName("board/boardList"); } }catch(Exception e) {
	 * mv.addObject("msg", e.toString()); mv.setViewName(""); } }
	 */
}
