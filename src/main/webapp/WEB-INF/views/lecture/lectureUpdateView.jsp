<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<title>강의 수정 페이지</title>
<style>
table.type05 {
	border-bottom: 1.5px solid rgb(30, 57, 50);
	border-top: 1.5px solid rgb(30, 57, 50);
	border-collapse: collapse;
	text-align: left;
	line-height: 1.5;
	margin-top: 10px;
	width: 800px;
}

table.type05 thead {
	background: rgb(231, 232, 226);
}

table.type05 thead th {
	padding: 10px;
	vertical-align: top;
	color: black;
}

#n1 {
	width: 15%;
	background: rgb(231, 232, 226);
	text-align: center;
	font-weight: bold;
}

input {
	margin-left: 5px;
}

select {
	margin-left: 5px;
}

td {
	padding: 7px;
	border-bottom: 1px solid #CCC;
}

#content1 {
	width: 790px;
	height: 300px;
}

table {
	margin-bottom: 10px;
}
</style>
</head>

<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<form action="/lecture/update.kh" method="post">
		 <input type="hidden" name="lectureNo" value="${lecture.lectureNo }"> 
			<div id="left">
				<jsp:include page="../common/sideLMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<div class="c-title">
					<div class="b-title">
						<h2>강의수정</h2>
					</div>
				</div>

				<table class="type05" align="center">
					<tr>
						<td id="n1">강의코드</td>
						<td>${lecture.lectureNo }
				<%-- 		<input type="text" name="lectureNo"
							value="${lecture.lectureNo }" readonly /> --%>
							
							</td>
					</tr>
				
<%-- 					<option value="">전체</option>
    <c:forEach items="${test}" var="testList">
      <option value="${testList.testNo}" ${testList.testNo == 1 ? 'selected="selected"' : ''}>${testList.testNo}</option>
    </c:forEach> --%>
					<tr>
						<td id="n1">이수구분</td>
						<td><select id="lectureDivision" name="lectureDivision">
								<option value="${lecture.lectureDivision }">
									<c:if test="${lecture.lectureDivision eq '전공필수' }">전공필수</c:if>
									<c:if test="${lecture.lectureDivision eq '전공선택'}">전공선택</c:if>
									<c:if test="${lecture.lectureDivision eq '교양필수'}">교양필수</c:if>
									<c:if test="${lecture.lectureDivision eq '교양선택'}">교양선택</c:if>
								</option>
								<c:if test="${lecture.lectureDivision eq '전공필수' }">
									<option value="전공선택">전공선택</option>
									<option value="교양필수">교양필수</option>
									<option value="교양선택">교양선택</option>
								</c:if>
								<c:if test="${lecture.lectureDivision eq '전공선택'}">
									<option value="전공필수">전공필수</option>
									<option value="교양필수">교양필수</option>
									<option value="교양선택">교양선택</option>
								</c:if>
								<c:if test="${lecture.lectureDivision eq '교양필수' }">
									<option value="전공필수">전공필수</option>
									<option value="전공선택">전공선택</option>
									<option value="교양선택">교양선택</option>
								</c:if>
								<c:if test="${lecture.lectureDivision eq '교양선택'}">
									<option value="전공필수">전공필수</option>
									<option value="전공선택">전공선택</option>
									<option value="교양필수">교양필수</option>
								</c:if>
						</select></td>


					</tr>

					<tr>
						<td id="n1">개설학과</td>
							<td class="td_right">
							<!-- <select id="universityName" name="lectureDepartment" onclick="selUniversityName()"> -->
							<select id="lectureDepartment" name="lectureDepartment" onchange="getProName()">
									<option value="${lecture.lectureDepartment }">${lecture.lectureDepartment }</option>
									<c:forEach var="pList" items="${pList}">
										<option value="${pList.departmentName }">${pList.departmentName }</option>
									</c:forEach>
							</select>
							</td>
					</tr>
					<tr>
						<td id="n1">강의명</td>
						<td><input type="text" name="lectureName"
							value="${lecture.lectureName }"></td>
					</tr>
					<tr>
						<td id="n1">교수명</td>
						<td class="td_right"><select id="professorName"
							name="professorName" onchange="getProNo()" > 
								<option value="${lecture.professorName }">${lecture.professorName }</option>
								<%-- <c:forEach var="lList" items="${lList}">
									<option value="${lList.professorName }">${lList.professorName }</option>
								</c:forEach> --%>
						</select>
						<input type="hidden"name="professorNo" id="professorNo" value="${lecture.professorNo }">
						</td>
					</tr>
					<tr>
						<td id="n1">학점</td>
						<td><input type="number" name="lectureGrade"
							value="${lecture.lectureGrade }"></td>
					</tr>
					<tr>
						<td id="n1">시작시간</td>
						<td><input type="time" name="lectureStartTime"
							value="${lecture.lectureStartTime }"></td>
					</tr>
					<tr>
						<td id="n1">종료시간</td>
						<td><input type="time" name="lectureEndTime"
							value="${lecture.lectureEndTime }"></td>
					</tr>
					<tr>
						<td id="n1">강의실</td>
						<td><input type="text" name="lectureRoom"
							value="${lecture.lectureRoom }"></td>
					</tr>
					<tr>
						<td id="n1">강의인원</td>
						<td><input type="number" name="lecturePeople"
							value="${lecture.lecturePeople }"></td>
					</tr>
					<tr>
						<td id="n1">학기</td>
						<td><select id="lectureTerm" name="lectureTerm">
							<option value="${lecture.lectureTerm }">
								<c:if test="${lecture.lectureTerm eq '1학기' }">1학기</c:if>
								<c:if test="${lecture.lectureTerm eq '2학기'}">2학기</c:if>
							</option>
							<c:if test="${lecture.lectureTerm eq '1학기' }">
								<option value="2학기">2학기</option>
							</c:if>
							<c:if test="${lecture.lectureTerm eq '2학기'}">
								<option value="1학기">1학기</option>
							</c:if>
						</select></td>
					</tr>
				</table>
				<div align="center">
					<br>
					<button class="btn" type="submit">수정하기</button>
					<button class="btn" type="reset" onclick="location.href='/lecture/list.kh'">취소하기</button>
					<!-- <input type="submit" class="btn" value="수정하기"> -->
				</div>
			</div>
		</form>
	</div>





	<script type="text/javascript">
	function getProName(){
		var lectureDepartment = $("#lectureDepartment").val();
		var target = $("#professorName");
		$.ajax({
			url : "/lecture/selectProfessor",
			type : "get",
			data : {"lectureDepartment" : lectureDepartment},
			success : function(data){
				$("#professorName option").remove();
				for(var i= 0; i<data.length; i++){
					$("#professorName").append(
							"<option value="+data[i].professorName+">" + data[i].professorName + "</option>");
				}
				$('input[name=professorNo]').attr('value',data[0].professorNo);
			},
			error : function(){
				alert("ajax 실패");
			}
			
		})
		
	}
	
	function getProNo(){
		var professorName = $("#professorName").val();
		var target = $("#professorNo");
		$.ajax({
			url : "/lecture/selectProfessorNo",
			type : "get",
			data : {"professorName" : professorName},
			success : function(data){
				/*  $("#professorName option").remove(); */
				for(var i= 0; i<data.length; i++){
					/* $("#professorName").append(
							"<option value="+data[i].professorNo+">" + data[i].professorName + "</option>"); */
				$('input[name=professorNo]').attr('value',data[i].professorNo);
				}
				
			},
			error : function(){
				alert("ajax 실패");
			}
			
		})
		
	}
	</script>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>