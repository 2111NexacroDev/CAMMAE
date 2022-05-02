<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/menuBar.css">
<meta charset="UTF-8">
<title>학과 게시판</title>
<style>
#contents {
	width: 100%;
	height: 783px;
}

#line {
	height: 50px;
}

.left {
	height: inherit;
	width: 15%;
	float: left;
}

.center {
	width: 50%;
	float: left;
	margin-left:200px;
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

/* .right {
	width: 20%;
	float: left;
} */
</style>
</head>

<body>
	<div id="header">
		<!-- 로그인, 회원가입 부분 -->
		<!-- gnb = global navigation bar  -->
		<div id="gnb">
			<div class="inner">

				<a href="/main.kh" class="btn_gnb_home"> HOME </a>
				<c:if test="${empty sessionScope}">
					<a href="/login/loginPage.kh" class="btn_gnb_login"> LOGIN </a>
				</c:if>
				<c:if test="${not empty sessionScope}">
					<a href="/login/logout.kh" class="btn_gnb_login"> LOGOUT </a>
				</c:if>
			</div>
		</div>
	</div>
	<!-- local navigation bar -->
	<div id="lnb">
		<div class="inner lnb_nav">
			<h1>
				<img src="../../../resources/img/logo.png"
					style="width: 80px; height: 80px;"> <a href="/main.kh"> <span
					id="lnb_title"> 대일대학교</span>
				</a> <span id="lnb_subtitle">DAILE UNIVERSITY</span>
			</h1>
			<ul class="lnb_nav_dep1">
				<li><a href="/board/list.kh" class="btn_lnb_dep1">게시판</a></li>
				<li><a href="#" class="btn_lnb_dep1">수강신청</a></li>
				<li><a href="#" class="btn_lnb_dep1">캠퍼스매니저</a></li>
				<li><a href="/notice/list.kh" class="btn_lnb_dep1">취업지원센터</a></li>
			</ul>
		</div>
	</div>
	<div id="line"></div>
	<div id="contents">
		<div class="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<div class="center">
			<h3 id="b-title">학과게시판</h3>
			<br>
			<div>
				<button class="btn" onclick="location.href='/board/writeView.kh'">글쓰기</button>
			</div>
			<br>
			<table width="600px" border="1">
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>작성일</th>
					</tr>
				<thead>
				<tbody>


					<c:forEach items="${bList }" var="board">
						<tr>
							<td class="ta" id="no">${board.boardNo}</td>
							<c:url var="bDetail" value="/board/detail.kh">
								<c:param name="boardNo" value="${board.boardNo}"></c:param>
							</c:url>

							<td><a href="${bDetail}">${board.boardTitle }</a></td>
							<td>${board.boardWriter }</td>
							<td>${board.boardDate }</td>

						</tr>

					</c:forEach>
				</tbody>
			</table>
			<div class="paging">

				<c:if test="${pi.startNavi ==1 }">

					<a href="/board/list.kh?page=1"></a>

				</c:if>


				<c:if test="${pi.prev}">

					<a href="/board/list.kh?page=${pi.startNavi-1}"> </a>

				</c:if>





				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:url var="pagination" value="/board/list.kh">
						<c:param name="page" value="${p }"></c:param>
					</c:url>

					<a href="${pagination }"><button class="on1">${p }</button></a>&nbsp;
																		
									</c:forEach>


				<c:if test="${pi.next && pi.endNavi > 0}">

					<a href="/board/list.kh?page=${pi.endNavi+1}"> </a>

				</c:if>

			</div>
		</div>
	</div>
	<footer>
		<div class="footer_tit">서울특별시 중구 남대문로 120 대일빌딩 2F, 3F (T:
			1544-9970) / F: 02-722-0858)</div>
		<div id="footer_bottom">Copyright © 1998-2022 DI University All
			Right Reserved</div>
	</footer>

</body>
</html>