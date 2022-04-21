<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상담신청 페이지</title>
</head>
<body>
	<h1>상담관리</h1>
	<h3>상담신청 입력</h3>
	<form action="/consultant/register.kh" method="post">
		상담제목 <input type="text" name="cons_title"><br>
		이름 <input type="text" name="student_name"><br>
		학번 <input type="text" name="student_no"><br>
		학과명 <input type="text" name="cons_college"><br>
		전화번호 <input type="text" name="student_number"><br>
		상담희망날짜 <input type="date" name="cons_date"><br>
		상담희망시간 <input type="time" name="cons_time"><br>
		상담사 <select name="cons_counselor">
			<option></option>
			</select> 
		상담내용<textarea name="cons_content">
		</textarea><br>
		<input type="submit" value="상담신청">
	</form>
</body>
</html>