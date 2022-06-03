<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
#modal.modal-overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	display: none;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	/* background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 gray; */
	/* backdrop-filter: blur(1.5px);
	-webkit-backdrop-filter: blur(1.5px); */
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	z-index: 1000;
}
/*         modal창 (파란색 배경) */
#modal .modal-window {
	background: white;
	box-shadow: 0 8px 32px 0 gray;
	backdrop-filter: blur(13.5px);
	webkit-backdrop-filter: blur(13.5px);
	border-radius: 10px;
	border: 20px solid #10412C;
	width: 400px;
	height: 280px;
	position: relative;
	top: 50px;
	padding: 10px;
}

#modal .title {
	padding-left: 10px;
	display: inline;
	text-shadow: 1px 1px 2px gray;
	color: white;
}

#modal .title h2 {
	display: inline;
}

#modal .close-area {
	display: inline;
	float: right;
	padding-right: 10px;
	cursor: pointer;
	color: black;
}

#modal .content {
	margin-top: 20px;
	padding: 0px 10px;
	color: black;
	text-align: center;
}

#modal #reportContents {
	width: 350px;
	height: 200px;
}

table.type04 {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-left: 1px solid #ccc;
  /* margin: 20px 10px; */
}

table.type04 tbody th {
  width: 150px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  background: rgb(231, 232, 226);
}
table.type04 td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
#r1{
	width: 30%;
}

label {
	text-align: center;
	padding: 0;
	margin : 0;
	height: 100%;
	cursor: pointer;
	float: left;
	font-size: 13px;
	font-weight: bold;
	line-height: 30px;
	/* border-right: 1px solid #ccc; */
	color: rgb(30, 57, 50);
	background-color: rgba(16, 65, 44, 0.5);
	
}
#radio{
	
	text-align: center;
	padding: 0;
	margin : 0;
	height: 100%;
	
	float: left;
	font-size: 13px;
	font-weight: bold;
	line-height: 30px;
	/* border-right: 1px solid #ccc; */
	color: rgb(87, 87, 87);
	background-color: rgba(16, 65, 44, 0.2);
}
input[name="login_type"] {
	display: none;
	
}
h1 {
	margin-top: 0px; 
	font-size : 2em;
	font-weight: bold;
	margin-left: 720px;
	font-size: 2em;
}
h1 a {
	margin-rigth: 200px;
	text-align: left;
	/* display: block; */
	/* margin-top: 20px; */
	width: 220px;
	text-decoration: none;
	position: absolute;
	color: rgb(0, 74, 38);
}
#lnb_subtitle {
	display: flex;
	font-size: 14px;
	margin-top: -40px;
	color: rgb(0, 74, 38);
	position: absolute;
	margin-left: 95px;
}
#main_1 {
	magin: 0px;
	padding: 0px;
	width: 100%;
	height: 773px;
	background-color: rgb(245,245,245);
}
#main_2 {
	magin: 0px;
	padding: 0px;
	width: 100%;
	height: 50%;
	background-color: rgb(245,245,245);
/* 	background-image: url("/resources/img/mainimg.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%; */
}
.form_1{
	top: 130px;
	position: relative;
}
form{
  /*   background-color: rgba(169, 191, 159, 0.72); */
  		background-color: rgb(245,245,245);
}
html, body, div {
	margin: 0;
	padding: 0;
}
.login_form {
	
	/* border: 1px solid black; */
	height: 100px;
	width: 400px;
	position: relative;
	bottom: 230px;
	left: 670px;
	background-color: rgba(240,240,240,0.7);
	border-top-left-radius: 25px; 
	border-top-right-radius: 25px;
	border-bottom-left-radius: 25px; 
	border-bottom-right-radius: 25px;
}
.login_form1 {
	width: 400px;
	height: 30px;
	position:relative;
	left: 670px;
	bottom: 200px;
}
.login_form1_1 {
	width: 33%;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}
