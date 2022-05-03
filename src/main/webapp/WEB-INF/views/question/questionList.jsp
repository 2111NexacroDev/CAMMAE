<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/contents.css">
<meta charset="UTF-8">
<title>질의응답게시판</title>
<style>
</style>
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
			<h3 id="b-title">질의응답 게시판</h3>
			<br>
			<div>
				<button class="btn" onclick="location.href='/question/registerView'">글쓰기</button>
			</div>
			<br>
			<table width="800px" border="2">
				<tr>
					<th height="40px">번호</th>
					<th>담당교수 및 강의명</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>
					<th>조회수</th>
				</tr>
				<c:forEach items="${qList }" var="question">
					<tr>
						<td height="40px">${question.questionNo }</td>
						<td align="center">${question.professorName }_${question.lectureName }</td>
						<c:url var="qDetail" value="/question/detail">
							<c:param name="questionNo" value="${question.questionNo}"></c:param>
						</c:url>
						<td><a href="${qDetail}">${question.questionTitle }</a></td>
						<td>${question.questionWriter }</td>
						<td>${question.questionDate }</td>
						<td>${question.questionCount }</td>
					</tr>
				</c:forEach>
			</table>
			<br>
			<div>
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
			<div>
				<c:if test="${pi.startNavi !=1 }">
					<a href="/question/list?page=${pi.startNavi-1}">
						<button>이전</button>
					</a>
				</c:if>

				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:if test="${empty pagiInfo.searchValue }">
						<c:url var="pagination" value="/question/list">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<c:if test="${not empty pagiInfo.searchValue }">
						<c:url var="pagination"
							value="/question/list?searchCondition=${pagiInfo.searchCondition}&searchValue=${pagiInfo.searchValue}">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<a href="${pagination }">${p }</a>&nbsp;
			</c:forEach>
				<c:if test="${pi.next && pi.endNavi > 0}">
					<a href="/question/list?page=${pi.endNavi+1}">
						<button>다음</button>
					</a>
				</c:if>

			</div>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
	
</body>
</html>