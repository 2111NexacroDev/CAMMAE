<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>중고거래 게시판</title>
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
	height: 290px;
	width: 100%;
}

#sImg {
	float: left;
	width: 45%;
	height: 290px;
}

#sDetail {
	float: right;
	width: 50%;
	height: 290px;
	padding-right: 15px;
	padding-left: 15px;
}

#headImg {
	width: 100%;
	height: 80%;
	width: 100%;
	border: 1px solid black;
}

#fileArea {
	margin-top: 3px;
	height: 20%;
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
			<form action="/market/update" method="POST"
				enctype="multipart/form-data">
				<input type="hidden" name="marketNo" value="${market.marketNo }">
				<!-- 파일 수정 하지않을 때 기존 파일 경로 그대로 사용하기 위해서  파일을 수정할 때는 기존 파일을 삭제하기 위해서-->
				<input type="hidden" name="marketFileName"
					value="${market.marketFileName }"> <input type="hidden"
					name="marketFileReName" value="${market.marketFileReName }">
				<input type="hidden" name="marketFilePath"
					value="${market.marketFilePath }"> <input type="hidden"
					name="marketDate" value="${market.marketDate }">

				<div class="c-title">
					<div class="b-title">
						<h2>중고거래게시판</h2>
					</div>
				</div>
				<div class="c-main">
					<div class="selectBox" style="padding: 10px;">
						<select id="marketType" name="marketType"
							style="border: none; width: 250px;">
							<option value="${market.marketType }">
								<c:if test="${market.marketType eq 'S' }">팝니다</c:if>
								<c:if test="${market.marketType eq 'B'}">삽니다</c:if>
							</option>
							<c:if test="${market.marketType eq 'S' }">
								<option value="B">삽니다</option>
							</c:if>
							<c:if test="${market.marketType eq 'B'}">
								<option value="S">팝니다</option>
							</c:if>
						</select>
					</div>
					<div class="title">
						<input type="text" size="95" name="marketTitle"
							style="border: none; padding: 10px;"
							value="${market.marketTitle }">

					</div>
					<hr>
					<div id="summary">
						<div id="sImg">
							<div id="headImg">${market.marketFileName}</div>
							<div id="fileArea">
							<input type="file" name="reloadFile"><br>
							 &emsp;&emsp;&emsp;&emsp;&emsp;<span style="font-size: 11px;">${market.marketFileName}</span>
							</div>
						</div>
						<div id="sDetail">
							<div>
								<b>상품명</b> &emsp;<input type="text" size="30" name="marketGoods"
									value="${market.marketGoods }"
									style="border: none; padding: 10px;">
							</div>
							<div>
								<b>판매가격</b> <input type="text" size="30" name="marketPrice"
									value="${market.marketPrice }"
									style="border: none; padding: 10px;"> <b>원</b>
							</div>
						</div>
					</div>


					<%-- 	<div>
						상품명 &emsp;<input type="text" size="35" name="marketGoods"
							value="${market.marketGoods }"
							style="border: none; padding: 10px;">
					</div>
					<div>
						판매가격 <input type="text" size="35" name="marketPrice"
							value="${market.marketPrice }"
							style="border: none; padding: 10px;"> 원
					</div> --%>


					<div class="content">
						<textarea rows="20" cols="98" id="marketContent"
							name="marketContent">
						${market.marketContent }
						</textarea>
					</div>


					<hr>
					<div align="center" style="padding: 15px;">
						<button class="btn" type="submit">수정</button>
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
	</script>
</body>
</html>