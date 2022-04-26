<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지원현황</title>
</head>
<body>
	<h1 align="center">지원현황</h1>
	<br><br>
	<table align="center" width="600" border="1">
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>지원일</th>
			<th>파일이름</th>
		</tr>
		<c:forEach items="${sList }" var="support">
			<tr>
				<td>${support.supportNo }</td>
				<td>${support.recruitmentTitle }</td>
				<td>${support.studentNo }</td>
				<td>${support.supportDate }</td>
				<td>${support.supFileName }<br>
				${support.supPortFileName }</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>