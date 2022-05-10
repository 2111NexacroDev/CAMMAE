package org.kh.campus.grade.controller;


import java.util.List;

import org.kh.campus.grade.domain.Grade;
import org.kh.campus.grade.service.GradeService;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class GradeController {
	
	@Autowired
	private GradeService gService;
	
	// 학생 성적 조회
	@RequestMapping(value="/grade/stdGrade.kh", method=RequestMethod.GET)
	public NexacroResult printGradeStudent() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int studentNo = 0;
		
		List<Grade> gList = gService.printGradeStudent(studentNo);
		
		result.addDataSet("out_stdGrade", gList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 학생 이의신청 조회
	@RequestMapping(value="/grade/stdObjection.kh", method=RequestMethod.GET)
	public NexacroResult printFeedbackStudent() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int studentNo = 0;
		
		List<Grade> gList = gService.printFeedbackStudent(studentNo);
		
		result.addDataSet("out_stdGrade", gList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 학생 이의 신청 등록
	@RequestMapping(value="/grade/std_objection.kh", method=RequestMethod.POST)
	public NexacroResult registerObjection(
			@ParamDataSet(name="in_obj") DataSet stdObj
			) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		int lectureNo = Integer.parseInt(dsGet(stdObj, 0, "lectureNo"));
		String objectionContent = dsGet(stdObj, 0, "objectionContent");
		int studentNo = 0;
		
		Grade grade = new Grade(lectureNo, studentNo, objectionContent);
		
		gService.registerObjection(grade);

		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
	
		return result;
	}
	
	// 교수 성적 조회
	@RequestMapping(value="/grade/prfGrade.kh", method=RequestMethod.GET)
	public NexacroResult printGradeProfessor() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int prfNo = 0;
		
		List<Grade> gList = gService.printGradeProfessor(prfNo);
		
		result.addDataSet("out_stdGrade", gList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 교수 성적 입력(수정)
	@RequestMapping(value="/grade/gradeUpdate.kh", method=RequestMethod.POST)
	public NexacroResult changeGradeProfessor(
			@ParamDataSet(name="In_grade") DataSet inGrd
			) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		for(int i = 0; i < inGrd.getRowCount(); i++) {
			int lectureNo = Integer.parseInt(dsGet(inGrd, i, "lectureNo"));
			int studentNo = Integer.parseInt(dsGet(inGrd, i, "studentNo"));
			String gradeScore = dsGet(inGrd, i, "gradeScore");
			int gradeAvg = Integer.parseInt(dsGet(inGrd, i, "gradeAvg"));
			Grade grade = new Grade(lectureNo,
					studentNo, gradeScore, gradeAvg);
				
			gService.modifyGrade(grade);
		}

		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
	
		return result;
	}
	
	// 교수 이의신청 조회
	@RequestMapping(value="/grade/prfObjection.kh", method=RequestMethod.GET)
	public NexacroResult printFeedbackProfessor() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int prfNo = 1;
		
		List<Grade> gList = gService.printFeedbackProfessor(prfNo);
		
		result.addDataSet("out_stdGrade", gList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 교수 피드백 등록 수정 삭제
	@RequestMapping(value="/grade/fdupdate.kh", method=RequestMethod.POST)
	public NexacroResult changeFeedbackProfessor(
			@ParamDataSet(name="in_fdG") DataSet inFb) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();

		for(int i = 0; i < inFb.getRowCount(); i++) {
			String feedbackContent = dsGet(inFb, i, "feedbackContent");
			int studentNo 	 = Integer.parseInt(dsGet(inFb, i, "studentNo"));
			int lectureNo = Integer.parseInt(dsGet(inFb, i, "lectureNo"));
			Grade grade = new Grade(feedbackContent, lectureNo, studentNo);
			gService.registerFeedBack(grade);
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
