package org.kh.campus.recruitment.service;

import java.util.List;

import org.kh.campus.recruitment.domain.PageInfo;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.domain.RecruitmentSearch;

public interface RecruitmentService {

	public List<Recruitment> printAllRecruitment(PageInfo pi);//채용공고 전체 조회
	public List<Recruitment> printSearchRecruitment(RecruitmentSearch recruitmentSearch);//채용공고 검색
	public Recruitment printOneRecruitment(int recruitmentNo);//채용공고 상세 조회
	public int registerRecruitment(Recruitment recruitment);//채용공고 등록
	public int modifyRecruitment(Recruitment recruitment);//채용공고 수정
	public int recruitmentCountUpdate(int recruitmentNo);//채용공고 조회수
	public int removeRecruitment(int recruitmentNo);//채용공고 삭제
	public int getListCount();


}
