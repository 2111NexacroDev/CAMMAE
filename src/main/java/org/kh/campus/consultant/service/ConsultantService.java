package org.kh.campus.consultant.service;

import java.util.HashMap;
import java.util.List;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.manager.domain.Manager;

public interface ConsultantService {
	
	public List<Consultant> printAllCons(int cons_student_no, PageInfo pi); //상담신청 목록 조회
	public int insertCons(Consultant consultant); //상담신청 등록
	public List<Consultant>printAdminAllCons(PageInfo pi, int studentNo);  //관리자 상담신청 목록조회
	public Consultant printAdminDetailCons(Integer consultant_no); //관리자 상담신청 상세조회
	public int insertAdminConsReply(ConsultantReply consultantReply); //관리자 상담신청 댓글 등록
	public int getListCount(); //페이징 처리를 위한 리스트 갯수 조회
	public List<ConsultantReply> printAllAdminReply(int cons_no); //관리자 상담신청 댓글 조회
	public int modifyStatus(int cons_no); //관리자 상담신청 상담현황 변경
	public Consultant printOneByStNo(int studentNo); 
	public List<Manager> printAllManager(); //관리자 전체리스트 조회
	public int countReply(int cons_no); //댓글 개수 조회
	public int printByNo(int cons_no); //상담신청 취소
	public Consultant printDetailCons(HashMap<String, Integer> map); //상담신청 상세조회


	
	

}
