package org.kh.campus.board.service;

import java.util.List;

import org.kh.campus.board.domain.Board;
import org.kh.campus.board.domain.BoardReply;
import org.kh.campus.board.domain.PageInfo;

import org.kh.campus.board.domain.University;

public interface BoardService {
	//메소드명은 기능에 맞게
	public List<Board> printAllBoard(PageInfo pi);//목록 보여주기
	public Board printOneBoard(int boardNo);//게시판 상세
	public int registerBoard(Board board);//게시판 등록
	public int modifyBoard(Board board);//게시판 수정
	public int removeBoard(int boardNo);//게시판 삭제
	
	public List<BoardReply> printAllBoardReply(int boardNo);//댓글 보여주기
	public int registerBoardReply(BoardReply boardReply);//댓글 등록
	public int modifyBoardReply(BoardReply boardReply);//댓글 수정
	public int removeBoardReply(BoardReply boardReply);//댓글 삭제
	public int getListCount(PageInfo pageInfo);
	public List<University> printAllUniversity();
	

	


}


