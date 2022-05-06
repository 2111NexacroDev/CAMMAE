<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
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
				var chk = confirm("정말 삭제하시겠습니까?");
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
	<h3>지원현황</h3>
	<br><br>
	<table class="type01">
	<thead>
		<tr>
			<th><input id="allCheck" type="checkbox" name="allCheck"></th>
			<th>번호</th>
			<th>제목</th>
			<th>지원자</th>
			<th>지원일</th>
			<th>파일이름</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${sList }" var="support">
			<tr>
				<td><input type="checkbox" name="RowCheck" value="${support.supportNo}"></td>
				<td>${support.supportNo }</td>
				<td>${support.recruitmentTitle }</td>
				<td>${support.studentNo }</td>
				<td>${support.supportDate }</td>
				<td>
				<a href="../../../resources/supportUploadFiles/${support.supFileRename }"download>${support.supFileName }</a><br>
				<a href="../../../resources/supportUploadFiles/${support.supPortFileRename }"download>${support.supPortFileName }</a>
				</td>
			</tr>
		</c:forEach>
	</tbody>
	</table>
	<br>
	<div align="center"><input type="button" value="삭제" class="btn-delete" onclick="deleteValue();"></div>
	<br>
	<div align="center">
		<form action="/support/list.kh" method="get">
			<select name="searchCondition">
				<option value="title">제목</option>
				<option value="writer">지원자</option>
			</select>
			<input type="text" name="searchValue"> 
			<input class="btn"type="submit" value="검색">
		</form>
	</div>
	<div class="paging">

		<c:if test="${pi.startNavi !=1 }">

			<a href="/support/list.kh?page=${pi.startNavi-1 }"> 
				<button>이전</button>
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
			<a href="${pagination }">${p }</a>&nbsp;
		</c:forEach>
		<c:if test="${pi.next && pi.endNavi > 0 }">
			<a href="/support/list.kh?page=${pi.endNavi+1 }">
				<button>다음</button>
			</a>
		</c:if>						
	</div>
	</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>					
</body>
</html>