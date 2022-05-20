<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 포트폴리오 등록 페이지</title>
<link rel="stylesheet" href="/resources/contents.css">
<style>
table.type05 {
	border-top: 1.5px solid rgb(30, 57, 50);
	border-collapse: collapse;
	text-align: left;
	line-height: 1.5;
	margin-top: 10px;
	width: 800px;
}

table.type05 thead {
	background: rgb(231, 232, 226);
}

table.type05 thead th {
	padding: 10px;
	vertical-align: top;
	color: black;
}

td {
	padding: 7px;
	border-bottom: 1px solid #CCC;
}

.td_left {
	width: 15%;
	background: rgb(231, 232, 226);
	text-align: center;
	font-weight: bold;
}

.td_sub {
	border-bottom: none;
}

#td_content {
	
	border-bottom: 1px solid rgb(30, 57, 50);
}

.btn {
	margin-top: 30px;
}

button {
	cursor: pointer;
}
}
</style>
</head>
<body>
	<c:if test="${empty sessionScope}">
		<jsp:forward page="/login/loginPage.kh" />
	</c:if>

	<c:if test="${not empty sessionScope}">
		<!-- header  -->
		<jsp:include page="../common/menuBar.jsp"></jsp:include>
		<!-- contents -->
		<div id="content">
			<div id="left">
				<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
			</div>
			<!-- contents-main -->
			<div id="center">

				<div>
					<form action="/portfolio/register.kh" method="post"
						enctype="multipart/form-data">
						<div class="c-title">
							<div class="b-title">
								<h2>포트폴리오관리</h2>
							</div>
						</div>
						<table class="type05">
							<tr>

								<td class="td_left">제목</td>
								<td class="td_right"><input type="text" name="port_title">
								</td>
							</tr>

							<tr>
								<td class="td_left">이름</td>
								<td class="td_right"><input type="text" name="port_name"
									value="${loginUser.studentName}"></td>
							</tr>
							<tr>
								<td class="td_left">학번</td>
								<td class="td_right"><input type="text"
									name="port_student_no" value="${loginUser.studentNo}"></td>
							</tr>
							<tr>
								<td class="td_left">단과대학</td>
								<td class="td_right"><input type="text"
									name="port_university_code"
									value="${loginUser.universityCollege}" /></td>
							</tr>
							<tr>
								<td class="td_left">학과명</td>
								<td class="td_right"><input type="text" name="port_college"
									value="${loginUser.departmentName}"></td>
							</tr>
							<tr>
								<td class="td_left">전화번호</td>
								<td class="td_right"><input type="text"
									name="port_student_number"
									value="${loginUser.studentPhonenumber}"></td>
							</tr>
							<tr>
								<td class="td_left">자격증 첨부</td>
								<td class="td_right"><input type="file" name="uploadFile"
									value="첨부파일" multiple="multiple"></td>
							</tr>
							<tr>
								<td class="td_left">수상이력 첨부</td>
								<td class="td_right"><input type="file" name="uploadFile1"
									value="첨부파일" multiple="multiple"></td>
							</tr>
							<tr>
								<td class="td_left" id="td_content">내용</td>
								<td class="td_right" id="td_content"><textarea name="port_content"></textarea></td>
							</tr>
							<tr>
								<td colspan="2" align="center" class="td_sub"><button class="btn" type="submit">등록</button></td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
		<!-- footer -->
		<jsp:include page="../common/footer.jsp"></jsp:include>
	</c:if>
</body>
</html>