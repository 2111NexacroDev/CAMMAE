<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 게시판</title>
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
hr {
	width: 740px;
	text-align: center;
	margin-top:10px;
	margin-bottom:10px;
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
			<form action="/board/update.kh" method="POST"
				enctype="multipart/form-data">
				<input type="hidden" name="boardNo" value="${board.boardNo }">
				<input type="hidden" name="boardFilename"
					value="${board.boardFilename }"> <input type="hidden"
					name="boardFilerename" value="${board.boardFilerename }"> <input
					type="hidden" name="boardFilepath" value="${board.boardFilepath }">
				<input type="hidden" name="boardDate" value="${board.boardDate }">
				<div class="c-title">
					<div class="b-title"></div>
				
				<h3 id="b-title">학과게시판</h3>
				</div>
				<div class="c-main">

					<div class="title">
						<input type="text" size="95" name="boardTitle"
							style="border: none; padding: 10px;" value="${board.boardTitle }">

					</div>
					<hr>
					<div class="content">
						<textarea rows="20" cols="101" id="boardContent"
							name="boardContent">	${board.boardContent }</textarea>
					</div>

					<div style="padding: 10px;">
						<input type="file" id="fileArea" name="reloadFile">
						${board.boardFilename}
					</div>

					<hr>
					<div align="center" style="padding: 15px;">
						<button class="btn" type="submit">수정</button>
						<button class="btn" type="reset">취소</button>
					</div>
				</div>

			</form>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>

</body>
</html>