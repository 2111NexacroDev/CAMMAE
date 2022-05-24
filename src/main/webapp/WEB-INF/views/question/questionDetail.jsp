<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판 상세페이지</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="/resources/contents.css">
<style>
.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 740px;
	padding: 30px 30px 30px 30px;
	margin-top: 45px;
	margin-right: 10px;
	margin-bottom: 20px;
	margin-left: 0px;
}

hr {
	width: 740px;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
}

.title {
	font-weight: bold;
	font-size: 18.5px;
}

#writer {
	font-size: 14px;
	width: 70%;
	float: left;
	margin-top: 10px;
	margin-bottom: 10px;
}

#date {
	font-size: 14px;
	width: 30%;
	text-align: right;
	float: left;
	margin-top: 10px;
	margin-bottom: 10px;
}
/* 댓글 */
#rWriter {
	font-weight: bold;
}

#rDate {
	font-size: 14px;
}

#btnArea {
	font-size: 14px;
}

#rContents {
	float: left;
}

#rbtn {
	float: left;
	margin-left: 15px;
	margin-top: 38px;
	margin-bottom: 10px
}

#rQuestionWriter {
	width: 80%;
	float: left;
}

#rQuestionDate {
	width: 20%;
	float: left;
}

#rQuestionContent {
	width: 80%;
	float: left;
}
</style>
</head>

