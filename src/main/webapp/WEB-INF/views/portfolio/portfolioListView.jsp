<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 포트폴리오 목록 조회 페이지</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<style>

.bbs {
	position: relative;
	margin-bottom: 40px;
}#q1{
	width:5%;
}
#q2{
	width:23%;
}
#q3{
	width:13%;
}
#q4{
	width:20%;
}
#q5{
	width:20%;
}
#q6{
	width:19%;
}
</style>
</head>
<c:if test="${empty sessionScope}">
	<jsp:forward page="/login/loginPage.kh" />
</c:if>
<c:if test="${not empty sessionScope.loginUser}">
<body>
<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
				<div class="c-title">
				<div class="b-title">
					<h2>포트폴리오관리</h2>	
				</div>
				<div class="btn_1"><button style="width: 80px; cursor:pointer;" class="btn"onclick="location.href='/portfolio/writeView.kh'">글쓰기</button></div>
				</div>
				
				
							<table class="type01">	
								<thead>
									<tr >
										<th id="q1">번호</th>
										<th id="q2">제목</th>
										<th id="q3">작성자</th>
										<th id="q4">자격증첨부</th>
										<th id="q5">수상이력첨부</th>
										<th id="q6">작성날짜</th>	
									</tr>
								</thead>
								<tbody>
									<c:forEach items="${pList}" var="portfolio">
										<tr class="space">
											<td class="ta">${portfolio.port_no}</td>
											<c:url var="pDetail" value="/portfolio/Detail.kh">
												<c:param name="port_no" value="${portfolio.port_no}"></c:param>
											</c:url>
											<td class="ta"><a href="${pDetail}">${portfolio.port_title }</a></td>
											<td>${portfolio.port_name}</td>
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
									<c:url var="pagination" value="/portfolio/listView.kh">
										<c:param name="page" value="${p }"></c:param>
									</c:url>

									<a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
																		
									</c:forEach>


								<c:if test="${pi.next && pi.endNavi > 0}">

									<a href="/portfolio/listView.kh?page=${pi.endNavi+1}">
										<button class="pbtn">＞</button>
									</a>
								</c:if>
								</div>
							</div>
						</div>
		
				<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>
</body>
</html>