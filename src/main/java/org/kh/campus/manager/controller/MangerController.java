package org.kh.campus.manager.controller;

import java.util.List;

import org.kh.campus.manager.domain.Manager;
import org.kh.campus.manager.service.ManagerService;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class MangerController {

	@Autowired
	private ManagerService mService;
	
	// 학생 정보 조회
	@RequestMapping(value="/manager/stdInfo.kh", method=RequestMethod.GET)
	public NexacroResult printAllStudent() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		List<Student> sList = mService.printAllStudent();
		
		result.addDataSet("out_stdAllInfo", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	// 학생 정보 등록 수정 삭제
	@RequestMapping(value="/manager/mStdUpdate.kh", method=RequestMethod.POST)
	public NexacroResult changeAllStudent(
			@ParamDataSet(name="in_std") 	DataSet inStd) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int 	i;
		
		// DELETE
		// 삭제했던 로우가 있으면 for문으로 반복해서 삭제
		for(i = 0; i < inStd.getRemovedRowCount(); i++) {
			int sStdNo = (Integer)inStd.getRemovedData(i,  "studentNo");
			mService.deleteStudent(sStdNo);
			}
		
		// INSERT, UPDATE
		// RowType에 따라서 INSERT OR UPDATE
				int iResult = 0;
				int uResult = 0;
				for(i = 0; i < inStd.getRowCount(); i++) {
					int rowType = inStd.getRowType(i);
					int studentNo 	 = Integer.parseInt(dsGet(inStd, i, "studentNo"));
					String universityCollege = dsGet(inStd, i, "universityCollege");
					String departmentName = dsGet(inStd, i, "departmentName");
					String studentName 	 = dsGet(inStd, i, "studentName");
					int studentGrade 	 = Integer.parseInt(dsGet(inStd, i, "studentGrade"));
					String studentBirth 	 = dsGet(inStd, i, "studentBirth");
					String studentAddress = dsGet(inStd, i, "studentAddress");
					String studentPhonenumber 	 = dsGet(inStd, i, "studentPhonenumber");
					String studentEmail 	 = dsGet(inStd, i, "studentEmail");
					String professorNo 	 = dsGet(inStd, i, "professorNo");
					String studentState 	 = dsGet(inStd, i, "studentState");
					String professorName 	 = dsGet(inStd, i, "professorName");
					Student student = new Student(
							studentNo
							,	universityCollege
							, 	departmentName
							, 	studentName
							, 	studentGrade
							, 	studentBirth
							, 	studentAddress
							, 	studentPhonenumber
							, 	studentEmail
							, 	professorNo
							,	studentState
							,	professorName);
					if( rowType == DataSet.ROW_TYPE_INSERTED) {
						iResult += mService.registerStudent(student);
					}else if( rowType == DataSet.ROW_TYPE_UPDATED) {
						String sStdNo = inStd.getSavedData(i, "studentNo").toString();
						student.setStudentNo(Integer.parseInt(sStdNo));
						uResult += mService.modifyrStudent(student);
					}
				}
				if(iResult < 0 && uResult < 0) {
					nErrorCode = -1;
					strErrorMsg = "FAIL";
				}else {
					nErrorCode 	= 0;
					strErrorMsg = "SUCC";
				}
				result.addVariable("ErrorCode", nErrorCode);
				result.addVariable("ErrorMsg", strErrorMsg);
				return result;
	}
	// 교수 정보 조회
	@RequestMapping(value="/manager/prfInfo.kh", method=RequestMethod.GET)
	public NexacroResult printAllProfessor() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		List<Professor> pList = mService.printAllProfessor();
		
		result.addDataSet("out_prfAllInfo", pList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	// 교수 정보 등록 수정 삭제
	public NexacroResult changeAllProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 관리자 정보 조회
	@RequestMapping(value="/manager/magInfo.kh", method=RequestMethod.GET)
	public NexacroResult printAllManager() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		List<Manager> mList = mService.printAllManager();
		
		result.addDataSet("out_magAllInfo", mList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 관리자 정보 등록 수정 삭제
	public NexacroResult changeAllManager() {
		NexacroResult result = new NexacroResult();
		
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
