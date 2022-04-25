package org.kh.campus.recruitment.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.domain.RecruitmentSearch;
import org.kh.campus.recruitment.store.RecruitmentStore;
import org.springframework.stereotype.Repository;

@Repository
public class RecruitmentStoreLogic implements RecruitmentStore{

	@Override
	public List<Recruitment> selectAllRecruitment(SqlSession sqlSession) {
		List<Recruitment> rList = sqlSession.selectList("RecruitmentMapper.selectAllRecruitment");
		return rList;
	}
	
	@Override
	public List<Recruitment> selectSearchRecruitment(RecruitmentSearch recruitmentSearch, SqlSession sqlSession) {
		List<Recruitment> rList = sqlSession.selectList("RecruitmentMapper.selectSearchRecruitment", recruitmentSearch);
		return rList;
	}


	@Override
	public int insertRecruitment(Recruitment recruitment, SqlSession sqlSession) {
		int result = sqlSession.insert("RecruitmentMapper.insertRecruitment", recruitment);
		return result;
	}

	@Override
	public Recruitment selectOneRecruitment(SqlSession sqlSession, int recruitmentNo) {
		Recruitment recruitment = sqlSession.selectOne("RecruitmentMapper.selectOneRecruitment",recruitmentNo);
		return recruitment;
	}

	@Override
	public int updateCountRecruitment(int recruitmentNo, SqlSession sqlSession) {
		int result = sqlSession.update("RecruitmentMapper.updateCountRecruitment", recruitmentNo);
		return result;
	}

	

}
