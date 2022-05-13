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
			<th>교수명</th>
			<th>개설학과</th>
			<th>단과대학</th>
			<th>강의실</th>
			<th>강의인원</th>
			<th>강의시간</th>
			<th>삭제</th>
			
		</tr>
		<c:forEach items="${lList }" var="lecture">
			<tr>
				<td>${lecture.lectureNo }</td>
				<td>${lecture.studentNo }</td>
				<td>${lecture.gradeYear }</td>
				<td>${lecture.gradeSession }</td>
				<td>${lecture.lectureName }</td>
				<td>${lecture.lectureDivision }</td>
				<td>${lecture.lectureGrade }</td>
				<td>${lecture.professorName }</td>
				<td>${lecture.lectureDepartment }</td>
				<td>${lecture.universityCollege }</td>
				<td>${lecture.lectureRoom }</td>
				<td>${lecture.lecturePeople }</td>
				<td>${lecture.lectureStartTime}</td>
				<td>${lecture.lectureEndTime}</td>
				<td><c:url var="gRemove" value="/cart/enrollRemove.kh">
						<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
					</c:url> <a href="${gRemove }">삭제</a></td>
			</tr>

		</c:forEach>
	</table>

</body>
</html>