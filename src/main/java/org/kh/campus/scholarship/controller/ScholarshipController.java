package org.kh.campus.scholarship.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.kh.campus.manager.domain.Manager;
import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.scholarship.service.ScholarshipService;
import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class ScholarshipController {
	@Autowired
	private ScholarshipService sService;
	@Autowired
	private StudentService stdService;

	@RequestMapping(value = "/scholarship/scholarAccept.kh", method = RequestMethod.POST)
	public NexacroResult updateScholarAccept(
			@ParamDataSet(name = "ins_scholarship", required = false) DataSet scholarshipAccept) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		for(int i = 0; i<scholarshipAccept.getRowCount(); i++){
			int scholarship_student_no = Integer.parseInt(dsGet(scholarshipAccept, i, "scholarship_student_no"));

			Scholarship scholarship = new Scholarship(scholarship_student_no);
			sService.modifyScholarAccept(scholarship);
		
		}
	
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/scholarship/scholarDenine.kh", method = RequestMethod.POST)
	public NexacroResult updateScholarDenine(
			@ParamDataSet(name = "ins_scholarship", required = false) DataSet scholarshipAccept) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		for(int i = 0; i<scholarshipAccept.getRowCount(); i++){
			int scholarship_student_no = Integer.parseInt(dsGet(scholarshipAccept, i, "scholarship_student_no"));
			
			Scholarship scholarship = new Scholarship(scholarship_student_no);
			sService.modifyScholarDenine(scholarship);
		}
	
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/scholarship/scholarResult.kh", method = RequestMethod.GET)
	public NexacroResult printScholarResult(HttpSession session) {
		int studentNo = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Scholarship> sList = sService.printScholarResult(studentNo);
		result.addDataSet("out_scholarshipResult", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/scholarship/scholarInfo.kh", method = RequestMethod.POST)
	public NexacroResult printAllScholar(@ParamDataSet(name = "in_scholar", required = false) DataSet dsScholar,
			HttpSession session) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();

		String scholarship_year = dsGet(dsScholar, 0, "scholarship_year");
		String scholarship_term = dsGet(dsScholar, 0, "scholarship_term");
		String scholarship_college = dsGet(dsScholar, 0, "scholarship_college");
		int scholarship_manager_no = ((Manager) (session.getAttribute("loginManager"))).getManagerNo();
		System.out.println(scholarship_manager_no + "test");
		Scholarship scholarship = new Scholarship(scholarship_year, scholarship_term, scholarship_college,
				scholarship_manager_no);
		List<Scholarship> sList = sService.printAllScholar(scholarship);
		result.addDataSet("out_scholarship", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/scholarship/register.kh", method = RequestMethod.POST)
	public NexacroResult registerScholar(@ParamDataSet(name = "in_ds_year", required = false) DataSet inYear,
			@ParamDataSet(name = "in_ds_term", required = false) DataSet inTerm, HttpSession session) throws Exception {

		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int aResult = 0;

		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());

		int scholarship_inno = 0;
		int scholarship_avg_grade = student.getStudentGrade();
		String scholarship_year = dsGet(inYear, 0, "scholarship_year");
		String scholarship_term = dsGet(inTerm, 0, "scholarship_term");
		String scholarship_status = "";
		int scholarship_amount = 0;
		String scholarship_name = student.getStudentName();
		String scholarship_phonenumber = student.getStudentPhonenumber();
		String scholarship_college = student.getDepartmentName();
		int scholarship_student_no = student.getStudentNo();
		String chk = "";
		int scholarship_manager_no = 0;
		Scholarship scholarship = new Scholarship(scholarship_inno, scholarship_avg_grade, scholarship_year,
				scholarship_term, scholarship_status, scholarship_amount, scholarship_name, scholarship_phonenumber,
				scholarship_college, scholarship_student_no, chk, scholarship_manager_no);
		aResult = sService.registerScholar(scholarship);
		return result;

	  }

	@RequestMapping(value = "/scholarship/stuInfo.kh", method = RequestMethod.GET)
	public NexacroResult printStu(HttpSession session) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		 Student student = stdService.printStudent(((Student)(session.getAttribute("loginUser"))).getStudentNo());

		String scholarship_name = student.getStudentName();
		int scholarship_student_no =student.getStudentNo();
		String scholarship_phonenumber = student.getStudentPhonenumber();
		Scholarship scholarship = new Scholarship(scholarship_name, scholarship_student_no, scholarship_phonenumber);
		
		result.addDataSet("out_scholarship", scholarship);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	public String dsGet(DataSet ds, int rowno, String colid) throws Exception
	{
	    String value;
	    value = ds.getString(rowno, colid);
	    if( value == null )
	        return "";
	    else
	        return value;
	} 

}