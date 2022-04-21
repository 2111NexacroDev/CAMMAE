<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
	<h1>상담관리</h1>
	<input type="hidden" name="consultant_no" value="${consultant.cons_no}">
	상담제목 <span>${consultant.cons_title}</span><br>
	이름 <span>${consultant.cons_student_name}</span><br>
	학번 <span>${consultant.cons_student_no }</span><br>
	학과명 <span>${consultant.cons_college}</span><br>
	전화번호 <span>${consultant.cons_student_number }</span><br>
	상담희망날짜 <span>${consultant.cons_date}</span><br>
	상담사 <span>${consultant.cons_counselor }</span><br>
	상담내용 <span>${consultant.cons_content}</span>

<!-- 댓글 등록 -->
	<table align="center" width="500" border="1">
		<tr>
			<td>
				<textarea rows="3" cols="55" id="cons_reply_content"></textarea>
				
			</td>
			<td>
				<input type="hidden" name=""  value="" id="">
			</td>
			
			<td>
				<button id="rSubmit">등록하기</button>
			</td>
		</tr>	
	</table>	
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
	
	<script>
		getReplyList();
		$("#rSubmit").on("click", function() {
			var cons_no = "${consultant.cons_no}";
			console.log(cons_no)
			var cons_reply_content = $("#cons_reply_content").val();
			var cons_reply_writer = "${consultantreply.cons_writer}";
			$.ajax({
				url : "/consultant/replyAdd.kh",
				type : "post",
				data : { "cons_no" : cons_no, "cons_reply_content" : cons_reply_content,
					"cons_reply_writer" : cons_reply_writer},
				success : function(data) {
					if(data == "success") {
						// 댓글 불러오기
						getReplyList();
						// 작성 후 내용 초기화
						$("#cons_reply_content").val("");
					}else{
						alert("댓글 등록 실패");
					}
				},
				error : function() {
					alert("ajax 실패!");
				}
			});
		});
		function getReplyList() {
			var cons_no = "${consultant.cons_no }";
			$.ajax({
				url : "/consultant/replyList.kh",
				type : "get",
				data : { "cons_no" : cons_no },
				success : function(data) {
					var $tableBody = $("#rtb tbody");
					$tableBody.html("");
					var $cons_reply_writer;
					var $cons_reply_content;
					var $cons_reply_date;
					var $tr;
					$("#rCount").text("댓글 (" + data.length + ")"); //댓글 갯수 표시
					// document.querySelector("#rCount").value = "댓글 (" + data.length + ")";
					if(data.length > 0) {
						for(var i in data) {
							$tr = $("<tr>");
							$cons_reply_writer = $("<td width='100'>").text(data[i].cons_reply_writer);
							$cons_reply_content = $("<td>").text(data[i].cons_reply_content);
							$cons_reply_date = $("<td width='100'>").text(data[i].cons_reply_date);
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