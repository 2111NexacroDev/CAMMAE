package org.kh.campus.graduation.controller;


import java.util.List;

import javax.servlet.http.HttpSession;

import org.kh.campus.graduation.domain.Graduation;
import org.kh.campus.graduation.service.GraduationService;

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
		String graduationStatus = "";
		String graduationFilename = "";
		String graduationFilerename = "";
		String graduationFilepath = "";
		String graduationStuName = dsGet(inGra, 0, "graduationStuName");
		String graduationStuDep = dsGet(inGra, 0, "graduationStuDep");
		int graduationStuGrade = Integer.parseInt(dsGet(inGra,0, "graduationStuGrade"));
		String graduationYear ="";
		String chk = "";
	
		Graduation graduation = new Graduation(studentNo,graduationStatus,graduationFilename ,graduationFilerename, graduationFilepath, graduationStuName, graduationStuDep, graduationStuGrade, graduationYear, chk);
		int  studentGrade = student.getStudentGrade();
		if(studentGrade >=4) {			
			aResult = gService.registerGraduation(graduation);
		}
		return result;

	}

	
	@RequestMapping(value = "/graduation/stuInfo.kh", method = RequestMethod.GET)
	public NexacroResult printStu(HttpSession session) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		 Student student = stdService.printStudent(((Student)(session.getAttribute("loginUser"))).getStudentNo());
		String graduationStuName = student.getStudentName();
		String graduationStuDep = student.getDepartmentName();
		int graduationStuAvg = student.getStudentGrade();
	
		Graduation graduation = new Graduation(graduationStuName, graduationStuDep, graduationStuAvg);
		
		result.addDataSet("out_graduation", graduation);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
	@RequestMapping(value = "/graduation/magInfo.kh", method = RequestMethod.POST)
	public NexacroResult printScholarResult(HttpSession session, @ParamDataSet(name="in_info")DataSet info)throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		 String graduationYear = dsGet(info, 0 , "graduationYear"); 
		 String graduationStuDep = dsGet(info, 0, "graduationStuDep");
		Graduation graduation = new Graduation(graduationYear, graduationStuDep );
		List<Graduation> gList = gService.printGraduationResult(graduation);
		System.out.println();
		result.addDataSet("out_stu", gList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		
		return result;
	}
	
	   @RequestMapping(value = "/graduation/magAccept.kh", method = RequestMethod.POST)
	   public NexacroResult updateGraduationAccept(
	         @ParamDataSet(name = "in_stuInfo", required = false) DataSet graduationAccept) throws Exception {
	      int nErrorCode = 0;
	      String strErrorMsg = "START";
	      NexacroResult result = new NexacroResult();
	      
	      for(int i = 0; i<graduationAccept.getRowCount(); i++){
	         int studentNo = Integer.parseInt(dsGet(graduationAccept, i, "studentNo"));

	      Graduation graduation = new Graduation(studentNo);
	         gService.modifyGraduationAccept(graduation);
	      
	      }
	   
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