.login_form1_2 {
	width: 33.8%;
}
.login_form1_3 {
	width: 33%;	
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}
.login_form2 {
	width: 100%;
	height: 80%;
	margin-top: 50px;
	left: 100px;
	position: relative;
}
.type00{
	margin-top: 50px;
}
.logoTitle {
	top: 150px;
	position: relative;
}
#info{
	position:relative;
	top: 10px;
	right: 15px;
	width: 200px;
	height: 25px;
	text-align: center;
	border: 1px solid #10412C;
 	border-radius: 12.5px;
}
#login_btn{
	width: 400px;
	height: 35px;
	top:50px;
	position: relative;
	border: 0px;
	background-color: #10412C;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border-bottom-left-radius: 17.5px;
	border-top-left-radius: 17.5px;
	border-bottom-right-radius: 17.5px;
	border-top-right-radius: 17.5px;
}

#pass_btn{
	width: 200px;
	height: 35px;
	top:70px;
	position: relative;
	left:103px;
	background-color: rgb(245,245,245);
	border: 0px;
	outline: none;
	cursor: pointer;
	color: #727272;
	font-weight: 600;
}

#error{
	margin:0;
	padding:0;
	position: absolute;
  	top: 106px;
	font-size: 12px;
	color: red;
	left: 120px;
	text-align: center;
}
footer div {
	font-size: 12px;
	text-align: center;
}

#footer_tit {
	position: relative;
	width: 500px;
	right: 47px;
}
#footer_bottom {
	position: relative;
	top: 5px;
}
#fot {
	color: #005eb5;
}
#findPwd {
	background-color: #10412C;
	color: white;
	cursor: pointer;
	font-weight: bold;
	border: 0px;
	width: 50px;
	height: 20px;
	font-size: 12px;
}
input:focus {outline: 1px solid #10412C;}

input[type='radio'] {
    -webkit-appearance:none;
    width:14px;
    height:14px;
    border:1px solid darkgray;
    border-radius:50%;
    outline:none;
  }
  input[type='radio']:before {
    content:'';
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;  
    border-radius:50%;  
  }
  input[type='radio']:checked:before {
  	background:#008675;
  }
  #img_id {
  	position: relative;
  	top: 15px;
  	right: 20px;
  }
  #img_pw {
  	position: relative;
  	top: 15px;
  	right: 20px;
  }
