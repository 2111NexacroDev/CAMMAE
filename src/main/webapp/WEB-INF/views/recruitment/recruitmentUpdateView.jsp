<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>채용공고 수정</title>
</head>
<body>
	<h1 align="center">채용공고 수정</h1>
	<form action="/recruitment/update.kh" method="post">
		<input type="hidden" name="recruitmentNo" value="${recruitment.recruitmentNo }">
		<table>
			<tr>
				<td>제목</td>
				<td><input type="text" name="recruitmentTitle" value="${recruitment.recruitmentTitle }"></td>
			</tr>
			<tr>
				<td>기업명</td>
				<td><input type="text" name="recruitmentCompanyName" value="${recruitment.recruitmentCompanyName }"></td>
			</tr>
			<tr>
				<td>경력</td>
				<td><input type="text" name="recruitmentCareer" value="${recruitment.recruitmentCareer }"></td>
			</tr>
			<tr>
				<td>학력</td>
				<td><input type="text" name="recruitmentEducation" value="${recruitment.recruitmentEducation }"></td>
			</tr>
			<tr>
				<td>우대</td>
				<td><input type="text" name="recruitmentPrefer" value="${recruitment.recruitmentPrefer }"></td>
			</tr>
			<tr>
				<td>고용형태</td>
				<td><input type="text" name="recruitmentType" value="${recruitment.recruitmentType }"></td>
			</tr>
			<tr>
				<td>급여</td>
				<td><input type="text" name="recruitmentSalary" value="${recruitment.recruitmentSalary }"></td>
			</tr>
			<tr>
				<td>지역</td>
				<td><input type="text" name="recruitmentRegion" value="${recruitment.recruitmentRegion }"></td>
			</tr>
			<tr>
				<td>시작일</td>
				<td><input type="date" name="recruitmentStartDate" value="${recruitment.recruitmentStartDate }"></td>
			</tr>
			<tr>
				<td>마감일</td>
				<td><input type="date" name="recruitmentEndDate" value="${recruitment.recruitmentEndDate }"></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="수정하기">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>