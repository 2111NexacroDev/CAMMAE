<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/contents.css">
<!-- <link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css"> -->
<title>예비수강신청</title>
<style>
h2 {
	color: rgb(0, 74, 38)
}

table.type01 {
	border-collapse: collapse;
	text-align: center;
	line-height: 1.5;
	/* border-left: 1px solid #ccc; */
	/*  margin: 20px 10px; */
	width: 800px;
}

table.type01 thead th {
	/*   padding: 10px; */
	font-weight: bold;
	border-top: 1px solid #ccc;
	padding: 0;
	height: 35px;
	/* border-right: 1px solid #ccc; */
	border-bottom: 1px solid #ccc;
	background: rgb(231, 232, 226);
}

table.type01 td {
	padding: 0;
	width: 350px;
	vertical-align: top;
	height: 35px;
	line-height: 35px;
	/*  border-right: 1px solid #ccc; */
	border-bottom: 1px solid #ccc;
}

table.type01 td a {
	text-decoration: none;
	color: black;
}

#d1 {
	width: 6%;
}

#d2 {
	width: 10%;
}

#d3 {
	width: 7%;
}

#d5 {
	width: 12%;
}

#d6 {
	width: 30%;
}
</style>
</head>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideCMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title" style="height:80px;">
				<div class="b-title">
					<h2>예비수강신청</h2>
				</div>
			</div>
			<div>
			<button>에에엥</button>
			<input type="button" class="btn" onClick="location.href='/lecture/list.kh'">
			</div>
				<div>
					<label id="searchLabel" for="lectureSelect">학과</label> 
					<select	id="lecList">
						<option value="전체">전체</option>
						<option value="1">컴퓨터공학과</option>
						<option value="2">전자전기공학과</option>
						<option value="3">산업디자인학과</option>
						<option value="4">중국어학과</option>
						<option value="5">유비쿼터스학과</option>
						<option value="6">국어국문학과</option>
					</select> <input type="button" value="검색" onclick="getList();">
				</div>
				<br>
			<table class="type01" id="lectureTable">
				<thead>
					<tr>
						<th id="d3">찜하기</th>
						<th id="d2">과목코드</th>
						<th id="d5">개설학과</th>
						<th id="d2">이수구분</th>
						<th id="d6">강의명</th>
						<th id="d3">교수명</th>
						<th id="d1">학점</th>
						<th id="d1">강의실</th>
						<th id="d1">인원</th>
						<th id="d1">시간</th>
						<!-- 			<th id="n1">단과대학</th> -->
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${lList }" var="lList">
						<tr class="lecTr">
							<td><c:url var="lPick" value="/cart/cartPick.kh">
									<c:param name="lectureNo" value="${lList.lectureNo }"></c:param>
								</c:url> <a href="${lPick }">찜하기</a></td>
							<td>${lList.lectureNo }</td>
							<%-- <td>${lList.universityCollege }</td> --%>
							<td>${lList.lectureDepartment }</td>
							<td>${lList.lectureDivision }</td>
							<td>${lList.lectureName }</td>
							<td>${lList.professorName }</td>
							<td>${lList.lectureGrade }</td>
							<td>${lList.lectureRoom }</td>
							<td>${lList.lecturePeople }</td>
							<td>${lList.lectureStartTime}<br>${lList.lectureEndTime}</td>
						</tr>

					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
	<script>
		function getList() {
			var lectureDepartment = $('#lecList').val();
			$.ajax({
				url : "/cart/enrollRegister2.kh",
				type : "get",
				data : {
					"lecturedep" : lectureDepartment
				},
				success : function(data) {
					$(".lecTr").remove();
					var $tableBody = $("#lectureTable");
					var $tr;
					var $lecNo;
					var $lecDep
					/* var $lecUniCol; */
					var $lecDivision;
					var $lecName;
					var $lecProName;
					var $lecGrade;
					var $lecRoom;
					var $lecPeople;
					var $lecTime;
					var $btnArea;

					var $tr;
					if (data.length > 0) {
						for ( var i in data) {
							$tr = $("<tr class='lecTr'>");

							$lecNo = $("<td width='100'>").text(
									data[i].lectureNo);
							/* 						$lecUniCol = $("<td width='100'>").text(data[i].universityCollege); */
							$lecDep = $("<td width='100'>").text(
									data[i].lectureDepartment);
							$lecDivision = $("<td width='100'>").text(
									data[i].lectureDivision);
							$lecName = $("<td width='100'>").text(
									data[i].lectureName);
							$lecProName = $("<td width='100'>").text(
									data[i].professorName);
							$lecGrade = $("<td width='100'>").text(
									data[i].lectureGrade);
							$lecRoom = $("<td width='100'>").text(
									data[i].lectureRoom);
							$lecPeople = $("<td width='100'>").text(
									data[i].lecturePeople);
							$lecTime = $("<td width='100'>").text(
									data[i].lectureStartTime + '\n'
											+ data[i].lectureEndTime)
							$btnArea = $("<td width='80'>").append(
									"<a href='/cart/cartPick.kh?lectureNo="
											+ data[i].lectureNo + "'>찜하기</a>");
							$tr.append($btnArea);
							$tr.append($lecNo);
							$tr.append($lecDep);
							/* $tr.append($lecUniCol); */
							$tr.append($lecDivision);
							$tr.append($lecName);
							$tr.append($lecProName);
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