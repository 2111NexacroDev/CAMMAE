<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항</title>
</head>
<body>
	<h1 align="center">공지사항</h1>
	<br><br>
	<div><button onclick="location.href='/notice/writeView.kh'">글쓰기</button></div>
	<table align="center" width="600" border="1">
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일</th>
			<th>조회수</th>
		</tr>
		<c:forEach items="${nList }" var="notice">
			<tr>
				<td>${notice.noticeNo }</td>
				<c:url var="nDetail" value="/notice/detail.kh">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<td><a href="${nDetail }">${notice.noticeTitle }</a></td>
				<td>${notice.noticeWriter }</td>
				<td>${notice.noticeDate }</td>
				<td>${notice.noticeCount }</td>
			</tr>		
		</c:forEach>
	</table>
</body>
</html>