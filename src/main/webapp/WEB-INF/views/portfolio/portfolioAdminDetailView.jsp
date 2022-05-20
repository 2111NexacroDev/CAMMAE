<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/common.css">
<style>
table.type05 {
	border-bottom: 1.5px solid rgb(30, 57, 50);
	border-top: 1.5px solid rgb(30, 57, 50);
	border-collapse: collapse;
	text-align: left;
	line-height: 1.5;
	margin-top: 10px;
	width: 800px;
}

table.type05 thead {
	background: rgb(231, 232, 226);
}

table.type05 thead th {
	padding: 10px;
	vertical-align: top;
	color: black;
}

.ta_l{
	width: 15%;
	background: rgb(231, 232, 226);
	text-align: center;
	font-weight: bold;
}

.ta_l {
    text-align: left !important;

}
td {
	padding: 7px;
	border-bottom: 1px solid #CCC;
}


.list_btn{

	text-align: center;
}
.list_btn1{

	float: right;
}
#btn{
	cursor:pointer;
}
</style>
</head>
<body>

	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope.loginManager }">
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="bbs">
				<div class="c-title">
					<h2 class="b-title">포트폴리오</h2>
				</div>
				<br><br>
				<input type="hidden" name="port_no" value="${portfolio.port_no}">
					
					<div class="tb1">
					<table class="type05">
						<colgroup>
							<col style="width:180px;">
							<col>
						</colgroup>
						<tbody>
							<tr>
								<th scope="row" class="ta_l">제목</th>
								<td >${portfolio.port_title}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">이름</th>
								<td >${portfolio.port_name}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">학번</th>
								<td >${portfolio.port_student_no}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">학과명</th>
								<td >${portfolio.port_college}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">단과대학</th>
								<td>${portfolio.port_university_code}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">전화번호</th>
								<td >${portfolio.port_student_number}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">자격증 첨부</th>
								<td ><a href="../../../resources/puploadFiles/${portfolio.port_licenseRename}" download>${portfolio.port_license}</a></td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">수상이력 첨부</th>
								<td ><a href="../../../resources/puploadFiles/${portfolio.port_award_historyRename}" download>${portfolio.port_award_history}</a></td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">작성날짜</th>
								<td >${portfolio.port_writerDate}</td>
							</tr>
							
							<tr>
								<th scope="row" class="ta_l">내용</th>
								<td >${portfolio.port_content}</td>
							</tr>
						</tbody>
					</table>
					<br>
				</div>
				<div class="list_btn1">
				<a href="/portfolio/adminListView.kh" id="list_l"><button id="btn" class="btn">목록</button></a>	
			</div>
			</div>
		</div>
	</div>
	<jsp:include page="../common/footer.jsp"></jsp:include>
</c:if>
</body>
</html>