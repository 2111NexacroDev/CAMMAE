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
<input type="hidden" name="port_no" value="${portfolio.port_no}"/>

제목  <span>${portfolio.port_title}</span><br>
이름  <span>${portfolio.port_name}</span><br>
학번  <span>${portfolio.port_student_no}</span><br>
학과명 <span>${portfolio.port_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</span><br>
전화번호  <span>${portfolio.port_student_number}</span><br>
자격증 첨부 <span>${portfolio.port_license}</span><br>
수상이력 첨부 <span>${portfolio.port_award_history}</span><br>
작성날짜 <span>${portfolio.port_writerDate}</span><br>
내용 <span>${portfolio.port_content}</span><br>
단과대학 <span>${portfolio.port_university_code}</span>

<div class="list_btn">
	<a id="list_l" href="/portfolio/updateView.kh?port_no=${portfolio.port_no}"><button>수정</button></a>
	<a id="list_l" href="/portfolio/delete.kh?port_no=${portfolio.port_no}"><button>삭제</button></a>
</div>
</body>
</html>