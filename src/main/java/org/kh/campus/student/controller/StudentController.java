package org.kh.campus.student.controller;


import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class StudentController {
	@Autowired
	private static StudentService sService;
	
	// 학생 정보 조회
	public NexacroResult printStudent() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int studentNo = 0;
		
		Student student = sService.printStudent(studentNo);
		
		result.addDataSet("out_emp", student);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 학생 정보 수정
	public NexacroResult modifyStudent() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
}
