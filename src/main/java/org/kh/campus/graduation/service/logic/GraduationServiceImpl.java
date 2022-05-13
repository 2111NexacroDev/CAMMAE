package org.kh.campus.graduation.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.graduation.domain.Graduation;
import org.kh.campus.graduation.service.GraduationService;
import org.kh.campus.graduation.store.GraduationStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GraduationServiceImpl implements GraduationService {
	@Autowired
	private SqlSession sqlSession;
	@Autowired
	private GraduationStore gStore;
	
	@Override
	public List<Graduation> printStuInfo(Graduation graduation) {
		List<Graduation>gList = gStore.selectPrintStu(sqlSession, graduation);
		return gList;
	}

}
