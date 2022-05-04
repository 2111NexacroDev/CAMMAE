<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 포트폴리오 전체조회 페이지</title>
<link rel="stylesheet" href="/resources/contents.css">
</head>
<body>

<c:if test="${empty sessionScope}">
	<jsp:forward page="/login/loginPage.kh" />
</c:if>
	
<c:if test="${not empty sessionScope}">
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<h3 id="b-title">포트폴리오</h3>
			<br>
			<div>
							
							<table >
								
								<thead>
									<tr>
										<th>번호</th>
										<th>제목</th>
										<th>작성자</th>
										<th>학번</th>
										<th>학과명</th>
										<th>전화번호</th>
										<th>자격증첨부</th>
										<th>수상이력첨부</th>
										<th>작성날짜</th>
										<th>내용</th>
										<th>단과대학</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach items="${pList}" var="portfolio">
										<tr class="space">
											<td class="ta" id="no">${portfolio.port_no}</td>
											<c:url var="pDetail" value="/portfolio/adminDetail.kh">
												<c:param name="port_no" value="${portfolio.port_no}"></c:param>
											</c:url>
											
											<td class="ta" id="detail" style="text-align:left"><a href="${pDetail}">${portfolio.port_title }</a></td>
											<td class="ta" id="writer">${portfolio.port_name}</td>
											<td class="ta" id="stu_number">${portfolio.port_student_no}</td>
											<td class="ta" id="college">${portfolio.port_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</td>
											<td class="ta" id="stu_phonenumber">${portfolio.port_student_number}</td>
											<td class="ta" id="license">${portfolio.port_license}</td>
											<td class="ta" id="award_history">${portfolio.port_award_history}</td>
											<td class="ta" id="writeDate">${portfolio.port_writerDate}</td>
											<td>${portfolio.port_content}</td>	
											<td class="ta" id="univ_code">${portfolio.port_university_code }</td>	
										</tr>
									</c:forEach>
								</tbody>
							</table>
				
							<div class="paging">

							<%-- 	<c:if test="${pi.startNavi ==1 }">

									<a href="/portfolio/adminListView.kh?page=1"></a>

								</c:if> --%>


								<c:if test="${pi.prev}">

									<a href="/portfolio/adminListView.kh?page=${pi.startNavi-1}"> 
									</a>

								</c:if>





								<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
									<c:url var="pagination" value="/portfolio/adminListView.kh">
										<c:param name="page" value="${p }"></c:param>
									</c:url>

									<a href="${pagination }"><button class="on1">${p }</button></a>&nbsp;
																		
									</c:forEach>


								<c:if test="${pi.next && pi.endNavi > 0}">

									<a href="/portfolio/adminListView.kh?page=${pi.endNavi+1}">
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