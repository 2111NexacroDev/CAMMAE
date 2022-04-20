<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판 상세페이지</title>
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

h3 {
	color: #10412C;
}

.btn {
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}
</style>
</head>

<body>
	<div class="left">1</div>
	<div class="center">

		<h3 id="b-title">질의응답 게시판</h3>
		<br>
		<div>
			<c:url var="qModify" value="/question/modifyView">
				<c:param name="questionNo" value="${question.questionNo }"></c:param>
			</c:url>
			<button class="btn" onclick="location.href='${qModify }'">수정</button>
			<c:url var="qDelete" value="/question/delete">
				<c:param name="questionNo" value="${question.questionNo }"></c:param>
			</c:url>
			<button class="btn" onclick="location.href='${qDelete }'">삭제</button>
			<button class="btn" onclick="location.href='/question/list'">목록</button>
		</div>
		<br>
		<div class="c-main">
			<div class="title">${question.questionTitle }</div>
			<br>
			<div>${question.questionWriter }${question.questionDate }</div>

			<hr style="width: 585px; text-align: center;">
			<div class="content" style="padding: 10px;">
				${question.questionContent }
				<c:if test="${not empty question.questionFileReNeme }">
					<br>
					<span> <img
						src="/resources/questionUploadFiles/${question.questionFileReNeme }" style="width:500px;">
					</span>
				</c:if>

			</div>

			<hr style="width: 585px; text-align: center;">

		</div>

	</div>
</body>
</html>



