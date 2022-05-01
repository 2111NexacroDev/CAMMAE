<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판</title>
<link rel="stylesheet" href="/resources/menuBar.css">
<style>
.left {
	width: 32%;
	float: left;
}

.center {
	width: 50%;
	float: left;
}

.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 600px;
	padding: 30px 30px 30px 30px;
}

h3 {
	color: #10412C;
}

.btn {
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}

/* .right {
	width: 20%;
	float: left;
} */
</style>
</head>

<body>
 <div id="header">
        <!-- 로그인, 회원가입 부분 -->
        <!-- gnb = global navigation bar  -->
        <div id="gnb">   
            <div class="inner">
            
                <a href="/main.kh" class="btn_gnb_home">
                 
                    HOME
                </a>
                <c:if test="${empty sessionScope}">
	                <a href="/login/loginPage.kh" class="btn_gnb_login">
	                 
	                    LOGIN
	                </a>
              	</c:if>
              	<c:if test="${not empty sessionScope}">
              		<a href="/login/logout.kh" class="btn_gnb_login">

	                    LOGOUT
	                </a>
	           </c:if>
            </div>
        </div>  
        <!-- local navigation bar -->
        <div id="lnb">
            <div class="inner lnb_nav">
                <h1>
                    <img src="/resources/img/logo.png" style="width:80px; height:80px; " >
                    <a href="main.kh">  
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
    </div>

 <div id="content">
	<div class="left">1</div>
	<div class="center">
		<h3 id="b-title">질의응답 게시판</h3>
		<br>
		<div>
			<button class="btn" onclick="location.href='/question/registerView'">글쓰기</button>
		</div>
		<br>
		<table width="600px" border="1">
			<tr>
				<th>번호</th>
				<th>담당교수 및 강의명</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>
			<c:forEach items="${qList }" var="question">
				<tr>
					<td>${question.questionNo }</td>
					<td align="center">${question.professorName }_${question.lectureName }</td>
					<c:url var="qDetail" value="/question/detail">
						<c:param name="questionNo" value="${question.questionNo}"></c:param>
					</c:url>
					<td><a href="${qDetail}">${question.questionTitle }</a></td>
					<td>${question.questionWriter }</td>
					<td>${question.questionDate }</td>
					<td>${question.questionCount }</td>
				</tr>
			</c:forEach>
		</table>
		<br>
		<div>
			<form action="/question/search.kh" method="get">
				<select name="searchCondition">
					<option value="all">전체</option>
					<option value="professor">담당교수</option>
					<option value="lecture">강의명</option>
					<option value="title">제목</option>
					<option value="contents">내용</option>
					<option value="writer">작성자</option>
				</select> <input type="text" name="searchValue"> <input class="btn"
					type="submit" value="검색">
			</form>
		</div>
		<!-- 페이지 -->
		<div>
			<c:if test="${pi.startNavi ==1 }">

				<a href="/question/list?page=1">
					<button>이전</button>
				</a>

			</c:if>


			<c:if test="${pi.prev}">

				<a href="/question/list?page=${pi.startNavi-1}">
					<button>이전</button>
				</a>
			</c:if>


			<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
				<c:url var="pagination" value="/question/list">
					<c:param name="page" value="${p }"></c:param>
				</c:url>
				<a href="${pagination }">${p }</a>&nbsp;
			</c:forEach>
			<c:if test="${pi.next && pi.endNavi > 0}">

				<a href="/question/list?page=${pi.endNavi+1}">
					<button>다음</button>
				</a>

			</c:if>

			<%-- <c:if test="${pi.endNavi && pi.endNavi >0}">
		<a href="/question/list?page=${pi.endNavi+1 }"><button style="height:25px; width:55px">다음</button></a>
	</c:if> --%>

		</div>
	</div>
 </div>
 <br>
 <!-- footer -->
    <footer>
        <div class="footer_tit">서울특별시 중구 남대문로 120 대일빌딩 2F, 3F (T: 1544-9970) / F: 02-722-0858)</div>
        <div id="footer_bottom">Copyright © 1998-2022 DI University All Right Reserved</div>
     </footer>
</body>
</html>