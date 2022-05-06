<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<style>

</style>
<link rel="stylesheet" href="/resources/menuBar.css">
<meta charset="UTF-8">
<title>채용공고</title>
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

			<div class="c-title">
				<div class="b-title"><h2>채용공고</h2></div>
				<div class="btn_1"><button style="width: 80px" class="btn"onclick="location.href='/recruitment/writeView.kh'">글쓰기</button></div>
			</div>
			<table class="type01">
				<thead>
					<tr>
						<th scope="cols">번호</th>
						<th scope="cols">제목</th>
						<th scope="cols">작성자</th>
						<th scope="cols">작성일</th>
						<th scope="cols">조회수</th>
						<th scope="cols">마감일</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${rList }" var="recruitment">
						<tr>
							<td>${recruitment.recruitmentNo }</td>
							<c:url var="rDetail" value="/recruitment/detail.kh">
								<c:param name="recruitmentNo"
									value="${recruitment.recruitmentNo }"></c:param>
							</c:url>
							<td scope="row"><a href="${rDetail }">${recruitment.recruitmentTitle }</a></td>
							<td scope="row">${recruitment.recruitmentWriter }</td>
							<td scope="row">${recruitment.recruitmentDate }</td>
							<td scope="row">${recruitment.recruitmentCount }</td>
							<td scope="row">${recruitment.recruitmentEndDate }</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<br>
			<div align="center">
				<form action="/recruitment/list.kh" method="get">
					<select name="searchCondition">
						<option value="title">제목</option>
					</select> <input type="text" name="searchValue"> <input class="btn"
						type="submit" value="검색">
				</form>
			</div>
			<br>
			<div class="paging" align="center">

				<c:if test="${pi.startNavi !=1 }">

					<a href="/recruitment/list.kh?page=${pi.startNavi-1 }">
						<button class="pbtn">＜</button>
					</a>

				</c:if>

				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:if test="${empty pageInfo.searchValue }">
						<c:url var="pagination" value="/recruitment/list.kh">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>
					<c:if test="${not empty pageInfo.searchValue }">
						<c:url var="pagination"
							value="/recruitment/list.kh?searchCondition=${pageInfo.searchCondition }&searchValue=${pageInfo.searchValue }">
							<c:param name="page" value="${p }"></c:param>
						</c:url>
					</c:if>

					 <a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
																		
				</c:forEach>


				<c:if test="${pi.next && pi.endNavi > 0}">

					<a href="/recruitment/list.kh?page=${pi.endNavi+1}">
						<button class="pbtn">＞</button>
					</a>

				</c:if>
			</div>
		</div>
		<!-- <div id="right">
		</div> -->
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
	

</body>
</html>