package org.kh.campus.professor.controller;

import org.kh.campus.professor.domain.Professor;
import org.kh.campus.professor.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class ProfessorController {

	@Autowired
	private ProfessorService pService;
	
	// 교수 정보 조회
	@RequestMapping(value="/professor/prfInfo.kh", method=RequestMethod.GET)
	public NexacroResult printProfessor() {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int professorNo = 0;
		
		Professor professor = pService.printProfessor(professorNo);
		
		result.addDataSet("out_prfInfo", professor);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 교수 정보 수정
	public NexacroResult modifyProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
}
