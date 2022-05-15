package org.kh.campus.grade.controller;


import java.util.HashMap;
import java.util.List;

import org.kh.campus.grade.domain.Grade;
import org.kh.campus.grade.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
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
	@PostMapping("/grade/stdGrade.kh")
	public NexacroResult printGradeStudent(@ParamDataSet(name="In_stdSearch") DataSet search) throws Exception {
		
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		// 세션에서 학번 가져오기
		int studentNo = 0;
		
		// 데이터셋에서 search key와 value 가져오기
		String year = dsGet(search, 0, "gradeYear");
		String season = dsGet(search, 0, "gradeSeason");
		
		// 리스트 조회에 필요한 검색 정보와 학번 저장
		HashMap<String, String> searchInfo = new HashMap<String, String>();
		searchInfo.put("year", year);
		searchInfo.put("season", season);
		searchInfo.put("studentNo", Integer.toString(studentNo));
		
		// 리스트 가져오기
		List<Grade> gList = gService.printGradeStudent(searchInfo);
		
		result.addDataSet("out_stdGrade", gList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 학생 이의신청 피드백 조회
	@PostMapping("/grade/stdObjection.kh")
	public NexacroResult printFeedbackStudent(@ParamDataSet(name="In_stdSearch") DataSet search) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();

		// 세션에서 학번 가져오기
		int studentNo = 0;
		
		// 데이터셋에서 search key와 value 가져오기
		String year = dsGet(search, 0, "gradeYear");
		String season = dsGet(search, 0, "gradeSeason");
		
		// 리스트 조회에 필요한 검색 정보와 학번 저장
		HashMap<String, String> searchInfo = new HashMap<String, String>();
		searchInfo.put("year", year);
		searchInfo.put("season", season);
		searchInfo.put("studentNo", Integer.toString(studentNo));
		
		// 리스트 가져오기
		List<Grade> gList = gService.printFeedbackStudent(searchInfo);
		
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
	
	// 교수의 교과목 조회
	@PostMapping("/grade/subject.kh")
	public NexacroResult printSubject(@ParamDataSet(name="In_stdSearch") DataSet search) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		// 세션에서 교수번호 가져오기
		int prfNo = 0;
		
		// 데이터셋에서 search key와 value 가져오기
		String year = dsGet(search, 0, "gradeYear");
		String season = dsGet(search, 0, "gradeSeason");
		
		// 리스트 조회에 필요한 검색 정보와 학번 저장
		HashMap<String, String> searchInfo = new HashMap<String, String>();
		searchInfo.put("year", year);
		searchInfo.put("season", season);
		searchInfo.put("professorNo", Integer.toString(prfNo));
		
		// 교수의 년도와 학기에따른 과목 리스트 가져오기
		List<Grade> sList = gService.printSubject(searchInfo);
		
		// 가져온 과목 리스트 맨앞에 전체 추가하기
		Grade grade = new Grade();
		grade.setGradeSubject("전체");
		sList.add(0, grade);
		
		result.addDataSet("out_sList", sList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 교수 성적 조회
	@PostMapping("/grade/prfGrade.kh")
	public NexacroResult printGradeProfessor(@ParamDataSet(name="In_stdSearch") DataSet search) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		// 세션에서 교수번호 가져오기
		int prfNo = 0;
		
		// 데이터셋에서 search key와 value 가져오기
		String year = dsGet(search, 0, "gradeYear");
		String season = dsGet(search, 0, "gradeSeason");
		String subject = dsGet(search, 0, "gradeSubject");
		
		// 리스트 조회에 필요한 검색 정보와 학번 저장
		HashMap<String, String> searchInfo = new HashMap<String, String>();
		searchInfo.put("year", year);
		searchInfo.put("season", season);
		searchInfo.put("professorNo", Integer.toString(prfNo));
		searchInfo.put("subject", subject);
		
		List<Grade> gList = gService.printGradeProfessor(searchInfo);
		
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
			String gradeAvg = dsGet(inGrd, i, "gradeAvg");
			Grade grade = new Grade(lectureNo,
					studentNo, gradeScore, gradeAvg);
				
			gService.modifyGrade(grade);
		}

		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
	
		return result;
	}
	
	// 교수 이의신청 조회
	@PostMapping("/grade/prfObjection.kh")
	public NexacroResult printFeedbackProfessor(@ParamDataSet(name="In_stdSearch") DataSet search) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		// 세션에서 교수번호 가져오기
		int prfNo = 0;
		
		// 데이터셋에서 search key와 value 가져오기
		String year = dsGet(search, 0, "gradeYear");
		String season = dsGet(search, 0, "gradeSeason");
		String subject = dsGet(search, 0, "gradeSubject");
		
		// 리스트 조회에 필요한 검색 정보와 학번 저장
		HashMap<String, String> searchInfo = new HashMap<String, String>();
		searchInfo.put("year", year);
		searchInfo.put("season", season);
		searchInfo.put("professorNo", Integer.toString(prfNo));
		searchInfo.put("subject", subject);
		
		List<Grade> gList = gService.printFeedbackProfessor(searchInfo);
		
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
