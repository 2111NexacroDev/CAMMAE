<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 상담신청 전체조회 페이지</title>
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
	integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
	crossorigin="anonymous">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
</head>
<body>
	<c:if test="${empty sessionScope}">
	<jsp:forward page="/login/loginPage.kh" />
	</c:if>
	
	<c:if test="${not empty sessionScope }">
	<div class="section">
		<div class="bbs">
			<table>

				<thead>
					<tr>
						<th>번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>학번</th>
						<th>학과명</th>
						<th>상담희망날짜</th>
						<th>상담희망시간</th>
						<th>상담사</th>
						<th>상담내용</th>
						<th>상담현황</th>
						<th>단과대학</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${cList}" var="consultant">
						<tr class="space">
							<td class="ta" id="no">${consultant.cons_no}</td>
							<c:url var="cDetail" value="/consultant/adDetail.kh">
								<c:param name="consultant_no" value="${consultant.cons_no}"></c:param>
							</c:url>

							<td class="ta" id="detail" style="text-align: left"><a
								href="${cDetail}">${consultant.cons_title }</a></td>
							<td class="ta" id="writer">${consultant.cons_student_name}</td>
							<td class="ta" id="stu_number">${consultant.cons_student_number}</td>
							<td class="ta" id="college">${consultant.cons_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</td>
							<td class="ta" id="date">${consultant.cons_date}</td>
							<td class="ta" id="time">${consultant.cons_time}</td>
							<td class="ta" id="counselor">${consultant.cons_counselor}</td>
							<td class="ta" id="counselor">${consultant.cons_content}</td>
							<td class="ta" id="status">${consultant.cons_status == 'Y' ? "상담완료" : "상담대기"}</td>
							<td class="ta" id="univ_code">${consultant.cons_university_code}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>

				<div class="paging">

								<c:if test="${pi.startNavi ==1 }">

									<a href="/consultant/adlist.kh?page=1"></a>

								</c:if>


								<c:if test="${pi.prev}">

									<a href="/consultant/adlist.kh?page=${pi.startNavi-1}"> 
									</a>

								</c:if>





								<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
									<c:url var="pagination" value="/consultant/adlist.kh">
										<c:param name="page" value="${p }"></c:param>
									</c:url>

									<a href="${pagination }"><button class="on1">${p }</button></a>&nbsp;
																		
									</c:forEach>


								<c:if test="${pi.next && pi.endNavi > 0}">

									<a href="/consultant/adlist.kh?page=${pi.endNavi+1}">
									</a>
								</c:if>

							</div>
						</div>
					</div>
			</c:if>
</body>
</html>