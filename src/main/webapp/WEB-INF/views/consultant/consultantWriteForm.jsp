
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
</head>
<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope}">
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
					<h3 id="b-title">상담관리</h3>
					<br>
					<div id="c-main" style="width: 800px; height: 800px;">
						상담제목 <input type="text" name="cons_title"><br> 
						이름 <input type="text" name="cons_student_name" value="${loginUser.studentName}"><br>
						학번 <input type="text" name="cons_student_no" value="${loginUser.studentNo }"><br>
						학과명 <input type="text" name="cons_college" value="${loginUser.universityCollege}"><br> 
						단과대학 <input type="text" name="cons_university_code"	 value="${loginUser.departmentName}"><br>
						전화번호 <input	 type="text" name="cons_student_number" value="${loginUser.studentPhonenumber}"><br>
						상담희망날짜 <input type="date" name="cons_date"><br>	
						상담희망시간 <input type="time" name="cons_time"><br> 
						상담사 <select	id="cons_counselor" class="select" name="cons_counselor" onclick="conChange()">
								<option value="">선택</option>
									<c:forEach items="${mList}" var="mList">
											<option value="${mList.managerName}">${mList.managerName}</option>
									</c:forEach>
						
							 </select><br>
						상담내용 <textarea name="cons_content"></textarea><br> 
						<input type="submit" value="상담신청">
							
					</div>
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