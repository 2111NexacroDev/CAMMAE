package org.kh.campus.notice.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.notice.domain.Notice;
import org.kh.campus.notice.service.NoticeService;
import org.kh.campus.notice.store.NoticeStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl implements NoticeService{
	
	@Autowired
	private SqlSession sqlSession;

	@Autowired
	private NoticeStore nStore;
	
	@Override
	public int registerNotice(Notice notice) {
		int result = nStore.insertNotice(notice, sqlSession);
		return result;
	}

	@Override
	public List<Notice> printAllNotice() {
		List<Notice> nList = nStore.selectAllNotice(sqlSession);
		return nList;
	}

	@Override
	public Notice printOneNotice(int noticeNo) {
		Notice notice = nStore.selectOneNotice(sqlSession,noticeNo);
		return notice;
	}

	@Override
	public int modifyNotice(Notice notice) {
		int result = nStore.updateNotice(notice, sqlSession);
		return result;
	}

	@Override
	public int noticeCountUpdate(int noticeNo) {
		int result = nStore.updateCountNotice(noticeNo, sqlSession);
		return result;
	}
	
	@Override
	public int removeNotice(int noticeNo) {
		int result = nStore.deleteNotice(noticeNo, sqlSession);
		return result;
	}


}
