<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 포트폴리오 수정 페이지</title>
<link rel="stylesheet" href="/resources/contents.css">
</head>

<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope.loginUser }">
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
				<form action="/portfolio/modify.kh" method="post"
					enctype="multipart/form-data">
					<input type="hidden" name="port_no" value="${portfolio.port_no}" />
					<input type="hidden" name="port_licenseRename" value="${portfolio.port_licenseRename}"> 
					<input type="hidden" name="port_licenseFilePath" value="${portfolio.port_licenseFilePath}"> 
					<input type="hidden" name="port_award_historyRename" value="${portfolio.port_award_historyRename}">
					<input type="hidden" name="port_awardFilePath" value="${portfolio.port_awardFilePath}">
					제목 <input type="text" name="port_title" value="${portfolio.port_title}"><br>	
					이름 <input type="text" name="port_name" value="${portfolio.port_name}"><br> 
					학번 <input type="text" name="port_student_no" value="${portfolio.port_student_no}" readonly><br>	
					학과명 <input type="text" name="port_college" readonly	value="${portfolio.port_college }"><br>
					전화번호 <input type="text" name="port_student_number"	value="${portfolio.port_student_number}" readonly><br>
					자격증 첨부 <input type="file" name="reloadFile">${portfolio.port_license}<br>
					수상이력 첨부 <input type="file" name="reloadFile1">${portfolio.port_award_history}<br>
					작성날짜 <input type="text" name="port_writerDate" value="${portfolio.port_writerDate}" readonly><br>
					내용 <textarea type="text" name="port_content" value="${portfolio.port_content}"></textarea><br>
					단과 <input type="text" name="port_university_code" value="${portfolio.port_university_code }" />		
					<div class="enr_btn">
						<div class="input-btn">
							<input type="submit" id="btn1" value="수정"><br> 
							<input type="button" id="btn2" onclick="location.href='/portfolio/delete.kh?port_no=${portfolio.port_no}'" value="삭제">			
						</div>
						<div class="a-btn">
							<a href="/portfolio/listView.kh" id="list_l">목록</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>
</body>
</html>