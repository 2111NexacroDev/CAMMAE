package org.kh.campus.board.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.board.domain.Board;
import org.kh.campus.board.domain.BoardReply;
import org.kh.campus.board.domain.PageInfo;
import org.kh.campus.board.domain.University;
import org.kh.campus.board.service.BoardService;
import org.kh.campus.board.store.BoardStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private BoardStore bStore;
	
	//게시판 목록조회
	@Override
	public List<Board> printAllBoard(PageInfo pi) {
		List<Board> bList = bStore.selectAllBoard(sqlSession, pi);
		return bList;
	}

	//게시판 상세조회
	@Override
	public Board printOneBoard(int boardNo) {
		Board board = bStore.selectOneBoard(sqlSession, boardNo);
		return board;
	}
	// 게시판 등록
	@Override
	public int registerBoard(Board board) {
		int result = bStore.insertBoard(board, sqlSession);
		return result;
	}
	// 게시판 수정
	@Override
	public int modifyBoard(Board board) {
		int result = bStore.updateBoard(board, sqlSession);
		return result;
	}
	// 게시판 삭제
	@Override
	public int removeBoard(int boardNo) {
		int result = bStore.deleteBoard(boardNo, sqlSession);
		return result;
	}
	//댓글 목록 보여주기
	@Override
	public List<BoardReply> printAllBoardReply(int boardNo) {
		List<BoardReply> bRelyList = bStore.selectAllBoardReply(boardNo, sqlSession);
		return bRelyList;
	}
	//댓글 등록
	@Override
	public int registerBoardReply(BoardReply boardReply) {
		int result = bStore.insertBoardReply(boardReply, sqlSession);
		return result;
	}
	//댓글 수정
	@Override
	public int modifyBoardReply(BoardReply boardReply) {
		int result = bStore.updateBoardReply(boardReply, sqlSession);
		return result;
	}
	//댓글 삭제
	@Override
	public int removeBoardReply(BoardReply boardReply) {
		int result = bStore.deleteBoardReply(boardReply, sqlSession);
		return result;
	}
	@Override
	public int getListCount(PageInfo pageInfo) {
		int totalCount = bStore.selectListCount(sqlSession, pageInfo);
		return totalCount;
		
	}
	@Override
	public List<University> printAllUniversity() {
		List<University> uList = bStore.selectAllUniversity(sqlSession);
		return uList;
	}

	@Override
	public int boardCountUpdate(int boardNo) {
		int result = bStore.updateCount(boardNo, sqlSession);
		return result;
		
	}
	

}
