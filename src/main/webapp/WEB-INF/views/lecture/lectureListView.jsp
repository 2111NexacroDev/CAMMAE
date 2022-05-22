<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/contents.css">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/common.css">
<title>수강개설목록</title>
<style>
#L1 {
	width: 5%;
}

#L2 {
	width: 10%;
}

#L3 {
	width: 15%;
}

#L4 {
	width: 13%;
}

.btn {
	margin: 0;
}

#btn1 {
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}

/* 모달창 css */
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
	height: 200px;
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
</style>
</head>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>
	<!-- contents -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideLMenu.jsp"></jsp:include>
		</div>
		<!-- contents-main -->
		<div id="center">
			<div class="c-title" style="height: 80px;">
				<div class="b-title">
					<h2>수강개설목록</h2>
				</div>
				<div class="btn_1">
					<%-- <c:url var="lWrite" value="/lecture/writeView.kh">
							<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
						</c:url>
						<a href="${lWrite }">등록하기</a> --%>
					<button id="btn1" class="btn-modal">기간부여</button>
					<button style="width: 80px" class="btn"
						onclick="location.href='/lecture/writeView.kh'">수강개설</button>
				</div>
			</div>

			<div>
				<label id="searchLabel" for="lectureSelect">학과</label> <select
					id="lecList">
					<option value="전체">전체</option>
					<option value="1">컴퓨터공학과</option>
					<option value="2">전자전기공학과</option>
					<option value="3">산업디자인학과</option>
					<option value="4">중국어학과</option>
					<option value="5">유비쿼터스학과</option>
					<option value="6">국어국문학과</option>
				</select> <input type="button" value="검색" onclick="getList();">
			</div>
			<br>

			<table class="type01" id="lectureTable">
				<thead>
					<tr>
						<th id="L2">강의코드</th>
						<!-- <th id="L3">단과대학</th> -->
						<th id="L4">이수구분</th>
						<th id="L3">개설학과</th>
						<th>강의명</th>
						<th id="L2">교수명</th>
						<th id="L1">학점</th>
						<!-- <th>시작시간</th>
						<th>종료시간</th>
						<th>강의실</th> -->
						<th id="L1">인원</th>
						<th id="L2">학기</th>
						<th id="L1">시작</th>
						<th id="L1">종료</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${lList }" var="lecture">
						<tr class="lecTr">
							<c:url var="lDetail" value="/lecture/Detail.kh">
								<c:param name="lectureNo" value="${lecture.lectureNo}"></c:param>
							</c:url>

							<td>${lecture.lectureNo }</td>
							<%-- <td>${lecture.professorNo }</td> --%>
							<%-- <td>${lecture.universityCollege }</td> --%>
							<td>${lecture.lectureDivision }</td>
							<td>${lecture.lectureDepartment }</td>
							<td><a href="${lDetail}">${lecture.lectureName }</a></td>
							<td>${lecture.professorName }</td>
							<td>${lecture.lectureGrade }</td>
							<td>${lecture.lecturePeople }</td>
							<td>${lecture.lectureTerm }</td>
							<td>${lecture.lectureStart }</td>
							<td>${lecture.lectureEnd }</td>							<%-- <td>${lecture.lectureRoom }</td> --%>
							<%-- <td>${lecture.lectureStartTime }</td>
							<td>${lecture.lectureEndTime }</td> --%>
							<%-- <td><c:url var="lRemove" value="/lecture/remove.kh">
									<c:param name="lectureNo" value="${lecture.lectureNo }"></c:param>
								</c:url> <a href="${lRemove }">삭제</a></td> --%>
						</tr>
					</c:forEach>
				</tbody>
			</table>

		</div>
	</div>


	<!-- 모달 div 영역 -->
	<form action="/lecture/lecturePeriod.kh" method="post">
		<div id="modal" class="modal-overlay">
			<div class="modal-window">
				<div class="close-area">
					<b>X</b>
				</div>
				<div class="content">
					<p>
						<b>수강신청 기간설정</b>
					</p>
					<table class="type04">
						<tbody>
						 	 <tr>
								<th id="r1" scope="row">시작일</th>
								<td><input type="dateTime-local" size="20"
									name="lectureStart" value=""></td>
							<tr>
							<tr>
								<th id="r1" scope="row">종료일</th>
								<td><input type="dateTime-local" size="20"
									name="lectureEnd" value=""></td>
							</tr> 

						</tbody>
					</table>
					<br>
					<button type="submit" id="completion">완료</button>
				</div>
			</div>
		</div>
	</form>
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
	  /*  let today = new Date();
	   let year = today.getFullYear(); // 년도
	   let month = today.getMonth() + 1;  // 월
	   let date = today.getDate();  // 날짜
	   let day = today.getDay();  // 요일
	   var endDate = $("#endDate").html();
	   let endDate2 =  new Date(endDate);
	        btnModal[0].addEventListener("click", function(event){
				var recruitmentNo = $('#recruitmentNo').val();
	        	
	        	$.ajax({
					url : "/countSupport",
					type : 'POST',
					traditional : true,
					data : {
						recruitmentNo : recruitmentNo
					},
					success : function(jdata){
						if(jdata>0) {
							alert("이미 접수되었습니다.")
							return false;
						} 
						if(endDate2 > today){
							   modalOn();
						   }else{
							   alert("마감되었습니다.");
						   }
					}
				});
			  
	        });  */
	    
	    // 모달에서 완료 버튼 클릭시
	       var findPwd = document.querySelector("#completion");
	       findPwd.addEventListener("click", function() {
	    	   
	    	   alert("수강신청기간이 설정 되었습니다.");
	    	   modalOff();
	    	   
	       });
	    
	}
