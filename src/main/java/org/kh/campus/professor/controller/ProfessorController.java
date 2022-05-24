package org.kh.campus.professor.controller;

import javax.servlet.http.HttpSession;

import org.kh.campus.professor.domain.Professor;
import org.kh.campus.professor.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

@Controller
public class ProfessorController {

	@Autowired
	private ProfessorService pService;
	
	// 교수 정보 조회
	@RequestMapping(value="/professor/prfInfo.kh", method=RequestMethod.GET)
	public NexacroResult printProfessor(HttpSession session) {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int professorNo = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		
		Professor professor = pService.printProfessor(professorNo);
		
		result.addDataSet("out_prfInfo", professor);
		result.addVariable("ErrorCode", nErrorCode);
		result.addVariable("ErrorMsg", strErrorMsg);
		
		return result;
	}
	
	// 교수 정보 수정
	@RequestMapping(value="/professor/prfUpdate.kh", method=RequestMethod.POST)
	public NexacroResult modifyProfessor(
			@ParamDataSet(name="in_prf") 	DataSet inPrf
			,HttpSession session) throws Exception {
		int 	nErrorCode = 0;
		String  strErrorMsg = "START";
		NexacroResult result = new NexacroResult();
		int professorNo = ((Professor) (session.getAttribute("loginProfessor"))).getProfessorNo();
		
		String professorAddress = dsGet(inPrf, 0, "professorAddress");
		String professorPhonenumber = dsGet(inPrf, 0, "professorPhonenumber");
		String professorEmail = dsGet(inPrf, 0, "professorEmail");
		Professor professor = new Professor(
				professorAddress,
				professorPhonenumber,
				professorEmail
				);
		professor.setProfessorNo(professorNo);
		
		pService.modifyProfessor(professor);
		
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
