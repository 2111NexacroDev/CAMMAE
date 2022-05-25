<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/resources/main.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div id="header">
        <!-- 로그인, 회원가입 부분 -->
        <!-- gnb = global navigation bar  -->
        <div id="gnb">   
            <div class="inner">
            
                <a href="/main.kh" class="btn_gnb_home">
                 
                    HOME
                </a>
                <c:if test="${empty sessionScope}">
	                <a href="/login/loginPage.kh" class="btn_gnb_login">
	                 
	                    LOGIN
	                </a>
              	</c:if>
              	<c:if test="${not empty sessionScope}">
              		<a href="/login/logout.kh" class="btn_gnb_login">

	                    LOGOUT
	                </a>
	           </c:if>
            </div>
        </div>  
        <!-- local navigation bar -->
        <div id="lnb">
            <div class="inner lnb_nav">
                <h1>
                    <img src="resources/img/logo.png" style="width:80px; height:80px; " >
                    <a href="main.kh">  
                    <span id="lnb_title"> 대일대학교</span></a>
                    <span id="lnb_subtitle">DAILE UNIVERSITY</span>
                </h1>
                <ul class="lnb_nav_dep1">
                    <li><a href="/board/list.kh" class="btn_lnb_dep1">게시판</a></li>
                    <li><a href="/cart/preCartListView.kh" class="btn_lnb_dep1">수강신청</a></li>
                    <li><a href="javascript:void(window.open('/home.kh', '캠퍼스매니저','width=1100px, height=500px'))" class="btn_lnb_dep1">캠퍼스매니저</a></li>
                    <li><a href="/notice/list.kh" class="btn_lnb_dep1">취업지원센터</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- content -->
    <div id="content">
       
    </div>
    <div id="content2">
          <div id="content3">
              
                <div id="submenu1">
                    <div id="submenu1_1"><a href="/cart/preCartListView.kh" style="color:white">수강신청</a></div>
                    <div id="submenu1_2"><a href="/cart/preCartListView.kh"><span class="material-icons" id="ico1" style="font-size:30px; color: rgba(255, 255, 255, 0.5);">arrow_right_alt</span> </a></div>
                </div>
                
                <div id="submenu2">
                    <div id="submenu2_1"><a href="/board/unlist.kh" style="color:white">학과게시판</a></div>
                    <div id="submenu2_2"><a href="/board/unlist.kh"><span class="material-icons" style="font-size:50px; color: rgba(255, 255, 255, 0.5);">school</span></a></div>
                </div>

                <div id="submenu3">
                <div id="submenu3_1"><a href="/lecture/list.kh"><span class="material-icons" style="font-size:50px; color: rgba(255, 255, 255, 0.5);">local_library</span></a></div>
                <div id="submenu3_2"><a href="/lecture/list.kh" style="color:white">수강개설(변경예정)</a></div>
                </div>

            <div id="submenu4">
                <div id="submenu4_1"><a href="/recruitment/list.kh"><span class="material-icons" style="font-size:50px; color: rgba(255, 255, 255, 0.5);">person_search</span></a></div>
                <div id="submenu4_2"><a href="/recruitment/list.kh" style="color:white">채용공고</a></div>
            </div>

            <div id="submenu5">
                <div id="submenu5_1"><a href="/notice/list.kh" style="color:white">취업지원센터</a></div>
                <div id="submenu5_2"><a href="/notice/list.kh"><span class="material-icons" style="font-size:40px; color: rgba(255, 255, 255, 0.5);">arrow_right_alt</span></a></div> 
            </div>

            <div id="submenu6">
                <div id="submenu6_1"><a href="/support/list.kh" style="color:white">지원현황</a></div>
                <div id="submenu6_2"><a href="/support/list.kh"><span class="material-icons" style="font-size:50px; color: rgba(255, 255, 255, 0.5);">list_alt</span></a></div> 
            </div>

            <div id="submenu7">
                <div id="submenu7_1"><a href="/market/list" style="color:white">중고거래</a></div>
                <div id="submenu7_2"><a href="/market/list"><span class="material-icons" style="font-size:40px; color: rgba(255, 255, 255, 0.5);">arrow_right_alt</span></a></div> 
            </div>

            <div id="submenu8">
                <div id="submenu8_1"><a href="/question/list" style="color:white">질의응답</a></div>
                <div id="submenu8_2"><a href="/question/list"><span class="material-icons" style="font-size:40px; color: rgba(255, 255, 255, 0.5);">arrow_right_alt</span></a></div> 
            </div>

            <div id="yt">
                <div id="yt_1"><img src="resources/img/youtube.png" style="width: 40px; height: 45px;"></div>
                <div id="yt_2"><a href="#" style="color:white">DAILEYOUTUBE</a></div>
                <div id="yt_3"><a href="#"><span class="material-icons" style="font-size:40px; color: rgba(255, 255, 255);">play_circle_outline</span></a></div>
            </div>
            
            <div id="is">
                <div id="is_1"><img src="resources/img/instagram.png" style="width: 40px; height: 40px;"></div>
                <div id="is_2"><a href="#" style="color:white">DAILEINSTAGRAM</a></div>
                <div id="is_3"><a href="#"><span class="material-icons" style="font-size:40px; color: rgba(255, 255, 255);">play_circle_outline</span></a></div>
            </div>
            
            <div id="fb">
                <div id="fb_1"><img src="resources/img/facebook.png" style="width: 50px; height: 40px;"></div>
                <div id="fb_2"><a href="#" style="color:white">DAILEFACEBOOK</a></div>
                <div id="fb_3"><a href="#"><span class="material-icons" style="font-size:40px; color: rgba(255, 255, 255);">play_circle_outline</span></a></div>
            </div>
        </div> 
    </div>
    
    
    
    <!-- footer -->
    <footer>
        <div class="footer_tit">서울특별시 중구 남대문로 120 대일빌딩 2F, 3F (T: 1544-9970) / F: 02-722-0858)</div>
        <div id="footer_bottom">Copyright © 1998-2022 DI University All Right Reserved</div>
     </footer>
</body>
</html>