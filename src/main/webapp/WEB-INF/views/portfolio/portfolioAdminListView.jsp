<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/menuBar.css">
<style>
#contents {
	height: 783px;
	width: 100%
}

 #line {
	height: 50px;
} 

.left {
	height: inherit;
	width: 15%;
	float: left;
	width: 15%;
}


.bbs {
	height: inherit;
	width: 50%;
	float: left;
	margin-left: 200px;
}
</style>
</head>
<body>

<c:if test="${empty sessionScope}">
	<jsp:forward page="/login/loginPage.kh" />
</c:if>
	
<c:if test="${not empty sessionScope}">
<div id="header">
		<!-- 로그인, 회원가입 부분 -->
		<!-- gnb = global navigation bar  -->
		<div id="gnb">
			<div class="inner">

				<a href="/main.kh" class="btn_gnb_home"> HOME </a>
				<c:if test="${empty sessionScope}">
					<a href="/login/loginPage.kh" class="btn_gnb_login"> LOGIN </a>
				</c:if>
				<c:if test="${not empty sessionScope}">
					<a href="/login/logout.kh" class="btn_gnb_login"> LOGOUT </a>
				</c:if>
			</div>
		</div>
	</div>
		<!-- local navigation bar -->
		<div id="lnb">
			<div class="inner lnb_nav">
				<h1>
					<img src="../../../resources/img/logo.png"
						style="width: 80px; height: 80px;"> <a href="/main.kh">
						<span id="lnb_title"> 대일대학교</span>
					</a> <span id="lnb_subtitle">DAILE UNIVERSITY</span>
				</h1>
				<ul class="lnb_nav_dep1">
					<li><a href="/board/list.kh" class="btn_lnb_dep1">게시판</a></li>
					<li><a href="#" class="btn_lnb_dep1">수강신청</a></li>
					<li><a href="#" class="btn_lnb_dep1">캠퍼스매니저</a></li>
					<li><a href="/notice/list.kh" class="btn_lnb_dep1">취업지원센터</a></li>
				</ul>
			</div>
		</div>
	<div id="line"></div>
	
<div class="contents">
	<div class="left">
		<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
	</div>
						<div class="bbs">
							<h2 align="left" style="color: rgb(0, 74, 38)">포트폴리오</h2>
							<table>
								
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
											<td class="ta" id="content">${portfolio.port_content}</td>	
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

</c:if>
</body>
</html>