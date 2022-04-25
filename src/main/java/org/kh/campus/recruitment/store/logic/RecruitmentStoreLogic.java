package org.kh.campus.recruitment.store.logic;

import java.util.List;

import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.PageInfo;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.domain.RecruitmentSearch;
import org.kh.campus.recruitment.store.RecruitmentStore;
import org.springframework.stereotype.Repository;

@Repository
public class RecruitmentStoreLogic implements RecruitmentStore{

	@Override
	public List<Recruitment> selectAllRecruitment(SqlSession sqlSession, PageInfo pi) {
		int limit = pi.getRecruitmentLimit();
		int currentPage = pi.getCurrentPage();
		int offset = (currentPage -1) * limit;
		RowBounds rowBounds = new RowBounds(offset,limit);
		List<Recruitment> rList = sqlSession.selectList("RecruitmentMapper.selectAllRecruitment",pi, rowBounds);
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
	public int updateRecruitment(Recruitment recruitment, SqlSession sqlSession) {
		int result = sqlSession.update("RecruitmentMapper.updateRecruitment",recruitment);
		return result;
	}

	@Override
	public int updateCountRecruitment(int recruitmentNo, SqlSession sqlSession) {
		int result = sqlSession.update("RecruitmentMapper.updateCountRecruitment", recruitmentNo);
		return result;
	}

	@Override
	public int selectListCount(SqlSession sqlSession) {
		int totalCount = sqlSession.selectOne("RecruitmentMapper.selectListCount");
		return totalCount;
	}

	@Override
	public int deleteRecruitment(int recruitmentNo, SqlSession sqlSession) {
		int result = sqlSession.delete("RecruitmentMapper.deleteRecruitment", recruitmentNo);
		return result;
	}

	
	

}
