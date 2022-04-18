package org.kh.campus.consultant.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.store.ConsultantStore;
import org.springframework.stereotype.Repository;

@Repository
public class ConsultantStoreLogic implements ConsultantStore {

	@Override
	public List<Consultant> selectAllCons(SqlSession sqlSession) {
		List<Consultant> cList=  sqlSession.selectList("ConsultantMapper.selectAllCons" );
		return cList;
	}

	@Override
	public int insertCons(SqlSession sqlSession, Consultant consultant) {
		int result = sqlSession.insert("ConsultantMapper.insertCons", consultant);
		return result;
	}

	@Override
	public Consultant selectDetailCons(SqlSession sqlSession, String consultant_title) {
		Consultant consultant = sqlSession.selectOne("ConsultantMapper.selectDetailCons", consultant_title);
		return consultant;
	}

	@Override
	public List<ConsultantReply> selectByConReply(SqlSession sqlSession) {
		List<ConsultantReply>crReply = sqlSession.selectList("ConsultantReplyMapper.selectByConReply");
		return crReply;
	}

	@Override
	public List<Consultant> selectAdminAllCons(SqlSession sqlSession) {
		List<Consultant> cList = sqlSession.selectList("ConsultantMapper.selectAdminAllCons");
		return cList;
	}

	@Override
	public int insertAdminConsReply(SqlSession sqlSession, ConsultantReply consultantReply) {
		int result = sqlSession.insert("ConsultantReplyMapper.insertAdminConsReply", consultantReply);
		return result;
	}

	@Override
	public Consultant selectAdminDetailCons(SqlSession sqlSession, String consultant_title) {
		Consultant consultant = sqlSession.selectOne("ConsultantMapper.selectAdminDetailCons");
		return consultant;
	}

	@Override
	public int selectListCount(SqlSession sqlSession) {
		int totalCount = sqlSession.selectOne("ConsultantMapper.selectListCount");
		return totalCount;
	}

}
