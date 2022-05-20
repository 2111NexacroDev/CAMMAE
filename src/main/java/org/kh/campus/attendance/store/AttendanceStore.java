package org.kh.campus.attendance.store;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.attendance.domain.Attendance;

public interface AttendanceStore {

	List<Attendance> selectAttStudent(SqlSession sqlSession, HashMap<String, String> attInfo);

	List<Attendance> selectAttProf(SqlSession sqlSession, HashMap<String, String> attInfo);

	List<Attendance> selectAttProfSearchStu(SqlSession sqlSession, HashMap<String, String> attInfo);

	int insertAttendance(SqlSession sqlSession, Attendance attendance);

	List<Attendance> selectAttendanceStuInfo(SqlSession sqlSession, HashMap<String, String> attInfo);

	List<Attendance> selectAttProfIssue(SqlSession sqlSession, HashMap<String, String> attInfo);

	int updateObjectChange(SqlSession sqlSession, Attendance attendance);

}
