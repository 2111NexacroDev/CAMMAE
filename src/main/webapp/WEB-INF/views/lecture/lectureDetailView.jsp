<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>강의 수정 페이지</title>
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<style>
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
	text-align: center;
	font-weight: bold;
}

input {
	margin-left: 5px;
}

select {
	margin-left: 5px;
}

td {
	padding: 7px;
	border-bottom: 1px solid #CCC;
}

#content1 {
	width: 790px;
	height: 300px;
}

table {
	margin-bottom: 10px;
}
</style>
</head>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideLMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>수강개설</h2>
				</div>
			</div>
			<div>
				<table class="type05" align="center">
					<tr>
						<td id="n1">강의코드</td>
						<td>${lecture.lectureNo }</td>
					</tr>
			<%-- 		<tr>
						<td id="n1">교수코드</td>
						<td>${lecture.professorNo }</td>
					</tr> --%>
					<tr>
						<td id="n1">단과대학</td>
						<td>${lecture.universityCollege }</td>
					</tr>
					<tr>
						<td id="n1">이수구분</td>
						<td>${lecture.lectureDivision }</td>
					</tr>
					<tr>
						<td id="n1">개설학과</td>
						<td>${lecture.lectureDepartment }</td>
					</tr>
					<tr>
						<td id="n1">강의명</td>
						<td>${lecture.lectureName }</td>
					</tr>
					<tr>
						<td id="n1">교수명</td>
						<td>${lecture.professorName }</td>
					</tr>
					<tr>
						<td id="n1">학점</td>
						<td>${lecture.lectureGrade }</td>
					</tr>
					<tr>
						<td id="n1">시작시간</td>
						<td>${lecture.lectureStartTime}</td>
					</tr>
					<tr>
						<td id="n1">종료시간</td>
						<td>${lecture.lectureEndTime}</td>
					</tr>
					<tr>
						<td id="n1">강의실</td>
						<td>${lecture.lectureRoom }</td>
					</tr>
					<tr>
						<td id="n1">강의인원</td>
						<td>${lecture.lecturePeople }</td>
					</tr>
				</table>
				<div align="center">
				<button class="btn" onclick="location.href='/lecture/list.kh'">목록</button>
				<c:url var="lModify" value="/lecture/modifyView.kh">
					<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
				</c:url>

				<button class="btn" onclick="location.href='${lModify }'">수정</button>
				<c:url var="lRemove" value="/lecture/remove.kh">
					<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
				</c:url>
				<button class="btn" onclick="location.href='${lRemove }'">삭제</button>
				</div>
			</div>
		</div>
	</div>
	
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>