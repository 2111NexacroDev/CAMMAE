package org.kh.campus.recruitment.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.PageInfo;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.domain.RecruitmentSearch;


public interface RecruitmentStore {

	public List<Recruitment> selectAllRecruitment(SqlSession sqlSession, PageInfo pi);
	public List<Recruitment> selectSearchRecruitment(RecruitmentSearch recruitmentSearch, SqlSession sqlSession);
	public Recruitment selectOneRecruitment(SqlSession sqlSession, int recruitmentNo);
	public int insertRecruitment(Recruitment recruitment, SqlSession sqlSession);
	public int updateRecruitment(Recruitment recruitment, SqlSession sqlSession);
	public int updateCountRecruitment(int recruitmentNo, SqlSession sqlSession);
	public int deleteRecruitment(int recruitmentNo, SqlSession sqlSession);
	public int selectListCount(SqlSession sqlSession, RecruitmentSearch recruitmentSearch);


}
