<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
	.contents_1{
		margin-top: 20px;
		/* height: inherit; */
		width : 220px;
		float : left;
		/* border: solid 1px gray; */
	}
		.contents_1bar{
			height: 275px;
			width : 220px;
			/* border-right: solid 1px gray;
			border-left: solid 1px gray; */
			/* margin-top : 150px; */
		}
			.contents_1bar_1{
				height: 70px;
				width : 220px;
				background-color : rgb(30, 57, 50); 
			}
				.contents_1bar_1_1{
					height: 70px;
					width : 60%;
					float : left;
					font-size : 18px;
					line-height: 100px;
				}
				.contents_1bar_1_2{
					height: 50px;
					width : 40%;
					float : left;
				/* 	margin-left : 10px; */
				}
				/* 활성화 */
			.contents_1bar_2.active {
				height: 40px;
				width: 220px;
				background-color : rgb(231, 232, 226);
				border-bottom: solid 1px gray;
				font-size : 16px;
				font-weight:bold;
				line-height: 40px;
			}
			.contents_1bar_2.active a {
				color: rgb(16, 65, 44);
			}
			/* 노 활성화 */
			.contents_1bar_2{
				height: 40px;
				width: 220px;
				background-color : rgb(241, 241, 241);
				border-bottom: solid 1px gray;
				font-size : 15px;
				line-height: 40px;
			}
			.contents_1bar_2 a{
				color: black;
			}
</style>
<title>Insert title here</title>
</head>
<script src="//code.jquery.com/jquery-latest.min.js"></script>
<script>
</script>
<body>
<div class="contents_1">
			<div class="contents_1bar">
				<div class="contents_1bar_1">
					<div class="contents_1bar_1_1"><a href="#" style="color:white">&nbsp;&nbsp;수강신청</a></div>
					<div class="contents_1bar_1_2"><img src="../../../resources/img/logo2.png" style="width:90px; height:85px;  opacity: 0.4; filter: alpha(opacity=40);"></div>
				</div>
				<div class="contents_1bar_2 ${menu eq 'cart' ? 'active' : '' }"> <a href="/cart/preCartListView.kh">&nbsp;&nbsp;&nbsp;예비수강신청</a></div>
				<div class="contents_1bar_2 ${menu eq 'cartlist' ? 'active' : '' }"> <a href="/cart/myCartList.kh">&nbsp;&nbsp;&nbsp;예비수강신청 내역</a></div>
				<div class="contents_1bar_2 ${menu eq 'enroll' ? 'active' : '' }"> <a href="/cart/enrollRegister.kh">&nbsp;&nbsp;&nbsp;수강신청</a></div>
				<div class="contents_1bar_2 ${menu eq 'enrolllist' ? 'active' : '' }"> <a href="/cart/enrollList.kh">&nbsp;&nbsp;&nbsp;수강신청 내역</a></div>
			
			</div>
		</div>
</body>
</html>