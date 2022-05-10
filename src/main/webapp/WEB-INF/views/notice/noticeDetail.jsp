<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
<style>
a{
	color: black;
}
#title_1 {
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
}
table.type05 {
  border-bottom: 1.5px solid rgb(30, 57, 50);
  border-top: 1.5px solid rgb(30, 57, 50);
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  margin-top: 10px ;
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
#n1{
	width : 15%;
}	
#content1{
	width: 800px;
	height: 300px;
}
</style>
<meta charset="UTF-8">
<title>공지사항 상세 목록 조회</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
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
				<div class="b-title"><h2>공지사항</h2></div>
				<div class="btn_1">
				<c:url var="nModify" value="/notice/modifyView.kh">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<c:url var="nDelete" value="/notice/delete.kh">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<button class="btn" onclick="location.href='${nModify}'">수정</button>
				<button class="btn" onclick="location.href='${nDelete}'">삭제</button>
				<button style="width: 50px" class="btn" onclick="location.href='/notice/list.kh'">목록</button>
				</div>
			</div>
		<div id="title_1">
				<div id="title_2">
					&nbsp;&nbsp;&nbsp;<span>${notice.noticeTitle }</span>
				</div>
				<div id="title_3">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${notice.noticeWriter }&nbsp;｜&nbsp;</span>
					<span> ${notice.noticeDate }</span>
				</div>
			</div>
	<table class="type05">
	<thead>
		<tr>
			<th id="n1">첨부파일</th>
  			<th><a href="../../../resources/nuploadFiles/${notice.noticeFileRename }" download>${notice.noticeFileName }</a></th>
		</tr>
	</thead>	
	</table>
	<br>
	<div id="content1">
		${notice.noticeContent }	
	</div>
	<hr style="width: 800px; color: #ccc;">
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>