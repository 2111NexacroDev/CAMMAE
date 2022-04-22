package org.kh.campus.recruitment.store;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.Recruitment;

public interface RecruitmentStore {

	public int insertRecruitment(Recruitment recruitment, SqlSession sqlSession);

}
