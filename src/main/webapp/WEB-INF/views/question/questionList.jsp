<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판</title>
<style>
.left {
	width: 32%;
	float: left;
}

.center {
	width: 50%;
	float: left;
}


.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 600px;
	padding: 30px 30px 30px 30px;
}

h3{
	color : #10412C;
}

.btn{
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}

/* .right {
	width: 20%;
	float: left;
} */
</style>
</head>

<body>
	<div class="left">1</div>
	<div class="center">
			<h3 id="b-title">질의응답 게시판</h3>
			<br>
			<div><button class="btn" onclick="location.href='/question/registerView'">글쓰기</button></div>
			<br>
			<table width="600px" border="1">
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>
					<th>조회수</th>
				</tr>
				<c:forEach items="${qList }" var="question">
				
				<tr>
					<td>${question.questionNo }</td>
					<c:url var="qDetail" value="/question/detail">
						<c:param name="questionNo" value="${question.questionNo}"></c:param>
					</c:url>
					<td><a href="${qDetail}">${question.questionTitle }</a></td>					
					<td>${question.questionWriter }</td>
					<td>${question.questionDate }</td>
					<td>${question.questionCount }</td>
				</tr>
			
				</c:forEach>
			</table>

	</div>
</body>
</html>