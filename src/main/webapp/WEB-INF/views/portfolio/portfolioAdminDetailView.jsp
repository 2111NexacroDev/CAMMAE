<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>포트폴리오 관리</h1>
	<input type="hidden" name="port_no" value="${portfolio.port_no}">
	상담제목 <span>${portfolio.port_title}</span><br>
	이름 <span>${portfolio.port_name}</span><br>
	학번 <span>${portfolio.port_student_no }</span><br>
	학과명 <span>${portfolio.port_college}</span><br>
	전화번호 <span>${portfolio.port_student_number }</span><br>
	자격증첨부 <span><a href="../../../resources/puploadFiles/${portfolio.port_licenseRename}" download>${portfolio.port_license}</a></span><br>
	수상이력 첨부<span><a href="../../../resources/puploadFiles/${portfolio.port_award_historyRename}" download>${portfolio.port_award_history}</a></span><br>
	작성날짜 <span>${portfolio.port_writerDate}</span><br>
	상담내용 <span>${portfolio.port_content}</span>

</body>
</html>