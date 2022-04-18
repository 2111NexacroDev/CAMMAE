package org.kh.campus.student.controller;


import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

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
		
		result.addDataSet("out_stdInfo", student);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 학생 정보 수정
	public NexacroResult modifyStudent(
			 @ParamDataSet(name="in_std") 	DataSet inStd
			) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int studentNo = 0;
		
		for(int i = 0; i < inStd.getRowCount(); i++) {
			int rowType = inStd.getRowType(i);
			String studentPhonenumber = dsGet(inStd, i, "studentPhonenumber");
			String studentAddress = dsGet(inStd, i, "studentAddress");
			String studentEmail = dsGet(inStd, i, "studentEmail");
			Student studnt = new Student(
					studentPhonenumber,
					studentAddress,
					studentEmail
					);
			if( rowType == DataSet.ROW_TYPE_UPDATED) {
				
				sService.printStudent(studentNo);
		}
		}
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
