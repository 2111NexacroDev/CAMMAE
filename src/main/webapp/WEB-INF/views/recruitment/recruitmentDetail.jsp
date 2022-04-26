<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>채용공고 상세 조회</title>
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
	   // 모달 온, 이력서 지원하기 뛰우기
	   var btnModal = document.querySelectorAll(".btn-modal");
	        btnModal[0].addEventListener("click", function(event){
	           modalOn();
	        });
	    
	    // 모달에서 완료 버튼 클릭시
	       var findPwd = document.querySelector("#completion");
	       findPwd.addEventListener("click", function() {
	    	   modalOff();
	       });
	    
	}
</script>
</head>
<body>
	<h1 align="center">${recruitment.recruitmentNo }</h1>
	<br><br>
		<table align="center" width="500" border="1">
			<tr>
				<td>번호</td>
				<td>${recruitment.recruitmentNo }</td>		
			</tr>
			<tr>
				<td>제목</td>
				<td>${recruitment.recruitmentTitle }</td>		
			</tr>
			<tr>
				<td>작성자</td>
				<td>${recruitment.recruitmentWriter }</td>		
			</tr>
			<tr>
				<td>기업명</td>
				<td>${recruitment.recruitmentCompanyName }</td>		
			</tr>
			<tr>
				<td>경력</td>
				<td>${recruitment.recruitmentCareer }</td>		
			</tr>
			<tr>
				<td>학력</td>
				<td>${recruitment.recruitmentEducation }</td>		
			</tr>
			<tr>
				<td>우대</td>
				<td>${recruitment.recruitmentPrefer }</td>		
			</tr>
			<tr>
				<td>교용형태</td>
				<td>${recruitment.recruitmentType }</td>		
			</tr>
			<tr>
				<td>급여</td>
				<td>${recruitment.recruitmentSalary }</td>		
			</tr>
			<tr>
				<td>지역</td>
				<td>${recruitment.recruitmentRegion }</td>		
			</tr>
			<tr>
				<td>시작일</td>
				<td>${recruitment.recruitmentStartDate }</td>		
			</tr>
			<tr>
				<td>마감일</td>
				<td>${recruitment.recruitmentEndDate }</td>		
			</tr>
			<tr>
				<td colspan="2" align="center">
					<c:url var="rModify" value="/recruitment/modifyView.kh">
						<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
					</c:url>
					<c:url var="rDelete" value="/recruitment/delete.kh">
						<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
					</c:url>
					<button onclick="location.href='/recruitment/list.kh'">목록</button>
					<a href="${rModify }">수정하기</a>
					<a href="${rDelete }">삭제하기</a>
					<button class="btn-modal">지원하기</button>
				</td>
			</tr>
				
		</table>
		<form action="/support/register.kh" method="post" enctype="multipart/form-data">
			<div id="modal" class="modal-overlay">
				        <div class="modal-window">
				            <div class="close-area">X</div>
				                <div class="content">
				                    <p>이력서 지원</p>
				                    이력서<input  type="file" multiple="multiple" size="50" name="uploadFile"><br>
				                    포트폴리오<input  type="file" multiple="multiple" size="50" name="uploadFile1"><br>
				                    <input type="hidden" value="${recruitment.recruitmentNo }" name="recruitmentNo">
				                    <input type="hidden" value="${recruitment.recruitmentTitle }" name="recruitmentTitle">
				                    <button type="submit" id="completion">완료</button>
				                </div>
				        </div>
		    		</div>
		</form>
</body>
</html>