package org.kh.campus.attendance.service.logic;

import java.util.Calendar;
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
		// 현재 날짜를 가지고와서 년도와 학기 구하기
		Calendar now = Calendar.getInstance();
		String year = Integer.toString(now.get(Calendar.YEAR));
		int month = now.get(Calendar.MONTH) +1;
		String season ="";
		if(month>6) {
			season = "2학기";
		} else {
			season = "1학기";
		}
		
		attInfo.put("year", year);
		attInfo.put("season", season);

		 List<Attendance>aLsit = aStore.selectAttStudent(sqlSession, attInfo);
		return aLsit;
	}

	@Override
	public List<Attendance> printAttProfessor(HashMap<String, String> attInfo) {
		List<Attendance>aList= aStore.selectAttProf(sqlSession, attInfo);		
		return aList;
	}

	@Override
	public List<Attendance> printAttProfessorSearchStu(HashMap<String, String> attInfo) {
		List<Attendance>aList= aStore.selectAttProfSearchStu(sqlSession, attInfo);	
		return aList;
	}
	
}
