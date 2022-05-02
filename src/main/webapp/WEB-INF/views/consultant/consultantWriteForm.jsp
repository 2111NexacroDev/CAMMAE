<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상담신청 페이지</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
	<h1>상담관리</h1>
	<h3>상담신청 입력</h3>
	<c:if test="${empty sessionScope}">
	<jsp:forward page="/login/loginPage.kh" />
	</c:if>
	
	<c:if test="${not empty sessionScope}">
	<form action="/consultant/register.kh" method="post">
		상담제목 <input type="text" name="cons_title" ><br>
		이름 <input type="text" name="cons_student_name" value="${loginUser.studentName}" ><br>
		학번 <input type="text" name="student_no"  value="${loginUser.studentNo }"><br>
		학과명 <input type="text" name="cons_college" value="${loginUser.universityCollege}"><br>
		단과대학 <input type="text" name="cons_university_code" value="${loginUser.departmentName}" >
		전화번호 <input type="text" name="student_number" value="${loginUser.studentPhonenumber}"><br>
		상담희망날짜 <input type="date" name="cons_date"><br>
		상담희망시간 <input type="time" name="cons_time"><br>
		상담사 <select id="de" class="select"  name="cons_counselor" onclick = "depChange()">
	               
	               <c:forEach items="${mList}" var="mList">
	               		<option value="${mList.managerNo}">${mList.managerNo}</option>
	               </c:forEach>
	          
	    </select><br>
	          
	         <!--  <input type="hidden" name="managerNo" id="managerNo" readonly>
               <input type="hidden" name="managerName" id="managerName" readonly>
	           -->
		상담내용<textarea name="cons_content"></textarea><br>
		<input type="submit" value="상담신청">
	</form>
	</c:if>
	<script type="text/javascript">
		function depChange(){
			var managerNo = "${mList.managerNo}";
			/* var managerName = "${mList.managerName}" */
			var target = document.getElementById("de");
			$.ajax({
				url:"/consultant/JoinViewCounselor.kh",
				type : "get",
				data: { "managerNo" : managerNo},
				success : function(mList) {

		                
		           /*  var managerNo = $("#de option:checked").val();    
		    		var managerNo = $("#de option:checked").text(); */
					
				},
				error : function() {
					alert("ajax 실패");
				}
			})
		}
</script>
</body>
</html>