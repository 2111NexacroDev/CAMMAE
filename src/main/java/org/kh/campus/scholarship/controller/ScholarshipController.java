package org.kh.campus.scholarship.controller;

import java.util.List;

import org.kh.campus.scholarship.domain.Scholarship;
import org.kh.campus.scholarship.service.ScholarshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;




@Controller
public class ScholarshipController {
	@Autowired
	private ScholarshipService sService;
	
	/*
	 * @RequestMapping(value="", method=RequestMethod.GET) //�������б� ��û public
	 * NexacroResult insertScholarshipInfo(
	 * 
	 * @ParamDataSet(name="in_scholarship") DataSet inScholar
	 * , @ParamVariable(name="in_var") String inVar) throws Exception{ int
	 * nErrorCode = 0; String strErrorMsg = "START"; NexacroResult result = new
	 * NexacroResult(); int iResult = 0; Scholarship scholarship = new
	 * Scholarship(); iResult += sService.insertScholar(scholarship); return result;
	 * }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) //��û�� �������б� ��� ��ȸ
	 * public NexacroResult printScholarResult() { List<Scholarship> sList =
	 * sService.printScholarResult(); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) // ������ ��û���б� ���
	 * ��ȸ public NexacroResult printAllScholar() { List<Scholarship> sList =
	 * sService.printAllScholar(); return null; }
	 * 
	 * @RequestMapping(value="", method=RequestMethod.GET) //������ �������б� ���
	 * public NexacroResult registerScholar(
	 * 
	 * @ParamDataSet(name="in_admin_scholar") DataSet inAdminScholar
	 * , @ParamVariable(name="in_var2") String inVar2) throws Exception { int
	 * nErrorCode = 0; String strErrorMsg = "START"; NexacroResult result = new
	 * NexacroResult(); int aResult = 0; Scholarship scholarship = new
	 * Scholarship(); aResult += sService.registerScholar(scholarship); return
	 * result;
	 * 
	 * }
	 * 
	 */
}
