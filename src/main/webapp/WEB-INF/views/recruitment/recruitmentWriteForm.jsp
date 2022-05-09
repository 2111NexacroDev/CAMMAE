<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<style>
input::placeholder {
  color: rgb(52, 152, 219);
  font-weight: bold;
}
input{
/*   color: rgb(52, 152, 219); */
  font-weight: bold;
}
span{
	font-weight: bold;
}

table.type02 {
  width: 800px;
  border-collapse: separate;
  border-spacing: 1px;
  line-height: 1.5;
  border-top: 1px solid #ccc;
}
table.type02 th {
  width: 20px;
  line-height:30px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: rgb(231, 232, 226);
}
table.type02 td {
  width: 350px;
  padding: 5px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
 }


.companyName{
	margin-left: 280px;
	width: 250px;
	padding : 10px;
}
.main_content{
	width : 800px;
	height: 360px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 40px;
}
	.main_content1{
		height:90%;
		width:50%;
		float: left;
	}
	.main_content2{
		height:90%;
		width:50%;
		float: left;
	}
#span_1{
	color:rgb(158, 158, 158);
	font-size: 14px;
}

</style>
<script
	src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c27b638af6c98ea42aa55b7709a8c29c&libraries=services"></script>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/menuBar.css">
<link rel="stylesheet" href="/resources/contents.css">
<title>채용공고 등록</title>
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
			<form action="/recruitment/register.kh" method="post">
			<div class="c-title">
				<div class="b-title"><h2>채용공고</h2></div>
				<div class="btn_1"><input class="btn"  type="submit" value="등록"><button type="reset" style="width: 50px" class="btn" onclick="location.href='/recruitment/list.kh'">목록</button></div>
			</div>
			
			<br><br>
			
				<table class="type02">
					<tr>
						<th scope="row">제목</th>
						<td><input type="text" name="recruitmentTitle"></td>
					</tr>
					<tr>
						<th scope="row">작성자</th>
						<td><input type="text" name="recruitmentWriter"></td>
					</tr>
					<tr>
						<th scope="row">마감일</th>
						<td><input type="date" name="recruitmentEndDate"></td>
					</tr>
					</table>
					<br>
					<input class="companyName" type="text" name="recruitmentCompanyName" placeholder="기업명" style="text-align: center">
					<br><br><br><br>
					<div class="main_content">
						<div class="main_content1">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>지원자격</span>
							<br><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">경력</span>&nbsp;&nbsp;&nbsp;<input type="text" name="recruitmentCareer" placeholder="내용을 입력하세요.">
							<br><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">학력</span>&nbsp;&nbsp;&nbsp;<input type="text" name="recruitmentEducation" placeholder="내용을 입력하세요.">
							<br><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">우대</span>&nbsp;&nbsp;&nbsp;<input type="text" name="recruitmentPrefer" placeholder="내용을 입력하세요.">
						</div>
						<div class="main_content2">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>지원자격</span>
							<br><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">고용형태</span>&nbsp;&nbsp;&nbsp;<input type="text" name="recruitmentType" placeholder="내용을 입력하세요.">
							<br><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">급여</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="recruitmentSalary" placeholder="내용을 입력하세요.">
							<br><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="span_1">지역</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="sample5_address" placeholder="주소" name="recruitmentRegion"> <input type="button" onclick="sample5_execDaumPostcode()" value="주소 검색"><br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id="map" style="width: 300px; height: 150px; margin-top: 10px; display: none"></div>					
						</div>
					</div>
																
					
			</form>
			<!-- c27b638af6c98ea42aa55b7709a8c29c -->
		</div>
	</div>
	<!-- footer -->
	<jsp:include page="../common/footer.jsp"></jsp:include>

	<script>
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div
		mapOption = {
			center : new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
			level : 5
		// 지도의 확대 레벨
		};

		//지도를 미리 생성
		var map = new daum.maps.Map(mapContainer, mapOption);
		//주소-좌표 변환 객체를 생성
		var geocoder = new daum.maps.services.Geocoder();
		//마커를 미리 생성
		var marker = new daum.maps.Marker({
			position : new daum.maps.LatLng(37.537187, 127.005476),
			map : map
		});

		function sample5_execDaumPostcode() {
			new daum.Postcode({
				oncomplete : function(data) {
					var addr = data.address; // 최종 주소 변수

					// 주소 정보를 해당 필드에 넣는다.
					document.getElementById("sample5_address").value = addr;
					// 주소로 상세 정보를 검색
					geocoder.addressSearch(data.address, function(results,
							status) {
						// 정상적으로 검색이 완료됐으면
						if (status === daum.maps.services.Status.OK) {

							var result = results[0]; //첫번째 결과의 값을 활용

							// 해당 주소에 대한 좌표를 받아서
							var coords = new daum.maps.LatLng(result.y,
									result.x);
							// 지도를 보여준다.
							mapContainer.style.display = "block";
							map.relayout();
							// 지도 중심을 변경한다.
							map.setCenter(coords);
							// 마커를 결과값으로 받은 위치로 옮긴다.
							marker.setPosition(coords)
						}
					});
				}
			}).open();
		}
	</script>

</body>
</html>