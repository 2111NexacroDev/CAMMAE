package org.kh.campus.scholarship.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.scholarship.service.ScholarshipService;
import org.kh.campus.scholarship.store.ScholarshipStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScholarshipServiceImpl implements ScholarshipService {
	@Autowired
	private ScholarshipStore sStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Scholarship> printAllScholar() {
		List<Scholarship> sList = sStore.selectAllScholar(sqlSession);
		return sList;
	}

	@Override
	public int insertScholar(Scholarship scholarship) {
		int result = sStore.insertScholar(sqlSession, scholarship);
		return result;
	}

	@Override
	public List<Scholarship> printScholarResult() {
		List<Scholarship>sList = sStore.selectResult(sqlSession);
		return sList;
	}

	@Override
	public int registerScholar(Scholarship scholarship) {
		int result = sStore.registerScholar(sqlSession, scholarship);
		return result;
	}

}
