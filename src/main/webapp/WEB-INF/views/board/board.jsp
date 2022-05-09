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
.left {
	width: 32%;
	float: left;
}

.center {
	width: 50%;
	float: left;
}

.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 600px;
	padding: 30px 30px 30px 30px;
}

h3 {
	color: #10412C;
}

.btn {
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}

/* 댓글 */
#rBoardWriter {
	width: 80%;
	float: left;
}

#rBoardDate {
	width: 20%;
	float: left;
}

#rBoardContent {
	width: 80%;
	float: left;
}
</style>
</head>

<body>
	
	<div class="center">

		<h3 id="b-title">학과게시판</h3>
		<br>
		<div>
			<c:url var="bModify" value="/board/modifyView.kh">
				<c:param name="boardNo" value="${board.boardNo }"></c:param>
			</c:url>
			<button class="btn" onclick="location.href='${bModify }'">수정</button>
			<c:url var="bDelete" value="/board/delete.kh">
				<c:param name="boardNo" value="${board.boardNo }"></c:param>
			</c:url>
			<button class="btn" onclick="location.href='${bDelete }'">삭제</button>
			<button class="btn" type="reset" onclick="location.href='/board/list.kh?universityCode=${universityCode}'">목록</button>
		</div>
		<br>
		<div class="c-main">
			<div class="title"> ${board.boardTitle }</div>
			<br>
			<div>${board.boardWriter }${board.boardDate }</div>

			<hr style="width: 585px; text-align: center;">
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
			<hr style="width: 585px; text-align: center;">
			<!-- 댓글 입력 -->
			<div>
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
	
	
	<!-- 댓글동작  -->
	<script>
	getBoardReplyList();
		$("#rbtn").on("click", function(){
			var boardNo = "${board.boardNo}";
			var rContents = $("#rContents").val();
			$.ajax({
				url : "/board/replyAdd.kh",
				type : "post",
				data : {"boardNo" : boardNo , "boardreplyContent" : rContents }, //json형태
				success : function(data) {
					getBoardReplyList();
					//성공시 작성된 내용 초기화
					$("#rContents").val("");
				},
				
			});
		});
		
		//댓글 불러오는 함수
		function getBoardReplyList(){
			
				var boardNo = "${board.boardNo}";
			$.ajax({
				url : "/board/replyList.kh",
				type : "get",
				data : { 
					"boardNo" : boardNo 
					},
				success : function(data) {
					var $tableBody = $("#rtb tbody");
					$tableBody.html("");
					for(var i = 0; i<data.length; i++){
					console.log(data[i]);
					var $tr = $("<tr>");
					var $rWriter = $("<td width='100'>").text(data[i].boardreplyWriter);
					var $rContent = $("<td>").text(data[i].boardreplyContent);
					var $rDate = $("<td width='100'>").text(data[i].boardReplyDate);
					var $btnArea = $("<td width='80'>")
					.append("<a href='javascript:void(0)' onclick='modifyReplyView(this,"+data[i].boardNo+", "+data[i].boardreplyNo+", \""+data[i].boardreplyContent+"\");'>수정</a> ")
					.append("<a href='javascript:void(0)' onclick='removeReply("+data[i].boardNo+","+data[i].boardreplyNo+");'>삭제</a>");
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
		function removeReply(boardNo, boardReplyNo) {
			$.ajax({
				url : "/board/deleteAdd.kh",
				type : "get",
				data : {"boardNo" : boardNo , "boardreplyNo" : boardReplyNo },
				success : function(data) {
					if(data == "success"){
						getBoardReplyList();						
					}else{
						alert("댓글 삭제 실패")
					}
				},
				error : function(data) { alert("ajax 실패")}
			});
		}
		
		/* 댓글 수정 */
		function modifyReplyView (obj ,boardNo, boardReplyNo, boardReplyContent){
			var $trModify = $("<tr>");
			var $tdModify = $("<td colspan='3'>");
			var $tdModifyBtn = $("<td>");
			$tdModify.append("<input type='text' size='50' value='"+boardReplyContent+"' id='modifyData'>");
			$tdModifyBtn.append("<button onclick='modifyReply("+boardNo+","+boardReplyNo+");'>수정완료</button>");
			$trModify.append($tdModify);
			$trModify.append($tdModifyBtn);
			$(obj).parent().parent().after($trModify);
		}
		
		function modifyReply(boardNo, boardreplyNo){
			var modifyData = $("#modifyData").val();
			$.ajax({
				url : "/board/replyModify",
				type : "post",
				data : {"boardNo" : boardNo , "boardreplyNo" : boardreplyNo, "boardreplyContent": modifyData },
				success : function(data) {
					if(data == "success"){
						getBoardReplyList();						
					}else{
						alert("댓글 수정 실패")
					}
				},
				error : function(data) { alert("ajax 실패")}
			});
		}
	</script>

</body>
</html>