<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>질의응답게시판</h2>
				</div>
				<div class="btn_1">
					<c:if
						test="${sessionScope.loginUser.studentNo eq question.questionId || sessionScope.loginManager ne null}">
						<c:url var="qModify" value="/question/modifyView">
							<c:param name="questionNo" value="${question.questionNo }"></c:param>
						</c:url>
						<button class="btn" onclick="location.href='${qModify }'">수정</button>
						<c:url var="qDelete" value="/question/delete">
							<c:param name="questionNo" value="${question.questionNo }"></c:param>
						</c:url>
						<button class="btn" onclick="location.href='${qDelete }'">삭제</button>
					</c:if>
					<button class="btn" onclick="location.href='/question/list'">목록</button>
				</div>
			</div>

			<div class="c-main">
				<div class="title">[${question.professorName }교수 _
					${question.lectureName }] ${question.questionTitle }</div>
				<div id="writerDate">
					<div id="writer">${question.questionWriter }</div>
					<div id="date">${question.questionDate }</div>
				</div>

				<hr>
				<div class="content" style="padding: 10px;">
					${question.questionContent }
					<c:if test="${not empty question.questionFileReName }">
						<br>
						<span> <img
							src="/resources/questionUploadFiles/${question.questionFileReName }"
							style="width: 500px;">
						</span>
					</c:if>
				</div>
				<br> 댓글
				<hr>
				<!-- 댓글 입력 -->
				<div>
					<input type="hidden" id="questionNo"
						value="${question.questionNo }">

					<textarea rows="4" cols="91" id="rContents"></textarea>
					<button class="btn" id="rbtn">등록</button>
					<hr>

				</div>
				<!-- 댓글 조회 -->
				<div id="replyArea">
					<table align="center" width="700px" id="rtb">
						<thead>
						</thead>
						<tbody>
						</tbody>
					</table>

				</div>
			</div>
		</div>
	</div>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>


	<!-- 댓글동작  -->
	<script>
		getQuestionReplyList(); //페이지가 로드 시 함수 동작
		$("#rbtn").on("click", function() {
			var questionNo = $("#questionNo").val(); /* 어떤 게시글에 대한 댓글인지 알기 위함 */
			var rContents = $("#rContents").val();
			var rWriter = "${loginProfessor.professorName}";
			var rWriterId = "${loginProfessor.professorNo}";
			<c:if test="${empty sessionScope.loginProfessor }">
			alert("교수 로그인을 해주세요.");
			</c:if>
			<c:if test="${not empty loginProfessor }">
			$.ajax({
				url : "/question/replyAdd",
				type : "post",
				data : {
					"questionNo" : questionNo,
					"questionReplyContent" : rContents,
					"questionReplyWriter" : rWriter,
					"questionReplyId" : rWriterId
				}, //json형태
				success : function(data) {
					getQuestionReplyList();
					//성공시 작성된 내용 초기화
					$("#rContents").val("");
				},
				error : function(data) {
					alert("ajax 실패")
				}
			});
			</c:if>
		})

		//댓글 불러오는 함수
		function getQuestionReplyList() {
			var questionNo = $("#questionNo").val();
			var rWriter = "${loginProfessor.professorName}";
			var rWriterId = "${loginProfessor.professorNo}";

			$
					.ajax({
						url : "/question/replyList",
						type : "get",
						data : {
							"questionNo" : questionNo
						},
						success : function(data) {
							var $tableBody = $("#rtb tbody");
							$tableBody.html("");
							for (var i = 0; i < data.length; i++) {
								var $tr = $("<tr>");
								var $tr2 = $("<tr>");
								var $rWriter = $(
										"<td id='rWriter' width='100%'>").text(
										data[i].questionReplyWriter);
								var $rContent = $(
										"<td width='100%' align='left'>").text(
										data[i].questionReplyContent);
								var $rDate = $("<td id='rDate' width='10%' align='right'>")
										.text(data[i].questionReplyDate);
								var $btnArea = $("<td id='btnArea' align='right'>").append(
										"<a href='javascript:void(0)' onclick='modifyReplyView(this,"
												+ data[i].questionNo + ", "
												+ data[i].questionReplyNo
												+ ", \""
												+ data[i].questionReplyContent
												+ "\");'>수정</a> ").append(
										"<a href='javascript:void(0)' onclick='removeReply("
												+ data[i].questionNo + ","
												+ data[i].questionReplyNo
												+ ");'>삭제</a>");
								var $rLine = $("<tr><td colspan='4'><hr style='width:740px;'>");

								$tr.append($rWriter);
								$tr.append($rDate);
								$tr2.append($rContent);
								if (data[i].questionReplyId == rWriterId && data[i].questionReplyWriter == rWriter) {
									$tr2.append($btnArea);
								}

								$tableBody.append($tr);
								$tableBody.append($tr2);
								$tableBody.append($rLine);
							}
						},
						error : function() {
							var $tableBody = $("#rtb tbody");
							$tableBody.html(""); //기존댓글 내용 비우기
						}
					});
		}

		/* 댓글 삭제 */
		function removeReply(questionNo, questionReplyNo) {
			$.ajax({
				url : "/question/replyDelete",
				type : "get",
				data : {
					"questionNo" : questionNo,
					"questionReplyNo" : questionReplyNo
				},
				success : function(data) {
					if (data == "success") {
						getQuestionReplyList();
					} else {
						alert("댓글 삭제 실패")
					}
				},
				error : function(data) {
					alert("ajax 실패")
				}
			});
		}

		/* 댓글 수정 */
		function modifyReplyView(obj, questionNo, questionReplyNo,
				questionReplyContent) {
			var $trModify = $("<tr>");
			var $tdModify = $("<td colspan='3'>");
			var $tdModifyBtn = $("<td>");
			$tdModify
					.append("<input type='text' size='50' value='"+questionReplyContent+"' id='modifyData'>");
			$tdModifyBtn.append("<button onclick='modifyReply(" + questionNo
					+ "," + questionReplyNo + ");'>수정완료</button>");
			$trModify.append($tdModify);
			$trModify.append($tdModifyBtn);
			$(obj).parent().parent().after($trModify);
		}

		function modifyReply(questionNo, questionReplyNo) {
			var modifyData = $("#modifyData").val();
			$.ajax({
				url : "/question/replyModify",
				type : "post",
				data : {
					"questionNo" : questionNo,
					"questionReplyNo" : questionReplyNo,
					"questionReplyContent" : modifyData
				},
				success : function(data) {
					if (data == "success") {
						getQuestionReplyList();
					} else {
						alert("댓글 수정 실패")
					}
				},
				error : function(data) {
					alert("ajax 실패")
				}
			});
		}
	</script>
</body>
</html>













