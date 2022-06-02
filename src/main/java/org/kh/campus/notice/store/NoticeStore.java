package org.kh.campus.notice.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.notice.domain.Notice;
import org.kh.campus.notice.domain.PageInfo;

public interface NoticeStore {
	
	public List<Notice> selectAllNotice(SqlSession sqlSession, PageInfo pi);
	public Notice selectOneNotice(SqlSession sqlSession, int noticeNo);

	public int insertNotice(Notice notice, SqlSession sqlSession);
	public int updateNotice(Notice notice, SqlSession sqlSession);
	public int updateCountNotice(int noticeNo, SqlSession sqlSession);
	public int deleteNotice(int noticeNo, SqlSession sqlSession);
	public int selectListCount(SqlSession sqlSession);
	
	//상단공지
	public List<Notice> selectOne(SqlSession sqlSession);
}
