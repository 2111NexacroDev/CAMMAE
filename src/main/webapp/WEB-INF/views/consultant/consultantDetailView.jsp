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
<link rel="stylesheet" href="/resources/common.css">
<style>
#b-title{
	color: rgb(0, 74, 38);
}

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


.ta_l {
    text-align: left !important;
}
.ta_l{
	width: 15%;
	background: rgb(231, 232, 226);
	text-align: center;
	font-weight: bold;
}

td {
	padding: 7px;
	border-bottom: 1px solid #CCC;
}

#btn_d{
	text-align: center;
}

#btn{
	cursor: pointer;
}
#btn1{
	float: right;
	cursor: pointer;
}
#rtb{
	border-bottom: 2px solid #ccc;
}

#rCo{
	border-bottom: 2px solid #ccc;
}
/* 댓글 */
#rWriter {
	font-weight: bold;
	width: 80%;
	float: left;
}

#rDate {
	font-size: 14px;
	width: 20%;
	float: right;
	margin-top: -45px;
}

#rContents {
	float: left;
	width: 80%;
	
}


</style>
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
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<div class="c-title">
				<h2 id="b-title">상담관리</h2>
				</div>
				<br><br>
				<div class="tb1">
					<table class="type05">
						<colgroup>
							<col style="width:180px;">
							<col>
						</colgroup>
						<tbody>
							<tr>
								<th scope="row" class="ta_l">상담제목</th>
								<td>${consultant.cons_title}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">이름</th>
								<td>${consultant.cons_student_name}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">학번</th>
								<td>${consultant.cons_student_no }</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">학과명</th>
								<td>${consultant.cons_college}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">단과대학</th>
								<td>${consultant.cons_university_code }</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">전화번호</th>
								<td>${consultant.cons_student_number }</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">상담희망날짜</th>
								<td>${consultant.cons_date}</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">상담사</th>
								<td>${consultant.cons_counselor }</td>
							</tr>
							<tr>
								<th scope="row" class="ta_l">상담내용</th>
								<td>${consultant.cons_content}</td>
							</tr>
						</tbody>
					</table>
				
		
				</div>
				<input type="hidden" name="cons_no" value="${consultant.cons_no}" />
				<input type="hidden" name="cons_student_no" value="${consultant.cons_student_no}" />
				<br>
				<div id="btn_d">
					<button class="btn" id="btn"  type="submit" onclick="location.href='/consultant/cancel.kh?cons_no=${consultant.cons_no}'">상담취소
					</button>
				</div>
				
				<br>
				
					<div id="replyArea">
					<!-- 댓글 목록 -->
					<table align="center"  width="700px"  id="rtb">
						<thead>
							<tr>
								<!-- 댓글 갯수 -->
								<td id="rCo" colspan="4"><b id="rCount"></b></td>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
				
				</div>
				<br>
				<button class="btn" id="btn1" onclick="location.href='/consultant/list.kh'">목록</button>
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
					if (data.length > 0) {
						for ( var i in data) {
							$tr = $("<tr>");
							$cons_reply_writer = $("<td id='rWriter' width='85%'>").text(
									data[i].cons_reply_writer);
						
							$cons_reply_content = $("<td id='rContents'  width='100%' align='left'>").text(
									data[i].cons_reply_content);
							
							$cons_reply_date = $("<td id='rDate' width='10%' align='right'>").text(
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