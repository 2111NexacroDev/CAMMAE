<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수강신청 내역</title>
</head>
<body>
	<h1>수강신청 내역</h1>
	<table border="3">
		
		<tr>
			<th>강의번호</th>
			<th>학번</th>
			<th>년도</th>
			<th>학기</th>
			<th>교과목명</th>
			<th>이수구분</th>
			<th>학점</th>
			<th>변경여부</th>
			<th>평점</th>
			<th>학년</th>
			<th>이의신청여부</th>
			<th>학기</th>
			<th>신청날짜</th>
			<th>삭제</th>
			
		</tr>
		<c:forEach items="${lList }" var="grade">
			<tr>
				<td>${grade.lectureNo }</td>
				<td>${grade.studentNo }</td>
				<td>${grade.gradeYear }</td>
				<td>${grade.gradeSession }</td>
				<td>${grade.gradeSubject }</td>
				<td>${grade.gradeComplete }</td>
				<td>${grade.lectureGrade }</td>
				<td>${grade.gradeScore }</td>
				<td>${grade.gradeAvg }</td>
				<td>${grade.gradeFeedback }</td>
				<td>${grade.gradeObjection }</td>
				<td>${grade.gradeChange }</td>
				
			<%-- 	<td>${grade.professorName }</td>
				<td>${grade.lectureName }</td> --%>
				<td><c:url var="gRemove" value="/cart/enrollRemove.kh">
						<c:param name="lectureNo" value="${grade.lectureNo }"></c:param>
					</c:url> <a href="${gRemove }">삭제</a></td>
			</tr>

		</c:forEach>
	</table>

</body>
</html>