package org.kh.campus.recruitment.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.PageInfo;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.domain.RecruitmentSearch;

import org.kh.campus.recruitment.service.RecruitmentService;
import org.kh.campus.recruitment.store.RecruitmentStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//채용공고
@Service
public class RecruitmentServiceImpl implements RecruitmentService{

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private RecruitmentStore rStore;
	
	@Override
	public List<Recruitment> printAllRecruitment(PageInfo pi) {
		List<Recruitment> rList = rStore.selectAllRecruitment(sqlSession, pi);
		return rList;
	}
	
	@Override
	public List<Recruitment> printSearchRecruitment(RecruitmentSearch recruitmentSearch) {
		List<Recruitment> searchList = rStore.selectSearchRecruitment(recruitmentSearch, sqlSession);
		return searchList;
	}
	
	@Override
	public int registerRecruitment(Recruitment recruitment) {
		int result = rStore.insertRecruitment(recruitment, sqlSession);
		return result;
	}
	
	@Override
	public int modifyRecruitment(Recruitment recruitment) {
		int result = rStore.updateRecruitment(recruitment, sqlSession);
		return result;
	}


	@Override
	public Recruitment printOneRecruitment(int recruitmentNo) {
		Recruitment recruitment = rStore.selectOneRecruitment(sqlSession, recruitmentNo);
		return recruitment;
	}

	@Override
	public int recruitmentCountUpdate(int recruitmentNo) {
		int result = rStore.updateCountRecruitment(recruitmentNo, sqlSession);
		return result;
	}

	@Override
	public int getListCount() {
		int totalCount = rStore.selectListCount(sqlSession);
		return totalCount;
	}

	@Override
	public int removeRecruitment(int recruitmentNo) {
		int result = rStore.deleteRecruitment(recruitmentNo, sqlSession);
		return result;
	}

	
	



}
