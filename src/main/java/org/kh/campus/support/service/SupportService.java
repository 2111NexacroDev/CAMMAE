package org.kh.campus.support.service;

import java.util.List;

import org.kh.campus.support.domain.PageInfo;
import org.kh.campus.support.domain.Support;

public interface SupportService {

	public List<Support> printAllSupport(PageInfo pi);//지원현황 조회
	public int insertSuport(Support support);//이력서 등록
	public int getListCount(PageInfo pageInfo);
	public int checkDelete(int supportNo);



}
