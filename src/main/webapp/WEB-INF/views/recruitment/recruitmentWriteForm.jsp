<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c27b638af6c98ea42aa55b7709a8c29c&libraries=services"></script>
<meta charset="UTF-8">
<title>채용공고 등록</title>
</head>
<body>
	


	<h1 align="center">채용공고</h1>
	<br><br>
	<form action="/recruitment/register.kh" method="post">
		<table>
			<tr>
				<td>제목</td>
				<td><input type="text" name="recruitmentTitle"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="text" name="recruitmentWriter"></td>
			</tr>
			<tr>
				<td>기업명</td>
				<td><input type="text" name="recruitmentCompanyName"></td>
			</tr>
			<tr>
				<td>경력</td>
				<td><input type="text" name="recruitmentCareer"></td>
			</tr>
			<tr>
				<td>학력</td>
				<td><input type="text" name="recruitmentEducation"></td>
			</tr>
			<tr>
				<td>우대</td>
				<td><input type="text" name="recruitmentPrefer"></td>
			</tr>
			<tr>
				<td>고용형태</td>
				<td><input type="text" name="recruitmentType"></td>
			</tr>
			<tr>
				<td>급여</td>
				<td><input type="text" name="recruitmentSalary"></td>
			</tr>
			<!-- <tr>
				<td>지역</td>
				<td><input type="text" name="recruitmentRegion"></td>
			</tr> -->
			
			<tr>
				<td>시작일</td>
				<td><input type="date" name="recruitmentStartDate"></td>
			</tr>
			<tr>
				<td>마감일</td>
				<td><input type="date" name="recruitmentEndDate"></td>
			</tr>
			<tr>
				<td colspan="2">
					<input type="submit" value="등록">
					<input type="reset" value="취소">
				</td>
			</tr>
		</table>
			<input type="text" id="sample5_address" placeholder="주소">
			<input type="button" onclick="sample5_execDaumPostcode()" value="주소 검색"><br>
			<div id="map" style="width:300px;height:300px;margin-top:10px;display:none"></div>
	</form>
	<!-- c27b638af6c98ea42aa55b7709a8c29c -->
	


<script>
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };

    //지도를 미리 생성
    var map = new daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new daum.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(37.537187, 127.005476),
        map: map
    });


    function sample5_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                var addr = data.address; // 최종 주소 변수

                // 주소 정보를 해당 필드에 넣는다.
                document.getElementById("sample5_address").value = addr;
                // 주소로 상세 정보를 검색
                geocoder.addressSearch(data.address, function(results, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {

                        var result = results[0]; //첫번째 결과의 값을 활용

                        // 해당 주소에 대한 좌표를 받아서
                        var coords = new daum.maps.LatLng(result.y, result.x);
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