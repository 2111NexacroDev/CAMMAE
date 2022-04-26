package org.kh.campus.scholarship.service;

import java.util.List;

import org.kh.campus.scholarship.domain.Scholarship;

public interface ScholarshipService {
	
	public List<Scholarship>printAllScholar(); 
	public int insertScholar(Scholarship scholarship); 
	public List<Scholarship> printScholarResult(); 
	public int registerScholar(Scholarship scholarship);  


	

}
