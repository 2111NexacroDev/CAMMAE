<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/resources/menuBar.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<title>menuBar</title>
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
                    <img src="/resources/img/logo.png" style="width:80px; height:80px; " >
                    <a href="/main.kh">  
                    <span id="lnb_title"> 대일대학교</span></a>
                    <span id="lnb_subtitle">DAILE UNIVERSITY</span>
                </h1>
                <ul class="lnb_nav_dep1">
                    <li><a href="/board/list.kh" class="btn_lnb_dep1">게시판</a></li>
                    <li><a href="#" class="btn_lnb_dep1">수강신청</a></li>
                    <li><a href="#" class="btn_lnb_dep1">캠퍼스매니저</a></li>
                    <li><a href="/notice/list.kh" class="btn_lnb_dep1">취업지원센터</a></li>
                </ul>
            </div>
        </div>
        <div id="line">
        <img src="/resources/img/menubar3.jpg" style="width:100%; height:100%;">
        </div>

</body>
</html>