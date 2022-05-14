<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<title>수강개설목록</title>
<style>
#L1{
	width:5%;
}
#L2{
	width:10%;
}
#L3{
	width:15%;
}
#L4{
	width:13%;
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
					<h2>수강개설목록</h2>
				</div>
				<div class="btn_1">
					<%-- <c:url var="lWrite" value="/lecture/writeView.kh">
							<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
						</c:url>
						<a href="${lWrite }">등록하기</a> --%>

					<button style="width: 80px" class="btn"
						onclick="location.href='/lecture/writeView.kh'">수강개설</button>
				</div>
			</div>
			<table class="type01">
				<thead>
					<tr>
						<th id="L2">강의코드</th>
						<!-- <th id="L3">단과대학</th> -->
						<th id="L4">이수구분</th>
						<th id="L3">개설학과</th>
						<th>강의명</th>
						<th id="L2">교수명</th>
						<th id="L1">학점</th>
						<!-- <th>시작시간</th>
						<th>종료시간</th>
						<th>강의실</th> -->
						<th id="L1">인원</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${lList }" var="lecture">
						<tr>
							<c:url var="lDetail" value="/lecture/Detail.kh">
								<c:param name="lectureNo" value="${lecture.lectureNo}"></c:param>
							</c:url>

							<td>${lecture.lectureNo }</td>
							<%-- <td>${lecture.professorNo }</td> --%>
							<%-- <td>${lecture.universityCollege }</td> --%>
							<td>${lecture.lectureDivision }</td>
							<td>${lecture.lectureDepartment }</td>
							<td><a href="${lDetail}">${lecture.lectureName }</a></td>
							<td>${lecture.professorName }</td>
							<td>${lecture.lectureGrade }</td>
							<td>${lecture.lecturePeople }</td>
							<%-- <td>${lecture.lectureRoom }</td> --%>
							<%-- <td>${lecture.lectureStartTime }</td>
							<td>${lecture.lectureEndTime }</td> --%>
							<%-- <td><c:url var="lRemove" value="/lecture/remove.kh">
									<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
								</c:url> <a href="${lRemove }">삭제</a></td> --%>
						</tr>
					</c:forEach>
					</tbody>
			</table>

		</div>
	</div>
</body>
</html>