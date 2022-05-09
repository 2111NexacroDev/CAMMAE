<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/contents.css">
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
			<br>
			<div class="bbs">
				<h2 align="left" style="color: rgb(0, 74, 38)">포트폴리오</h2>
				<input type="hidden" name="port_no" value="${portfolio.port_no}">
					상담제목 <span>${portfolio.port_title}</span><br>
					이름 <span>${portfolio.port_name}</span><br>
					학번 <span>${portfolio.port_student_no }</span><br>
					학과명 <span>${portfolio.port_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</span><br>
					전화번호 <span>${portfolio.port_student_number }</span><br>
					자격증첨부 <span><a href="../../../resources/puploadFiles/${portfolio.port_licenseRename}" download>${portfolio.port_license}</a></span><br>
					수상이력 첨부<span><a href="../../../resources/puploadFiles/${portfolio.port_award_historyRename}" download>${portfolio.port_award_history}</a></span><br>
					작성날짜 <span>${portfolio.port_writerDate}</span><br>
					상담내용 <span>${portfolio.port_content}</span><br>
					단과대학 <span>${portfolio.port_university_code}</span>

			</div>
		</div>
	</div>
	<jsp:include page="../common/footer.jsp"></jsp:include>
</c:if>
</body>
</html>