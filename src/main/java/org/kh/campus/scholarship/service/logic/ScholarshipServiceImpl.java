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
	public List<Scholarship> printScholarResult(int studentNo) {
		List<Scholarship>sList = sStore.selectResult(sqlSession, studentNo);
		return sList;
	}

	@Override
	public int registerScholar(Scholarship scholarship) {
		int result = sStore.registerScholar(sqlSession, scholarship);
		return result;
	}

	@Override
	public int modifyScholarAccept(Scholarship scholarship) {
		int result = sStore.updateScholarAccept(sqlSession, scholarship);
		return result;
	}

	/*
	 * @Override public List<Scholarship> printAllScholar(Scholarship scholarship,
	 * int managerNo) { List<Scholarship> sList =
	 * sStore.selectAllScholar(sqlSession, scholarship, managerNo); return sList;
	 * 
	 * }
	 */
	@Override
	public List<Scholarship> printAllScholar(Scholarship scholarship) {
		List<Scholarship> sList = sStore.selectAllScholar(sqlSession, scholarship);
		return sList;
		
	}	
   

	@Override
	public int modifyScholarDenine(Scholarship scholarship) {
		int result = sStore.updateScholarDenine(sqlSession, scholarship);
		return result;
		
	}



	

}