</script>




	<script>
		function getList() {
			var lectureDepartment = $('#lecList').val();
			$.ajax({
				url : "/lecture/list2.kh",
				type : "get",
				data : {
					"lecturedep" : lectureDepartment
				},
				success : function(data) {
					$(".lecTr").remove();
					var $tableBody = $("#lectureTable");
					var $tr;
					var $lecNo;
					var $lecDivision;
					var $lecDep
					var $lecName;
					var $lecProName;
					var $lecGrade;
					/* var $lecRoom; */
					var $lecPeople;
					var $lecTerm;
					var $tr;
					if (data.length > 0) {
						for ( var i in data) {
							$tr = $("<tr class='lecTr'>");
							$lecNo = $("<td width='100'>").text(
									data[i].lectureNo);
							$lecDivision = $("<td width='100'>").text(
									data[i].lectureDivision);
							$lecDep = $("<td width='100'>").text(
									data[i].lectureDepartment);
							$lecName = $("<td width='100'>").text(
									data[i].lectureName);
							$lecProName = $("<td width='100'>").text(
									data[i].professorName);
							$lecGrade = $("<td width='100'>").text(
									data[i].lectureGrade);
							/* $lecRoom = $("<td width='100'>").text(
									data[i].lectureRoom); */
							$lecPeople = $("<td width='100'>").text(
									data[i].lecturePeople);
							$lecPeople = $("<td width='100'>").text(
									data[i].lectureTerm);
							/* $lecTime = $("<td width='100'>").text(
									data[i].lectureTime); */
							$tr.append($lecNo);
							$tr.append($lecDivision);
							$tr.append($lecDep);
							/* $tr.append($lecUniCol); */
							$tr.append($lecName);
							$tr.append($lecProName);
							$tr.append($lecGrade);
							/* $tr.append($lecRoom); */
							$tr.append($lecPeople);
							$tr.append($lecTerm);
							/* $tr.append($lecTime); */
							$tableBody.append($tr);
						}
					}
				},
				error : function() {
					alert("ajax 통신 실패! 관리자에게 문의하세요.");
				}
			});
		}
	</script>
	</ body>
</html>