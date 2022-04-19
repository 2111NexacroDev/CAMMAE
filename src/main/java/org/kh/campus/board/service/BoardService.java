package org.kh.campus.board.service;

import java.util.List;

import org.kh.campus.board.domain.Board;
import org.kh.campus.board.domain.BoardReply;

public interface BoardService {
	//메소드명은 기능에 맞게
	public List<Board> printAllBoard();//목록 보여주기
	public int registerBoard(Board board);//게시판 등록
	//게시판 수정
	//게시판 검색
	public int removeBoard(int boardNo);//게시판 삭제
	
	public List<BoardReply> printAllBoardReply(int boardNo);//댓글 보여주기
	public int registerReply(BoardReply boardreply);//댓글 등록
	//댓글 수정
	public int removeBoardReply(BoardReply boardreply);//댓글 삭제

	


}


