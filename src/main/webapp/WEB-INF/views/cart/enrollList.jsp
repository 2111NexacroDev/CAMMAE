<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/contents.css">
<!-- <link rel="stylesheet" href="/resources/menuBar.css"> -->
 <!-- <link rel="stylesheet" href="/resources/common.css"> -->
<title>수강신청 내역</title>
<style>
h2{
	color: rgb(0, 74, 38)
}
table.type01 {
  border-collapse: collapse;
  text-align: center;
  line-height: 1.5;
  /* border-left: 1px solid #ccc; */
 /*  margin: 20px 10px; */
  width: 800px;
}

table.type01 thead th {
/*   padding: 10px; */
  font-weight: bold;
  border-top: 1px solid #ccc;
  height: 35px;
  /* border-right: 1px solid #ccc; */
  border-bottom: 1px solid #ccc;
  background: rgb(231, 232, 226);
}

table.type01 td {
  width: 350px;
  vertical-align: top;
  height: 35px;
  line-height: 35px;
 /*  border-right: 1px solid #ccc; */
  border-bottom: 1px solid #ccc;
}
table.type01 td a {
	text-decoration: none;
	color: black;
}





#d1{
	width : 6%;
}

#d2{
	width : 8%;
}

#d3{
	width : 15%;
}
#d4{
	width : 22%;
}
</style>
</head>
<body>
<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideCMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>수강신청 내역</h2>
				</div>
			</div>
	
	
	<table class="type01">
		<thead>
		<tr>
		<!-- 	<th  id="d1">강의번호</th> -->
			<!-- <th class="n1" id="d1">학번</th> -->
			<th id="d2" >년도<br>학기</th>
			<!-- <th class="n1" id="d2">학기</th> -->
			<th id="d3">개설학과</th>
			<th id="d3">이수구분</th>
			<th  >교과목명</th>
			<th  id="d1">학점</th>
			<th  id="d2">교수명</th>
			<!-- <th  id="d3">단과대학</th> -->
			<th id="d2" >강의실</th>
			<!-- <th  id="d3">강의인원</th> -->
			<th  id="d1">시간</th>
			<th  id="d1">삭제</th>
			
		</tr>
		</thead>
		
		<tbody>
		<c:forEach items="${lList }" var="lecture">
			<tr >
				<%-- <td>${lecture.lectureNo }</td> --%>
				<%-- <td>${lecture.studentNo }</td> --%>
				<td>${lecture.gradeYear }<br>${lecture.gradeSession }</td>
				<%-- <td>${lecture.gradeSession }</td> --%>
				<td>${lecture.lectureDepartment }</td>
				<td>${lecture.lectureDivision }</td>
				<td>${lecture.lectureName }</td>
				<td>${lecture.lectureGrade }</td>
				<td>${lecture.professorName }</td>
				<%-- <td>${lecture.universityCollege }</td> --%>
				<td>${lecture.lectureRoom }</td>
				<%-- <td>${lecture.lecturePeople }</td> --%>
				<td>${lecture.lectureStartTime} ${lecture.lectureEndTime}</td>
				<td>
				<c:if test="${aFlag == 'Y'}">
				<c:url var="gRemove" value="/cart/enrollRemove.kh">
						<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
					</c:url> <a href="${gRemove }">삭제</a>
					</c:if>
					</td>
			</tr>

		</c:forEach>
		</tbody>
	</table>
</div>
</div>

<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>