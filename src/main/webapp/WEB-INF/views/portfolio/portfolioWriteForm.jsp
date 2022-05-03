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
				<form action="/portfolio/register.kh" method="post" enctype="multipart/form-data">
					제목 <input type="text" name="port_title"><br> 
					이름 <input type="text" name="port_name" value="${loginUser.studentName}"><br>
					학번 <input type="text" name="port_student_no" value="${loginUser.studentNo}"><br> 
					학과명 <input type="text" name="port_college" value="${loginUser.universityCollege}"><br>
					전화번호 <input type="text" name="port_student_number" value="${loginUser.studentPhonenumber}"><br>
					자격증 첨부 <input type="file" name="uploadFile" value="첨부파일" multiple="multiple"><br>
					수상이력 첨부 <input type="file" name="uploadFile1" value="첨부파일" multiple="multiple"><br> 
					단과대학 <input type="text" name="port_university_code" value="${loginUser.departmentName}" /><br>
					내용 <textarea name="port_content"></textarea><br>
					<input type="submit" value="등록">
				</form>
			</div>
		</div>

	</c:if>
</body>
</html>