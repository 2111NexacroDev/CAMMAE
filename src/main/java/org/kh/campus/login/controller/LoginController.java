package org.kh.campus.login.controller;

import org.kh.campus.login.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class LoginController {

	@Autowired
	private static LoginService lService;
	
	public String loginType() {
		return null;
	}
}
