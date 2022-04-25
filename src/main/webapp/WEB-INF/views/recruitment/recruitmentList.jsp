<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>채용공고</title>
</head>
<body>
	<h1 align="center">채용공고목록</h1>
	<br><br>
	<div><button onclick="location.href='/recruitment/writeView.kh'">글쓰기</button></div>
	<table align="center" width="600" border="1">
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일</th>
			<th>조회수</th>
			<th>마감일</th>
		</tr>
		<c:forEach items="${rList }" var="recruitment">
		<tr>
			<td>${recruitment.recruitmentNo }</td>
			<c:url var="rDetail" value="/recruitment/detail.kh">
				<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
			</c:url>
			<td><a href="${rDetail }">${recruitment.recruitmentTitle }</a></td>
			<td>${recruitment.recruitmentWriter }</td>
			<td>${recruitment.recruitmentDate }</td>
			<td>${recruitment.recruitmentCount }</td>
			<td>${recruitment.recruitmentEndDate }</td>
		</tr>
		</c:forEach>
	</table>
	<br>
		<div align="center">
			<form action="/recruitment/search.kh" method="get">
				<select name="searchCondition">
					<option value="title">제목</option>
				</select> 
				<input type="text" name="searchValue"> <input class="btn" type="submit" value="검색">
			</form>
		</div>
</body>
</html>