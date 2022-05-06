package org.kh.campus.recruitment.domain;

public class PageInfo {
	private int currentPage; 
	private int recruitmentLimit; 
	private int naviLimit;  
	private int startNavi;  
	private int endNavi;   
	private int totalCount; 
	private int maxPage; 
	private boolean prev;  
	private boolean next; 
	private String searchCondition;
	private String searchValue;
	
	public PageInfo() {}

	public PageInfo(int currentPage, int recruitmentLimit, int naviLimit, int startNavi, int endNavi, int totalCount,
			int maxPage, boolean prev, boolean next, String searchCondition, String searchValue) {
		super();
		this.currentPage = currentPage;
		this.recruitmentLimit = recruitmentLimit;
		this.naviLimit = naviLimit;
		this.startNavi = startNavi;
		this.endNavi = endNavi;
		this.totalCount = totalCount;
		this.maxPage = maxPage;
		this.prev = prev;
		this.next = next;
		this.searchCondition = searchCondition;
		this.searchValue = searchValue;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getRecruitmentLimit() {
		return recruitmentLimit;
	}

	public void setRecruitmentLimit(int recruitmentLimit) {
		this.recruitmentLimit = recruitmentLimit;
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

	public String getSearchCondition() {
		return searchCondition;
	}

	public void setSearchCondition(String searchCondition) {
		this.searchCondition = searchCondition;
	}

	public String getSearchValue() {
		return searchValue;
	}

	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}

	@Override
	public String toString() {
		return "PageInfo [currentPage=" + currentPage + ", recruitmentLimit=" + recruitmentLimit + ", naviLimit="
				+ naviLimit + ", startNavi=" + startNavi + ", endNavi=" + endNavi + ", totalCount=" + totalCount
				+ ", maxPage=" + maxPage + ", prev=" + prev + ", next=" + next + ", searchCondition=" + searchCondition
				+ ", searchValue=" + searchValue + "]";
	}

	
	

	

}
