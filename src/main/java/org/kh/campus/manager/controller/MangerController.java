package org.kh.campus.manager.controller;

import org.kh.campus.manager.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class MangerController {

	@Autowired
	private static ManagerService mService;
	
	// 학생 정보 조회
	public NexacroResult printAllStudent() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	// 학생 정보 등록 수정 삭제
	public NexacroResult changeAllStudent() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	// 교수 정보 조회
	public NexacroResult printAllProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	// 교수 정보 등록 수정 삭제
	public NexacroResult changeAllProfessor() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	// 관리자 정보 조회
	public NexacroResult printAllManager() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	// 관리자 정보 등록 수정 삭제
	public NexacroResult changeAllManager() {
		NexacroResult result = new NexacroResult();
		
		return result;
	}
}
