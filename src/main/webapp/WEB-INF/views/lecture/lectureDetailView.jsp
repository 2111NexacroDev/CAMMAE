<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

과목코드 <span>${lecture.lectureNo }</span><br>
교수코드 <span>${lecture.professorNo }</span><br>
단과대학 <span>${lecture.universityCollege }</span><br>
개설학과 <span>${lecture.lectureDepartment }</span><br>
강의명 <span>${lecture.lectureName }</span><br>
교수명<span>${lecture.professorName }</span><br>
이수구분<span>${lecture.lectureDivision }</span><br>
학점<span>${lecture.lectureGrade }</span><br>
강의실<span>${lecture.lectureRoom }</span><br>
강의인원<span>${lecture.lecturePeople }</span><br>
강의시간<span>${lecture.lectureTime }</span>
</body>
</html>