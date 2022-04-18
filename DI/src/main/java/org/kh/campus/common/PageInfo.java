package org.kh.campus.common;

public class PageInfo {
	private int currentPage; //현재 페이지
	private int noticeLimit; // 한 페이지 당 게시글 갯수
	private int naviLimit;  // 한 페이지 당 pageNavi 수
	private int startNavi;  // pageNavi 시작값
	private int endNavi;   //pageNavi 끝값
	private int totalCount; // 전체 게시글 갯수
	private int maxPage;  // 페이지의 마지막 번호
	private boolean prev;  //이전
	private boolean next; //다음
	
	public PageInfo() {}

	

	public PageInfo(int currentPage, int noticeLimit, int naviLimit, int startNavi, int endNavi, int totalCount,
			int maxPage, boolean prev, boolean next) {
		super();
		this.currentPage = currentPage;
		this.noticeLimit = noticeLimit;
		this.naviLimit = naviLimit;
		this.startNavi = startNavi;
		this.endNavi = endNavi;
		this.totalCount = totalCount;
		this.maxPage = maxPage;
		this.prev = prev;
		this.next = next;
	}



	public int getCurrentPage() {
		return currentPage;
	}



	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}



	public int getNoticeLimit() {
		return noticeLimit;
	}



	public void setNoticeLimit(int noticeLimit) {
		this.noticeLimit = noticeLimit;
	}



	public int getNaviLimit() {
		return naviLimit;
	}



	public void setNaviLimit(int naviLimit) {
		this.naviLimit = naviLimit;
	}



	public int getStartNavi() {
		return startNavi;
	}



	public void setStartNavi(int startNavi) {
		this.startNavi = startNavi;
	}



	public int getEndNavi() {
		return endNavi;
	}



	public void setEndNavi(int endNavi) {
		this.endNavi = endNavi;
	}



	public int getTotalCount() {
		return totalCount;
	}



	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}



	public int getMaxPage() {
		return maxPage;
	}



	public void setMaxPage(int maxPage) {
		this.maxPage = maxPage;
	}



	public boolean isPrev() {
		return prev;
	}



	public void setPrev(boolean prev) {
		this.prev = prev;
	}



	public boolean isNext() {
		return next;
	}



	public void setNext(boolean next) {
		this.next = next;
	}



	@Override
	public String toString() {
		return "PageInfo [현재 페이지=" + currentPage + ", 게시글 갯수=" + noticeLimit + ", pageNavi 수=" + naviLimit
				+ ", 시작값=" + startNavi + ", 끝값=" + endNavi + ", 전체 게시글 갯수=" + totalCount + ", 마지막 번호="
				+ maxPage + ", 이전=" + prev + ", 다음=" + next + "]";
	}


}
