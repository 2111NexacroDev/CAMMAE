<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답 게시판</title>
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
			<form action="/question/register" method="POST"
				enctype="multipart/form-data">
				<div class="c-title">
				<div class="b-title">
					<h2>질의응답게시판</h2>
				</div>
				</div>
				<div class="c-main">
				<input type="hidden" name="questionWriter" value="${loginUser.studentName}">
					<div class="selectBox" style="padding:10px;">
						<select id="professorName" name="professorName"
							onchange="getProName()" style="border: none; width: 330px;">
							<option value="" selected disabled >담당교수를 선택하세요</option>
							<c:forEach var="lList" items="${lList}">
								<option value="${lList.professorName }">${lList.professorName }</option>
							</c:forEach>
						</select> &emsp;&emsp; <select id="lectureName" name="lectureName"
							style="border: none; width: 330px;">
							<option value="">강의명을 선택하세요</option>
						</select>

					</div>
					<div class="title">
						<input type="text" size="95" name="questionTitle"
							placeholder="제목을 입력하세요" style="border: none; padding: 10px;">
					</div>

					<hr style="width: 740px; text-align: center;">
					<div class="content" >
						<textarea rows="20" cols="101" id="questionContent"
							name="questionContent" placeholder="내용을 입력하세요"></textarea>
					</div>

					<div style="padding: 10px;">
						<input type="file" id="fileArea" name="uploadFile">
					</div>

					<hr style="width: 740px; text-align: center;">
					<div align="center" style="padding: 15px;">
						<button class="btn" type="submit">등록</button>
						<button type="reset" class="btn" onclick="location.href='/question/list'">취소</button>
					</div>
				</div>
			</form>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>



	<script>
		function getProName() {
			var professorName = $("#professorName").val();
			var target = $("#lectureName");
			$.ajax({
				url : "/question/selectLeture",
				type : "get",
				data : {
					"professorName" : professorName
				},
				success : function(data) {
					$("#lectureName option").remove();
					for (var i = 0; i < data.length; i++) {
						$("#lectureName").append(
								"<option value="+data[i].lectureName+">"
										+ data[i].lectureName + "</option>");
					}
				},
				error : function() {
					alert("ajax 실패");
				}
			})

		}
	</script>
</body>
</html>