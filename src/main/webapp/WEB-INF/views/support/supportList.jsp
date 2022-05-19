<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<style>
#s0{
	width:5%;
}
#s1{
	width:7%;
}
#s2{
	width:10%;
}
</style>
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script>
		$(function(){
			var chkObj = document.getElementsByName("RowCheck");
			var rowCnt = chkObj.length;
			
			$("input[name='allCheck']").click(function(){
				var chk_listArr = $("input[name='RowCheck']");
				for (var i=0; i<chk_listArr.length; i++){
					chk_listArr[i].checked = this.checked;
				}
			});
			$("input[name='RowCheck']").click(function(){
				if($("input[name='RowCheck']:checked").length == rowCnt){
					$("input[name='allCheck']")[0].checked = true;
				}
				else{
					$("input[name='allCheck']")[0].checked = false;
				}
			});
		});
		function deleteValue(){
			var valueArr = new Array();
			var list = $("input[name='RowCheck']");
			for(var i = 0; i < list.length; i++){
				if(list[i].checked){
					valueArr.push(list[i].value);
				}
			}
			if(valueArr.length == 0){
				alert("선택된 글이 없습니다.");
			}
			else{
				var chk = confirm("정말 취소하시겠습니까?");
				if(chk) {
				$.ajax({
					url : "/deleteSupport",
					type : 'POST',
					traditional : true,
					data : {
						valueArr : valueArr
					},
					success : function(jdata){
						if(jdata = 1){
							location.replace("/support/list.kh")
						}
						else{
							alert("삭제실패");
						}
					}
				});
				}
			}
		}
	</script>		
<meta charset="UTF-8">
<title>지원현황</title>
</head>
<body>

	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>

	<!-- contents영역 -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>
		
		<div id="center">

			<div class="c-title">
				<div class="b-title"><h2>지원현황</h2></div>
				<c:if test="${sessionScope.loginUser ne null}">													
				<div class="btn_1"><input class="btn" type="button" value="취소" class="btn-delete" onclick="deleteValue();"></div>
				</c:if>
			</div>
	<table class="type01">
	<thead>
		<tr>
			<c:if test="${sessionScope.loginUser ne null}">
			<th id="s0"><input id="allCheck" type="checkbox" name="allCheck"></th>
			</c:if>
			<th id="s1">학번</th>
			<th>제목</th>
			<th id="s2">지원자</th>
			<th id="s1">지원일</th>
			<th>이력서</th>
			<th>포트폴리오</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${sList }" var="support">
			<tr>
				<c:if test="${sessionScope.loginUser ne null}">
				<td><input type="checkbox" name="RowCheck" value="${support.supportNo}"></td>
				</c:if>
				<td>${support.studentNo }</td>
				<td>${support.recruitmentTitle }</td>
				<td>${support.studentName }</td> 
				<td>${support.supportDate }</td>
				<td>
				<a href="../../../resources/supportUploadFiles/${support.supFileRename }"download>${support.supFileName }</a><br>
				</td>
				<td>
				<a href="../../../resources/supportUploadFiles/${support.supPortFileRename }"download>${support.supPortFileName }</a>
				</td>
			</tr>
		</c:forEach>
	</tbody>
	</table>
	<br>
	
	<br>
	<div align="center">
		<form action="/support/list.kh" method="get">
			<c:if test="${sessionScope.loginManager ne null}">
			<select name="searchCondition">
				<option value="title">제목</option>
				<option value="writer">학번</option>
				<option value="writerName">지원자</option>
			</select>
			<input type="text" name="searchValue"> 
			<input class="btn"type="submit" value="검색">
			</c:if>
		</form>
	</div>
	<div class="paging"  align="center">

		<c:if test="${pi.startNavi !=1 }">

			<a href="/support/list.kh?page=${pi.startNavi-1 }"> 
				<button class="pbtn">＜</button>
			</a>

		</c:if>
		
		<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
			<c:if test="${empty pageInfo.searchValue }">
				<c:url var="pagination" value="/support/list.kh">
					<c:param name="page" value="${p }"></c:param>
				</c:url>
			</c:if>
			<c:if test="${not empty pageInfo.searchValue }">
				<c:url var="pagination" value="/support/list.kh?searchCondition=${pageInfo.searchCondition }&searchValue=${pageInfo.searchValue }">
					<c:param name="page" value="${p }"></c:param>
				</c:url>
			</c:if>
			<a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
		</c:forEach>
		<c:if test="${pi.next && pi.endNavi > 0 }">
			<a href="/support/list.kh?page=${pi.endNavi+1 }">
				<button class="pbtn">＞</button>
			</a>
		</c:if>						
	</div>
	</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>					
</body>
</html>