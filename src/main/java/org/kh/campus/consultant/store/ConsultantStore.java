package org.kh.campus.consultant.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;

public interface ConsultantStore {

	public List<Consultant> selectAllCons(SqlSession sqlSession, PageInfo pi);
	public int insertCons(SqlSession sqlSession, Consultant consultant);
	public Consultant selectDetailCons(SqlSession sqlSession, String consultant_title);
	public List<Consultant> selectAdminAllCons(SqlSession sqlSession, PageInfo pi);
	public int insertAdminConsReply(SqlSession sqlSession, ConsultantReply consultantReply);
	public Consultant selectAdminDetailCons(SqlSession sqlSession, Integer consultant_no);
	public int selectListCount(SqlSession sqlSession);
	public List<ConsultantReply> selectAllAdminReply(SqlSession sqlSession, int cons_no);
	
	

}
