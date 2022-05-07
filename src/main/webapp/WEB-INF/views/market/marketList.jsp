<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중고거래 게시판</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<style>
#m1{
	width:10%;
}
#m2{
	width:15%;
}
#m3{
	width:40%;
}
#m4{
	width:10%;
}
#m5{
	width:15%;
}
#m6{
	width:10%;
}
</style>
</head>

<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<!-- sidemenu -->
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title"><h2>중고거래게시판</h2></div>
				<div class="btn_1"><button class="btn" style="width: 80px"onclick="location.href='/market/registerView'">글쓰기</button></div>
			</div>
			<table class="type01">
			<thead>
				<tr>
					<th id="m1">번호</th>
					<th id="m2">구분</th>
					<th id="m3">제목</th>
					<th id="m4">작성자</th>
					<th id="m5">작성일</th>
					<th id="m6">조회수</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${mList }" var="market">
					<tr>
						<td>${market.marketNo }</td>
						<td align="center"><c:if test="${market.marketType eq 'S' }">팝니다</c:if>
							<c:if test="${market.marketType eq 'B'}">삽니다</c:if></td>
						<c:url var="mDetail" value="/market/detail">
							<c:param name="marketNo" value="${market.marketNo}"></c:param>
						</c:url>
						<td><a href="${mDetail}">${market.marketTitle }</a></td>
						<td>${market.marketWriter }</td>
						<td>${market.marketDate }</td>
						<td>${market.marketCount }</td>
					</tr>
				</c:forEach>
			</tbody>
			</table>
			<br>
			<!-- 게시글 검색 -->
			<div align="center">
				<form action="/market/list" method="get">
					<select name="searchCondition">
						<option value="all">전체</option>
						<option value="title">제목</option>
						<option value="contents">내용</option>
						<option value="writer">작성자</option>
					</select> <input type="text" name="searchValue"> 
					<input class="btn" type="submit" value="검색">
				</form>
			</div>
			<br>
			<!-- 페이지 -->
			<div class="paging" align="center">
				<c:if test="${pi.startNavi !=1 }">
					<a href="/market/list?page=${pi.startNavi-1}">
						<button class="pbtn">＜</button>
					</a>

				</c:if>


				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<%-- <c:url var="pagination" value="/market/list">
					<c:param name="page" value="${p }"></c:param>
				</c:url> --%>

					<c:if test="${empty pageInfo.searchValue }">
						<c:url var="pagination" value="/market/list">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<c:if test="${not empty pageInfo.searchValue }">
						<c:url var="pagination"
							value="/market/list?searchCondition=${pageInfo.searchCondition}&searchValue=${pageInfo.searchValue}">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>


					 <a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
			</c:forEach>
				<c:if test="${pi.next && pi.endNavi > 0}">

					<a href="/market/list?page=${pi.endNavi+1}">
						<button class="pbtn">＞</button>
					</a>

				</c:if>

			</div>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>

</body>
</html>