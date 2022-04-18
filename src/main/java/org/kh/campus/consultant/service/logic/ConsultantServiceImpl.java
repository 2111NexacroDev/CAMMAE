package org.kh.campus.consultant.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.common.PageInfo;
import org.kh.campus.consultant.domain.Consultant;
import org.kh.campus.consultant.domain.ConsultantReply;
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
		List<Consultant>cList = cStore.selectAllCons(sqlSession);
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
	public List<ConsultantReply> printByConReply(PageInfo pi) {
		List<ConsultantReply> crList = cStore.selectByConReply(sqlSession);
		return crList;
	}

	@Override
	public List<Consultant> printAdminAllCons(PageInfo pi) {
		List<Consultant> cList = cStore.selectAdminAllCons(sqlSession);
		return cList;
	}

	@Override
	public Consultant printAdminDetailCons(String consultant_title) {
		Consultant consultant = cStore.selectAdminDetailCons(sqlSession, consultant_title);
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

}
