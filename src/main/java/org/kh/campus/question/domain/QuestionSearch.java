package org.kh.campus.question.domain;

public class QuestionSearch {
	
	private String searchCondition;
	private String searchValue;
	
	public QuestionSearch() {}

	public QuestionSearch(String searchCondition, String searchValue) {
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
		return "QuestionSearch [searchCondition=" + searchCondition + ", searchValue=" + searchValue + "]";
	}
	
	
	
	

}
