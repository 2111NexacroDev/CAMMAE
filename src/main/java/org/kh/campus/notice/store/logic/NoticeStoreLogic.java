package org.kh.campus.notice.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.notice.domain.Notice;
import org.kh.campus.notice.domain.PageInfo;
import org.kh.campus.notice.store.NoticeStore;
import org.springframework.stereotype.Repository;

@Repository
public class NoticeStoreLogic implements NoticeStore{


	@Override
	public List<Notice> selectAllNotice(SqlSession sqlSession, PageInfo pi) {
		int limit = pi.getNoticeLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage -1) * limit ;
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Notice> nList = sqlSession.selectList("NoticeMapper.selectAllNotice", pi, rowBounds);
		return nList;
	}

	@Override
	public Notice selectOneNotice(SqlSession sqlSession, int noticeNo) {
		Notice notice = sqlSession.selectOne("NoticeMapper.selectOneNotice",noticeNo);
		return notice;
	}

	@Override
	public int insertNotice(Notice notice, SqlSession sqlSession) {
		int result = sqlSession.insert("NoticeMapper.insertNotice",notice);
		return result;
	}

	@Override
	public int updateNotice(Notice notice, SqlSession sqlSession) {
		int result = sqlSession.update("NoticeMapper.updateNotice",notice);
		return result;
	}

	@Override
	public int updateCountNotice(int noticeNo, SqlSession sqlSession) {
		int result = sqlSession.update("NoticeMapper.updateCountNotice", noticeNo);
		return result;
	}
	
	@Override
	public int deleteNotice(int noticeNo, SqlSession sqlSession) {
		int result = sqlSession.delete("NoticeMapper.deleteNotice", noticeNo);
		return result;
	}

	@Override
	public int selectListCount(SqlSession sqlSession) {
		int totalCount = sqlSession.selectOne("NoticeMapper.selectListCount");
		return totalCount;
	}


}
