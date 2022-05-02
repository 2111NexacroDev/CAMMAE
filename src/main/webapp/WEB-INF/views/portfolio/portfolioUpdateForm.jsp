<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<style>
html, body, span, li, a, div, ul {
    margin: 0;
    padding: 0;
}

body{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
}

#header{
position: relative;
    height: 60px;
    border-bottom: 1px solid rgb(16, 65, 44);
    background: rgb(16, 65, 44);

}
.inner {
    /* margin: 0 auto; */
    width: 1200px;
    height: 60px;
    
  
}

.btn_gnb_home{
    float: right;
    margin-top: 20px;
    margin-right: -30px;
    /* margin-left: 1050px; */
    text-decoration: none;
    color: white;
}

.btn_gnb_login{
    float:right;
    margin-top: 20px;
    margin-right: -130px;
    text-decoration: none;
    color: white;
}

h1 {
    margin-top: 30px;
    margin-left: 180px;
    width: 320px; 
 }   

.lnb_nav_dep1 li{
    float: left;
    margin-top: -10px
}


#lnb_title{
    margin-left: 20px;
}

#lnb_subtitle{
    display: flex;
    font-size: 14px;
    margin-left: 115px;
    margin-top: -40px;
    color: rgb(0, 74, 38);
   
   
}

h1 a {
    text-align: left;
    /* display: block; */
    /* margin-top: 20px; */
    width: 220px;
   
    text-decoration: none;
    position: absolute;
    color: rgb(0, 74, 38);
   
}

.lnb_nav_dep1 {
    display: flex;
    margin-top: -60px;
    margin-left: 490px;
    width: 1200px;
}

dl, ul, ol, menu, li {
    list-style: none;
}

 .lnb_nav_dep1 li {
    float: left;
} 
.lnb_nav_dep1 li a:hover{
    color: rgb(0, 74, 38);
}
.btn_lnb_dep1 {
    display: inline-block;
    margin: 0 70px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: #1d1d1d;
    
}

#content_box{
    margin-top: 130px;
    width: 100%;
    height: 380px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
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
                    <img src="/resources/img/logo.png" style="width:80px; height:80px; " >
                    <a href="main.kh">  
                    <span id="lnb_title"> 대일대학교</span></a>
                    <span id="lnb_subtitle">DAILE UNIVERSITY</span>
                </h1>
                <ul class="lnb_nav_dep1">
                    <li><a href="/board/list.kh" class="btn_lnb_dep1">게시판</a></li>
                    <li><a href="#" class="btn_lnb_dep1">수강신청</a></li>
                    <li><a href="#" class="btn_lnb_dep1">캠퍼스매니저</a></li>
                    <li><a href="/notice/list.kh" class="btn_lnb_dep1">취업지원센터</a></li>
                </ul>
            </div>
        </div>
    </div>

	<div id="content_box">
		<div class="notice_page_title">
			<h2 class="tit_page">공지사항 관리</h2>

		</div>
		<div class="section">
			<div class="bbs">
				<form action="/portfolio/modify.kh" method="post" enctype="multipart/form-data">
					<input type="hidden" name="port_no" value="${portfolio.port_no}" />
					<input type="hidden" name="port_licenseRename" value="${portfolio.port_licenseRename}">
					<input type="hidden" name="port_licenseFilePath" value="${portfolio.port_licenseFilePath}">
					<input type="hidden" name="port_award_historyRename" value="${portfolio.port_award_historyRename}">
					<input type="hidden" name="port_awardFilePath" value="${portfolio.port_awardFilePath}">
					
					제목 <input type="text" name="port_title" value="${portfolio.port_title}"><br> 
					이름 <input type="text" name="port_name" value="${portfolio.port_name}"><br>
					학번 <input type="text" name="port_student_no" value="${portfolio.port_student_no}" readonly><br> 
					학과명 <input type="text" name="port_college" readonly value="${portfolio.port_college == '1' ? '컴퓨터공학과' : '2' ? '전자전기공학과' : '3' ? '산업디자인학과' : '4' ? '중국어학과' : '5' ? '유비쿼터스학과' : '국어국문학과' }" ><br>
					전화번호 <input type="text" name="port_student_number" value="${portfolio.port_student_number}" readonly><br> 
					자격증 첨부 <input type="file" name="reloadFile">${portfolio.port_license}<br> 
					수상이력 첨부 <input type="file" name="reloadFile1">${portfolio.port_award_history} <br> 
					작성날짜 <input type="text" name="port_writerDate" value="${portfolio.port_writerDate}" readonly><br> 
					내용 <textarea type="text" name="port_content" value="${portfolio.port_content}"></textarea><br>
					단과 <input type="text" name="port_university_code" value="${portfolio.port_university_code }" />
					
					<div class="enr_btn">
						<div class="input-btn">
							<input type="submit" id="btn1" value="수정"><br> 
							<input
								type="button" id="btn2"
								onclick="location.href='/portfolio/delete.kh?port_no=${portfolio.port_no}'"
								value="삭제">
						</div>
						<div class="a-btn">
							<a href="/portfolio/listView.kh" id="list_l">목록</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

</body>
</html>