<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중고거래게시판 상세페이지</title>
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
	margin-bottom: 20px;
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

#mGoods {
	margin-bottom: 10px;
}

#mPrice {
	margin-bottom: 10px;
}
/* 게시물 이미지 크기*/
.content img {
	max-width: 100%;
	max-height: 200px;
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

#rMarketWriter {
	width: 80%;
	float: left;
}

#rMarketDate {
	width: 20%;
	float: left;
}

#rMarketContent {
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
		<!-- sidemenu -->
		<div id="left">
			<jsp:include page="../common/sideBMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>중고거래게시판</h2>
				</div>
				<div class="btn_1">
					<c:if
						test="${sessionScope.loginUser.studentNo eq market.marketId || sessionScope.loginManager ne null}">
						<c:url var="mModify" value="/market/modifyView">
							<c:param name="marketNo" value="${market.marketNo }"></c:param>
						</c:url>
						<button class="btn" onclick="location.href='${mModify }'">수정</button>
						<c:url var="mDelete" value="/market/delete">
							<c:param name="marketNo" value="${market.marketNo }"></c:param>
						</c:url>
						<button class="btn" onclick="location.href='${mDelete }'">삭제</button>
					</c:if>
					<button class="btn" onclick="location.href='/market/list'">목록</button>
				</div>
				<br>
				<div class="c-main">
					<div class="title">
						[
						<c:if test="${market.marketType eq 'S' }">팝니다</c:if>
						<c:if test="${market.marketType eq 'B'}">삽니다</c:if>
						] ${market.marketTitle }
					</div>
					<div id="writerDate">
						<div id="writer">${market.marketWriter }</div>
						<div id="date">${market.marketDate }</div>
					</div>

					<hr>

					<div id="mGoods"><b>상품명</b>&emsp;&emsp;${market.marketGoods }</div>
					<div id="mPrice"><b>판매가격</b>&emsp;${market.marketPrice } <b>원</b></div>
					<div>
						<c:url var="cRoom" value="/chat.kh">
							<c:param name="marketNo" value="${market.marketNo }"></c:param>
						</c:url>
						<a href="${cRoom }"></a>
							<a href="${cRoom }" onclick="window.open(this.href, '_blank','width=400, height=500, left=100, top=50'); return false;"><button class="btn">판매자와 채팅하기</button></a>
					</div>

					<div class="content" style="padding: 10px;">
						${market.marketContent }</div>
					<br> 댓글
					<hr>
					<!-- 댓글 입력 -->
					<div>
						<input type="hidden" id="marketNo" value="${market.marketNo }">
						<textarea rows="4" cols="91" id="rContents"></textarea>
						<button class="btn" id="rbtn">등록</button>
					</div>

					<hr>
					<!-- 댓글 조회 -->
					<div id="replyArea">
						<table align="center" width="740px" id="rtb">
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



	<script>
	/* 	function chatOpen() {
			window.open("/chat.kh", "marketChat",
					"width=400, height=600, left=100, top=50");

		} */
	</script>

	<!-- 댓글동작  -->
	<script>
		getMarketReplyList(); //페이지가 로드 시 함수 동작

		$("#rbtn").on("click", function() {
			var marketNo = $("#marketNo").val(); /* 어떤 게시글에 대한 댓글인지 알기 위함 */
			var rContents = $("#rContents").val();
			var rWriter = "${loginUser.studentName}";
			var rWriterId = "${loginUser.studentNo}";
			<c:if test="${empty sessionScope.loginUser }">
			alert("학생 로그인을 해주세요.");
			</c:if>
			<c:if test="${not empty loginUser }">
			$.ajax({
				url : "/market/replyAdd",
				type : "post",
				data : {
					"marketNo" : marketNo,
					"mReplyContent" : rContents,
					"mReplyWriter" : rWriter,
					"mReplyId" : rWriterId
				}, //json형태
				success : function(data) {
					getMarketReplyList();
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
		function getMarketReplyList() {
			var marketNo = $("#marketNo").val();
			var rWriter = "${loginUser.studentName}";
			var rWriterId = "${loginUser.studentNo}";
			$
					.ajax({
						url : "/market/replyList",
						type : "get",
						data : {
							"marketNo" : marketNo
						},
						success : function(data) {
							var $tableBody = $("#rtb tbody");
							$tableBody.html("");
							for (var i = 0; i < data.length; i++) {
								var $tr = $("<tr>");
								var $tr2 = $("<tr>");
								var $rWriter = $(
										"<td id='rWriter' width='100%'>").text(
										data[i].mReplyWriter);
								var $rContent = $(
										"<td width='100%' align='left'>").text(
										data[i].mReplyContent);
								var $rDate = $(
										"<td id='rDate' width='10%' align='right'>")
										.text(data[i].mReplyDate);
								var $btnArea = $(
										"<td id='btnArea' align='right'>")
										.append(
												"<a href='javascript:void(0)' onclick='modifyReplyView(this,"
														+ data[i].marketNo
														+ ", "
														+ data[i].marketReplyNo
														+ ", \""
														+ data[i].mReplyContent
														+ "\");'>수정</a> ")
										.append(
												"<a href='javascript:void(0)' onclick='removeReply("
														+ data[i].marketNo
														+ ","
														+ data[i].marketReplyNo
														+ ");'>삭제</a>");
								var $rLine = $("<tr><td colspan='4'><hr style='width:740px;'>");
								$tr.append($rWriter);
								$tr.append($rDate);
								$tr2.append($rContent);
								if (data[i].mReplyId == rWriterId
										&& data[i].mReplyWriter == rWriter) {
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
		function removeReply(marketNo, marketReplyNo) {
			$.ajax({
				url : "/market/replyDelete",
				type : "get",
				data : {
					"marketNo" : marketNo,
					"marketReplyNo" : marketReplyNo
				},
				success : function(data) {
					if (data == "success") {
						getMarketReplyList();
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
		function modifyReplyView(obj, marketNo, marketReplyNo, mReplyContent) {
			var $trModify = $("<tr>");
			var $tdModify = $("<td width='90%' align='left'>");
			var $tdModifyBtn = $("<td width='10%'>");
			$tdModify
					.append("<input type='text' size='86' value='"+mReplyContent+"' id='modifyData'>");
			$tdModifyBtn.append("<button class='btn' onclick='modifyReply("
					+ marketNo + "," + marketReplyNo + ");'>수정</button>");
			$trModify.append($tdModify);
			$trModify.append($tdModifyBtn);
			$(obj).parent().parent().after($trModify);
		}

		function modifyReply(marketNo, marketReplyNo) {
			var modifyData = $("#modifyData").val();
			$.ajax({
				url : "/market/replyModify",
				type : "post",
				data : {
					"marketNo" : marketNo,
					"marketReplyNo" : marketReplyNo,
					"mReplyContent" : modifyData
				},
				success : function(data) {
					if (data == "success") {
						getMarketReplyList();
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