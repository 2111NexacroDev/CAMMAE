<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
<script
	src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c27b638af6c98ea42aa55b7709a8c29c&libraries=services"></script>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/contents.css">
<title>채용공고 상세 조회</title>
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

/* 조회부분 */
#title_1 {
	height: 50px;
	width: 800px;
	margin-top: 50px;
	border-top: 2px solid #ccc;
	border-bottom: 2px solid #ccc;
}

#title_2 {
	height: inherit;
	width: 70%;
	float: left;
	line-height: 50px;
}

#title_3 {
	height: inherit;
	width: 30%;
	float: left;
	line-height: 50px;
}

.companyName {
	margin-left: 280px;
	width: 250px;
	padding: 10px;
	font-weight: bold;
}

.main_content {
	width: 800px;
	/*    height: 360px; */
	/*    border-bottom: 2px solid #ccc; */
	margin-bottom: 40px;
}

.main_content1 {
	/*       height:50%; */
	width: 50%;
	float: left;
	margin-bottom: 30px;
}

.main_content2 {
	/*       height:50%; */
	width: 50%;
	float: left;
	margin-bottom: 30px;
}

#span_1 {
	color: rgb(158, 158, 158);
	font-size: 14px;
}

input::placeholder {
	color: rgb(52, 152, 219);
	font-weight: bold;
}

#span_2 {
	color: rgb(52, 152, 219);
	font-weight: bold;
}

span {
	font-weight: bold;
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

#map_btn {
	color: rgb(243, 156, 18)
}

/* 지도 > */
#btn {
	border: none;
	background-color: transparent;
	cursor: pointer;
	color: rgb(190, 190, 190);
	padding: 5px;
}
</style>


