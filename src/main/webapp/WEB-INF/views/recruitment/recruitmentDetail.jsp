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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(1.5px);
	-webkit-backdrop-filter: blur(1.5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	z-index: 1000;
}
/*         modal창 (파란색 배경) */
#modal .modal-window {
	background: rgba(69, 139, 197, 0.70);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(13.5px);
	-webkit-backdrop-filter: blur(13.5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
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
				<div class="b-title"><h2>채용공고</h2></div>
				<div class="btn_1"><button style="width: 50px" class="btn"onclick="location.href='/recruitment/list.kh'">목록</button></div>
			</div>
					제목
					${recruitment.recruitmentTitle }
				
					작성자
					${recruitment.recruitmentWriter }
				
				
					기업명
					${recruitment.recruitmentCompanyName }
				
					경력
					${recruitment.recruitmentCareer }
				
			
					학력
					${recruitment.recruitmentEducation }
				
				
					우대
					${recruitment.recruitmentPrefer }
				
				
					교용형태
					${recruitment.recruitmentType }
				
				
					급여
					${recruitment.recruitmentSalary }
				
				
					지역
					 	${recruitment.recruitmentRegion }
				
				
					
						<Button onclick="mapView()">지도</Button>
						<div id="map" style="width: 100%; height: 350px;"></div> <!--    <div id="clickLatlng"></div> -->
					
				
				<table>
				<tr>
					<td>마감일</td>
					<td id="endDate">${recruitment.recruitmentEndDate }</td>
				</tr>
				<tr>
					<td colspan="2" align="center"><c:url var="rModify"
							value="/recruitment/modifyView.kh">
							<c:param name="recruitmentNo"
								value="${recruitment.recruitmentNo }"></c:param>
						</c:url> <c:url var="rDelete" value="/recruitment/delete.kh">
							<c:param name="recruitmentNo"
								value="${recruitment.recruitmentNo }"></c:param>
						</c:url>
						<button onclick="location.href='/recruitment/list.kh'">목록</button>
						<a href="${rModify }">수정하기</a> <a href="${rDelete }">삭제하기</a>
						<button class="btn-modal">지원하기</button></td>
				</tr>
			</table>
			<form action="/support/register.kh" method="post"
				enctype="multipart/form-data">
				<div id="modal" class="modal-overlay">
					<div class="modal-window">
						<div class="close-area">X</div>
						<div class="content">
							<p>이력서 지원</p>
							이력서<input type="file" multiple="multiple" size="50"
								name="uploadFile"><br> 포트폴리오<input type="file"
								multiple="multiple" size="50" name="uploadFile1"><br>
							<input type="hidden" value="${recruitment.recruitmentNo }"
								name="recruitmentNo"> <input type="hidden"
								value="${recruitment.recruitmentTitle }" name="recruitmentTitle">
							<button type="submit" id="completion">완료</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>








	<script>
	
	    function mapView() {
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
 		                      content :'<div style="width: 300px; text-align:center;padding: 6px 0;">${recruitment.recruitmentCompanyName }</div>'
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
</body>
</html>