package org.kh.campus.notice.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.notice.domain.Notice;

public interface NoticeStore {
	
	public int insertNotice(Notice notice, SqlSession sqlSession);
	public List<Notice> selectAllNotice(SqlSession sqlSession);
	public Notice selectOneNotice(SqlSession sqlSession, int noticeNo);

}
