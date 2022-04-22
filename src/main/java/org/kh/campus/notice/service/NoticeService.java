package org.kh.campus.notice.service;

import java.util.List;
import org.kh.campus.notice.domain.Notice;
import org.kh.campus.notice.domain.PageInfo;

public interface NoticeService {
	
	public List<Notice> printAllNotice(PageInfo pi);//공지사항 전체 조회
	public Notice printOneNotice(int noticeNo);//공지사항 상세조회
	
	
	public int registerNotice(Notice notice);//공지사항 등록
	public int modifyNotice(Notice notice);//공지사항 수정
	public int noticeCountUpdate(int noticeNo);//공지사항 조회수
	public int removeNotice(int noticeNo);//공지사항 삭제
	public int getListCount();

}
