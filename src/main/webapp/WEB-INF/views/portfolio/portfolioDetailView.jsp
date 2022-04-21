<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>포트폴리오 관리</h1>
제목 <input type="text" name="port_title" value="${portfolio.port_title}"><br>
이름 <input type="text" name="port_name" value="${portfolio.port_nmae}"><br>
학번 <input type="text" name="port_student_no" value="${portfolio.port_student_no}"><br>
학과명 <input type="text" name="port_college" value="${portfolio.port_college}"><br>
전화번호 <input type="text" name="port_student_number" value="${portfolio.port_student_number}"><br>
자격증 첨부 <input type="text" name="port_license" value="${portfolio.port_license}">
수상이력 첨부 <input type="text" name="port_award_history" value="${portfolio.port_award_history}"><br>
작성날짜 <input type="text" name="port_writerDate" value="${portfolio.port_writerDate}">
내용 <input type="text" name="port_content" value="${portfolio.port_content}" ><br>
<div class="list_btn">
	<a id="list_l"  href="/portfolio/updateView.kh?port_no=${portfolio.port_no}">수정</a>
	<a id="list_l" href="/portfolio/delete.kh?port_no=${portfolio.port_no}">삭제</a>
</div>
</body>
</html>