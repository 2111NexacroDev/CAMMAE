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
					style="width: 80px; height: 80px;"> <a href="/main.kh"> <span
					id="lnb_title"> 대일대학교</span>
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
			<input type="hidden" name="port_no" value="${portfolio.port_no}" />

			제목 <span>${portfolio.port_title}</span><br> 
			이름 <span>${portfolio.port_name}</span><br>
			학번 <span>${portfolio.port_student_no}</span><br> 
			학과명 <span>${portfolio.port_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</span><br>
			전화번호 <span>${portfolio.port_student_number}</span><br> 
			자격증 첨부 <span>${portfolio.port_license}</span><br>
			수상이력 첨부 <span>${portfolio.port_award_history}</span><br>
			작성날짜 <span>${portfolio.port_writerDate}</span><br>
			내용 <span>${portfolio.port_content}</span><br> 
			단과대학 <span>${portfolio.port_university_code}</span>

			<div class="list_btn">
				<a id="list_l"
					href="/portfolio/updateView.kh?port_no=${portfolio.port_no}"><button>수정</button></a>
				<a id="list_l"
					href="/portfolio/delete.kh?port_no=${portfolio.port_no}"><button>삭제</button></a>
			</div>
		</div>
	</div>

</body>
</html>