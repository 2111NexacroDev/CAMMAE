package org.kh.campus.tuition.controllr;

import org.kh.campus.tuition.service.TuitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class TuitionController {
	
	@Autowired
	private TuitionService tService;

}
