package org.kh.campus.portfolio.service;

import java.util.List;

import org.kh.campus.common.PageInfo;
import org.kh.campus.portfolio.domain.Portfolio;

public interface PortfolioService {
	
	
	public List<Portfolio>printAllPort(PageInfo pi);
	public int insertPort(Portfolio portfolio);
	public Portfolio printDetailPort(String port_title);
	public int updatePort(String port_title);
	public int deletePort(String port_title);
	public List<Portfolio>printAdminAllPort(PageInfo pi);
	public Portfolio printAdminDetailPort(String port_title);
	public int getListCount();

}
