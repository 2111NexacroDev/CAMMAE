<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상담신청 페이지</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="/resources/contents.css">
<style>
table.type05 {
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

td {
	padding: 7px;
	border-bottom: 1px solid #CCC;
}

.td_left {
	width: 15%;
	background: rgb(231, 232, 226);
	text-align: center;
	font-weight: bold;
}

.td_sub {
	border-bottom: none;
}

#td_content {
	border-bottom: 1.5px solid rgb(30, 57, 50);
}

.btn {
	margin-top: 30px;
}

button {
	cursor: pointer;
}
}
</style>
</head>
<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope.loginUser}">
		<!-- header  -->
		<jsp:include page="../common/menuBar.jsp"></jsp:include>
		<!-- contents -->
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<form action="/consultant/register.kh" method="post">
					<div class="c-title">
						<div class="b-title">
							<h2>상담관리</h2>
						</div>
					</div>
					<table class="type05">
						<tr>
							<td class="td_left" id="">상담제목</td>
							<td class="td_right"><input type="text" name="cons_title"></td>
						</tr>

						<tr>
							<td class="td_left">이름</td>
							<td class="td_right"><input type="text"
								name="cons_student_name" value="${loginUser.studentName}"></td>
						</tr>

						<tr>
							<td class="td_left">학번</td>
							<td class="td_right"><input type="text"
								name="cons_student_no" value="${loginUser.studentNo }"></td>
						</tr>

						<tr>
							<td class="td_left">학과명</td>
							<td class="td_right"><input type="text" name="cons_college"
								value="${loginUser.departmentName}"></td>
						</tr>

						<tr>
							<td class="td_left">단과대학</td>
							<td class="td_right"><input type="text"
								name="cons_university_code"
								value="${loginUser.universityCollege}"></td>
						</tr>

						<tr>
							<td class="td_left">전화번호</td>
							<td class="td_right"><input type="text"
								name="cons_student_number"
								value="${loginUser.studentPhonenumber}"></td>
						</tr>

						<tr>
							<td class="td_left">상담희망날짜</td>
							<td class="td_right"><input type="date" name="cons_date"
								min="2019-01-01" max="2060-12-31"></td>
						</tr>

						<tr>
							<td class="td_left">상담희망시간</td>
							<td class="td_right"><input type="time" name="cons_time"></td>
						</tr>


						<tr>
							<td class="td_left">상담사</td>
							<td class="td_right"><select id="cons_counselor"
								class="select" name="cons_counselor" onclick="conChange()">
									<option value="">선택</option>
									<c:forEach items="${mList}" var="mList">
										<option value="${mList.managerName}">${mList.managerName}</option>
									</c:forEach>

							</select></td>
						</tr>

						<tr>
							<td class="td_left" id="td_content">상담내용</td>
							<td class="td_right" id="td_content"><textarea
									name="cons_content"></textarea></td>
						</tr>

						<tr>
							<td colspan="2" align="center" class="td_sub"><button
									class="btn" type="submit">상담신청</button></td>
						</tr>
					</table>

				</form>
			</div>

		</div>
		<!-- footer -->

		<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>

	<script type="text/javascript">
		var mIndex = 0;
		function conChange() {
			if (mIndex == 0) {
				var cons_counselor = $("cons_counselor").val();
				var target = $("#cons_counselor");
				$.ajax({
					url : "/consultant/JoinViewCounselor.kh",
					type : "get",
					data : {
						"cons_counselor" : cons_counselor
					},
					success : function(mList) {
						for (var i = 0; i < mList.length; i++) {
							$("#cons_counselor").append(
									"<option value="+mList[i].managerName+">"
											+ mList[i].managerName
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
	</script>
</body>
</html>