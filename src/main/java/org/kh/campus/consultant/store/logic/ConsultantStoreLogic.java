package org.kh.campus.consultant.store.logic;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.consultant.store.ConsultantStore;
import org.kh.campus.manager.domain.Manager;
import org.springframework.stereotype.Repository;

@Repository
public class ConsultantStoreLogic implements ConsultantStore {

	@Override
	public List<Consultant> selectAllCons(SqlSession sqlSession, int cons_student_no, PageInfo pi) {
		int limit = pi.getConsultantLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage - 1) * limit;
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Consultant> cList = sqlSession.selectList("ConsultantMapper.selectAllCons", cons_student_no, rowBounds);
		return cList;
	}

	@Override
	public int insertCons(SqlSession sqlSession, Consultant consultant) {
		int result = sqlSession.insert("ConsultantMapper.insertCons", consultant);
		return result;
	}

	@Override
	public Consultant selectDetailCons(SqlSession sqlSession, HashMap<String, Integer> map) {
		Consultant consultant = sqlSession.selectOne("ConsultantMapper.selectDetailCons", map);
		return consultant;
	}

	@Override
	public List<Consultant> selectAdminAllCons(SqlSession sqlSession, PageInfo pi, int studentNo) {
		int limit = pi.getConsultantLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage - 1) * limit;
		RowBounds rowBounds = new RowBounds(offset, limit);
		List<Consultant> cList = sqlSession.selectList("ConsultantMapper.selectAdminAllCons", studentNo, rowBounds);
		return cList;
	}

	@Override
	public int insertAdminConsReply(SqlSession sqlSession, ConsultantReply consultantReply) {
		int result = sqlSession.insert("ConsultantMapper.insertAdminConsReply", consultantReply);
		return result;
	}

	@Override
	public Consultant selectAdminDetailCons(SqlSession sqlSession, Integer consultant_no) {
		Consultant consultant = sqlSession.selectOne("ConsultantMapper.selectAdminDetailCons", consultant_no);
		return consultant;
	}

	@Override
	public int selectListCount(SqlSession sqlSession) {
		int totalCount = sqlSession.selectOne("ConsultantMapper.selectListCount");
		return totalCount;
	}

	@Override
	public List<ConsultantReply> selectAllAdminReply(SqlSession sqlSession, int cons_no) {
		List<ConsultantReply> crList = sqlSession.selectList("ConsultantMapper.selectAllAdminReply", cons_no);
		return crList;
	}

	@Override
	public int updateStatus(SqlSession sqlSession, int cons_no) {
		int result = sqlSession.update("ConsultantMapper.updateStatus", cons_no);
		return result;
	}

	@Override
	public Consultant printByStNo(SqlSession sqlSession, int studentNo) {
		Consultant consultant = sqlSession.selectOne("ConsultantMapper.printByStNo", studentNo);
		return consultant;
	}

	@Override
	public List<Manager> selectAllManager(SqlSession sqlSession) {
		List<Manager> mList = sqlSession.selectList("ConsultantMapper.selectAllManager");
		return mList;
	}

	@Override
	public int selectReplyCount(SqlSession sqlSession, int cons_no) {
		int result = sqlSession.selectOne("ConsultantMapper.selectReplyCount", cons_no);
		return result;
	}

	@Override
	public int deleteConsultant(SqlSession sqlSession, int cons_no) {
		int result = sqlSession.delete("ConsultantMapper.deleteConsultant", cons_no);
		return result;
	}

}
