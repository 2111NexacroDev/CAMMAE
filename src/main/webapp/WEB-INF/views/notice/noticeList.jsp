<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="/resources/menuBar.css">

<style>
	#col1{
		width: 5%;
	}
	#col2{
		width: 30%;
	}
	#col3{
		width: 20%;
	}
	#col4{
		width: 25%;
	}
	
	#col5{
		width: 25%;
	}
</style>
<meta charset="UTF-8">
<title>공지사항</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
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
				<div class="b-title"><h2>공지사항</h2></div>
				<c:if test="${sessionScope.loginManager ne null}">
					<div class="btn_1"><button style="width: 80px" class="btn"onclick="location.href='/notice/writeView.kh'">글쓰기</button></div>
				</c:if>
			</div>
			<table class="type01">
				<thead>
					<tr>
						<th id="col1" scope="cols">번호</th>
						<th id="col2" scope="cols">제목</th>
						<th id="col3" scope="cols">작성자</th>
						<th id="col4" scope="cols">작성일</th>
						<th id="col5" scope="cols">조회수</th>
					</tr>
				</thead>
				<tbody>
				<c:if test="${nList eq null}">
					<tr>
						<td colspan="5"></td>
					</tr>
				
				</c:if>
					<c:forEach items="${nList }" var="notice">
						<tr id="tr1">
							<td scope="row" class="noticeNo">${notice.noticeNo }</td>
							<c:url var="nDetail" value="/notice/detail.kh">
								<c:param name="noticeNo"  value="${notice.noticeNo }"></c:param>
							</c:url>
							<td scope="row"><a href="${nDetail }">${notice.noticeTitle }</a></td>
							<td scope="row">${notice.noticeWriter }</td>
							<td scope="row">${notice.noticeDate }</td>
							<td scope="row">${notice.noticeCount }</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<br>
			<div class="paging" align="center" >

				<c:if test="${pi.startNavi !=1 }">

					<a href="/notice/list.kh?page=1"> <button class="pbtn">＜</button></a>

				</c:if>
				<c:if test="${pi.prev}">

					<a href="/notice/list.kh?page=${pi.startNavi-1}"> <i
						class="fas fa-angle-left">
							<button class="on">
					</i>
						</button>
					</a>
				</c:if>

				<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
					<c:url var="pagination" value="/notice/list.kh">
						<c:param name="page" value="${p }"></c:param>
					</c:url>

					<a href="${pagination }"><button class="page-btn ${p eq currentPage ? 'active' : '' }">${p }</button></a>&nbsp;
																		
									</c:forEach>


				<c:if test="${pi.next && pi.endNavi > 0}">

					<a href="/notice/list.kh?page=${pi.endNavi+1}"> <button class="pbtn">＞</button>
					</a>
				</c:if>
			</div>
		</div>

	</div>
	
	<script>
		var tr1= document.getElementById('tr1');
		var noticeNo = $(".noticeNo").html();
		console.log(noticeNo);
		if(noticeNo == 61){
				tr1.style.backgroundColor = "#D3D3D3";
		}
			
		
	</script>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>