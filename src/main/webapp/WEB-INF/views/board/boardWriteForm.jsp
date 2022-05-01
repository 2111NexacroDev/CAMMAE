<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 게시판</title>
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

h3{
	color : #10412C;
}

.btn{
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
	
	<div class="center">
		<form action="/board/register.kh" method="POST"
			enctype="multipart/form-data">
			<h3 id="b-title">학과 게시판</h3>
			<br>
			<div class="c-main">
			<!-- 
				<input type="hidden" name="boardWriter" > -->
				<div class="title">
					<input type="text" size="50" name="boardTitle"
						placeholder="제목을 입력하세요" style="border: none; padding: 10px;">
				</div>
				
				<div class="title">
					<input type="text" size="50" name="universityCode"
						placeholder="학과를 선택하세요" style="border: none; padding: 10px;">
				</div>
				

				<hr style="width: 585px; text-align: center;">
				<div class="content" style="padding: 10px;">
					<textarea rows="20" cols="75" id="boardContent"
						name="questionContent" placeholder="내용을 입력하세요"></textarea>
				</div>

				<div style="padding: 10px;">
					<input type="file" id="uploadfile" name="uploadFile">
				</div>

				<hr style="width: 585px; text-align: center;">
				<div align="center" style="padding: 15px;">
					<button class="btn" type="submit">등록</button>
					
				</div>
			</div>
		</form>

	</div>
<!-- 	<div class="right">3</div> -->
</body>
</html>