package org.kh.campus.graduation.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.kh.campus.graduation.domain.Graduation;
import org.kh.campus.graduation.service.GraduationService;
import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

public class GraduationController {
	@Autowired
	private GraduationService gService;
	
	@Autowired
	private StudentService stdService;
	@RequestMapping(value = "/graduation/register.kh", method = RequestMethod.POST)
	public NexacroResult registerScholar(
			@ParamDataSet(name = "in_ds_grad", required = false) DataSet inGra, HttpSession session) throws Exception {

		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int aResult = 0;
		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
		int studentNo = student.getStudentNo();
		String graduationStuName = dsGet(inGra, 0, "graduationStuName");
		String graduationStuDep = dsGet(inGra, 0, "graduationStuDep");
		int graduationStuAvg = Integer.parseInt(dsGet(inGra,0, "graduationStuAvg"));
		Graduation graduation = new Graduation(studentNo, graduationStuName, graduationStuDep, graduationStuAvg);
		//aResult = gService.registerGraduation(graduation);
		return result;

	}

	
	@RequestMapping(value = "/graduation/stuInfo.kh", method = RequestMethod.GET)
	public NexacroResult printStu(HttpSession session) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		Student student = stdService.printStudent(((Student) (session.getAttribute("loginUser"))).getStudentNo());
		int studentNo = student.getStudentNo();
		String graduationStuName = student.getStudentName();
		String graduationStuDep = student.getDepartmentName();
		int graduationStuAvg = student.getStudentGrade();
		Graduation graduation = new Graduation(studentNo, graduationStuName, graduationStuDep, graduationStuAvg);
		List<Graduation> gList = gService.printStuInfo(graduation);
		result.addDataSet("out_graduation", gList);
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
		
		//커밋용
	}
}
