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

hr {
	width: 740px;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
}

#summary {
	height: 250px;
	width: 100%;
}

#sImg {
	float: left;
	width: 45%;
	height: 250px;
}

#sDetail {
	float: right;
	font-size: 18px;
	width: 50%;
	height: 250px;
	padding-right: 15px;
	padding-left: 15px;
}

#headImg {
	width: 100%;
	height: 85%;
	width: 100%;
	border: 1px solid #ccc;
}
img {
	max-height: 100%;
	max-width: 100%;
}

#fileArea {
	margin-top: 3px;
	height: 15%;
	width: 100%;
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
						<h2>중고거래게시판</h2>
					</div>
				</div>
				<div class="c-main">
					<input type="hidden" name="marketWriter"
						value="${loginUser.studentName}"> <input type="hidden"
						name="marketId" value="${loginUser.studentNo}">
					<div class="selectBox" style="padding: 10px;">
						<select id="marketType" name="marketType"
							style="border: none; width: 250px;">
							<option value="S">팝니다</option>
							<option value="B">삽니다</option>
						</select>

					</div>
					<div class="title">
						<input type="text" size="95" name="marketTitle"
							placeholder="제목을 입력하세요" style="border: none; padding: 10px;">
					</div>
					<hr>
					<div id="summary">
						<div id="sImg">
							<div id="headImg"><img id="preview"></div>
							<div id="fileArea">
								<input type="file" name="uploadFile" onchange="readURL(this);">
							</div>
						</div>
						<div id="sDetail">
							<div>
								<b>상품명</b> &emsp;<input type="text" size="30" name="marketGoods"
									placeholder="상품명을 입력해주세요" style="border: none; padding: 10px;">
							</div>
							<br>
							<div>
								<b>판매가격</b> <input type="text" size="30" name="marketPrice"
									placeholder="가격을 입력해주세요" style="border: none; padding: 10px;">
								<b>원</b>
							</div>
						</div>
					</div>
					<div>
						<textarea rows="20" cols="98" name="marketContent"
							id="marketContent"></textarea>
					</div>
					<hr>
					<div align="center" style="padding: 15px;">
						<button class="btn" type="submit">등록</button>
						<button type="reset" class="btn"
							onclick="location.href='/market/list'">취소</button>
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

		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function(e) {
					document.getElementById('preview').src = e.target.result;
				};
				reader.readAsDataURL(input.files[0]);
			} else {
				document.getElementById('preview').src = "";
			}
		}
	</script>



</body>
</html>