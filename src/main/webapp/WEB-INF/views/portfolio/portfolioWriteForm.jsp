<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>포트폴리오 관리</h1>
<h3>포트폴리오 등록</h3>

<c:if test="${empty sessionScope}">
	<jsp:forward page="/login/loginPage.kh" />
</c:if>
	
<c:if test="${not empty sessionScope}">
<form action="/portfolio/register.kh" method="post" enctype="multipart/form-data">
 제목 <input type="text" name="port_title"><br>
 이름 <input type="text" name="port_name" value="${loginUser.studentName}"><br> 
 학번 <input type="text" name="port_student_no" value="${loginUser.studentNo}"><br>
 학과명 <input type="text" name="port_college" value="${loginUser.universityCollege}"><br>
 전화번호 <input type="text" name="port_student_number" value="${loginUser.studentPhonenumber}"><br>
 자격증 첨부 <input type="file" name="uploadFile" value="첨부파일" multiple="multiple"><br>
수상이력 첨부 <input type="file" name="uploadFile1" value="첨부파일" multiple="multiple"><br>
 내용 <textarea name="port_content"></textarea><br>
 <input type="submit" value="등록">
</form>
</c:if>
</body>
</html>