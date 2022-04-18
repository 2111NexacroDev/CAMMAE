package org.kh.campus.portfolio.controller;

import java.util.List;

import org.kh.campus.common.PageInfo;
import org.kh.campus.common.Pagination;
import org.kh.campus.portfolio.domain.Portfolio;
import org.kh.campus.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PortfolioController {
	@Autowired
	private PortfolioService pService;
	
	/*
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portListView(Model model, @RequestParam(value = "page", required = false)
	 * Integer page) { int currentPage = (page != null) ? page : 1; int totalCount =
	 * pService.getListCount(); PageInfo pi = Pagination.getPageInfo(currentPage,
	 * totalCount); List<Portfolio> pList = pService.printAllPort(pi); return null;
	 * }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portWriteView(Model model, @ModelAttribute Portfolio portfolio) { int result
	 * = pService.insertPort(portfolio); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portDetailView(Model model, @RequestParam("port_title")String port_title) {
	 * Portfolio portfolio = pService.printDetailPort(port_title); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portModifyView(Model model, @RequestParam("port_title")String port_title) {
	 * int result = pService.updatePort(port_title); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portDeleteView(Model model, @RequestParam("port_title")String port_title) {
	 * int result = pService.deletePort(port_title); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portAdminListView(Model model, @RequestParam(value = "page", required =
	 * false) Integer page) { int currentPage = (page != null) ? page : 1; int
	 * totalCount = pService.getListCount(); PageInfo pi =
	 * Pagination.getPageInfo(currentPage, totalCount); List<Portfolio>pList =
	 * pService.printAdminAllPort(pi); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) public String
	 * portAdminDetailView(Model model, @RequestParam("port_title")String
	 * port_title) { Portfolio portfolio =
	 * pService.printAdminDetailPort(port_title); return null; }
	 */
}
