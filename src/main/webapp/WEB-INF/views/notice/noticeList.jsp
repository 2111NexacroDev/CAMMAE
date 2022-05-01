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
	height: 150px;
} 

.left {
	height: inherit;
	width: 15%;
	float: left;
	width: 15%;
}

/* 	.contents_1{
		height: inherit;
		width : 15%;
		float : left;
	} */
/* 		.contents_1bar{
			height: 400px;
			width : 100%;
			margin-top : 150px;
		}
			.contents_1bar_1{
				height: 100px;
				width : 100%;
				background-color : rgb(30, 57, 50);
			}
				.contents_1bar_1_1{
					height: 100px;
					width : 60%;
					float : left;
					font-size : 20px;
					line-height: 130px;
				}
				.contents_1bar_1_2{
					height: 100px;
					width : 40%;
					float : left;
				}
			.contents_1bar_2{
				height: 60px;
				width: 100%;
				background-color : rgb(231, 232, 226);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
			}
			.contents_1bar_3{
				height: 60px;
				width: 100%;
				background-color : rgb(241, 241, 241);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
			}
			.contents_1bar_4{
				height: 60px;
				width: 100%;
				background-color : rgb(241, 241, 241);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
			}
			.contents_1bar_5{
				height: 60px;
				width: 100%;
				background-color : rgb(241, 241, 241);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
			}
			.contents_1bar_6{
				height: 60px;
				width: 100%;
				background-color : rgb(241, 241, 241);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
			} */
/* 	.contents_2{
		height: inherit;
		width : 85%;
		float : left;
		margin-top : 100px;
	} */
.contents_2 {
	height: inherit;
	width: 50%;
	float: left;
	margin-left: 200px;
}
</style>
<meta charset="UTF-8">
<title>공지사항</title>
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
		<!-- local navigation bar -->
		<div id="lnb">
			<div class="inner lnb_nav">
				<h1>
					<img src="../../../resources/img/logo.png"
						style="width: 80px; height: 80px;"> <a href="/main.kh">
						<span id="lnb_title"> 대일대학교</span>
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
	</div>
	<div id="line"></div>

	<!-- contents영역 -->

	<div id="contents">
		<div class="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		<!-- 		<div class="contents_1">
			<div class="contents_1bar">
				<div class="contents_1bar_1">
					<div class="contents_1bar_1_1"><a href="#" style="color:white">&nbsp;&nbsp;취업지원센터</a></div>
					<div class="contents_1bar_1_2"><img src="../../../resources/img/logo2.png" style="width:120px; height:110px;  opacity: 0.4; filter: alpha(opacity=40);"></div>
				</div>
				<div class="contents_1bar_2"><a href="#" style="color:rgb(0, 74, 38)">&nbsp;&nbsp;&nbsp;공지사항</a></div>
				<div class="contents_1bar_3"><a href="#" style="color:black">&nbsp;&nbsp;&nbsp;채용공고</a></div>
				<div class="contents_1bar_4"><a href="#" style="color:black">&nbsp;&nbsp;&nbsp;지원현황</a></div>
				<div class="contents_1bar_5"><a href="#" style="color:black">&nbsp;&nbsp;&nbsp;상담관리</a></div>
				<div class="contents_1bar_6"><a href="#" style="color:black">&nbsp;&nbsp;&nbsp;포트폴리오 관리</a></div>
			</div>
		</div> -->
		<div class="contents_2">
			<h2 align="center" style="color: rgb(0, 74, 38)">공지사항</h2>
			<br> <br>
			<div>
				<button onclick="location.href='/notice/writeView.kh'">글쓰기</button>
			</div>
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
			<div class="paging">

				<c:if test="${pi.startNavi ==1 }">

					<a href="/notice/list.kh?page=1"> <i class="fas fa-angle-left">
							<button class="on">
					</i>
						</button></a>

				</c:if>
				<c:if test="${pi.prev}">

					<a href="/notice/list.kh?page=${pi.startNavi-1}"> <i
						class="fas fa-angle-left">
							<button class="on">
					</i>
						</button>
					</a>
				</c:if>

				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:url var="pagination" value="/notice/list.kh">
						<c:param name="page" value="${p }"></c:param>
					</c:url>

					<a href="${pagination }"><button class="on1">${p }</button></a>&nbsp;
																		
									</c:forEach>


				<c:if test="${pi.next && pi.endNavi > 0}">

					<a href="/notice/list.kh?page=${pi.endNavi+1}"> <i
						class="fas fa-angle-right">
							<button class="on2">
					</i>
						</button>
					</a>
				</c:if>
			</div>
		</div>

	</div>


	<!-- footer영역 -->

	<footer>
		<div class="footer_tit">서울특별시 중구 남대문로 120 대일빌딩 2F, 3F (T:
			1544-9970) / F: 02-722-0858)</div>
		<div id="footer_bottom">Copyright © 1998-2022 DI University All
			Right Reserved</div>
	</footer>
</body>
</html>