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
	width: 600px;
	padding: 30px 30px 30px 30px;
}

/* 게시물 이미지 크기*/
.content img {
	max-width: 100%;
	max-height: 200px;
}

/* 댓글 */
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
			<h3 id="b-title">중고거래 게시판</h3>
			<br>
			<div>
				<c:url var="mModify" value="/market/modifyView">
					<c:param name="marketNo" value="${market.marketNo }"></c:param>
				</c:url>
				<button class="btn" onclick="location.href='${mModify }'">수정</button>
				<c:url var="mDelete" value="/market/delete">
					<c:param name="marketNo" value="${market.marketNo }"></c:param>
				</c:url>
				<button class="btn" onclick="location.href='${mDelete }'">삭제</button>
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
				<br>
				<div>${market.marketWriter }${market.marketDate }</div>
				<hr style="width: 585px; text-align: center;">

				<div>상품명 &emsp;${market.marketGoods }</div>
				<div>판매가격 ${market.marketPrice } 원</div>
				<div>
					<button class="btn" onclick="chatOpen();">판매자와 채팅하기</button>
				</div>

				<div class="content" style="padding: 10px;">
					${market.marketContent }</div>
				<br> 댓글
				<hr style="width: 585px; text-align: center;">
				<!-- 댓글 입력 -->
				<div>
					<input type="hidden" id="marketNo" value="${market.marketNo }">
					<textarea rows="3" cols="70" id="rContents"></textarea>
					<button class="btn" id="rbtn">등록</button>
				</div>
				<hr style="width: 585px; text-align: center;">
				<!-- 댓글 조회 -->
				<div id="replyArea">
					<table align="center" width="600px" id="rtb">
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



		<script>
			function chatOpen() {
				window.open("#", "marketChat",
						"width=400, height=600, left=100, top=50");

			}
		</script>

		<!-- 댓글동작  -->
		<script>
			getMarketReplyList(); //페이지가 로드 시 함수 동작
			$("#rbtn").on("click", function() {
				var marketNo = $("#marketNo").val(); /* 어떤 게시글에 대한 댓글인지 알기 위함 */
				var rContents = $("#rContents").val();
				$.ajax({
					url : "/market/replyAdd",
					type : "post",
					data : {
						"marketNo" : marketNo,
						"mReplyContent" : rContents
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
			})

			//댓글 불러오는 함수
			function getMarketReplyList() {
				var marketNo = $("#marketNo").val();
				$.ajax({
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
							var $rWriter = $("<td width='100'>").text(
									data[i].mReplyWriter);
							var $rContent = $("<td>").text(
									data[i].mReplyContent);
							var $rDate = $("<td width='100'>").text(
									data[i].mReplyDate);
							var $btnArea = $("<td width='80'>").append(
									"<a href='javascript:void(0)' onclick='modifyReplyView(this,"
											+ data[i].marketNo + ", "
											+ data[i].marketReplyNo + ", \""
											+ data[i].mReplyContent
											+ "\");'>수정</a> ").append(
									"<a href='javascript:void(0)' onclick='removeReply("
											+ data[i].marketNo + ","
											+ data[i].marketReplyNo
											+ ");'>삭제</a>");
							$tr.append($rWriter);
							$tr.append($rContent);
							$tr.append($rDate);
							$tr.append($btnArea);
							$tableBody.append($tr);
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
			function modifyReplyView(obj, marketNo, marketReplyNo,
					mReplyContent) {
				var $trModify = $("<tr>");
				var $tdModify = $("<td colspan='3'>");
				var $tdModifyBtn = $("<td>");
				$tdModify
						.append("<input type='text' size='50' value='"+mReplyContent+"' id='modifyData'>");
				$tdModifyBtn.append("<button onclick='modifyReply(" + marketNo
						+ "," + marketReplyNo + ");'>수정완료</button>");
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