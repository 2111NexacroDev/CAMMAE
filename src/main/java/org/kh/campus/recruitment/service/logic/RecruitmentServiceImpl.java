package org.kh.campus.recruitment.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.recruitment.domain.Recruitment;
import org.kh.campus.recruitment.service.RecruitmentService;
import org.kh.campus.recruitment.store.RecruitmentStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecruitmentServiceImpl implements RecruitmentService{

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private RecruitmentStore rStore;
	
	
	@Override
	public int registerRecruitment(Recruitment recruitment) {
		int result = rStore.insertRecruitment(recruitment, sqlSession);
		return result;
	}

}
