package org.kh.campus.board.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.board.domain.Board;
import org.kh.campus.board.domain.BoardReply;
import org.kh.campus.board.domain.Search;
import org.kh.campus.board.store.BoardStore;
import org.springframework.stereotype.Repository;

@Repository
public class BoardStoreLogic implements BoardStore {

	@Override
	public List<Board> selectAllBoard(SqlSession sqlSession) {
		List<Board> bList = sqlSession.selectList("BoardMapper.selectAllBoard");
		return bList;
	}

	@Override
	public Board selectOneBoard(SqlSession sqlSession, int boardNo) {
		Board board = sqlSession.selectOne("NoticeMapper.selectOneMapper", boardNo);
		return board;
	}

	@Override
	public List<Board> selectSearchBoard(SqlSession sqlSession, Search search) {
		List<Board> searchList
			= sqlSession.selectList("BoderMapper.selectSearchBoder", search);
		return searchList;
	}

	@Override
	public int insertBoard(Board board, SqlSession sqlSession) {
		int result = sqlSession.insert("BoardMapper.insertBoard", board);
		return result;
	}

	@Override
	public int updateBoard(Board board, SqlSession sqlSession) {
		int result = sqlSession.update("BoardMapper.updateBoard", board);
		return result;
	}

	@Override
	public int deleteBoard(int boardNo, SqlSession sqlSession) {
		int result = sqlSession.delete("BoardMapper.deleteBoard", boardNo);
		return result;
	}

	@Override
	public List<BoardReply> selectAllBoardReply(int boardNo, SqlSession sqlSession) {
		List<BoardReply> bReplyList
			= sqlSession.selectList("BoardMapper.selectAllReply", boardNo);
		return bReplyList;
	}

	@Override
	public int insertBoardReply(BoardReply boardReply, SqlSession sqlSession) {
		int result = sqlSession.insert("BoardMapper.insertBoardReply", boardReply);
		return result;
	}

	@Override
	public int updateBoardReply(BoardReply boardReply, SqlSession sqlSession) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteBoardReply(BoardReply boardReply, SqlSession sqlSession) {
		// TODO Auto-generated method stub
		return 0;
	}

}
