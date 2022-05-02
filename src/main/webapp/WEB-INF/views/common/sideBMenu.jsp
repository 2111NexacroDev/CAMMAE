<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
	.contents_1{
		height: inherit;
		width : 100%;
		float : left;
	}
		.contents_1bar{
			height: 400px;
			width : 100%;
			/* margin-top : 150px; */
		}
			.contents_1bar_1{
				height: 100px;
				width : 100%;
				background-color : rgb(30, 57, 50); 
			}
				.contents_1bar_1_1{
					height: 100px;
					width : 60%;
					float : left;
					font-size : 20px;
					line-height: 130px;
				}
				.contents_1bar_1_2{
					height: 100px;
					width : 40%;
					float : left;
				}
				/* 활성화 */
			.contents_1bar_2.active {
				height: 60px;
				width: 100%;
				background-color : rgb(231, 232, 226);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
			}
			.contents_1bar_2.active a {
				color: rgb(16, 65, 44);
			}
			/* 노 활성화 */
			.contents_1bar_2{
				height: 60px;
				width: 100%;
				background-color : rgb(241, 241, 241);
				border-bottom: solid 1px gray;
				font-size : 20px;
				line-height: 60px;
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
					<div class="contents_1bar_1_1"><a href="#" style="color:white">&nbsp;&nbsp;게시판</a></div>
					<div class="contents_1bar_1_2"><img src="../../../resources/img/logo2.png" style="width:120px; height:110px;  opacity: 0.4; filter: alpha(opacity=40);"></div>
				</div>
				<div class="contents_1bar_2 ${menu eq 'board' ? 'active' : '' }"> <a href="/board/list.kh">&nbsp;&nbsp;&nbsp;학과게시판</a></div>
				<div class="contents_1bar_2 ${menu eq 'recruitment' ? 'active' : '' }"><a href="/question/list">&nbsp;&nbsp;&nbsp;질의응답게시판</a></div>
				<div class="contents_1bar_2 ${menu eq 'recruitment' ? 'active' : '' }"><a href="/market/list">&nbsp;&nbsp;&nbsp;중고거래게시판</a></div>
			
			</div>
		</div>
</body>
</html>