<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상담관리 상세조회페이지(회원)</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="/resources/contents.css">
</head>
<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>
	<c:if test="${not empty sessionScope.loginUser}">
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<div class="contents">
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<h3 id="b-title">상담관리</h3><br>
				<input type="hidden" name="cons_no" value="${consultant.cons_no}" />
				<input type="hidden" name="cons_student_no" value="${consultant.cons_student_no}" />
				상담제목 <span>${consultant.cons_title}</span><br> 
				이름 <span>${consultant.cons_student_name}</span><br>
				학번 <span>${consultant.cons_student_no }</span><br> 
				학과명 <span>${consultant.cons_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과'}</span><br>
				전화번호 <span>${consultant.cons_student_number }</span><br> 
				상담희망날짜 <span>${consultant.cons_date}</span><br> 
				상담사 <span>${consultant.cons_counselor }</span><br>
				상담내용 <span>${consultant.cons_content}</span><br> 
				단과대학 <span>${consultant.cons_university_code }</span><br>



				<button class="submit" type="button"
					onclick="location.href='/consultant/cancel.kh?cons_no=${consultant.cons_no}'">상담
					취소</button>
				<br>
				<!-- 댓글 목록 -->
				<table align="center" width="500" border="1" id="rtb">
					<thead>
						<tr>
							<!-- 댓글 갯수 -->
							<td colspan="4"><b id="rCount"></b></td>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>

	<script>
		getReplyList();
		function getReplyList() {
			var cons_no = "${consultant.cons_no }";
			$.ajax({
				url : "/consultant/replyList.kh",
				type : "get",
				data : {
					"cons_no" : cons_no
				},
				success : function(data) {
					var $tableBody = $("#rtb tbody");
					$tableBody.html("");
					var $cons_reply_writer;
					var $cons_reply_content;
					var $cons_reply_date;
					var $tr;
					$("#rCount").text("댓글 (" + data.length + ")"); //댓글 갯수 표시
					// document.querySelector("#rCount").value = "댓글 (" + data.length + ")";
					if (data.length > 0) {
						for ( var i in data) {
							$tr = $("<tr>");
							$cons_reply_writer = $("<td width='100'>").text(
									data[i].cons_reply_writer);
							$cons_reply_content = $("<td>").text(
									data[i].cons_reply_content);
							$cons_reply_date = $("<td width='100'>").text(
									data[i].cons_reply_date);
							$tr.append($cons_reply_writer);
							$tr.append($cons_reply_content);
							$tr.append($cons_reply_date);
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