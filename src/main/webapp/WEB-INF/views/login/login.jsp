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
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(1.5px);
            -webkit-backdrop-filter: blur(1.5px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
/*         modal창 (파란색 배경) */
        #modal .modal-window {
            background: rgba( 69, 139, 197, 0.70 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            -webkit-backdrop-filter: blur( 13.5px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            width: 400px;
            height: 400px;
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
            text-shadow: 1px 1px 2px gray;
            color: white;
        }
        
        #modal .content {
            margin-top: 20px;
            padding: 0px 10px;
            text-shadow: 1px 1px 2px gray;
            color: white;
            text-align: center;
        }
        
        #modal #reportContents {
        	width: 350px;
            height: 200px;
        }
</style>
<script>
window.onload = function(){
	const modal = document.getElementById("modal")
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
    for (var i=0; i<btnModal.length; i++) {
        btnModal[i].addEventListener("click", function(event){
        	modalOn();
        });
    }
    
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
    
}
</script>
</head>
<body>
	<form action="/login/login.kh" method="post">
        <table>
        	<tr>
        		<td>
        		<input type="radio" name="login_type" value="student" checked="checked">학생
				<input type="radio" name="login_type" value="professor">교수
				<input type="radio" name="login_type" value="manager">관리자
				</td>
        	</tr>
            <tr>
                <td><input type="text" name="user-id"></td>
            </tr>
            <tr>
                <td><input type="password" name="user-pwd"></td>
            </tr>
            <tr>
                <td><input type="submit" value="로그인"></td>
            </tr>
            <tr>
                <td><input type="button" value="비밀번호 찾기" class="btn-modal"></td>
            </tr>
        </table>
   </form>
   
   <!-- 모달 영역 -->
		<div id="modal" class="modal-overlay">
	        <div class="modal-window">
	            <div class="close-area">X</div>
	                <div class="content">
	                	<p id="check" style="display: none; color: red;">정확한 정보를 입력해주세요</p>
	                	<input type="radio" name="type" value="student" checked="checked">학생
						<input type="radio" name="type" value="professor">교수
						<input type="radio" name="type" value="manager">관리자
						
	                    <p>학번을 입력해주세요</p>
	                    <input type="text" id="user-no">
	                    <p>이름을 입력해주세요</p>
	                    <input type="text" id="user-name">
	                    <p>휴대폰 번호를 입력해주세요</p>
	                    <input type="text" id="user-phone">
	                    <br><br><br>
	                    <button id="findPwd">OK</button>
	                </div>
	        </div>
	    </div>
</body>
</html>