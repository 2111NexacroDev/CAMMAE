package org.kh.campus.portfolio.service;

import java.util.List;
import org.kh.campus.portfolio.domain.PageInfo;
import org.kh.campus.portfolio.domain.Portfolio;

public interface PortfolioService {

	public List<Portfolio> printAllPort(int studentNo, PageInfo pi); // 포트폴리오 목록 조회

	public int insertPort(Portfolio portfolio); // 포트폴리오 등록

	public List<Portfolio> printAdminAllPort(PageInfo pi); // 관리자 포트폴리오 목록 조회

	public Portfolio printAdminDetailPort(int port_no); // 관리자 포트폴리오 상세조회

	public int getListCount(); // 페이징 처리를 위한 목록 갯수 조회

	public Portfolio printDetailPort(int port_no); // 포트폴리오 상세페이지 조회

	public Portfolio printOneByNo(Integer port_no);

	public int modifyPortfolio(Portfolio portfolio); // 포트폴리오 수정

	public int deletePortfolio(int port_no); // 포트폴리오 삭제

	public List<Portfolio> printOneByStNo(int port_student_no);

}
