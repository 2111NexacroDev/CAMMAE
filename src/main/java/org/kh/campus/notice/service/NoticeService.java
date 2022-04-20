package org.kh.campus.notice.service;

import java.util.List;

import org.kh.campus.notice.domain.Notice;

public interface NoticeService {
	
	public List<Notice> printAllNotice();
	public Notice printOneNotice(int noticeNo);
	
	
	public int registerNotice(Notice notice);
	public int modifyNotice(Notice notice);

}
