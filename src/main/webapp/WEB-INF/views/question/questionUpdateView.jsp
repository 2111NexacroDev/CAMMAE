<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답 게시판</title>
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
	<div class="left">1</div>
	<div class="center">
		<form action="/question/update" method="POST"
			enctype="multipart/form-data">
			<input type="hidden" name="questionNo" value="${question.questionNo }">
			<!-- 파일 수정 하지않을 때 기존 파일 경로 그대로 사용하기 위해서  파일을 수정할 때는 기존 파일을 삭제하기 위해서-->
			<input type="hidden" name="questionFileName" value="${question.questionFileName }"> 
			<input type="hidden" name="questionFileReName" value="${question.questionFileReNeme }">
			<input type="hidden" name="questionFilePath" value="${question.questionFilePath }"> 
			<input type="hidden" name="questionDate" value="${question.questionDate }">


			<h3 id="b-title">질의응답 게시판</h3>
			<br>
			<div class="c-main">
				<div class="selectBox" style="padding: 10px;">
					<select name="selectProfessor" style="border: none; width: 250px;">
						<option value="" selected="selected">교수를 선택하세요</option>
						<option value="">교수1</option>
					</select> &emsp;&emsp; <select name="selectLecture"
						style="border: none; width: 250px;">
						<option value="" selected="selected">수업을 선택하세요</option>
						<option value="">수업1</option>
					</select>
				</div>
				<div class="title">
					<input type="text" size="50" name="questionTitle"
						style="border: none; padding: 10px;"
						value="${question.questionTitle }">

				</div>
				<hr style="width: 585px; text-align: center;">
				<div class="content" style="padding: 10px;">
					<textarea rows="20" cols="75" id="questionContent"
						name="questionContent">	${question.questionContent }</textarea>
				</div>

				<div style="padding: 10px;">
					<input type="file" id="fileArea" name="reloadFile">
					${question.questionFileName}
				</div>

				<hr style="width: 585px; text-align: center;">
				<div align="center" style="padding: 15px;">
					<button class="btn" type="submit">수정</button>
					<button class="btn" type="reset">취소</button>
				</div>
			</div>
		</form>

	</div>
</body>
</html>