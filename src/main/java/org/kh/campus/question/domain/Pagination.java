package org.kh.campus.question.domain;

public class Pagination {
	public static PageInfo getPageInfo(int currentPage, int totalCount) {
		PageInfo pi = null;
		
		int questionLimit = 10;
		int naviLimit = 5;
		int maxPage;
		int startNavi;
		int endNavi;
		boolean prev, next;

		maxPage = (int)((double)totalCount/questionLimit + 0.9);
		startNavi = (((int)((double)currentPage/naviLimit+0.9))-1)*naviLimit +1;
		endNavi = startNavi + naviLimit -1;
		prev = startNavi > 1;
		next = endNavi < maxPage; 
		if(maxPage < endNavi) {
			endNavi = maxPage;
			
		}
		String searchCondition = "";
		String searchValue = "";
		pi = new PageInfo(currentPage, questionLimit, 
				naviLimit, startNavi, endNavi, totalCount, maxPage, prev, next, searchCondition, searchValue);
		return pi;
	}

}
