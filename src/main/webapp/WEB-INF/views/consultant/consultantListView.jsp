<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 상담신청 전체조회 페이지</title>
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
	width: 70%;
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
											
											<td class="ta" id="detail" style="text-align:left"><a href="${cDetail}">${consultant.cons_title }</a></td>
											<td class="ta" id="writer">${consultant.cons_student_name}</td>
											<td class="ta" id="stu_number">${consultant.cons_student_number}</td>
											<td class="ta" id="college">${consultant.cons_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</td>
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
				
						</div>
					</div>						
</body>
</html>