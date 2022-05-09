<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<form action="/lecture/register.kh" method="post">
개설학과 <select name="lectureDepartment"> <option>선택하세요.</option>
						<option>산업디자인학과</option>
						<option>시각디자인학과</option>
						<option>정보통신공학과</option>
						<option>컴퓨터 공학과</option>
						<option>중국어학과</option>
						<option>국어국문학과</option>
		</select><br>
과목명  <input type="text" name="lectureName"><br>
교수명 <select id="professorName" name="professorName"
							onchange="selProfessorName()">
							<option value="" selected disabled >선택하세요.</option>
							<c:forEach var="lList" items="${lList}">
								<option value="${lList.professorName }">${lList.professorName }</option>
							</c:forEach>
						</select><br>
이수구분 <select name="lectureDivision">
						<option>선택하세요</option>
						<option>전필</option>
						<option>전선</option>
						<option>교필</option>
						<option>교선</option>
	</select><br>
학점 <input type="number" name="lectureGrade"><br>
강의실 <input type="text" name="lectureRoom"><br>
인원 <input type="number" name="lecturePeople"><br>
강의시간 <input type="time" name="lectureTime"><br>
<input type="submit" value="등록하기">
</form>
<script>
function selProfessorName() {
	var professorName = $("#professorName").val();
	var target = $("#lectureName");
	$.ajax({
		url : "/lecture/selectLecture",
		type : "get",
		data : {
			"professorName" : professorName
		},
		success : function(data) {
			for (var i = 0; i < data.length; i++) {
				$("#lectureName").append(
						"<option value="+data[i].lectureName+">"
								+ data[i].lectureName + "</option>");
			}
		},
		error : function() {
			alert("ajax 실패");
		}
	})

}

</script>
</body>
</html>