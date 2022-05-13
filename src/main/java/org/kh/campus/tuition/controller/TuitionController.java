package org.kh.campus.tuition.controller;

import java.util.List;

import org.kh.campus.tuition.domain.Tuition;
import org.kh.campus.tuition.service.TuitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class TuitionController {
	
	@Autowired
	private TuitionService tService;
	
	//학과별 학생 조회
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
}
