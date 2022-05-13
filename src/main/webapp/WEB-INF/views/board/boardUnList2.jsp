<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 리스트</title>
<link rel="stylesheet" href="/resources/common.css">
<link rel="stylesheet" href="/resources/contents.css">
<style>
.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 740px;
	padding: 30px 30px 30px 30px;
	margin-top:20px;
    margin-right: 10px;
    margin-bottom: 20px;
    margin-left: 0px;
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
				<div class="b-title"><h2>학과게시판</h2></div>
			</div>
				<table class="type01">
					<thead>
						<tr>
							<th>학과리스트</th>

						</tr>
					<thead>
					<tbody>

						<c:forEach items="${uList }" var="university">
							<tr>

								<c:url var="uDetail" value="/board/list.kh">
									<c:param name="universityCode"
										value="${university.universityCode}"></c:param>
								</c:url>

								<td><a href="${uDetail}">${university.universityName }</a></td>

							</tr>

						</c:forEach>
					</tbody>
				</table>

			</div>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>
</body>
</html>