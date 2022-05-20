<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 상담신청 전체조회 페이지</title>
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/common.css">
<style>

.bbs {
	position: relative;
	margin-bottom: 40px;
 }
 #q1{
	width:5%;
}
#q2{
	width:11%;
}
#q3{
	width:9%;
}
#q4{
	width:11%;
}
#q5{
	width:13%;
}
#q6{
	width:14%;
}
#q7{
	width:15%;
}
#q8{
	width: 11%;
}
#q9{
	width: 11%;
}
  
</style>

<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope.loginManager }">
		<jsp:include page="../common/menuBar.jsp"></jsp:include>
		<!-- contents -->
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<div class="c-title">
					<h2 id="b-title">상담관리</h2>
				</div>
				<br><br><br>
				<div class="bbs">
					<table class="type01">

						<thead>
							<tr>
								<th id="q1">번호</th>
								<th id="q2">제목</th>
								<th id="q3">이름</th>
								<th id="q4">학번</th>
								<th id="q6">학과명</th>
								<th id="q7">상담희망날짜</th>
								<th id="q8">상담희망시간</th>
								<th id="q9">상담현황</th>
								
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${cList}" var="consultant">
								<c:if
									test="${consultant.cons_counselor == loginManager.managerName}">
									<tr class="space">
										<td class="ta" id="no">${consultant.cons_no}</td>
										<c:url var="cDetail" value="/consultant/adDetail.kh">
											<c:param name="consultant_no" value="${consultant.cons_no}"></c:param>
										</c:url>

										<td class="ta" id="detail" style="text-align: left"><a
											href="${cDetail}">${consultant.cons_title }</a></td>
										<td class="ta" id="writer">${consultant.cons_student_name}</td>
										<td class="ta" id="stu_number">${consultant.cons_student_no}</td>
										<td class="ta" id="college">${consultant.cons_college}</td>
										<td class="ta" id="date">${consultant.cons_date}</td>
										<td class="ta" id="time">${consultant.cons_time}</td>
										<td class="ta" id="status">${consultant.cons_status == 'Y' ? "상담완료" : "상담대기"}</td>
										
									</tr>
								</c:if>
							</c:forEach>
						</tbody>
					</table>
					<br>
					<div class="paging" align="center">

						<c:if test="${pi.startNavi !=1}">

							<a href="/consultant/adlist.kh?page=${pi.startNavi-1}"> 
								<button class="pbtn">＜</button>
							</a>

						</c:if>

						<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
							<c:url var="pagination" value="/consultant/adlist.kh">
								<c:param name="page" value="${p }"></c:param>
							</c:url>

							<a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
																		
						</c:forEach>


						<c:if test="${pi.next && pi.endNavi > 0}">

							<a href="/consultant/adlist.kh?page=${pi.endNavi+1}"> 
								<button class="pbtn">＞</button>
							</a>
						</c:if>

					</div>
				</div>
			</div>
		</div>
		<!-- footer -->
		<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>
</body>
</html>