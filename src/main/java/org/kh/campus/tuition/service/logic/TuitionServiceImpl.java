package org.kh.campus.tuition.service.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.tuition.service.TuitionService;
import org.kh.campus.tuition.store.TuitionStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TuitionServiceImpl implements TuitionService {

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private TuitionStore tStore;
}
