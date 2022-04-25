<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>채용공고 상세 조회</title>
</head>
<body>
	<h1 align="center">${recruitment.recruitmentNo }</h1>
	<br><br>
	<table align="center" width="500" border="1">
		<tr>
			<td>번호</td>
			<td>${recruitment.recruitmentNo }</td>		
		</tr>
		<tr>
			<td>제목</td>
			<td>${recruitment.recruitmentTitle }</td>		
		</tr>
		<tr>
			<td>작성자</td>
			<td>${recruitment.recruitmentWriter }</td>		
		</tr>
		<tr>
			<td>기업명</td>
			<td>${recruitment.recruitmentCompanyName }</td>		
		</tr>
		<tr>
			<td>경력</td>
			<td>${recruitment.recruitmentCareer }</td>		
		</tr>
		<tr>
			<td>학력</td>
			<td>${recruitment.recruitmentEducation }</td>		
		</tr>
		<tr>
			<td>우대</td>
			<td>${recruitment.recruitmentPrefer }</td>		
		</tr>
		<tr>
			<td>교용형태</td>
			<td>${recruitment.recruitmentType }</td>		
		</tr>
		<tr>
			<td>급여</td>
			<td>${recruitment.recruitmentSalary }</td>		
		</tr>
		<tr>
			<td>지역</td>
			<td>${recruitment.recruitmentRegion }</td>		
		</tr>
		<tr>
			<td>시작일</td>
			<td>${recruitment.recruitmentStartDate }</td>		
		</tr>
		<tr>
			<td>마감일</td>
			<td>${recruitment.recruitmentEndDate }</td>		
		</tr>
		<tr>
			<td colspan="2" align="center">
				<c:url var="rModify" value="/recruitment/modifyView.kh">
					<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
				</c:url>
				<c:url var="rDelete" value="/recruitment/delete.kh">
					<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
				</c:url>
				<button onclick="location.href='/recruitment/list.kh'">목록</button>
				<a href="${rModify }">수정하기</a>
				<a href="${rDelete }">삭제하기</a>
				<a href="#">지원하기</a>
			</td>
		</tr>
	</table>
</body>
</html>