package org.kh.campus.consultant.store;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.manager.domain.Manager;

public interface ConsultantStore {

	public List<Consultant> selectAllCons(SqlSession sqlSession, int cons_student_no, PageInfo pi);

	public int insertCons(SqlSession sqlSession, Consultant consultant);

	public Consultant selectDetailCons(SqlSession sqlSession, HashMap<String, Integer> map);

	public List<Consultant> selectAdminAllCons(SqlSession sqlSession, PageInfo pi, int studentNo);

	public int insertAdminConsReply(SqlSession sqlSession, ConsultantReply consultantReply);

	public Consultant selectAdminDetailCons(SqlSession sqlSession, Integer consultant_no);

	public int selectListCount(SqlSession sqlSession);

	public List<ConsultantReply> selectAllAdminReply(SqlSession sqlSession, int cons_no);

	public int updateStatus(SqlSession sqlSession, int cons_no);

	public Consultant printByStNo(SqlSession sqlSession, int studentNo);

	public List<Manager> selectAllManager(SqlSession sqlSession);

	public int selectReplyCount(SqlSession sqlSession, int cons_no);

	public int deleteConsultant(SqlSession sqlSession, int cons_no);

}
