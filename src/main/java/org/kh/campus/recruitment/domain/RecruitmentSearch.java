package org.kh.campus.recruitment.domain;

public class RecruitmentSearch {

	private String searchCondition;
	private String searchValue;
	
	public RecruitmentSearch() {}

	public RecruitmentSearch(String searchCondition, String searchValue) {
		super();
		this.searchCondition = searchCondition;
		this.searchValue = searchValue;
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
		return "RecruitmentSearch [searchCondition=" + searchCondition + ", searchValue=" + searchValue + "]";
	}
	
	
}
