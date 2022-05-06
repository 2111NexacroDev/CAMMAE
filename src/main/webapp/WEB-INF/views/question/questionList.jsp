<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
</head>

<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title"><h2>질의응답게시판</h2></div>
				<div class="btn_1"><button class="btn" style="width: 80px"onclick="location.href='/question/registerView'">글쓰기</button></div>
			</div>
			<table class="type01">
				<thead>
					<tr>
						<th scope="cols">번호</th>
						<th scope="cols">담당교수 및 강의명</th>
						<th scope="cols">제목</th>
						<th scope="cols">작성자</th>
						<th scope="cols">작성일</th>
						<th scope="cols">조회수</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${qList }" var="question">
						<tr>
							<td>${question.questionNo }</td>
							<td >${question.professorName }_${question.lectureName }</td>
							<c:url var="qDetail" value="/question/detail">
								<c:param name="questionNo" value="${question.questionNo}"></c:param>
							</c:url>
							<td scope="row"><a href="${qDetail}">${question.questionTitle }</a></td>
							<td scope="row">${question.questionWriter }</td>
							<td scope="row">${question.questionDate }</td>
							<td scope="row">${question.questionCount }</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<br>
			<div align="center">
				<form action="/question/list.kh" method="get">
					<select name="searchCondition">
						<option value="all">전체</option>
						<option value="professor">담당교수</option>
						<option value="lecture">강의명</option>
						<option value="title">제목</option>
						<option value="contents">내용</option>
						<option value="writer">작성자</option>
					</select> <input type="text" name="searchValue"> <input class="btn"
						type="submit" value="검색">
				</form>
			</div>
			<br>
			<!-- 페이지 -->
			<div class="paging" align="center">
				<c:if test="${pi.startNavi !=1 }">
					<a class="pbtn" href="/question/list?page=${pi.startNavi-1}">
						◀
					</a>
				</c:if>

				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:if test="${empty pageInfo.searchValue }">
						<c:url var="pagination" value="/question/list">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<c:if test="${not empty pageInfo.searchValue }">
						<c:url var="pagination"
							value="/question/list?searchCondition=${pageInfo.searchCondition}&searchValue=${pageInfo.searchValue}">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<a href="${pagination }">${p }</a>&nbsp;
			</c:forEach>
				<c:if test="${pi.next && pi.endNavi > 0}">
					<a class="pbtn" href="/question/list?page=${pi.endNavi+1}">
						▶
					</a>
				</c:if>

			</div>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>

</body>
</html>