</style>
<script>
window.onload = function(){
	
	const modal = document.getElementById("modal");
	function modalOn() {
	    modal.style.display = "flex"
	}
	function isModalOn() {
	    return modal.style.display === "flex"
	}
	function modalOff() {
	    modal.style.display = "none"
	}
	
	const closeBtn = modal.querySelector(".close-area")
	closeBtn.addEventListener("click", e => {
	    modalOff()
	})
	modal.addEventListener("click", e => {
	    const evTarget = e.target
	    if(evTarget.classList.contains("modal-overlay")) {
	        modalOff()
	    }
	})
	window.addEventListener("keyup", e => {
	    if(isModalOn() && e.key === "Escape") {
	        modalOff()
	    }
	})
    // 모달 온, 비밀번호 찾기 창 뛰우기
	var btnModal = document.querySelectorAll(".btn-modal");
        btnModal[0].addEventListener("click", function(event){
        	modalOn();
        });
    
    // 모달에서 찾기 버튼 클릭시
	    var findPwd = document.querySelector("#findPwd");
	    findPwd.addEventListener("click", function() {
	    	if($("#user-no").val() != "") {
	    		var userNo = $("#user-no").val();
	    		var userName = $("#user-name").val();
	    		var userPhone = $("#user-phone").val();
	    		var type = $('input:radio[name="type"]:checked').val();
	    		var check = document.querySelector("#check");
	    		$.ajax({
	    			url : "/login/findPwd.kh",
					type : "post",
					data : {"userNo" : userNo, "userName" : userName, "userPhone" : userPhone, "type" : type},
					success : function(data) {
						if(data!="") {
							alert(data +"로 임시 비밀번호가 전송 되었습니다.");
							modalOff();
						} else {
							check.style.display = "block";
						}
					},
					error : function() {
						console.log(data);
					}
	    		});
	    	}
	    });
	    
    	var label = document.querySelectorAll("label");
	    $("input[name='login_type']:radio").change(function () {
	        //라디오 버튼 값을 가져온다.
	        var login_type = this.value;
	              
	       	if(login_type == "student"){
				label[0].setAttribute("id", "");
				label[1].setAttribute("id", "radio");
				label[2].setAttribute("id", "radio");
	       	}else if(login_type == "professor"){
	       		label[0].setAttribute("id", "radio");
				label[1].setAttribute("id", "");
				label[2].setAttribute("id", "radio");
			} else {
				label[0].setAttribute("id", "radio");
				label[1].setAttribute("id", "radio");
				label[2].setAttribute("id", "");
			}
	});

	var findPwd = document.querySelector("#login_btn");
	    findPwd.addEventListener("click", function() {
	    	var error =  document.querySelector("#error");
			var id = document.querySelector("input[name='user-id']");
			var pw = document.querySelector("input[name='user-pwd']");
			var login = $('#login');
			if(id.value=="") {
				id.focus();
				error.innerHTML = "";
				error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;아이디를 입력해주세요";
			} else if(pw.value=="") {
				pw.focus();
				error.innerHTML = "";
				error.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;비밀번호를 입력해주세요";
			} else {
				login.submit(); 
			}
			
	});
	    
}
</script>
</head>
<body>
	<div class="lnb" id="main_1">
		<div id="main_2">
			<div class="logoTitle">
				<h1>
					<img src="../resources/img/logo.png" style="width: 80px; height: 80px;">
					<a href="../main.kh">
						<span id="lnb_title">대일대학교</span>
					</a>
						<span id="lnb_subtitle">DAILE UNIVERSITY</span>
				</h1>
			</div>
		</div>
		<div class="form_1">
		<form id="login" action="/login/login.kh" method="post">

				<div class="login_form1">
					<label id="" class="login_form1_1">
						<input type="radio" name="login_type" value="student" checked="checked">학생 
					</label>
					<label id="radio" class="login_form1_2">
						<input type="radio" name="login_type" value="professor">교수 
					</label>
					<label id="radio" class="login_form1_3">
						<input type="radio" name="login_type" value="manager">관리자
					</label>
				</div>

			<div class="login_form">
				<div class="login_form2" >
						<img src="../resources/img/login_id.gif" id="img_id">
						<input type="number" name="user-id" id="info" placeholder="아이디를 입력해주세요.">
						<br><br>
						<img src="../resources/img/login_pw.gif" id="img_pw">
						<input type="password" name="user-pwd" id="info" placeholder="비밀번호를 입력해주세요.">
						<br>
				</div>
						<span id="error">
							${msg }
						</span>
						<button id="login_btn" type="button">로그인</button>
						<input id="pass_btn" type="button" value="비밀번호 찾기" class="btn-modal">
						<br>
						<br>
						<hr>
						<br>
						<br>
						<footer>
							<div id="footer_tit">
								서울특별시 중구 남대문로 120 대일빌딩 2F, 3F (T:<span id="fot">1544-9970</span>) / F: 02-722-0858)
							</div>
							<div id="footer_bottom">
								Copyright © 1998-2022 <span id="fot">DI University</span> AllRight Reserved
							</div>
						</footer>
			</div>
		</form>
		</div>
	</div>
	
	<!-- 모달 영역 -->
	<div id="modal" class="modal-overlay">
		<div class="modal-window">
			<div class="close-area">X</div>
			<div class="content">
				<p id="check" style="display: none; color: red;">정확한 정보를 입력해주세요</p>
				<input type="radio" name="type" value="student" checked="checked">학생
				<input type="radio" name="type" value="professor">교수 <input
					type="radio" name="type" value="manager">관리자
				<br><br>
				<table class="type04">
					<tbody>
						<tr>
							<th id="r1" scope="row">학번</th>
							<td><input type="number" id="user-no"></td>
						<tr>
						<tr>
							<th id="r1" scope="row">이름</th>
							<td><input type="text" id="user-name"></td>
						</tr>
						<tr>
							<th id="r1" scope="row">연락처</th>
							<td><input type="text" id="user-phone"></td>
						</tr>
					
					</tbody>
				</table>
				<br>
				<button id="findPwd">찾기</button>
			</div>
		</div>
	</div>
</body>
</html>