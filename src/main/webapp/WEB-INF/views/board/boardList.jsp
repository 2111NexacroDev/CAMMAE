<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 게시판</title>
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

h3{
	color : #10412C;
}

.btn{
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
	<div class="center">
			<h3 id="b-title">학과게시판</h3>
			<br>
			<div><button class="btn" onclick="location.href='/board/writeView.kh'">글쓰기</button></div>
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

									<a href="/board/list.kh?page=${pi.endNavi+1}"> 
									</a>

								</c:if>

							</div>
	</div>
</body>
</html>