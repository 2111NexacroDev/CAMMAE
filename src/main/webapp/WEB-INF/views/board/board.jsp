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
	<h1 align="center">${board.boardNo }</h1>
	<br><br>
	<table align="center" width="500" border="1">
	   <tr>
          <td>번호</td>
          <td>${board.boardeNo }</td>
        </tr>
		<tr>
			<td>제목</td>
			<td>${board.boardTitle }</td>
		</tr>
		<tr>
			<td>내용</td>
			<td>${board.boardContent }</td>
		</tr>
		<tr>
			<td>작성자</td>
			<td>${board.boardWriter }</td>
		</tr>
		<tr>
			<td>작성일</td>
			<td>${board.boardDate }</td>
		</tr>
		<tr>
			<td>첨부파일</td>
			<td>
				<a href="../../../resources/nuploadFiles/${board.boardFileRename }" download>
				${board.boardFileName }
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<c:url var="bModify" value="/board/modifyView.kh">
					<c:param name="boardeNo" value="${board.boardeNo }"></c:param>
				</c:url>
				<c:url var="bDelete" value="/board/delete.kh">
					<c:param name="boardeNo" value="${board.boardeNo }"></c:param>
				</c:url>
				<button onclick="location.href='/board/list.kh'">목록</button>
				<a href="${bModify }">수정</a>
            	<a href="${bDelete }">삭제</a>
			</td>
		</tr>
	</table>
</body>
</html>