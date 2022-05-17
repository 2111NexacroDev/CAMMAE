package org.kh.campus.login.service.logic;

import java.util.HashMap;

import org.apache.commons.mail.HtmlEmail;
import org.apache.ibatis.session.SqlSession;
import org.kh.campus.login.service.LoginService;
import org.kh.campus.login.store.LoginStore;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	private LoginStore lStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public Student loginStudent(Student student) {
		Student std = lStore.selectStudent(sqlSession, student);
		return std;
	}
	@Override
	public Professor loginProfessor(Professor professor) {
		Professor prf = lStore.selectProfessor(sqlSession, professor);
		return prf;
	}
	@Override
	public Manager loginManager(Manager manager) {
		Manager mag = lStore.selectManager(sqlSession, manager);
		return mag;
	}
	@Override
	public String findPwd(HashMap<String, String> userInfo) {
		String type = userInfo.get("type");
		String  result ="";
		if(type.contentEquals("student")) {
			result = lStore.selectPwdStd(sqlSession, userInfo);
		} else if(type.contentEquals("professor")) {
			result = lStore.selectPwdPrf(sqlSession, userInfo);
		} else {
			result = lStore.selectPwdMag(sqlSession, userInfo);
		}
		return result;
	}
	
	// 타입에 따라 비밀번호 일치 여부
	@Override
	public int pwdSame(String type, int id, String pwd) {
		int result = 0;
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("id", Integer.toString(id));
		map.put("pwd", pwd);
		
		if(type.contentEquals("std")) {
			result = lStore.stdPwdSame(sqlSession, map);
		} else if(type.contentEquals("prf")) {
			result = lStore.prfPwdSame(sqlSession, map);
		} else {
			result = lStore.magPwdSame(sqlSession, map);
		}
			
			
		return result;
	}
	
	// 타입에 따라 비밀번호 변경
	@Override
	public int pwdChange(String type, int id, String pwd) {
		int result = 0;
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("id", Integer.toString(id));
		map.put("pwd", pwd);
		
		if(type.contentEquals("std") || type.contentEquals("student")) {
			result = lStore.stdPwdChange(sqlSession, map);
		} else if(type.contentEquals("prf") || type.contentEquals("professor")) {
			result = lStore.prfPwdChange(sqlSession, map);
		} else {
			result = lStore.magPwdChange(sqlSession, map);
		}
			
		return result;
	}
	
	// 이메일 전송
	@Override
	public void sendEmail(HashMap<String, String> userInfo) throws Exception {
		// Mail Server 설정
		String charSet = "utf-8";
		String hostSMTP = "smtp.gmail.com"; //네이버 이용시 smtp.naver.com
		String hostSMTPid = "Daeilad00@gmail.com";
		String hostSMTPpwd = "daeilad00!!";

		// 보내는 사람 EMail, 제목, 내용
		String fromEmail = "Daeilad00@gmail.com";
		String fromName = "대일대학교";
		String subject = "";
		String msg = "";

		subject = "대일대학교 임시 비밀번호 입니다.";
		msg += "<div align='center' style='border:1px solid black; font-family:verdana'>";
		msg += "<h3 style='color: blue;'>";
		msg += userInfo.get("name") + "님의 임시 비밀번호 입니다. 비밀번호를 변경하여 사용하세요.</h3>";
		msg += "<p>임시 비밀번호 : ";
		msg += userInfo.get("pw") + "</p></div>";

		// 받는 사람 E-Mail 주소
		String mail = userInfo.get("email");
		try {
			HtmlEmail email = new HtmlEmail();
			email.setDebug(true);
			email.setCharset(charSet);
			email.setSSL(true);
			email.setHostName(hostSMTP);
			email.setSmtpPort(465); //네이버 이용시 587

			email.setAuthentication(hostSMTPid, hostSMTPpwd);
			email.setTLS(true);
			email.addTo(mail, charSet);
			email.setFrom(fromEmail, fromName, charSet);
			email.setSubject(subject);
			email.setHtmlMsg(msg);
			email.send();
		} catch (Exception e) {
			System.out.println("메일발송 실패 : " + e);
		}
	}
}
