<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지원현황</title>
</head>
<body>
	<h1 align="center">지원현황</h1>
	<br><br>
	<table align="center" width="600" border="1">
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>지원일</th>
			<th>파일이름</th>
		</tr>
		<c:forEach items="${sList }" var="support">
			<tr>
				<td>${support.supportNo }</td>
				<td>${support.recruitmentTitle }</td>
				<td>${support.studentNo }</td>
				<td>${support.supportDate }</td>
				<td>
				<a href="../../../resources/supportUploadFiles/${support.supFileRename }"download>${support.supFileName }</a><br>
				<a href="../../../resources/supportUploadFiles/${support.supPortFileRename }"download>${support.supPortFileName }</a>
				</td>
			</tr>
		</c:forEach>
	</table>
	<br>
	<div align="center">
		<form action="/support/search.kh" method="get">
			<select name="searchCondition">
				<option value="title">제목</option>
				<option value="writer">작성자</option>
			</select>
			<input type="text" name="searchValue"> 
			<input class="btn"type="submit" value="검색">
		</form>
	</div>
	<div class="paging">

								<c:if test="${pi.startNavi ==1 }">

									<a href="/support/list.kh?page=1"> <i
										class="fas fa-angle-left">
											<button class="on">
									</i>
									</button></a>

								</c:if>
								<c:if test="${pi.prev}">

									<a href="/support/list.kh?page=${pi.startNavi-1}"> <i
										class="fas fa-angle-left">
											<button class="on">
									</i>
									</button>
									</a>
								</c:if>

								<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
									<c:url var="pagination" value="/support/list.kh">
										<c:param name="page" value="${p }"></c:param>
									</c:url>

									<a href="${pagination }"><button class="on1">${p }</button></a>&nbsp;
																		
									</c:forEach>


								<c:if test="${pi.next && pi.endNavi > 0}">

									<a href="/supportt/list.kh?page=${pi.endNavi+1}"> <i
										class="fas fa-angle-right">
											<button class="on2">
									</i>
									</button>
									</a>

								</c:if>

							</div>
</body>
</html>