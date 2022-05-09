<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 포트폴리오 목록 조회 페이지</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
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
				<h3 id="b-title">포트폴리오 관리</h3>
				<br>
							<table style="width: 800px;">
								
								<thead>
									<tr >
										<th height="40px">번호</th>
										<th>제목</th>
										<th>작성자</th>
										<th>내용</th>
										<th>자격증첨부</th>
										<th>수상이력첨부</th>
										<th>작성날짜</th>	
									</tr>
								</thead>
								<tbody>
									<c:forEach items="${pList}" var="portfolio">
										<tr class="space">
											<td height="40px">${portfolio.port_no}</td>
											<c:url var="pDetail" value="/portfolio/Detail.kh">
												<c:param name="port_no" value="${portfolio.port_no}"></c:param>
											</c:url>
											<td ><a href="${pDetail}">${portfolio.port_title }</a></td>
											<td>${portfolio.port_name}</td>
											<td >${portfolio.port_content}</td>	
											<td class="ta" id="license">${portfolio.port_license}</td>
											<td class="ta" id="award_history">${portfolio.port_award_history}</td>
											<td class="ta" id="writeDate">${portfolio.port_writerDate}</td>		
										</tr>
									</c:forEach>
								</tbody>
							</table>
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