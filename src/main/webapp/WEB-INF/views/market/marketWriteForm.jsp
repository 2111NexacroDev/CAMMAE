<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중고거래 게시판</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.ckeditor.com/4.18.0/standard/ckeditor.js"></script>
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
			<form action="/market/register" method="POST"
				enctype="multipart/form-data">
				<div class="c-title">
				<div class="b-title">
					<h2>질의응답게시판</h2>
				</div>
				</div>
				<div class="c-main">
					<div class="selectBox" style="padding: 10px;">
						<select id="marketType" name="marketType"
							style="border: none; width: 250px;">
							<option value="S">팝니다</option>
							<option value="B">삽니다</option>
						</select>

					</div>
					<div class="title">
						<input type="text" size="50" name="marketTitle"
							placeholder="제목을 입력하세요" style="border: none; padding: 10px;">
					</div>
					<hr style="width: 740px; text-align: center;">

					<div>
						상품명 &emsp;<input type="text" size="35" name="marketGoods"
							placeholder="상품명을 입력해주세요" style="border: none; padding: 10px;">
					</div>
					<div>
						판매가격 <input type="text" size="35" name="marketPrice"
							placeholder="가격을 입력해주세요" style="border: none; padding: 10px;">
						원
					</div>

					<div>
						<textarea name="marketContent" id="marketContent"></textarea>
					</div>

					<hr style="width: 740px; text-align: center;">
					<div align="center" style="padding: 15px;">
						<button class="btn" type="submit">등록</button>
						<button type="reset" class="btn" onclick="location.href='/market/list'">취소</button>
					</div>
				</div>
			</form>

		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>


	<script>
		CKEDITOR.replace('marketContent', {
			filebrowserUploadUrl : '/market/imageUpload.kh'
		});

		CKEDITOR.on('dialogDefinition', function(ev) {
			var dialogName = ev.data.name;
			var dialog = ev.data.definition.dialog;
			var dialogDefinition = ev.data.definition;
			if (dialogName == 'image') {
				dialog.on('show', function(obj) {
					this.selectPage('Upload'); //업로드텝으로 시작
				});
				dialogDefinition.removeContents('Link'); // 링크탭 제거
			}
		});
	</script>



</body>
</html>