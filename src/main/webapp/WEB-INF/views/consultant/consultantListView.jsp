<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 상담신청 전체조회 페이지</title>
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<style>
.bbs {
	position: relative;
	margin-bottom: 40px;
}

.bbs table {
	width: 1000px;
	border-top: 1px solid #343434;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

thead {
	background: rgb(237, 237, 237);
	height: 50px;
	border-bottom: 2px solid #c2c2c2;
}

tr {
	display: table-row;
	border-color: inherit;
}

tbody {
	display: table-row-group;
	vertical-align: middle;
	border-color: inherit;
}

.bbs_ table th, .bbs table td {
	padding: 12px 10px;
	border-bottom: 1px solid #c2c2c2;
	font-size: 16px;
}

.bbs table .space {
	background: #fdfdfd;
}

.ta {
	text-align: center;
}

td a{
	text-decoration: none;
	color: black;
}

</style>

</head>
<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>
	<c:if test="${not empty sessionScope.loginUser}">
		<!-- header  -->
		<jsp:include page="../common/menuBar.jsp"></jsp:include>
		<!-- contents -->
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<h2 id="b-title">상담관리</h2>
				<br>

				<div class="bbs">


					<table>

						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>이름</th>
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
									<c:url var="cDetail" value="/consultant/Detail.kh">
										<c:param name="cons_student_no" value="${loginUser.studentNo}"></c:param>
										<c:param name="cons_no" value="${consultant.cons_no}"></c:param>
									</c:url>

									<td class="ta" id="title" ><a href="${cDetail}">${consultant.cons_title }</a></td>
										
									<td class="ta" id="writer">${consultant.cons_student_name}</td>
									<td class="ta" id="stu_number">${consultant.cons_student_no}</td>
									<td class="ta" id="college">${consultant.cons_college}</td>
									<td class="ta" id="date">${consultant.cons_date}</td>
									<td class="ta" id="time">${consultant.cons_time}</td>
									<td class="ta" id="counselor">${consultant.cons_counselor}</td>
									<td class="ta" id="counselor">${consultant.cons_content}</td>
									<td class="ta" id="status">${consultant.cons_status == 'Y' ? "상담완료": "상담대기"}</td>
									<td class="ta" id="univ_code">${consultant.cons_university_code}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
					<div class="paging" align="center">

						<c:if test="${pi.startNavi !=1}">

							<a href="/consultant/list.kh?page=${pi.startNavi-1}">
								<button class="pbtn">＜</button>
							</a>

						</c:if>

						<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
							<c:url var="pagination" value="/consultant/list.kh">
								<c:param name="page" value="${p }"></c:param>
							</c:url>

							<a href="${pagination }">
								<button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button>
							</a>&nbsp;
																		
						</c:forEach>


						<c:if test="${pi.next && pi.endNavi > 0}">

							<a href="/consultant/list.kh?page=${pi.endNavi+1}"> 
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