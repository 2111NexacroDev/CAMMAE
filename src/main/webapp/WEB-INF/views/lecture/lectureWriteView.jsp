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
개설학과 <select name="lectureDepartment"> <option></option></select><br>
과목명  <input type="text" name="lectureName"><br>
교수명 <select name="professorName"><option></option></select><br>
이수구분 <input type="text" name="lectureDivision"><br>
학점 <input type="text" name="lectureGrade"><br>
강의실 <input type="text" name="lectureRoom"><br>
인원 <input type="text" name="lecturePeople"><br>
강의시간 <input type="time" name="lectureTime"><br>
<input type="submit" value="등록하기">
</form>

</body>
</html>