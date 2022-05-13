<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>(관리자)공지사항 작성</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
<style>
a {
	color: black;
}

/* #title_1 {
	height: 50px;
	width: 800px;
	margin-top: 50px;
	border-top: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
}

#title_2 {
	height: inherit;
	width: 70%;
	float: left;
	line-height: 50px;
}

#title_3 {
	height: inherit;
	width: 30%;
	float: left;
	line-height: 50px;
} */

table.type05 {
	border-bottom: 1.5px solid rgb(30, 57, 50);
	border-top: 1.5px solid rgb(30, 57, 50);
	border-collapse: collapse;
	text-align: left;
	line-height: 1.5;
	margin-top: 10px;
	width: 800px;
}

table.type05 thead {
	background: rgb(231, 232, 226);
}

table.type05 thead th {
	padding: 10px;
	vertical-align: top;
	color: black;
}

#n1 {
	width: 15%;
	background: rgb(231, 232, 226);
	text-align : center;
	font-weight : bold;
}

input{
	margin-left : 5px;
}

td{
	padding : 7px;
	border-bottom : 1px solid #CCC;
}
#content1 {
	width: 790px;
	height: 300px;
}
table{
margin-bottom : 10px;
}
</style>
</head>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>

	<!-- contents영역 -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>공지사항</h2>
				</div>

				<div>
					<form action="/notice/register.kh" method="post"
						enctype="multipart/form-data">

						<table class="type05" align="center">
							<tr>
								<td id="n1">제목</td>
								<td><input type="text" size="50" name="noticeTitle"></td>
							</tr>
							<tr>
								<td id="n1">작성자</td>
								<td><input type="text" size="50" name="noticeWriter" value="${loginManager.managerName}" readonly></td>
							</tr>
							<tr>
								<td id="n1">첨부파일</td>
								<td><input type="file" size="50" name="uploadFile"></td>
							</tr>
						</table>

						<div>
							<textarea id="content1" name="noticeContent"></textarea>
						</div>

						<div align="center">
							<hr style="color:#CCC">
							<button type="submit" class="btn">등록</button>
							<button class="btn" type="reset"
								onclick="location.href='/notice/list.kh'">취소</button>
						</div>

						<!-- <table align="center" border="1">
						<tr>
							<td>제목</td>
							<td><input type="text" size="50" name="noticeTitle"></td>
						</tr>
						<tr>
							<td>작성자</td>
							<td><input type="text" size="50" name="noticeWriter"></td>
						</tr>
						<tr>
							<td>첨부파일</td>
							<td><input type="file" size="50" name="uploadFile"></td>
						</tr>
						<tr>
							<td>내용</td>
							<td><textarea row="7" cols="50" name="noticeContent"></textarea></td>
						</tr>
						<tr>
							<td><input type="submit" value="등록"> <input
								type="reset" value="취소"></td>
						</tr>
					</table> -->
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>