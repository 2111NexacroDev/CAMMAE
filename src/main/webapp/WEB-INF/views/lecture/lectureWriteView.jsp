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

<title>강의 개설 페이지</title>
<style>
body {
	margin: 0;
	padding: 0;
}

.lecwritediv {
	border: 3px solid #c8c8c8;
	border-radius: 5px;
	width: 740px;
	padding: 20px 30px 30px 30px;
	margin-top: 45px;
	margin-right: 10px;
	margin-bottom: 20px;
	margin-left: 0px;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

table td* {
	vertical-align: middle;
}

table td {
	padding: 15px 5px;
	border-bottom: 1px solid #c2c2c2;
	font-size: 16px;
}

.td-left {
	width: 100px;
}

.td_sub {
	border: none;
}

button { cursor:pointer; }
	
}
</style>
</head>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<form action="/lecture/register.kh" method="post">
				<div class="c-title">
					<div class="b-title">
						<h2>수강개설</h2>
					</div>
				</div>
				<div class="lecwritediv">
					<table>
						<tr>
							<td class="td_left">개설학과</td>
							<td class="td_right"><select id="universityName"
								name="lectureDepartment" onclick="selUniversityName()">
									<option value="">선택하세요.</option>
									<c:forEach var="lList" items="${lList}">
										<option value="${lList.universityName }">${lList.universityName }</option>
									</c:forEach>
							</select></td>
						</tr>
						<tr>
							<td class="td_left">과목명</td>
							<td class="td_right"> <input type="text" name="lectureName"></td>
						</tr>
						<tr>
							<td class="td_left">교수명</td>
							<td class="td_right">
								<select id="professorName" name="professorName" onclick="selProfessorName()">
									<option value="">선택하세요.</option>
									<c:forEach var="lList" items="${lList}">
										<option value="${lList.professorName }">${lList.professorName }</option>
									</c:forEach>
								</select>
							</td>
						</tr>
						
						<tr>
							<td class="td_left">이수구분</td>
							<td class="td_right">
								 <select name="lectureDivision">
									<option>선택하세요</option>
									<option>전공필수</option>
									<option>전공선택</option>
									<option>교양필수</option>
									<option>교양선택</option>
								</select>
							</td>
					  </tr>
					  
					  <tr>
						<td class="td_left">학점</td>
						<td class="td_right"><input type="number" name="lectureGrade"></td>
					 </tr>
						
					  <tr>
						<td class="td_left">강의실</td>
						<td class="td_right"> <input type="text" name="lectureRoom"></td>
					 </tr>
							
					
					  <tr>
						<td class="td_left">인원</td>
						<td class="td_right"> <input type="number" name="lecturePeople">></td>
					 </tr>
					 
					  <tr>
						<td class="td_left">강의시간</td>
						<td class="td_right">
							<select>
								<option>월요일</option>
								<option>화요일</option>
								<option>수요일</option>
								<option>목요일</option>
								<option>금요일</option>
						   </select>
						</td>
					 </tr>
						
					  <tr>
						<td class="td_left">수업 시작시간</td>
						<td class="td_right"><input type="time" name="lectureStartTime"></td>
					 </tr>
					
					  <tr>
						<td class="td_left">수업 종료시간</td>
						<td class="td_right"><input type="time" name="lectureEndTime"></td>
					 </tr>
								
					<tr>
						<td colspan="2" align="center" class="td_sub"><button class="btn" type="submit"  >등록하기</button></td>
					</tr>	
							
					</table>
				</div>
			</form>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>































































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