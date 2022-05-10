<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 게시판</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="/resources/contents.css">
<style>
.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 740px;
	padding: 30px 30px 30px 30px;
	margin-top: 45px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-left: 0px;
}
</style>
</head>

<body>
	
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		
		<!-- contents-main -->
		<div id="center">
			<form action="/board/register.kh" method="POST"
				enctype="multipart/form-data">
				<div class="c-title">
				<div class="b-title">
					<h2>학과 게시판</h2>
				</div>
				</div>
			<div class="c-main">
			<!-- 
				<input type="hidden" name="boardWriter" > -->
				<div class="title">
					<input type="text" size="95" name="boardTitle"
						placeholder="제목을 입력하세요" style="border: none; padding: 10px;">
				</div>
				
				<div class="title">
					<input type="hidden" size="50" name="universityCode" value="${loginUser.universityCode}"
						placeholder="학과를 선택하세요" style="border: none; padding: 10px;">
				</div>
				

				<hr style="width: 740px; text-align: center;">
				<div class="content" >
					<textarea rows="20" cols="101" id="boardContent"
						name="boardContent" placeholder="내용을 입력하세요"></textarea>
				</div>
				
				<div>
					<input type="hidden" size="50" name="boardWriter" value="${loginUser.studentName}">
					<input type="hidden" size="50" name="boardId" value="${loginUser.studentNo}">
				</div>

				<div style="padding: 10px;">
					<input type="file" id="uploadfile" name="uploadFile">
				</div>

				<hr style="width: 740px; text-align: center;">
				<div align="center" style="padding: 15px;">
					<button class="btn" type="submit">등록</button>
					<button class="btn" type="reset" onclick="location.href='/board/list.kh'">취소</button>
					
				</div>
			</div>
		</form>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
	
<!-- 	<div class="right">3</div> -->
</body>
</html>