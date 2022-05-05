<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/menuBar.css">
<style>
	
</style>
<meta charset="UTF-8">
<title>공지사항</title>
<link rel="stylesheet" href="/resources/contents.css">
</head>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>

	<!-- contents영역 -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		
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

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>