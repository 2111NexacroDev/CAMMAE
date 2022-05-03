

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상담신청 페이지</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
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
				<h2 align="left" style="color: rgb(0, 74, 38)">상담관리</h2>
				<form action="/consultant/register.kh" method="post">
					상담제목 <input type="text" name="cons_title"><br> 
					이름 <input type="text" name="cons_student_name" value="${loginUser.studentName}"><br>
					학번 <input type="text" name="cons_student_no" value="${loginUser.studentNo }"><br>
					학과명 <input type="text" name="cons_college"	value="${loginUser.universityCollege}"><br>
					단과대학 <input type="text" name="cons_university_code" value="${loginUser.departmentName}"><br>
					전화번호 <input type="text" name="cons_student_number" value="${loginUser.studentPhonenumber}"><br>
					상담희망날짜 <input type="date" name="cons_date"><br> 
					상담희망시간 <input type="time" name="cons_time"><br> 
					상담사 <select id="cons_counselor" class="select" name="cons_counselor" onclick="conChange()">
						<option value="">선택</option>
						<c:forEach items="${mList}" var="mList">
							<option value="${mList.managerNo}">${mList.managerNo}</option>
						</c:forEach>
					</select>
					<br>
					상담내용<textarea name="cons_content"></textarea><br> 
					
					
					<input type="submit" value="상담신청">
				</form>
			</div>
		</div>

	</c:if>
	<script type="text/javascript">
		var mIndex = 0;
		function conChange(){
			if(mIndex == 0) {
				var cons_counselor = $("cons_counselor").val();
				var target = $("#cons_counselor");
				$.ajax({
					url:"/consultant/JoinViewCounselor.kh",
					type : "get",
					data: { "cons_counselor" : cons_counselor},
					success : function(mList) {
							for(var i= 0; i<mList.length; i++) {
							$("#cons_counselor").append("<option value="+mList[i].managerNo+">"+mList[i].managerNo+"</option>");
							}			
			       		
					},
					error : function() {
						alert("ajax 실패");
					}
				})
				mIndex++;
			}
		}
</script>
</body>
</html>