package org.kh.campus.chat.controller;

import java.util.Locale;

import org.kh.campus.chat.domain.ChatRoom;
import org.kh.campus.chat.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ChatController {
	@Autowired
	private ChatService cService;

	@RequestMapping(value = "/chat.kh", method = RequestMethod.GET)
	public String chatView(String roomTitle, Locale locale, Model model, @RequestParam("marketNo") Integer marketNo) {
		ChatRoom chatRoom = cService.visitChatRoom(marketNo);
		if (chatRoom != null) {
			model.addAttribute("chatRoom", chatRoom);
			return "chat/chat";
		}
		return "chat/chat";
	}

}
