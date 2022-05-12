package org.kh.campus.scholarship.service;

import java.util.List;

import org.kh.campus.scholarship.domain.Scholarship;

public interface ScholarshipService {
	public List<Scholarship> printAllScholar(Scholarship scholarship); 
	public List<Scholarship> printScholarResult(int studentNo); 
	public int registerScholar(Scholarship scholarship);
	public int modifyScholarAccept(Scholarship scholarship);
	public int modifyScholarDenine(Scholarship scholarship);
	
	
	


	

}
