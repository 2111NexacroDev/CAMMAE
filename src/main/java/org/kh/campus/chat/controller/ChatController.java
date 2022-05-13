package org.kh.campus.chat.controller;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ChatController {

	@RequestMapping(value = "/chat.kh", method = RequestMethod.GET)
	public String chatView(Locale locale, Model model) {
		return "chat/chat";
	}

}
