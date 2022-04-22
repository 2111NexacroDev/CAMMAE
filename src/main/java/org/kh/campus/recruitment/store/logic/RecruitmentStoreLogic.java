package org.kh.campus.recruitment.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.store.RecruitmentStore;
import org.springframework.stereotype.Repository;

@Repository
public class RecruitmentStoreLogic implements RecruitmentStore{

	@Override
	public int insertRecruitment(Recruitment recruitment, SqlSession sqlSession) {
		int result = sqlSession.insert("RecruitmentMapper.insertRecruitment", recruitment);
		return result;
	}

}
