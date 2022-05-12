package org.kh.campus.tuition.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.tuition.domain.Tuition;
import org.kh.campus.tuition.service.TuitionService;
import org.kh.campus.tuition.store.TuitionStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TuitionServiceImpl implements TuitionService{

	@Autowired
	private TuitionStore tStore;
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Tuition> printTuition(String uniCode) {
		List<Tuition> tList = tStore.selectAllTuition(sqlSession, uniCode);
		return tList;
	}

}
