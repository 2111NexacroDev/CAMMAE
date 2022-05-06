<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수강신청</title>
</head>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<body>
	<h1 align="center">수강신청</h1>
	<br><br>
	<label for="lectureSelect">학과</label>
	<select id="lecList"> 
		<option value="전체" >전체</option> 
		<option value="컴퓨터공학과">컴퓨터공학과</option> 
		<option value="전자전기공학과">전자전기공학과</option>
		<option value="산업디자인학과">산업디자인학과</option>
		<option value="중국어학과">중국어학과</option>
		<option value="유비쿼터스학과">유비쿼터스학과</option>
		<option value="국어국문학과">국어국문학과</option>
	</select>
	<input type="button" value="검색"  onclick="getList();">
	<table align="center" width="1200" border="1" id="lectureTable">
		<tr>
			<th>신청하기</th>
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
				<c:url var="lPick" value="/cart/lectureEnroll.kh">
				<c:param name="lectureNo" value="${lList.lectureNo }"></c:param></c:url>
					<a href="${lPick }"  >신청하기</a>
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
				url : "/cart/enrollRegister.kh",
				type : "get",
				data : { "lecturedep" : lectureDepartment },
				success : function(data) {
					$(".lecTr").remove();
					var $tableBody = $("#rtb tbody");
					$tableBody.html("");
					var $lLectureNo;
					var $rContent;
					var $rCreateDate;
					
					var $btnArea;
					
					
					var $tr;
					$("#rCount").text("댓글 (" + data.length + ")"); //댓글 갯수 표시
					// document.querySelector("#rCount").value = "댓글 (" + data.length + ")";
					if(data.length > 0) {
						for(var i in data) {
							$tr = $("<tr>");
							
							$rWriter = $("<td width='100'>").text(data[i].replyWriter);
							$rContent = $("<td>").text(data[i].replyContents);
							$rCreateDate = $("<td width='100'>").text(data[i].rCreateDate);
							
							$btnArea = $("<td width='80'>")
											.append("<a href='javascript:void(0);' onclick='modifyViewReply(this,\""+data[i].replyContents+"\", "+data[i].replyNo+");'>수정 </a>")
											.append("<a href='javascript:void(0);' onclick='removeReply("+data[i].replyNo+");'>삭제</a>");
							$tr.append($rWriter);
							$tr.append($rContent);
							$tr.append($rCreateDate);
							$tr.append($btnArea);
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