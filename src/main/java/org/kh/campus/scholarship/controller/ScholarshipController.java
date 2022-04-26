package org.kh.campus.scholarship.controller;

import java.util.List;

import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.scholarship.service.ScholarshipService;
import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class ScholarshipController {
	@Autowired
	private ScholarshipService sService;
	@Autowired
	private StudentService stdService;

//	@RequestMapping(value = "", method = RequestMethod.GET)
	NexacroResult insertScholarshipInfo(
			@ParamDataSet(name = "in_scholarship") DataSet inScholar, @ParamVariable(name = "in_var") String inVar)
			throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int iResult = 0;
		Scholarship scholarship = new Scholarship();
		iResult += sService.insertScholar(scholarship);
		return result;
	}

	@RequestMapping(value = "/scholarship/scholarResult.kh", method = RequestMethod.GET)
	public NexacroResult printScholarResult() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Scholarship> sList = sService.printScholarResult();
		result.addDataSet("out_scholarshipResult", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/scholarship/scholarInfo.kh", method = RequestMethod.GET)
	public NexacroResult printAllScholar() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Scholarship> sList = sService.printAllScholar();
		result.addDataSet("out_scholarship", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}

	@RequestMapping(value = "/scholarship/register.kh", method = RequestMethod.POST)
	public NexacroResult registerScholar(
			@ParamDataSet(name = "in_admin_scholar") DataSet inAdminScholar) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int aResult = 0;
		Student student = stdService.printStudent(0);
		int scholarship_inno = 0;
		int scholarship_avg_grade = student.getStudentGrade() ;
		String scholarship_year = dsGet(inAdminScholar, 0, "scholarship_year");
		String scholarship_term = dsGet(inAdminScholar,0,"scholarship_term");
		String scholarship_status = "";
		int scholarship_amount = Integer.parseInt(dsGet(inAdminScholar, 0, "scholarship_amount"));
		String scholarship_name = student.getStudentName();
		String scholarship_phonenumber = student.getStudentPhonenumber();
		String scholarship_college = student.getUniversityCollege();
		int scholarship_student_no = student.getStudentNo();
		Scholarship scholarship = new Scholarship(
				scholarship_inno
				,scholarship_avg_grade
				,scholarship_year 
				, scholarship_term
				, scholarship_status
				, scholarship_amount
				, scholarship_name
				, scholarship_phonenumber
				, scholarship_college
				, scholarship_student_no);
		aResult = sService.registerScholar(scholarship);
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
