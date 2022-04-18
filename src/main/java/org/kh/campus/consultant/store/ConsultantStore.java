package org.kh.campus.consultant.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;

public interface ConsultantStore {

	public List<Consultant> selectAllCons(SqlSession sqlSession);
	public int insertCons(SqlSession sqlSession, Consultant consultant);
	public Consultant selectDetailCons(SqlSession sqlSession, String consultant_title);
	public List<ConsultantReply> selectByConReply(SqlSession sqlSession);
	public List<Consultant> selectAdminAllCons(SqlSession sqlSession);
	public int insertAdminConsReply(SqlSession sqlSession, ConsultantReply consultantReply);
	public Consultant selectAdminDetailCons(SqlSession sqlSession, String consultant_title);
	public int selectListCount(SqlSession sqlSession);
	

}
