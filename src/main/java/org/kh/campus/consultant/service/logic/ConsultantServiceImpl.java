package org.kh.campus.consultant.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
import org.kh.campus.consultant.domain.PageInfo;
import org.kh.campus.consultant.service.ConsultantService;
import org.kh.campus.consultant.store.ConsultantStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsultantServiceImpl implements ConsultantService {
	@Autowired
	private ConsultantStore cStore;
	@Autowired
	private SqlSession sqlSession;
		
	@Override
	public List<Consultant> printAllCons(PageInfo pi) {
		List<Consultant>cList = cStore.selectAllCons(sqlSession, pi);
		return cList;
	}

	@Override
	public int insertCons(Consultant consultant) {
		int result = cStore.insertCons(sqlSession , consultant);
		return result;
	}

	@Override
	public Consultant printDetailCons(String consultant_title) {
		Consultant consultant = cStore.selectDetailCons(sqlSession, consultant_title);
		return consultant;
	}

	@Override
	public List<Consultant> printAdminAllCons(PageInfo pi) {
		List<Consultant> cList = cStore.selectAdminAllCons(sqlSession, pi);
		return cList;
	}

	@Override
	public Consultant printAdminDetailCons(Integer consultant_no) {
		Consultant consultant = cStore.selectAdminDetailCons(sqlSession, consultant_no);
		return consultant;
	}

	@Override
	public int insertAdminConsReply(ConsultantReply consultantReply) {
		int result = cStore.insertAdminConsReply(sqlSession, consultantReply);
		return result;
	}

	

	@Override
	public int getListCount() {
		int totalCount = cStore.selectListCount(sqlSession);
		return totalCount;
	}

	@Override
	public List<ConsultantReply> printAllAdminReply(int cons_no) {
		List<ConsultantReply>crList = cStore.selectAllAdminReply(sqlSession,cons_no);
		return crList;
	}


}
