package org.kh.campus.notice.domain;

public class PageInfo {
	private int currentPage; 
	private int noticeLimit; 
	private int naviLimit;  
	private int startNavi;  
	private int endNavi;   
	private int totalCount; 
	private int maxPage; 
	private boolean prev;  
	private boolean next; 
	
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
		return "PageInfo [currentPage=" + currentPage + ", noticeLimit=" + noticeLimit + ", naviLimit=" + naviLimit
				+ ", startNavi=" + startNavi + ", endNavi=" + endNavi + ", totalCount=" + totalCount + ", maxPage="
				+ maxPage + ", prev=" + prev + ", next=" + next + "]";
	}

	


}