</head>
<body>
	<!-- header  -->
	<jsp:include page="../common/menuBar.jsp"></jsp:include>

	<!-- contents영역 -->
	<div id="content">
		<div id="left">
			<jsp:include page="../common/sideRMenu.jsp"></jsp:include>
		</div>

		<div id="center">
			<div class="c-title">
				<div class="b-title">
					<h2>채용공고</h2>
				</div>
				<div class="btn_1">
					<c:url var="rModify" value="/recruitment/modifyView.kh">
						<c:param name="recruitmentNo"
							value="${recruitment.recruitmentNo }"></c:param>
					</c:url>
					<c:url var="rDelete" value="/recruitment/delete.kh">
						<c:param name="recruitmentNo"
							value="${recruitment.recruitmentNo }"></c:param>
					</c:url>
					<button class="btn" onclick="location.href='${rModify}'">수정</button>
					<button class="btn" onclick="location.href='${rDelete}'">삭제</button>
					<button style="width: 50px" class="btn"
						onclick="location.href='/recruitment/list.kh'">목록</button>
				</div>
			</div>
			<div id="title_1">
				<div id="title_2">
					&nbsp;&nbsp;&nbsp;<span>${recruitment.recruitmentTitle }</span>
				</div>
				<div id="title_3">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>마감일&nbsp;:&nbsp;</span>
					<span id="endDate"> ${recruitment.recruitmentEndDate }</span>
				</div>
			</div>
			<br> <input class="companyName" type="text"
				style="text-align: center"
				value="${recruitment.recruitmentCompanyName }"> <br> <br>
			<br> <br>
			<div class="main_content">
				<div class="main_content1">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>지원자격</span> <br> <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">경력</span>&nbsp;&nbsp;&nbsp;
					<span id="span_2">${recruitment.recruitmentCareer }</span> <br> <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">학력</span>&nbsp;&nbsp;&nbsp;
					<span id="span_2">${recruitment.recruitmentEducation }</span>
					<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">우대</span>&nbsp;&nbsp;&nbsp;
					<span id="span_2">${recruitment.recruitmentPrefer }</span>
				</div>
				<div class="main_content2">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>지원자격</span> <br> <br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">고용형태</span>&nbsp;&nbsp;&nbsp;
					<span id="span_2">${recruitment.recruitmentType }</span>
					<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">급여</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span id="span_2">${recruitment.recruitmentSalary }</span>
					<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">지역</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span id="span_2">${recruitment.recruitmentRegion }</span>&nbsp;
					<br> &nbsp;&nbsp;&nbsp;
					<Button id="btn" onclick="mapView()">
						지도<span id="map_btn">＞</span>
					</Button>
				</div>
			</div>
			<br>
			<div id="map" style="width: 800px; height: 300px; margin-top: 10px; display: none;"></div>
			<br>
			<div>
				<hr style="width: 800px; color: #ccc;">
			</div>

			<br>

			<div align="center">
				<button id="btn1" class="btn-modal">지원하기</button>
			</div>






		</div>
	</div>

	<form action="/support/register.kh" method="post"
		enctype="multipart/form-data">
		<div id="modal" class="modal-overlay">
			<div class="modal-window">
				<div class="close-area"><b>X</b></div>
				<div class="content">
					<p><b>이력서 지원</b></p>
					<table class="type04">
						<tbody>
							<tr>
								<th id="r1" scope="row">이력서</th>
								<td><input type="file" multiple="multiple" size="50" name="uploadFile"></td>
							<tr>
							<tr>
								<th id="r1" scope="row">포트폴리오</th>
								<td><input type="file" multiple="multiple" size="50" name="uploadFile1"></td>
							</tr>
						
						</tbody>
					</table>
					<input type="hidden" value="${recruitment.recruitmentNo }" name="recruitmentNo"> 
					<input type="hidden" value="${recruitment.recruitmentTitle }" name="recruitmentTitle"><br>
					<button type="submit" id="completion">완료</button>
				</div>
			</div>
		</div>
	</form>

	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>







	<script>
	    function mapView() {
	    	   if($("#map").css("display") == "none") {
		    	   $("#map").show();
	    	   }else {
	    		   $("#map").hide();
	    	   }
	           var mapContainer = document.getElementById('map'),
	           mapOption = {
	              center: new kakao.maps.LatLng(33.450701, 126.570608),
	              level: 3
	           };
	       
	         	 
	               

 				if($("#map").html()== ""){
 					var map = new daum.maps.Map(mapContainer, mapOption);
 		             var geocoder = new daum.maps.services.Geocoder();
 		            
 		               geocoder.addressSearch('${recruitment.recruitmentRegion}', function(results, status) {
 		               var coords=new kakao.maps.LatLng(results[0].y, results[0].x);
 		              
 		                   
 		                   var marker = new kakao.maps.Marker({
 		                      map:map,
 		                      position: coords
 		                   });
 		                   var infowindow = new kakao.maps.InfoWindow({
 		                      content :'<div id="makerName" style="width: 150px; text-align:center;padding: 6px 0;">${recruitment.recruitmentCompanyName }</div>'
 		                   });
 		                   infowindow.open(map, marker);
 		                   map.setCenter(coords);
 		                   
 		               });
 					
 				}else{
 					$("#map").html("");
 					$('#map').css('background-image', 'url("")');
 				}
	       };        
</script>
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
	   let today = new Date();
	   let year = today.getFullYear(); // 년도
	   let month = today.getMonth() + 1;  // 월
	   let date = today.getDate();  // 날짜
	   let day = today.getDay();  // 요일
	   var endDate = $("#endDate").html();
	   let endDate2 =  new Date(endDate);
	        btnModal[0].addEventListener("click", function(event){
	           if(endDate2 > today){
				   modalOn();
			   }else{
				   alert("마감되었습니다.");
			   }
			  
	        });
	    
	    // 모달에서 완료 버튼 클릭시
	       var findPwd = document.querySelector("#completion");
	       findPwd.addEventListener("click", function() {
	    	   modalOff();
	       });
	    
	}
</script>
</body>
</html>