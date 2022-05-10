<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<title></title>
</head>
<body>
	<form action="/lecture/register.kh" method="post">
		개설학과<select id="universityName" name="lectureDepartment"
			onclick="selUniversityName()">
			<option value="" >선택하세요.</option>
			<c:forEach var="lList" items="${lList}">
				<option value="${lList.universityName }">${lList.universityName }</option>
			</c:forEach>
		</select> <br> 
		과목명 <input type="text" name="lectureName"><br>
		교수명 <select id="professorName" name="professorName"
			onclick="selProfessorName()">
			<option value="" >선택하세요.</option>
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
			강의시간
			<select>
				<option>월요일</option>
				<option>화요일</option>
				<option>수요일</option>
				<option>목요일</option>
				<option>금요일</option>
			</select>
			<br>
			<input	type="time" name="lectureTime"><br>
			 <input	type="time" name="lectureTime"><br>
			 <input type="submit"	value="등록하기">
	</form>
	<script type="text/javascript">

		var mIndex = 0;
		var uIndex = 0;
		function selProfessorName() {
			if (mIndex == 0) {
				var professorName = $("professorName").val();
				var target = $("#professorName");
				$.ajax({
					url : "/lecture/selectLecture.kh",
					type : "get",
					data : {
						"professorName" : professorName
					},
					success : function(lList) {
						for (var i = 0; i < lList.length; i++) {
							$("#professorName").append(
									"<option value="+lList[i].professorName+">"
											+ lList[i].professorName
											+ "</option>");
						}
					},
					error : function() {
						alert("ajax 실패");
					}
				})
				mIndex++;
			}
		}
		
		function selUniversityName() {
			if (uIndex == 0) {
				var universityName = $("universityName").val();
				var target = $("#universityName");
				$.ajax({
					url : "/lecture/selectDepartment.kh",
					type : "get",
					data : {
						"universityName" : universityName
					},
					success : function(lList) {
						for (var i = 0; i < lList.length; i++) {
							$("#universityName").append(
									"<option value="+lList[i].universityName+">"
											+ lList[i].universityName
											+ "</option>");
						}
					},
					error : function() {
						alert("ajax 실패");
					}
				})
				uIndex++;
			}
		}
	</script>
</body>
</html>