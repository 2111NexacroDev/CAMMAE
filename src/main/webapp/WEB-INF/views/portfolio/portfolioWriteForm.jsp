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
<form action="/portfolio/register.kh" method="post" enctype="multipart/form-data">
 제목 <input type="text" name="port_title"><br>
 이름 <input type="text" name="port_name"><br>
 학번 <input type="text" name="port_student_no"><br>
 학과명 <input type="text" name="port_college"><br>
 전화번호 <input type="text" name="port_student_number"><br>
 자격증 첨부 <input type="file" name="uploadFile" value="첨부파일"><br>
수상이력 첨부 <input type="file" name="uploadFile1" value="첨부파일"><br>
 내용 <textarea name="port_content"></textarea>
 <input type="submit" value="등록">
</form>

</body>
</html>