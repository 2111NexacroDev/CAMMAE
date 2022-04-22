package org.kh.campus.market.controller;

import org.kh.campus.market.service.MarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MarketController {

	@Autowired
	private MarketService mService;
	
	//게시글 등록 페이지
	@RequestMapping(value="/market/registerView")
	public String marketWirteView(Model model) {
		
		return "market/marketWriteForm";
	}
}
