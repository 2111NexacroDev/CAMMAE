<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/contents.css">
<!-- <link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css"> -->
<title>예비수강신청 내역</title>
<style>
h2 {
	color: rgb(0, 74, 38)
}

table.type01 {
	border-collapse: collapse;
	text-align: center;
	line-height: 1.5;
	/* border-left: 1px solid #ccc; */
	/*  margin: 20px 10px; */
	width: 800px;
}

table.type01 thead th {
	/*   padding: 10px; */
	font-weight: bold;
	border-top: 1px solid #ccc;
	height: 35px;
	/* border-right: 1px solid #ccc; */
	border-bottom: 1px solid #ccc;
	background: rgb(231, 232, 226);
}

table.type01 td {
	width: 350px;
	vertical-align: top;
	height: 35px;
	line-height: 35px;
	/*  border-right: 1px solid #ccc; */
	border-bottom: 1px solid #ccc;
}

table.type01 td a {
	text-decoration: none;
	color: black;
}

#d1 {
	width: 6%;
}

#d2 {
	width: 10%;
}

#d3 {
	width: 7%;
}

#d4{
	width : 15%;
}

#d5 {
	width: 12%;
}

#d6 {
	width: 30%;
}
</style>
</head>
<body>
<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideCMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>예비수강신청 내역</h2>
				</div>
			</div>
	
	<table class="type01">
		<thead>
		<tr>
			<th id="d1">신청</th>
			<!-- <th id="n1">장바구니번호</th>
			<th id="n1">과목코드</th> -->
		<!-- 	<th id="n1">학번</th> -->
			<th id="d2">학기</th>
			<th id="d4">개설학과</th>
			<th id="d5">이수구분</th>
			<th >교과목명</th>
			<th id="d1">학점</th>
			<th id="d2">교수명</th>
			<th id="d1">시간</th>
			<th id="d1">삭제</th>
		</tr>
		</thead>
		<tbody>
		<c:forEach items="${cList }" var="cart">
			<tr>
				<td>
				<c:if test="${aFlag == 'Y'}">
				<c:url var="lPick" value="/cart/cartEnroll.kh">
				<c:param name="lectureNo" value="${cart.lectureNo }"></c:param></c:url>
					<a href="${lPick }">신청</a>
				</c:if>
				</td>
				<%-- <td>${cart.cartNo }</td>
				<td>${cart.lectureNo }</td> --%>
				<%-- <td>${cart.studentNo }</td> --%>
				<td>${cart.lectureTerm }</td>
				<td>${cart.lectureDepartment }</td>
				<td>${cart.lectureDivision }</td>
				<td>${cart.lectureName }</td>
				<td>${cart.lectureGrade }</td>
				<td>${cart.professorName }</td>
				<td>${cart.lectureStartTime}<br>${cart.lectureEndTime}</td>
				
				<td><c:url var="cRemove" value="/cart/remove.kh">
						<c:param name="cartNo" value="${cart.cartNo }"></c:param>
					</c:url> <a href="${cRemove }">삭제</a></td>
			</tr>

		</c:forEach>
		</tbody>
	</table>
</div>
</div>
<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>