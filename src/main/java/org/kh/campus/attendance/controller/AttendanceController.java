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
	
	
	@RequestMapping(value = "/attendance/subInfo.kh", method = RequestMethod.GET)
	public NexacroResult printStu(HttpSession session) {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		/*
		 * int studentNo =
		 * (((Student)(session.getAttribute("loginUser"))).getStudentNo());
		 */
		int studentNo = 0;
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("studentNo", Integer.toString(studentNo));
		List<Attendance>aList = aService.printAttStudent(attInfo);
	
		result.addDataSet("out_subject", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value = "/attendance/profInfo.kh", method = RequestMethod.GET)
	public NexacroResult printProf(HttpSession session) {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		/*
		 * int studentNo =
		 * (((Student)(session.getAttribute("loginUser"))).getStudentNo());
		 */
		int professorNo = 0;
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("professorNo", Integer.toString(professorNo));
		List<Attendance>aList = aService.printAttProfessor(attInfo);
	
		result.addDataSet("out_subject", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value = "/attendance/profSeachStuInfo.kh", method = RequestMethod.POST)
	public NexacroResult printProfSearchStu(HttpSession session, @ParamDataSet(name="in_subject")DataSet subject) throws Exception {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		/*
		 * int studentNo =
		 * (((Student)(session.getAttribute("loginUser"))).getStudentNo());
		 */
		int professorNo = 0;
		String lectureName = dsGet(subject, 0, "lectureName");
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("professorNo", Integer.toString(professorNo));
		attInfo.put("lectureName", lectureName);
		
		
		List<Attendance>aList = aService.printAttProfessorSearchStu(attInfo);
	
		result.addDataSet("out_stuInfo", aList);
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
