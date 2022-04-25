<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예비수강신청</title>
</head>
<body>
	<h1 align="center">예비수강신청</h1>
	<br><br>
	<table align="center" width="600" border="1">
		<tr>
			<th>찜하기</th>
			<th>과목코드</th>
			<th>단과대학</th>
			<th>개설학과</th>
			<th>강의명</th>
			<th>교수명</th>
			<th>이수구분</th>
			<th>학점</th>
			<th>강의실</th>
			<th>강의인원</th>
			<th>강의시간</th>
		</tr>
		<c:forEach items="${lList }" var="lList">
			<tr>
				<td>
				<c:url var="lPick" value="/cart/cartPick.kh">
				<c:param name="lectureNo" value="${lList.lectureNo }"></c:param></c:url>
					<a href="${lPick }">찜하기</a>
				
				</td>				
				<td>${lList.lectureNo }</td>
				<td>${lList.universityCollege }</td>
				<td>${lList.lectureDepartment }</td>
				<td>${lList.lectureName }</td>
				<td>${lList.professorName }</td>
				<td>${lList.lectureDivision }</td>
				<td>${lList.lectureGrade }</td>
				<td>${lList.lectureRoom }</td>
				<td>${lList.lecturePeople }</td>
				<td>${lList.lectureTime }</td>
			</tr>	
		
		</c:forEach>
	</table>
</body>
</html>