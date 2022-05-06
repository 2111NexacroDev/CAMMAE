<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>강의 수정 페이지</title>
</head>
<body>
	<h1 align="center">강의 수정 페이지</h1>
	<form action="/lecture/update.kh" method="post">

		<table>
			<tr>
				<td>과목코드</td>
				<td><input type="text" name="lectureNo"
					value="${lecture.lectureNo }"></td>
			</tr>
			<tr>
			<tr>
				<td>개설학과</td>
				<td><select name="lectureDepartment">
						<option>선택하세요.</option>
						<option>에ㅔ베베</option>
						<option>컴퓨터 공학과</option>
						<option>전자공학과</option>
						<option>소프트웨어기술학과</option>
						<option>술먹고 피방가는 학과</option>
						<option>과학학과</option>

				</select></td>
			</tr>
			<tr>
				<td>강의명</td>
				<td><input type="text" name="lectureName"
					value="${lecture.lectureName }"></td>
			</tr>
			<tr>
				<td>교수명</td>
				<td><select name="professorName">
						<option>선택하세요.</option>
						<option>교수1</option>
						<option>교수2</option>
						<option>교수3</option>
						<option>교수4</option>
						<option>아이고</option>
						<option>야스오</option>
				</select></td>
			</tr>
			<tr>
				<td>이수구분</td>
				<td><select name="lectureDivision">
						<option>선택하세요</option>
						<option>전필</option>
						<option>전선</option>
						<option>교필</option>
						<option>교선</option>

				</select></td>
			</tr>
			<tr>
				<td>학점</td>
				<td><input type="number" name="lectureGrade" value="${lecture.lectureGrade }"></td>
			</tr>
			<tr>
				<td>강의실</td>
				<td><input type="text" name="lectureRoom" value="${lecture.lectureRoom }"></td>
			</tr>
			<tr>
				<td>강의인원</td>
				<td><input type="number" name="lecturePeople" value="${lecture.lecturePeople }"></td>
			</tr>
			<tr>
				<td>강의시간</td>
				<td><input type="time" name="lectureTime" value="${lecture.lectureTime }"></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><input type="submit"
					value="수정하기"></td>
			</tr>
		</table>
	</form>
</body>
</html>