package org.kh.campus.notice.service;

import java.util.List;

import org.kh.campus.notice.domain.Notice;

public interface NoticeService {
	
	public int registerNotice(Notice notice);
	public List<Notice> printAllNotice();

}
