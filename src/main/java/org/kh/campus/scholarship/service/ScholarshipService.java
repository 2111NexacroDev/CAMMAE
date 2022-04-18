package org.kh.campus.scholarship.service;

import java.util.List;

import org.kh.campus.scholarship.domain.Scholarship;

public interface ScholarshipService {
	
	public List<Scholarship>printAllScholar(); //관리자 신청장학금 목록 조회
	public int insertScholar(Scholarship scholarship); //성적장학금 신청
	public List<Scholarship> printScholarResult(); //신청장학금 결과조회
	public int registerScholar(Scholarship scholarship); //관리자 성적장학금 등록 


	

}
