package org.kh.campus.grade.controller;


import org.kh.campus.grade.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class GradeController {
	
	@Autowired
	private static GradeService gService;
	
	// 학생 성적 조회
	public NexacroResult printGradeStudent() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 학생 이의신청 조회
	public NexacroResult printFeedbackStudent() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 학생 이의 신청 등록
	public NexacroResult registerObjection() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 교수 성적 조회
	public NexacroResult printGradeProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 교수 성적 등록, 수정
	public NexacroResult changeGradeProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 교수 이의신청 조회
	public NexacroResult printFeedbackProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	// 교수 피드백 등록 수정 삭제
	public NexacroResult changeFeedbackProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
}
