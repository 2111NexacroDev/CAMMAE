<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<form action="/lecture/register.kh" method="post">
개설학과 <select name="lectureDepartment"> <option>선택하세요.</option>
						<option>에ㅔ베베</option>
						<option>컴퓨터 공학과</option>
						<option>전자공학과</option>
						<option>소프트웨어기술학과</option>
						<option>술먹고 피방가는 학과</option>
						<option>과학학과</option></select><br>
과목명  <input type="text" name="lectureName"><br>
교수명 <select name="professorName"><option>선택하세요.</option>
						<option>교수1</option>
						<option>교수2</option>
						<option>교수3</option>
						<option>교수4</option>
						<option>아이고</option>
						<option>야스오</option></select><br>
이수구분 <select name="lectureDivision">
						<option>선택하세요</option>
						<option>전필</option>
						<option>전선</option>
						<option>교필</option>
						<option>교선</option>
						<option>패필</option>

				</select><br>
학점 <input type="text" name="lectureGrade"><br>
강의실 <input type="text" name="lectureRoom"><br>
인원 <input type="text" name="lecturePeople"><br>
강의시간 <input type="time" name="lectureTime"><br>
<input type="submit" value="등록하기">
</form>

</body>
</html>