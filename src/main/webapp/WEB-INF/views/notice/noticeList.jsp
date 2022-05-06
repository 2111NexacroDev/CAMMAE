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
<link rel="stylesheet" href="/resources/common.css">
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

		<div id="center">
			<h3>공지사항</h3>
			<br>
			<div class="btn_1">
				<button class="btn" onclick="location.href='/notice/writeView.kh'">글쓰기</button>
			</div>
			<table class="type01">
				<thead>
					<tr>
						<th scope="cols">번호</th>
						<th scope="cols">제목</th>
						<th scope="cols">작성자</th>
						<th scope="cols">작성일</th>
						<th scope="cols">조회수</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${nList }" var="notice">
						<tr>
							<td scope="row">${notice.noticeNo }</td>
							<c:url var="nDetail" value="/notice/detail.kh">
								<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
							</c:url>
							<td scope="row"><a href="${nDetail }">${notice.noticeTitle }</a></td>
							<td scope="row">${notice.noticeWriter }</td>
							<td scope="row">${notice.noticeDate }</td>
							<td scope="row">${notice.noticeCount }</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<div class="paging">

				<c:if test="${pi.startNavi !=1 }">

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