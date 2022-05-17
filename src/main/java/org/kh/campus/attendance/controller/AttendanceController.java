package org.kh.campus.attendance.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.kh.campus.attendance.domain.Attendance;
import org.kh.campus.attendance.service.AttendanceService;
import org.kh.campus.grade.domain.Grade;
import org.kh.campus.graduation.domain.Graduation;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class AttendanceController {
	
	@Autowired
	private AttendanceService aService;
	
	
	@RequestMapping(value = "/attendance/subInfo.kh", method = RequestMethod.POST)
	public NexacroResult printStu(HttpSession session, @ParamDataSet(name="in_attendance")DataSet attendance) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		/*
		 * int studentNo =
		 * (((Student)(session.getAttribute("loginUser"))).getStudentNo());
		 */
		int studentNo = 0;
		String lectureName = dsGet(attendance, 0, "lectureName");
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("lectureName", lectureName);
		attInfo.put("studentNo", Integer.toString(studentNo));
		List<Attendance>aList = aService.printAttStudent(attInfo);
	
		result.addDataSet("out_subject", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	public String dsGet(DataSet ds, int rowno, String colid) throws Exception {
		String value;
		value = ds.getString(rowno, colid);
		if (value == null)
			return "";
		else
			return value;
		
	
	}
}
