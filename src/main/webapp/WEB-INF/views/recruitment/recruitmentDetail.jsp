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
	<h1 align="center">${recruitment.recruitmentNo }</h1>
	<br>
	<br>
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
			<td id="company">${recruitment.recruitmentCompanyName }</td>
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
			<td id="addr1">${recruitment.recruitmentRegion }</td>
		</tr>
		<!-- <tr>
			<td><button id="mapView" onclick="mapView();">지도</button></td>
			<td><div id="map"
					style="width: 500px; height: 500px; margin-top: 10px; display: none;"></div></td>
		</tr> -->
		<tr>		
	
            <td colspan="2">
            <Button onclick="mapView()" >지도</Button>   
            <div id="map" style="width:100%; height: 350px;"></div>
         <!--    <div id="clickLatlng"></div> -->
            </td>
		
		</tr>
		<tr>
			<td>시작일</td>
			<td>${recruitment.recruitmentStartDate }</td>
		</tr>
		<tr>
			<td>마감일</td>
			<td id="endDate">${recruitment.recruitmentEndDate }</td>
		</tr>
		<tr>
			<td colspan="2" align="center"><c:url var="rModify"
					value="/recruitment/modifyView.kh">
					<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
				</c:url> <c:url var="rDelete" value="/recruitment/delete.kh">
					<c:param name="recruitmentNo" value="${recruitment.recruitmentNo }"></c:param>
				</c:url>
				<button onclick="location.href='/recruitment/list.kh'">목록</button> <a
				href="${rModify }">수정하기</a> <a href="${rDelete }">삭제하기</a>
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









	<script>
	
	    function mapView() {
	           var mapContainer = document.getElementById('map'),
	           mapOption = {
	              center: new kakao.maps.LatLng(33.450701, 126.570608),
	              level: 3
	           };
	       
	          var map = new daum.maps.Map(mapContainer, mapOption);
	             var geocoder = new daum.maps.services.Geocoder();
	            
	               geocoder.addressSearch('${recruitment.recruitmentRegion}', function(results, status) {
	               var coords=new kakao.maps.LatLng(results[0].y, results[0].x);
	                 /*   var message = 'lating: new kakao.maps.LatLng('+results[0].y+','; message
	                   += results[0].x + ')';
	                    var resultDiv = document.getElementById('clickLatlng');
	                   resultDiv.innerHTML = message;  */
	                   
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
	       };        
	               
	               
/* var map2;
		
 	var resultY = "";
	var resultX = "";  
			function mapView() {
				var map = document.getElementById('map')
			
				map.style.display = "block";
				
				window.setTimeout(function(){
					map2.relayout();},0);
				
 			 	 mapOption = {
				            center: new daum.maps.LatLng(resultY, resultX), // 지도의 중심좌표 
				            level: 5// 지도의 확대 레벨
				        };  

			};
		
	 	var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	 	    mapOption = {
		        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		        level:6 // 지도의 확대 레벨
		    }; 
		 
			// 지도를 생성합니다    
			var map = new kakao.maps.Map(mapContainer, mapOption); 
			map2 = map;
			// 주소-좌표 변환 객체를 생성합니다
			var geocoder = new kakao.maps.services.Geocoder();
			var addr1 = document.getElementById('addr1').innerHTML;
			// 주소로 좌표를 검색합니다
			geocoder.addressSearch(addr1, function(result, status) {
		
		    // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {
		
		        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				 
	        resultY = result[0].y;
		        resultX = result[0].x;  
		        
		        // 결과값으로 받은 위치를 마커로 표시합니다
		        var marker = new kakao.maps.Marker({
		            map: map,
		            position: coords
		        });
				var company = document.getElementById('company').innerHTML;
		        // 인포윈도우로 장소에 대한 설명을 표시합니다
		        var infowindow = new kakao.maps.InfoWindow({
		            content: '<div style="width:150px;text-align:center;padding:6px 0;">'+company+'</div>'
		        });
		        infowindow.open(map, marker);
		
		        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
		        map2.setCenter(coords);
               
		        
		      
		    } 
		});    
 */
</script>
</body>
</html>