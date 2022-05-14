<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예비수강신청 내역</title>
</head>
<body>
	<h1>예비수강신청 내역</h1>
	<table border="3">
		
		<tr>
			<th>신청</th>
			<th>장바구니번호</th>
			<th>과목코드</th>
			<th>학번</th>
			<th>년도</th>
			<th>학기</th>
			<th>이수구분</th>
			<th>학점</th>
			<th>교수명</th>
			<th>교과목명</th>
			<th>개설학과</th>
			<th>강의시간</th>
			<th>삭제</th>
		</tr>
		<c:forEach items="${cList }" var="cart">
			<tr>
				<td>
				<c:url var="lPick" value="/cart/cartEnroll.kh">
				<c:param name="lectureNo" value="${cart.lectureNo }"></c:param></c:url>
					<a href="${lPick }"  >신청하기</a>
				</td>
				<td>${cart.cartNo }</td>
				<td>${cart.lectureNo }</td>
				<td>${cart.studentNo }</td>
				<td>${cart.cartYear }</td>
				<td>${cart.cartTerm }</td>
				<td>${cart.lectureDivision }</td>
				<td>${cart.lectureGrade }</td>
				<td>${cart.professorName }</td>
				<td>${cart.lectureName }</td>
				<td>${cart.lectureDepartment }</td>
				<td>${lecture.lectureStartTime}</td>
				<td>${lecture.lectureEndTime}</td>
				
				<td><c:url var="cRemove" value="/cart/remove.kh">
						<c:param name="cartNo" value="${cart.cartNo }"></c:param>
					</c:url> <a href="${cRemove }">삭제</a></td>
			</tr>

		</c:forEach>
	</table>

</body>
</html>