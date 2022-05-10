<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예비수강신청</title>
</head>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<body>
	<h1 align="center">예비수강신청</h1>
	<br><br>
	<label for="lectureSelect">학과</label>
	<select id="lecList"> 
		<option value="전체" >전체</option> 
		<option value="1">컴퓨터공학과</option> 
		<option value="2">전자전기공학과</option>
		<option value="3">산업디자인학과</option>
		<option value="4">중국어학과</option>
		<option value="5">유비쿼터스학과</option>
		<option value="6">국어국문학과</option>
	</select>
	<input type="button" value="검색"  onclick="getList();">
	<table align="center" width="1200" border="1" id="lectureTable">
		<tr>
			<th>찜하기</th>
			<th>과목코드</th>
			<th>단과대학</th>
			<th>개설학과</th>
			<th>강의명</th>
			<th>교수명</th>
			<th>이수구분</th>
			<th>학점</th>
			<th>강의실</th>
			<th>강의인원</th>
			<th>강의시간</th>
		</tr>
		<c:forEach items="${lList }" var="lList">
			<tr class="lecTr">
				<td>
				<c:url var="lPick" value="/cart/cartPick.kh">
				<c:param name="lectureNo" value="${lList.lectureNo }"></c:param></c:url>
					<a href="${lPick }"  >찜하기</a>
				</td>				
				<td>${lList.lectureNo }</td>
				<td>${lList.universityCollege }</td>
				<td>${lList.lectureDepartment }</td>
				<td>${lList.lectureName }</td>
				<td>${lList.professorName }</td>
				<td>${lList.lectureDivision }</td>
				<td>${lList.lectureGrade }</td>
				<td>${lList.lectureRoom }</td>
				<td>${lList.lecturePeople }</td>
				<td>${lList.lectureTime }</td>
			</tr>	
		
		</c:forEach>
	</table>
	
	<script>
	function getList() {
		var lectureDepartment = $('#lecList').val();
		$.ajax({
			url : "/cart/enrollRegister2.kh",
			type : "get",
			data : { "lecturedep" : lectureDepartment },
			success : function(data) {
				$(".lecTr").remove();
				var $tableBody = $("#lectureTable");
				var $tr;
				var $lecNo;
				var $lecDep
				var $lecUniCol;
				var $lecName;
				var $lecProName;
				var $lecDivision;
				var $lecGrade;
				var $lecRoom;
				var $lecPeople;
				var $lecTime;
				var $btnArea;
				
				
				var $tr;
				if(data.length > 0) {
					for(var i in data) {
						$tr = $("<tr class='lecTr'>");
						
						$lecNo = $("<td width='100'>").text(data[i].lectureNo);
						$lecDep = $("<td width='100'>").text(data[i].lectureDepartment);
						$lecUniCol = $("<td width='100'>").text(data[i].universityCollege);
						$lecName = $("<td width='100'>").text(data[i].lectureName);
						$lecProName = $("<td width='100'>").text(data[i].professorName);
						$lecDivision = $("<td width='100'>").text(data[i].lectureDivision);
						$lecGrade = $("<td width='100'>").text(data[i].lectureGrade);
						$lecRoom = $("<td width='100'>").text(data[i].lectureRoom);
						$lecPeople = $("<td width='100'>").text(data[i].lecturePeople);
						$lecTime = $("<td width='100'>").text(data[i].lectureTime);
						$btnArea = $("<td width='80'>")
						.append("<a href='/cart/cartPick.kh?lectureNo="+data[i].lectureNo+"'>찜하기</a>");
						$tr.append($btnArea);
						$tr.append($lecNo);
						$tr.append($lecDep);
						$tr.append($lecUniCol);
						$tr.append($lecName);
						$tr.append($lecProName);
						$tr.append($lecDivision);
						$tr.append($lecGrade);
						$tr.append($lecRoom);
						$tr.append($lecPeople);
						$tr.append($lecTime);
						$tableBody.append($tr);
					}
				}
			},
			error : function() {
				alert("ajax 통신 실패! 관리자에게 문의하세요.");
			}
		});
	}
	</script>
</body>
</html>