<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 게시판</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<style>
</style>
</head>

<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- local navigation bar -->
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>학과게시판</h2>
				</div>
				<div class="btn_1">
					<button class="btn" style="width: 80px"
						onclick="location.href='/board/writeView.kh'">글쓰기</button>
				</div>
			</div>

			<table class="type01">
				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>조회수</th>
						<th>작성일</th>
					</tr>
				<thead>
				<tbody>
					<c:forEach items="${bList }" var="board">
						<input type="hidden" name="universityCode"
							value="${pi.universityCode }" />
						<tr>
							<td class="ta" id="no">${board.boardNo}</td>
							<c:url var="bDetail" value="/board/detail.kh?universityCode=${pi.universityCode}">
								<c:param name="boardNo" value="${board.boardNo}"></c:param>
							</c:url>
							<td><a href="${bDetail}">${board.boardTitle }</a></td>
							<td>${board.boardWriter }</td>
							<td>${board.boardCount }</td>
							<td>${board.boardDate }</td>

						</tr>

					</c:forEach>
				</tbody>
			</table>
			<div align="center">

				<form action="/board/list.kh" method="get">
				<%-- 	<c:if test="${sessionScope.loginUser ne null}">
						<input type="hidden" name="universityCode"
							value="${loginUser.universityCode }" />
					</c:if>
					<c:if test="${sessionScope.loginProfessor ne null}">
						<input type="hidden" name="universityCode"
							value="${loginProfessor.universityCode }" />
					</c:if>
					<c:if test="${sessionScope.loginManager ne null}">
						<input type="hidden" name="universityCode"
							value="${pi.universityCode }" />
					</c:if> --%>
					<input type="hidden" name="universityCode"
							value="${pi.universityCode }" />
					<select name="searchCondition">
						<option value="all">전체</option>
						<option value="title">제목</option>
						<option value="contents">내용</option>
						<option value="writer">작성자</option>
					</select> <input type="text" name="searchValue"> <input class="btn"
						type="submit" value="검색">

				</form>
			</div>
			<!-- 페이징-->
			<div class="paging" align="center">
				<c:if test="${pi.startNavi !=1 }">
					<a class="pbtn"
						href="/board/list.kh?universityCode=${pi.universityCode}&page=${pi.startNavi-1}">
						<button class="pbtn">＜</button>
					</a>

				</c:if>

				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:if test="${empty pageInfo.searchValue }">
						<c:url var="pagination"
							value="/board/list.kh?universityCode=${pi.universityCode}">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<c:if test="${not empty pageInfo.searchValue }">
						<c:url var="pagination"
							value="/board/list.kh?universityCode=${pi.universityCode}&searchCondition=${pageInfo.searchCondition}&searchValue=${pageInfo.searchValue}">
							<c:param name="page" value="${p }"></c:param>
							<%--  <a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp; --%>
						</c:url>
					</c:if>
					<a href="${pagination }"><button
							class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
			
			</c:forEach>
				<c:if test="${pi.next && pi.endNavi > 0}">

					<a
						href="/board/list.kh?universityCode=${pi.universityCode}&page=${pi.endNavi+1}">
						<button class="pbtn">＞</button>
					</a>

				</c:if>

				<%-- <c:if test="${pi.endNavi && pi.endNavi >0}">
		<a href="/board/list?page=${pi.endNavi+1 }"><button style="height:25px; width:55px">다음</button></a>
	</c:if> --%>

			</div>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>

</body>
</html>