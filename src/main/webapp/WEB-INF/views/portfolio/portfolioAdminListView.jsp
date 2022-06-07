<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 포트폴리오 전체조회 페이지</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<style>
.bbs {
	position: relative;
	margin-bottom: 40px;
}

.ta {
	text-align: center;
}

td a {
	text-decoration: none;
	color: black;
}

#q1 {
	width: 5%;
}

#q2 {
	width: 20%;
}

#q3 {
	width: 9%;
}

#q4 {
	width: 11%;
}

#q5 {
	width: 15%;
}

#q6 {
	width: 15%;
}

#q7 {
	width: 15%;
}

#q8 {
	width: 6%;
}
</style>

</head>

<body>

	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope.loginManager}">
		<jsp:include page="../common/menuBar.jsp"></jsp:include>
		<!-- contents -->
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<div class="c-title">
					<h2 id="b-title">포트폴리오</h2>
				</div>
				<br>
				<br>
				<br>
				<div class="bbs">

					<table class="type01">

						<thead>
							<tr>
								<th id="q1">번호</th>
								<th id="q2">제목</th>
								<th id="q3">작성자</th>
								<th id="q4">학번</th>
								<th id="q5">학과명</th>
								<th id="q6">자격증첨부</th>
								<th id="q7">수상이력첨부</th>
								<th id="q8">작성날짜</th>


							</tr>
						</thead>
						<tbody>
							<c:forEach items="${pList}" var="portfolio">
								<tr class="space">
									<td class="ta" id="no">${portfolio.port_no}</td>
									<c:url var="pDetail" value="/portfolio/adminDetail.kh">
										<c:param name="port_no" value="${portfolio.port_no}"></c:param>
									</c:url>

									<td class="ta" id="detail" style="text-align: center"><a
										href="${pDetail}">${portfolio.port_title }</a></td>
									<td class="ta" id="writer">${portfolio.port_name}</td>
									<td class="ta" id="stu_number">${portfolio.port_student_no}</td>
									<td class="ta" id="college">${portfolio.port_college}</td>
									<td class="ta" id="license">${portfolio.port_license}</td>
									<td class="ta" id="award_history">${portfolio.port_award_history}</td>
									<td class="ta" id="writeDate">${portfolio.port_writerDate}</td>


								</tr>
							</c:forEach>
						</tbody>
					</table>
					<br>
					<div class="paging" align="center">

						<c:if test="${pi.startNavi !=1}">

							<a href="/portfolio/adminListView.kh?page=${pi.startNavi-1}">
								<button class="pbtn">＜</button>
							</a>

						</c:if>

						<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
							<c:url var="pagination" value="/portfolio/adminListView.kh">
								<c:param name="page" value="${p }"></c:param>
							</c:url>

							<a href="${pagination }"><button
									class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
																		
									</c:forEach>


						<c:if test="${pi.next && pi.endNavi > 0}">

							<a href="/portfolio/adminListView.kh?page=${pi.endNavi+1}">
								<button class="pbtn">＞</button>
							</a>
						</c:if>

					</div>
				</div>
			</div>
		</div>
		<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>
</body>
</html>