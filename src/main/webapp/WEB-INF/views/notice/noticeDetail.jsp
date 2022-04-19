<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 상세 목록 조회</title>
</head>
<body>
	<h1 align="center">${notice.noticeNo }</h1>
	<br><br>
	<table align="center" width="500" border="1">
	   <tr>
          <td>번호</td>
          <td>${notice.noticeNo }</td>
        </tr>
		<tr>
			<td>제목</td>
			<td>${notice.noticeTitle }</td>
		</tr>
		<tr>
			<td>작성자</td>
			<td>${notice.noticeWriter }</td>
		</tr>
		<tr>
			<td>작성일</td>
			<td>${notice.noticeDate }</td>
		</tr>
		<tr>
			<td>내용</td>
			<td>${notice.noticeContent }</td>
		</tr>
		<tr>
			<td>첨부파일</td>
			<td>
				<a href="../../../resources/nuploadFile/${notice.noticeFileRename }" download>
				${notice.noticeFileName }
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<c:url var="nModify" value="/notice/modifyView.kh">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<c:url var="nDelete" value="/notice/delete.kh">
					<c:param name="noticeNo" value="${notice.noticeNo }"></c:param>
				</c:url>
				<a href="${nModify }">수정페이지로 이동</a>
            	<a href="${nDelete }">삭제하기</a>
			</td>
		</tr>
	</table>
</body>
</html>