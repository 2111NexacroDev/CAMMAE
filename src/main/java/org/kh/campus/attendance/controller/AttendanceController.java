package org.kh.campus.attendance.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.kh.campus.attendance.domain.Attendance;
import org.kh.campus.attendance.service.AttendanceService;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
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
		int studentNo = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
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
		int professorNo = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("professorNo", Integer.toString(professorNo));
		List<Attendance>aList = aService.printAttProfessor(attInfo);
		
		System.out.println(aList.toString() +"test11");
	
		result.addDataSet("out_subject", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value = "/attendance/profSeachStuInfo.kh", method = RequestMethod.POST)
	public NexacroResult printProfSearchStu(HttpSession session, @ParamDataSet(name="in_subject")DataSet subject
			, @ParamVariable(name="lectureName") String lectureName) throws Exception {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		int professorNo = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("professorNo", Integer.toString(professorNo));
		attInfo.put("lectureName", lectureName);
		
		System.out.println(lectureName +"name");
		
		
		List<Attendance>aList = aService.printAttProfessorSearchStu(attInfo);
	
		result.addDataSet("out_stuInfo", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	@RequestMapping(value = "/attendance/profSeachAllStuInfo.kh", method = RequestMethod.POST)
	public NexacroResult printProfAllSearchStu(HttpSession session, @ParamDataSet(name="in_subject")DataSet subject
			, @ParamVariable(name="lectureName") String lectureName) throws Exception {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("lectureName", lectureName);
		
		System.out.println(lectureName +"name");
		
		
		List<Attendance>aList = aService.printAttProfessorAllSearchStu(attInfo);
	
		result.addDataSet("out_stuInfo", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	
	
	
	@RequestMapping(value = "/attendance/register.kh", method = RequestMethod.POST)
	public NexacroResult registerScholar(@ParamDataSet(name = "insInfo", required = false) DataSet inStu, @ParamVariable(name="lectureName") String lectureName,HttpSession session) throws Exception {

		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int aResult = 0;
		int count = 0;
		for(int i = 0; i < inStu.getRowCount(); i++) {
			String studentName =dsGet(inStu,i, "studentName");
			int lectureNo = Integer.parseInt(dsGet(inStu, i, "lectureNo"));
			int studentNo = Integer.parseInt(dsGet(inStu, i, "studentNo"));
			String attStatus = dsGet(inStu, i, "attStatus");
	
			Attendance attendance = new Attendance(
					studentName,
					lectureName,
					lectureNo,
					studentNo,
					attStatus
					);
			
			count = aService.countAttendance(attendance);
			
			if(attStatus!=null && attStatus!="" && count ==0) {
			aResult = aService.registerAttendance(attendance); 
			}
		}
		
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;	
	

	  }
	
	
	
	@RequestMapping(value = "/attendance/stuInfo.kh", method = RequestMethod.POST)
	public NexacroResult printStuInfo(HttpSession session,@ParamVariable(name="lectureName") String lectureName) throws Exception {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		int studentNo = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("studentNo", Integer.toString(studentNo));
		attInfo.put("lectureName", lectureName);
		List<Attendance>aList = aService.printAttStudentInfo(attInfo);
		result.addDataSet("out_sub", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	@RequestMapping(value = "/attendance/prfIssue.kh", method = RequestMethod.POST)
	public NexacroResult printProfIssue(HttpSession session, @ParamDataSet(name="in_profIssue")DataSet issue ) throws Exception {
		String strErrorMsg = "START";
		int nErrorCode= 0;
		NexacroResult result = new NexacroResult();
		int professorNo = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		HashMap<String , String> attInfo = new HashMap<String ,String>();
		attInfo.put("professorNo", Integer.toString(professorNo));
		List<Attendance>aList = aService.printAttProfIssue(attInfo);
		result.addDataSet("out_prfIssue", aList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	@RequestMapping(value = "/attendance/stu_prfIssue.kh", method = RequestMethod.POST)
	public NexacroResult updateProfIssue(
			@ParamVariable (name = "attNo") int attNo) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
//		int lectureNo = Integer.parseInt(dsGet(stuProfIssue, 0, "lectureNo"));
//		int studentNo = Integer.parseInt(dsGet(stuProfIssue, 0, "studentNo"));
		

		aService.modifyObjectChange(attNo);

		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);

		return result;
	}
	 
	   
	   @RequestMapping(value = "attendance/prfIssueUpdate.kh", method = RequestMethod.POST)
	   public NexacroResult updateStatus(
	         @ParamDataSet(name = "in_profIssue") DataSet updateIssue) throws Exception {
	      int nErrorCode = 0;
	      String strErrorMsg = "START";
	      NexacroResult result = new NexacroResult();

	      int lectureNo = Integer.parseInt(dsGet(updateIssue, 0, "lectureNo"));
	      int studentNo = Integer.parseInt(dsGet(updateIssue, 0, "studentNo"));
	      String attStatus = dsGet(updateIssue, 0, "attStatus");
	      Attendance attendance = new Attendance(lectureNo, studentNo, attStatus);

	      aService.modifyStatusChange(attendance);

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
