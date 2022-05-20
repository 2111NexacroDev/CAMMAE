package org.kh.campus.attendance.service;

import java.util.HashMap;
import java.util.List;

import org.kh.campus.attendance.domain.Attendance;
import org.kh.campus.attendance.domain.AttendanceIssue;

public interface AttendanceService {

		public List<Attendance> printAttStudent(HashMap<String, String> attInfo);

		public List<Attendance> printAttProfessor(HashMap<String, String> attInfo);

		public List<Attendance> printAttProfessorSearchStu(HashMap<String, String> attInfo);

		public int registerAttendance(Attendance attendance);

		public List<Attendance> printAttStudentInfo(HashMap<String, String> attInfo);

		public List<Attendance> printAttProfIssue(HashMap<String, String> attInfo);

		public int modifyObjectChange(Attendance attendance);

}
