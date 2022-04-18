package org.kh.campus.professor.controller;

import org.kh.campus.professor.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class ProfessorController {

	@Autowired
	private static ProfessorService pService;
	
	// 교수 정보 조회
	public NexacroResult printProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 교수 정보 수정
	public NexacroResult modifyProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
}
