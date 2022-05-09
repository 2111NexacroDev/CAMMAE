package org.kh.campus.board.domain;

public class Pagination {
	public static PageInfo getPageInfo(int currentPage, int totalCount) {
		PageInfo pi = null;
		
		int boardLimit = 5;
		int naviLimit = 5;
		int maxPage;
		int startNavi;
		int endNavi;
		boolean prev, next;
		// 23 /5 = 4.8  + 0.9 = 5.7 => 5
		maxPage = (int)((double)totalCount/boardLimit + 0.9);
		// currentPage 1 ->  1 2 3 4 5
		// currentPage 6 -> 6 7 8 9 10
		// currentPage 11- > 11 12 13 14 15
		startNavi = (((int)((double)currentPage/naviLimit+0.9))-1)*naviLimit +1;
		endNavi = startNavi + naviLimit -1;
		prev = startNavi > 1;
		next = endNavi < maxPage; 
		if(maxPage < endNavi) {
			endNavi = maxPage;
			
		}
		String searchCondition = "";
		String searchValue = "";
		String universityCode = "";
		pi = new PageInfo(currentPage, boardLimit, 
				naviLimit, startNavi, endNavi, totalCount, maxPage, prev, next, universityCode, searchCondition, searchValue);
		return pi;
	}

}
