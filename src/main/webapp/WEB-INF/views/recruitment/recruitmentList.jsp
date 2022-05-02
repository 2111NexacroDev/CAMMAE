<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/menuBar.css">
<style>
#contents {
	height: 783px;
	width: 100%
}

#line {
	height: 50px;
}

.left {
	height: inherit;
	width: 15%;
	float: left;
	width: 15%;
}
</style>
<meta charset="UTF-8">
<title>채용공고</title>
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
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>

		<h1 align="center">채용공고목록</h1>
		<br>
		<br>
		<div>
			<button onclick="location.href='/recruitment/writeView.kh'">글쓰기</button>
		</div>
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
						<c:param name="recruitmentNo"
							value="${recruitment.recruitmentNo }"></c:param>
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
			<form action="/recruitment/list.kh" method="get">
				<select name="searchCondition">
					<option value="title">제목</option>
				</select> <input type="text" name="searchValue"> <input class="btn"
					type="submit" value="검색">
			</form>
		</div>
		
		<div class="paging">

			<c:if test="${pi.startNavi !=1 }">

				<a href="/recruitment/list.kh?page=${pi.startNavi-1 }">
					<button>이전</button>
				</a>

			</c:if>
			
			<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
				<c:if test="${empty recruitmentSearch.searchValue }">
					<c:url var="pagination" value="/recruitment/list.kh">
						<c:param name="page" value="${p }"></c:param>
					</c:url>
				</c:if>
				<c:if test="${not empty recruitmentSearch.seqrchValue }">
					<c:url var="pagination" value="/recruitment/list.kh?searchCondition=${recruitmentSearch.searchCondition }&searchValue=${recruitmentSearch.searchValue }">
						<c:param name="page" value="${p }"></c:param>
					</c:url>
				</c:if>

				<a href="${pagination }">${p }</a>&nbsp;
																		
				</c:forEach>


			<c:if test="${pi.next && pi.endNavi > 0}">

				<a href="/recruitment/list.kh?page=${pi.endNavi+1}">
					<button>다음</button>
				</a>

			</c:if>
		</div>

	</div>
</body>
</html>