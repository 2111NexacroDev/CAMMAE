package org.kh.campus.support.service;

import java.util.List;

import org.kh.campus.support.domain.PageInfo;
import org.kh.campus.support.domain.Support;
import org.kh.campus.support.domain.SupportSearch;

public interface SupportService {

	public List<Support> printAllSupport(PageInfo pi);//지원현황 조회
	public List<Support> printSearchSupport(SupportSearch supportSearch);//지원현황 검색
	public int insertSuport(Support support);//이력서 등록
	public int getListCount();


}
