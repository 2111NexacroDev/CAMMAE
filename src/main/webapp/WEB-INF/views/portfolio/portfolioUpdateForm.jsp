<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 포트폴리오 수정 페이지</title>
<link rel="stylesheet" href="/resources/contents.css">
<style>
.tb1 {
	position: relative;
	border-top: 1px solid #ccc;
	font-size: 16px;
}

.tb1 table {
	position: relative;
	border-top: 1px solid #fff;
	width: 100%;
}

colgroup {
	display: table-column-group;
}

tbody {
	display: table-row-group;
	vertical-align: middle;
	border-color: inherit;
}

tr {
	display: table-row;
	vertical-align: inherit;
	border-color: inherit;
}

.tb1 table tbody th {
	padding: 17px 12px;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	color: white;
	background: #10412C;
}

.tb1 table tbody td {
	padding: 17px 12px;
	border-right: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	color: #000;
}

.ta_l {
	text-align: left !important;
}

.input-btn {
	text-align: center;
}

.a-btn {
	float: right;
}

#btn {
	cursor: pointer;
}
</style>
</head>

<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope.loginUser }">
		<!-- header  -->
		<jsp:include page="../common/menuBar.jsp"></jsp:include>
		<!-- contents -->
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">
				<br>
				<div class="bbs">
					<h2 align="left" style="color: rgb(0, 74, 38)">포트폴리오</h2>
					<form action="/portfolio/modify.kh" method="post"
						enctype="multipart/form-data">
						<input type="hidden" name="port_no" value="${portfolio.port_no}" />
						<input type="hidden" name="port_licenseRename"
							value="${portfolio.port_licenseRename}"> <input
							type="hidden" name="port_licenseFilePath"
							value="${portfolio.port_licenseFilePath}"> <input
							type="hidden" name="port_award_historyRename"
							value="${portfolio.port_award_historyRename}"> <input
							type="hidden" name="port_awardFilePath"
							value="${portfolio.port_awardFilePath}">


						<div class="tb1">
							<table>
								<colgroup>
									<col style="width: 180px;">
									<col>
								</colgroup>
								<tbody>
									<tr>
										<th scope="row" class="ta_l">제목</th>
										<td class="ta_l"><input type="text" name="port_title"
											value="${portfolio.port_title}"></td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">이름</th>
										<td class="ta_l"><input type="text" name="port_name"
											value="${portfolio.port_name}"></td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">학번</th>
										<td class="ta_l"><input type="text" name="port_college"
											readonly value="${portfolio.port_college }"></td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">학과명</th>
										<td class="ta_l"><input type="text"
											name="port_student_number"
											value="${portfolio.port_student_number}" readonly></td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">단과대학</th>
										<td class="ta_l"><input type="text"
											name="port_university_code"
											value="${portfolio.port_university_code }" /></td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">전화번호</th>
										<td class="ta_l"><input type="text"
											name="port_student_number"
											value="${portfolio.port_student_number}" readonly></td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">자격증 첨부</th>
										<td class="ta_l"><input type="file" name="reloadFile">${portfolio.port_license}</td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">수상이력 첨부</th>
										<td class="ta_l"><input type="file" name="reloadFile1">${portfolio.port_award_history}</td>
									</tr>
									<tr>
										<th scope="row" class="ta_l">작성날짜</th>
										<td class="ta_l">${portfolio.port_writerDate}</td>
									</tr>

									<tr>
										<th scope="row" class="ta_l">내용</th>
										<td class="ta_l"><input type="text" name="port_content"
											value="${portfolio.port_content}"></td>
									</tr>
								</tbody>

							</table>
							<br>
							<div class="enr_btn">
								<div class="input-btn">
									<input type="submit" id="btn" class="btn" value="수정"><br>
								</div>
							</div>
						</div>
					</form>
				</div>

				<br>

				<div class="a-btn">
					<a href="/portfolio/listView.kh" id="list_l">
						<button class="btn" id="btn">목록</button>
					</a>
				</div>
			</div>

		</div>


		<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>
</body>
</html>