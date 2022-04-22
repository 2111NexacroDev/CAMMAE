package org.kh.campus.consultant.service;

import java.util.List;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;

public interface ConsultantService {
	
	public List<Consultant>printAllCons(PageInfo pi); 
	public int insertCons(Consultant consultant); 
	public Consultant printDetailCons(String consultant_title);  
	public List<Consultant>printAdminAllCons(PageInfo pi); 
	public Consultant printAdminDetailCons(Integer consultant_no); 
	public int insertAdminConsReply(ConsultantReply consultantReply); 
	public int getListCount();
	public List<ConsultantReply> printAllAdminReply(int cons_no);


	
	

}
