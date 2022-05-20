<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<title>수강개설목록</title>
<style>
#L1 {
	width: 5%;
}

#L2 {
	width: 10%;
}

#L3 {
	width: 15%;
}

#L4 {
	width: 13%;
}

.btn {
	margin: 0;
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
			<jsp:include page="../common/sideLMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title" style="height: 80px;">
				<div class="b-title">
					<h2>수강개설목록</h2>
				</div>
				<div class="btn_1">
					<%-- <c:url var="lWrite" value="/lecture/writeView.kh">
							<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
						</c:url>
						<a href="${lWrite }">등록하기</a> --%>

					<button style="width: 80px" class="btn"
						onclick="location.href='/lecture/writeView.kh'">수강개설</button>
				</div>
			</div>

			<div>
				<label id="searchLabel" for="lectureSelect">학과</label> <select
					id="lecList">
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
						<th id="L2">강의코드</th>
						<!-- <th id="L3">단과대학</th> -->
						<th id="L4">이수구분</th>
						<th id="L3">개설학과</th>
						<th>강의명</th>
						<th id="L2">교수명</th>
						<th id="L1">학점</th>
						<!-- <th>시작시간</th>
						<th>종료시간</th>
						<th>강의실</th> -->
						<th id="L1">인원</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${lList }" var="lecture">
						<tr class="lecTr">
							<c:url var="lDetail" value="/lecture/Detail.kh">
								<c:param name="lectureNo" value="${lecture.lectureNo}"></c:param>
							</c:url>

							<td>${lecture.lectureNo }</td>
							<%-- <td>${lecture.professorNo }</td> --%>
							<%-- <td>${lecture.universityCollege }</td> --%>
							<td>${lecture.lectureDivision }</td>
							<td>${lecture.lectureDepartment }</td>
							<td><a href="${lDetail}">${lecture.lectureName }</a></td>
							<td>${lecture.professorName }</td>
							<td>${lecture.lectureGrade }</td>
							<td>${lecture.lecturePeople }</td>
							<%-- <td>${lecture.lectureRoom }</td> --%>
							<%-- <td>${lecture.lectureStartTime }</td>
							<td>${lecture.lectureEndTime }</td> --%>
							<%-- <td><c:url var="lRemove" value="/lecture/remove.kh">
									<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
								</c:url> <a href="${lRemove }">삭제</a></td> --%>
						</tr>
					</c:forEach>
				</tbody>
			</table>

		</div>
	</div>

	<script>
		function getList() {
			var lectureDepartment = $('#lecList').val();
			$.ajax({
				url : "/lecture/list2.kh",
				type : "get",
				data : {
					"lecturedep" : lectureDepartment
				},
				success : function(data) {
					$(".lecTr").remove();
					var $tableBody = $("#lectureTable");
					var $tr;
					var $lecNo;
					var $lecDivision;
					var $lecDep
					var $lecName;
					var $lecProName;
					var $lecGrade;
					/* var $lecRoom; */
					var $lecPeople;
					var $tr;
					if (data.length > 0) {
						for ( var i in data) {
							$tr = $("<tr class='lecTr'>");
							$lecNo = $("<td width='100'>").text(
									data[i].lectureNo);
							$lecDivision = $("<td width='100'>").text(
									data[i].lectureDivision);
							$lecDep = $("<td width='100'>").text(
									data[i].lectureDepartment);
							$lecName = $("<td width='100'>").text(
									data[i].lectureName);
							$lecProName = $("<td width='100'>").text(
									data[i].professorName);
							$lecGrade = $("<td width='100'>").text(
									data[i].lectureGrade);
							/* $lecRoom = $("<td width='100'>").text(
									data[i].lectureRoom); */
							$lecPeople = $("<td width='100'>").text(
									data[i].lecturePeople);
							/* $lecTime = $("<td width='100'>").text(
									data[i].lectureTime); */
							$tr.append($lecNo);
							$tr.append($lecDivision);
							$tr.append($lecDep);
							/* $tr.append($lecUniCol); */
							$tr.append($lecName);
							$tr.append($lecProName);
							$tr.append($lecGrade);
							/* $tr.append($lecRoom); */
							$tr.append($lecPeople);
							/* $tr.append($lecTime); */
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