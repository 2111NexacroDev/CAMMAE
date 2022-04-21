<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판</title>
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

/* .right {
	width: 20%;
	float: left;
} */
</style>
</head>

<body>
	<div class="left">1</div>
	<div class="center">
		<h3 id="b-title">질의응답 게시판</h3>
		<br>
		<div>
			<button class="btn" onclick="location.href='/question/registerView'">글쓰기</button>
		</div>
		<br>
		<table width="600px" border="1">
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>
			<c:forEach items="${qList }" var="question">
				<tr>
					<td>${question.questionNo }</td>
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
			<form action="/question/search.kh" method="get">
				<select name="searchCondition">
					<option value="all">전체</option>
					<option value="professor">교수</option>
					<option value="lecture">강의</option>
					<option value="title">제목</option>
					<option value="contents">내용</option>
					<option value="writer">작성자</option>
				</select> <input type="text" name="searchValue"> <input class="btn"
					type="submit" value="검색">
			</form>
		</div>
		<!-- 페이지 -->
		<div>
			<c:if test="${pi.startNavi ==1 }">

				<a href="/question/list?page=1">
					<button>이전</button>
				</a>

			</c:if>


			<c:if test="${pi.prev}">

				<a href="/question/list?page=${pi.startNavi-1}">
					<button>이전</button>
				</a>
			</c:if>


			<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
				<c:url var="pagination" value="/question/list">
					<c:param name="page" value="${p }"></c:param>
				</c:url>
				<a href="${pagination }">${p }</a>&nbsp;
			</c:forEach>
			<c:if test="${pi.next && pi.endNavi > 0}">

				<a href="/question/list?page=${pi.endNavi+1}">
					<button>다음</button>
				</a>

			</c:if>

			<%-- <c:if test="${pi.endNavi && pi.endNavi >0}">
		<a href="/question/list?page=${pi.endNavi+1 }"><button style="height:25px; width:55px">다음</button></a>
	</c:if> --%>

		</div>


	</div>
</body>
</html>