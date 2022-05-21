package org.kh.campus.student.controller;


import javax.servlet.http.HttpSession;

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
public class StudentController {
	@Autowired
	private StudentService sService;
	
	// 학생 정보 조회
	@RequestMapping(value="/student/stdInfo.kh", method=RequestMethod.GET)
	public NexacroResult printStudent(HttpSession session) {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int studentNo = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
		
		Student student = sService.printStudent(studentNo);
		
		result.addDataSet("out_stdInfo", student);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 학생 정보 수정
	@RequestMapping(value="/student/stdUpdate.kh", method=RequestMethod.POST)
	public NexacroResult modifyStudent(
			 @ParamDataSet(name="in_std") 	DataSet inStd
			,HttpSession session) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int studentNo = ((Student) (session.getAttribute("loginUser"))).getStudentNo();
		String strSucc = "";
		
		String studentPhonenumber = dsGet(inStd, 0, "studentPhonenumber");
		String studentAddress = dsGet(inStd, 0, "studentAddress");
		String studentEmail = dsGet(inStd, 0, "studentEmail");
		Student student = new Student(
				studentAddress,
				studentPhonenumber,
				studentEmail
				);
		student.setStudentNo(studentNo);
			
		int result1 = sService.modifyStudent(student);
		
		if(result1>0) {
			strSucc = "성공";
		}

		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		result.addVariable("strSucc", strSucc);
	
		return result;
	}
	
	// Dataset value
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
