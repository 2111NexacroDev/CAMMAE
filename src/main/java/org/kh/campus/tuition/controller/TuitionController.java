package org.kh.campus.tuition.controller;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

import org.kh.campus.tuition.domain.Tuition;
import org.kh.campus.tuition.service.TuitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class TuitionController {
	
	@Autowired
	private TuitionService tService;
	
	//관리자 등록금 고지서 학과별 학생 조회
	@RequestMapping(value = "/tuition/list.kh", method = RequestMethod.POST)
	public NexacroResult tuitionPrint(@ParamVariable(name = "uniCode1") String uniCode) {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		List<Tuition> tList = tService.printTuition(uniCode);

		if (!tList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Fail";
		}

		result.addDataSet("tuitionList", tList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	//관리자 등록금 고지서 등록
	@RequestMapping(value="/tuition/save.kh", method = RequestMethod.POST)
	public NexacroResult tuitionSave(@ParamDataSet(name="in_tui")DataSet inTui) throws Exception {
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		
		for(int i = 0 ; i < inTui.getRowCount(); i++) {
			int rowType = inTui.getRowType(i);
			if(rowType == DataSet.ROW_TYPE_UPDATED) {
				String departmentName = dsGet(inTui, i, "departmentName");
				String studentGrade = dsGet(inTui, i, "studentGrade");
				int studentNo = Integer.parseInt(dsGet(inTui, i, "studentNo"));
				String studentName = dsGet(inTui, i, "studentName");
				String tuitionTerm = dsGet(inTui, i, "tuitionTerm");
				int tuitionFee = Integer.parseInt(dsGet(inTui, i, "tuitionFee"));
				String tuitionScholarship = dsGet(inTui, i, "tuitionScholarship");
				int tuitionTotal = 0;
				if(tuitionScholarship.contentEquals("Y")) {
					tuitionTotal = tuitionFee - 2500000;
				}else {
					tuitionTotal = tuitionFee;
				}
				int tuitionNo = 0;
				String tutionYear = Integer.toString(Calendar.getInstance().get(Calendar.YEAR));
				String tuitionStatus = "";
				String chk = "";
				Tuition tuition = new Tuition(
						tuitionNo
						,studentNo
						,tutionYear
						,tuitionTerm
						,studentName
						,tuitionFee
						,tuitionScholarship
						,tuitionTotal
						,tuitionStatus
						,chk
						,departmentName
						,studentGrade
						);
				int uResult = tService.registerTuition(tuition);
			}
		}
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	//관리자 등록금 고지서 전체 조회 
	@RequestMapping(value = "tuition/allList.kh", method = RequestMethod.POST)
	public NexacroResult searchAll(@ParamDataSet(name="searchAll")DataSet searchAll) throws Exception {
		
		int nErrorCode = 0;
		String strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		String year =  dsGet(searchAll, 0, "year");
		String season =  dsGet(searchAll, 0, "season");
		String uniCode =  dsGet(searchAll, 0, "uniCode");
		
		HashMap<String, String> search = new HashMap<String, String>();
		search.put("year",year);
		search.put("season",season);
		search.put("uniCode",uniCode);
		List<Tuition> tList = tService.printAllList(search);

		if (!tList.isEmpty()) {
			nErrorCode = 0;
			strErrorMsg = "SUCC";
		} else {
			nErrorCode = 0;
			strErrorMsg = "Fail";
		}

		result.addDataSet("tuitionList", tList);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		return result;
	}
	
	
		//관리자 등록금 고지서 수정
		@RequestMapping(value="/tuition/saveUpdate.kh", method = RequestMethod.POST)
		public NexacroResult tuitionSaveUpdate(@ParamDataSet(name="in_tui")DataSet inTui) throws Exception {
			int nErrorCode = 0;
			String strErrorMsg = "START";
			NexacroResult result = new NexacroResult();
			
			for(int i = 0 ; i < inTui.getRowCount(); i++) {
				int rowType = inTui.getRowType(i);
				if(rowType == DataSet.ROW_TYPE_UPDATED) {
					String departmentName = dsGet(inTui, i, "departmentName");
					String studentGrade = dsGet(inTui, i, "studentGrade");
					int studentNo = Integer.parseInt(dsGet(inTui, i, "studentNo"));
					String studentName = dsGet(inTui, i, "studentName");
					String tuitionTerm = dsGet(inTui, i, "tuitionTerm");
					int tuitionFee = Integer.parseInt(dsGet(inTui, i, "tuitionFee"));
					String tuitionScholarship = dsGet(inTui, i, "tuitionScholarship");
					int tuitionTotal = 0;
					if(tuitionScholarship.contentEquals("Y")) {
						tuitionTotal = tuitionFee - 2500000;
					}else {
						tuitionTotal = tuitionFee;
					}
					int tuitionNo = Integer.parseInt(dsGet(inTui, i, "tuitionNo"));
					System.out.println(tuitionNo +"test11");
					String tutionYear = Integer.toString(Calendar.getInstance().get(Calendar.YEAR));
					String tuitionStatus = dsGet(inTui, i, "tuitionStatus");
					String chk = "";
					Tuition tuition = new Tuition(
							tuitionNo
							,studentNo
							,tutionYear
							,tuitionTerm
							,studentName
							,tuitionFee
							,tuitionScholarship
							,tuitionTotal
							,tuitionStatus
							,chk
							,departmentName
							,studentGrade
							);
					int uResult = tService.updateTuition(tuition);
				}
			}
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			return result;
		}
	
	
	//학생 등록금 고지서 조회
		@RequestMapping(value = "tuition/studentList.kh",method = RequestMethod.POST)
		public NexacroResult printOne(@ParamDataSet(name="searchAll")DataSet searchAll) throws Exception {
			NexacroResult result = new NexacroResult();
			int nErrorCode = 0;
			String strErrorMsg = "START";
			
			// 검색 키 벨류 맵으로 넣기
			String year =  dsGet(searchAll, 0, "year");
			String season =  dsGet(searchAll, 0, "season");
			HashMap<String, String> search = new HashMap<String, String>();
			search.put("year",year);
			search.put("season",season);
			
			// 세션에서 학번 가져오기
			int studentNo = 3;
			search.put("studentNo",Integer.toBinaryString(studentNo));
			
			List<Tuition> tList = tService.printOneList(search);
			
			if (!tList.isEmpty()) {
				nErrorCode = 0;
				strErrorMsg = "SUCC";
			} else {
				nErrorCode = 0;
				strErrorMsg = "Fail";
			}

			result.addDataSet("tuitionList", tList);
			result.addVariable("ErrorCode", nErrorCode);
			result.addVariable("ErrorMsg", strErrorMsg);
			return result;
		}
	
	
		

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Dataset value
			public String  dsGet(DataSet ds, int rowno, String colid) throws Exception
			{
			    String value;
			    value = ds.getString(rowno, colid);
			    if( value == null )
			        return "";
			    else
			        return value;
			} 
	
	
	
	
	
	
	
	
	
	
}
