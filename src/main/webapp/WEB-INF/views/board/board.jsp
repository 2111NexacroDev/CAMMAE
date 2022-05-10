<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과게시판 상세</title>
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

#rBoardWriter {
	width: 80%;
	float: left;
}

#rBoardDate {
	width: 20% float: left;
}

#rBoardContent {
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
					<h2>학과게시판</h2>
				</div>
				<div class="btn_1">
				
					<c:if
						test="${sessionScope.loginUser.studentNo eq board.boardId || sessionScope.loginManager ne null}">
					<c:url var="bModify" value="/board/modifyView.kh">
						<c:param name="boardNo" value="${board.boardNo }"></c:param>
					</c:url>
					<button class="btn" onclick="location.href='${bModify }'">수정</button>
					<c:url var="bDelete" value="/board/delete.kh">
						<c:param name="boardNo" value="${board.boardNo }"></c:param>
					</c:url>
					<button class="btn" onclick="location.href='${bDelete }'">삭제</button>
					</c:if>
					<button class="btn"
						onclick="location.href='/board/list.kh?universityCode=${universityCode}'">목록</button>
				</div>
				<br>
				<div class="c-main">
					<div class="title">${board.boardTitle }</div>
					<div id="writerDate">
						<div id="writer">${board.boardWriter }</div>
						<div id="date">${board.boardDate }</div>
					</div>
					<hr>

					<div class="content" style="padding: 10px;">
						${board.boardContent }
						<c:if test="${not empty board.boardFilerename}">
							<br>
							<span> <img
								src="/resources/boardUploadFiles/${board.boardFilerename }"
								style="width: 500px;">
							</span>
						</c:if>
					</div>

					<br> 댓글
					<hr>

					<!-- 댓글 입력 -->
					<div>
						<textarea rows="4" cols="91" id="rContents"></textarea>
						<button class="btn" id="rbtn">등록</button>
					</div>
					<hr>

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
	</div>



	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>

	<!-- 댓글동작  -->
	<script>
		getBoardReplyList();
		$("#rbtn").on("click", function() {
			var rWriter = "${loginUser.studentName}";
			var rWriterId = "${loginUser.studentNo}";
			var boardNo = "${board.boardNo}";
			var rContents = $("#rContents").val();
			<c:if test="${empty sessionScope.loginUser }">
			alert("로그인을 해주세요.");
			</c:if>
			<c:if test="${not empty loginUser }">
			$.ajax({
				url : "/board/replyAdd.kh",
				type : "post",
				data : {
					"boardNo" : boardNo,
					"boardreplyContent" : rContents,
					"boardreplyWriter" : rWriter,
					"boardId" : rWriterId
				}, //json형태
				success : function(data) {
					getBoardReplyList();
					//성공시 작성된 내용 초기화
					$("#rContents").val("");
				},

			});
			</c:if>
		});

		//댓글 불러오는 함수
		function getBoardReplyList() {
			var boardNo = "${board.boardNo}";
			var rWriter = "${loginUser.studentName}";
			var rWriterId = "${loginUser.studentNo}";
			$
					.ajax({
						url : "/board/replyList.kh",
						type : "get",
						data : {
							"boardNo" : boardNo
						},
						success : function(data) {
							var $tableBody = $("#rtb tbody");
							$tableBody.html("");
							for (var i = 0; i < data.length; i++) {
								console.log(data[i]);
								var $tr = $("<tr>");
								var $tr2 = $("<tr>");
								var $rWriter = $(
										"<td id='rWriter' width='100%'>").text(
										data[i].boardreplyWriter);
								var $rContent = $(
										"<td width='100%' align='left'>").text(
										data[i].boardreplyContent);
								var $rDate = $(
										"<td id='rDate' width='10%' align='right'>")
										.text(data[i].boardreplyDate);
								var $btnArea = $(
										"<td id='btnArea' align='right'>")
										.append(
												"<a href='javascript:void(0)' onclick='modifyReplyView(this,"
														+ data[i].boardNo
														+ ", "
														+ data[i].boardreplyNo
														+ ", \""
														+ data[i].boardreplyContent
														+ "\");'>수정</a> ")
										.append(
												"<a href='javascript:void(0)' onclick='removeReply("
														+ data[i].boardNo + ","
														+ data[i].boardreplyNo
														+ ");'>삭제</a>");
								var $rLine = $("<tr><td colspan='4'><hr style='width:740px;'>");
								$tr.append($rWriter);
								$tr.append($rDate);
								$tr2.append($rContent);
								if (data[i].boardId == rWriterId && data[i].boardreplyWriter == rWriter) {
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
		function removeReply(boardNo, boardReplyNo) {
			$.ajax({
				url : "/board/deleteAdd.kh",
				type : "get",
				data : {
					"boardNo" : boardNo,
					"boardreplyNo" : boardReplyNo
				},
				success : function(data) {
					if (data == "success") {
						getBoardReplyList();
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
		function modifyReplyView(obj, boardNo, boardReplyNo, boardReplyContent) {
			var $trModify = $("<tr>");
			var $tdModify = $("<td width='90%' align='left'>");
			var $tdModifyBtn = $("<td  width='10%'>");
			$tdModify
					.append("<input type='text' size='86' value='"+boardReplyContent+"' id='modifyData'>");
			$tdModifyBtn.append("<button class='btn' onclick='modifyReply(" + boardNo + ","
					+ boardReplyNo + ");'>수정</button>");
			$trModify.append($tdModify);
			$trModify.append($tdModifyBtn);
			$(obj).parent().parent().after($trModify);
		}

		function modifyReply(boardNo, boardreplyNo) {
			var modifyData = $("#modifyData").val();
			$.ajax({
				url : "/board/replyModify",
				type : "post",
				data : {
					"boardNo" : boardNo,
					"boardreplyNo" : boardreplyNo,
					"boardreplyContent" : modifyData
				},
				success : function(data) {
					if (data == "success") {
						getBoardReplyList();
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
