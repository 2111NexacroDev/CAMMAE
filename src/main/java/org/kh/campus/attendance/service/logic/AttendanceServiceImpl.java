package org.kh.campus.attendance.service.logic;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.attendance.domain.Attendance;
import org.kh.campus.attendance.domain.AttendanceIssue;
import org.kh.campus.attendance.service.AttendanceService;
import org.kh.campus.attendance.store.AttendanceStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttendanceServiceImpl implements AttendanceService{
	@Autowired
	private AttendanceStore aStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Attendance> printAllAttendance() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<AttendanceIssue> printAllAttendanceIssue() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Attendance> printAttStudent(HashMap<String, String> attInfo) {
		 List<Attendance>aLsit = aStore.selectAttStudent(sqlSession, attInfo);
		return aLsit;
	}
	
}
