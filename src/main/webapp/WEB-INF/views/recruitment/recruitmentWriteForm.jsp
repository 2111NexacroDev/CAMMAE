<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>채용공고 등록</title>
</head>
<body>
	<h1 align="center">채용공고</h1>
	<br><br>
	<form action="/recruitment/register.kh" method="post">
		<table>
			<tr>
				<td>제목</td>
				<td><input type="text" name="recruitmentTitle"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="text" name="recruitmentWriter"></td>
			</tr>
			<tr>
				<td>기업명</td>
				<td><input type="text" name="recruitmentCompanyName"></td>
			</tr>
			<tr>
				<td>경력</td>
				<td><input type="text" name="recruitmentCareer"></td>
			</tr>
			<tr>
				<td>학력</td>
				<td><input type="text" name="recruitmentEducation"></td>
			</tr>
			<tr>
				<td>우대</td>
				<td><input type="text" name="recruitmentPrefer"></td>
			</tr>
			<tr>
				<td>고용형태</td>
				<td><input type="text" name="recruitmentType"></td>
			</tr>
			<tr>
				<td>급여</td>
				<td><input type="text" name="recruitmentSalary"></td>
			</tr>
			<tr>
				<td>지역</td>
				<td><input type="text" name="recruitmentRegion"></td>
			</tr>
			<tr>
				<td>시작일</td>
				<td><input type="date" name="recruitmentStartDate"></td>
			</tr>
			<tr>
				<td>마감일</td>
				<td><input type="date" name="recruitmentEndDate"></td>
			</tr>
			<tr>
				<td colspan="2">
					<input type="submit" value="등록">
					<input type="reset" value="취소">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>