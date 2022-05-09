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
		// RowType에 따라서 INSERT OR UPDATEㅎㅎ
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
						student.setStudentPassword(Integer.toString(studentNo));
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
	@RequestMapping(value="/manager/mPrfUpdate.kh", method=RequestMethod.POST)
	public NexacroResult changeAllProfessor(
			@ParamDataSet(name="in_prf") 	DataSet inPrf
			) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int 	i;
		
		// DELETE
		// 삭제했던 로우가 있으면 for문으로 반복해서 삭제
		for(i = 0; i < inPrf.getRemovedRowCount(); i++) {
			int sPrfNo = (Integer)inPrf.getRemovedData(i,  "professorNo");
			mService.deleteProfessor(sPrfNo);
			}
		
		// INSERT, UPDATE
		// RowType에 따라서 INSERT OR UPDATE
				int iResult = 0;
				int uResult = 0;
				for(i = 0; i < inPrf.getRowCount(); i++) {
					int rowType = inPrf.getRowType(i);
					int professorNo 	 = Integer.parseInt(dsGet(inPrf, i, "professorNo"));
					String departmentName = dsGet(inPrf, i, "departmentName");
					String professorName = dsGet(inPrf, i, "professorName");
					String professorBirth 	 = dsGet(inPrf, i, "professorBirth");
					String professorAddress 	 = dsGet(inPrf, i, "professorAddress");
					String professorPhonenumber 	 = dsGet(inPrf, i, "professorPhonenumber");
					String professorEmail = dsGet(inPrf, i, "professorEmail");
					String professorPassword 	 = dsGet(inPrf, i, "professorNo");
					String universityCode = dsGet(inPrf, i, "universityCode");
					String chk = "0";
					Professor professor = new Professor(
							professorNo
							,	departmentName
							, 	professorName
							, 	professorBirth
							, 	professorAddress
							, 	professorPhonenumber
							, 	professorEmail
							, 	professorPassword
							,	universityCode
							,	chk);
					if( rowType == DataSet.ROW_TYPE_INSERTED) {
						iResult += mService.registerProfessor(professor);
					}else if( rowType == DataSet.ROW_TYPE_UPDATED) {
						String sPrfNo = inPrf.getSavedData(i, "professorNo").toString();
						professor.setProfessorNo(Integer.parseInt(sPrfNo));
						uResult += mService.modifyrProfessor(professor);
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
	@RequestMapping(value="/manager/magUpdate.kh", method=RequestMethod.POST)
	public NexacroResult changeAllManager(
			@ParamDataSet(name="in_mag") 	DataSet inMag
			) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int 	i;
		
		// DELETE
		// 삭제했던 로우가 있으면 for문으로 반복해서 삭제
		for(i = 0; i < inMag.getRemovedRowCount(); i++) {
			int sMagNo = (Integer)inMag.getRemovedData(i,  "managerNo");
			mService.deleteManager(sMagNo);
			}
		
		// INSERT, UPDATE
		// RowType에 따라서 INSERT OR UPDATE
				int iResult = 0;
				int uResult = 0;
				for(i = 0; i < inMag.getRowCount(); i++) {
					int rowType = inMag.getRowType(i);
					int managerNo 	 = Integer.parseInt(dsGet(inMag, i, "managerNo"));
					String managerName = dsGet(inMag, i, "managerName");
					String managerBirth = dsGet(inMag, i, "managerBirth");
					String managerAddress 	 = dsGet(inMag, i, "managerAddress");
					String managerPhonenumber 	 = dsGet(inMag, i, "managerPhonenumber");
					String managerEmail 	 = dsGet(inMag, i, "managerEmail");
					String managerPassword = dsGet(inMag, i, "managerPassword");
					String managerTeam 	 = dsGet(inMag, i, "managerTeam");
					Manager manager = new Manager(
							managerNo
							,	managerName
							, 	managerBirth
							, 	managerAddress
							, 	managerPhonenumber
							, 	managerEmail
							, 	managerPassword
							, 	managerTeam);
					if( rowType == DataSet.ROW_TYPE_INSERTED) {
						iResult += mService.registerManager(manager);
					}else if( rowType == DataSet.ROW_TYPE_UPDATED) {
						String sMagNo = inMag.getSavedData(i, "managerNo").toString();
						manager.setManagerNo(Integer.parseInt(sMagNo));
						uResult += mService.modifyrManager(manager);
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
