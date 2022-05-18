package org.kh.campus.attendance.store.logic;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.attendance.domain.Attendance;
import org.kh.campus.attendance.store.AttendanceStore;
import org.springframework.stereotype.Repository;

@Repository
public class AttendanceStoreLogic implements AttendanceStore {

	@Override
	public List<Attendance> selectAttStudent(SqlSession sqlSession, HashMap<String, String> attInfo) {
		List<Attendance>aList = sqlSession.selectList("AttendanceMapper.selectAttStudent", attInfo);
		return aList;
	}

	@Override
	public List<Attendance> selectAttProf(SqlSession sqlSession, HashMap<String, String> attInfo) {
		List<Attendance>aList = sqlSession.selectList("AttendanceMapper.selectAttProf", attInfo);
		return aList;
	}

	@Override
	public List<Attendance> selectAttProfSearchStu(SqlSession sqlSession, HashMap<String, String> attInfo) {
		List<Attendance>aList = sqlSession.selectList("AttendanceMapper.selectAttProfSearchStu", attInfo);
		return aList;
	}

}
