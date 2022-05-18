package org.kh.campus.tuition.service.logic;

import java.util.HashMap;
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

	@Override
	public int registerTuition(Tuition tuition) {	
		int count = tStore.selectTuition(sqlSession, tuition);
		if(count == 0) {
			int result = tStore.insertTuition(sqlSession, tuition);			
			return result;
		}else {
			return 0;
		}
	}

	@Override
	public List<Tuition> printAllList(HashMap<String, String> search) {
		 List<Tuition> tList = tStore.selectAll(sqlSession, search);
		return tList;
	}

	@Override
	public int updateTuition(Tuition tuition) {
		int result = tStore.updateSave(sqlSession, tuition);
		return result;
	}

	@Override
	public List<Tuition> printOneList(HashMap<String, String> search) {
		 List<Tuition> tList = tStore.selectOne(sqlSession, search);
			return tList;
	}

}
