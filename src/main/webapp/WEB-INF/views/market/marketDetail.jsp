<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중고거래게시판 상세페이지</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
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

		<h3 id="b-title">중고거래 게시판</h3>
		<br>
		<div>
			<c:url var="mModify" value="/market/modifyView">
				<c:param name="marketNo" value="${market.marketNo }"></c:param>
			</c:url>
			<button class="btn" onclick="location.href='${mModify }'">수정</button>
			<c:url var="mDelete" value="/market/delete">
				<c:param name="marketNo" value="${market.marketNo }"></c:param>
			</c:url>
			<button class="btn" onclick="location.href='${mDelete }'">삭제</button>
			<button class="btn" onclick="location.href='/market/list'">목록</button>
		</div>
		<br>
		<div class="c-main">
			<div class="title">
				[
				<c:if test="${market.marketType eq 'S' }">팝니다</c:if>
				<c:if test="${market.marketType eq 'B'}">삽니다</c:if>
				] ${market.marketTitle }
			</div>
			<br>
			<div>${market.marketWriter }${market.marketDate }</div>
			<hr style="width: 585px; text-align: center;">

			<div>
				상품명 &emsp;${market.marketGoods }
			</div>
			<div>
				판매가격  ${market.marketPrice } 원
			</div>
			<div>
				<button class="btn">판매자와 채팅하기</button>
			</div>

			<div class="content" style="padding: 10px;">
				${market.marketContent }</div>
			<br> 댓글
			<hr style="width: 585px; text-align: center;">

		</div>
	</div>
</body>
</html>