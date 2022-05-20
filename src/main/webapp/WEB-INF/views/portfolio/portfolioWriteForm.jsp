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
table {
	border-collapse: collapse;
	border-spacing: 0;
}

table td* {
	vertical-align: middle;
}

table td {
	padding: 15px 5px;
	border-bottom: 1px solid #c2c2c2;
	font-size: 16px;
}

.td-left {
	width: 100px;
}

.td_sub {
	border: none;
}

.submit{
	color:
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
							<h2 id="b-title">포트폴리오 게시판</h2>
						</div>
						<br><br>

						<table>
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
									name="port_university_code" value="${loginUser.universityCollege}" /></td>
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
								<td class="td_left">내용</td>
								<td class="td_right"><textarea name="port_content"></textarea></td>
							</tr>

							<tr>
								<td colspan="2" align="center" class="td_sub"><input
									type="submit" value="등록" class="btn" style="cursor:pointer;"></td>
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