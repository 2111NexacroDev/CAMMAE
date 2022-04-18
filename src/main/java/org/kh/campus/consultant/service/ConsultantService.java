package org.kh.campus.consultant.service;

import java.util.List;

import org.kh.campus.common.PageInfo;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;

public interface ConsultantService {
	
	public List<Consultant>printAllCons(PageInfo pi); // 상담 전체조회
	public int insertCons(Consultant consultant); //상담신청
	public Consultant printDetailCons(String consultant_title); //상담 디테일
	public List<ConsultantReply> printByConReply(PageInfo pi); //상담 댓글조회
	public List<Consultant>printAdminAllCons(PageInfo pi); //관리자 상담신청 목록 조회
	public Consultant printAdminDetailCons(String consultant_title); //관리자 상담신청 디테일 
	public int insertAdminConsReply(ConsultantReply consultantReply); //관리자 댓글 작성
	public int getListCount();
	
	

}
