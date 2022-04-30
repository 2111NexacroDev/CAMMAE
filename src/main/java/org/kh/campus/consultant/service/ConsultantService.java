package org.kh.campus.consultant.service;

import java.util.List;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.manager.domain.Manager;

public interface ConsultantService {
	
	public List<Consultant> printAllCons(int cons_student_no); 
	public int insertCons(Consultant consultant); 
	public Consultant printDetailCons(int cons_no);  
	public List<Consultant>printAdminAllCons(PageInfo pi); 
	public Consultant printAdminDetailCons(Integer consultant_no); 
	public int insertAdminConsReply(ConsultantReply consultantReply); 
	public int getListCount();
	public List<ConsultantReply> printAllAdminReply(int cons_no);
	public int modifyStatus(int cons_no);
	public Consultant printOneByStNo(int studentNo);


	
	

}
