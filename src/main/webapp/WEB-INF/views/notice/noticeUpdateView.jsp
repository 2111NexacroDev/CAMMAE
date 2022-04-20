<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 수정</title>
</head>
<body>
	<h1 align="center">공지사항 수정</h1>
	<form action="/notice/update.kh" method="post" enctype="multipart/form-data">
		<input type="hidden" name="noticeNo" value="${notice.noticeNo }">
		
		<input type="hidden" name="noticeFileName" value="${notice.noticeFileName }">
		<input type="hidden" name="noticeFileRename" value="${notice.noticeFileRename }">
		<input type="hidden" name="noticeFilePath" value="${notice.noticeFilePath }">
		<input type="hidden" name="noticeDate" value="${notice.noticeDate }">
		
		<table>
			<tr>
				<td>제목</td>
				<td><input type="text" name="noticeTitle" value="${notice.noticeTitle }"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="text" name="noticeWriter" value="${notice.noticeWriter }"></td>
			</tr>
			<tr>
				<td>내용</td>
				<td><textarea cols="50" name="noticeContent" value="${notice.noticeContent }"></textarea></td>
			</tr>
			<tr>
				<td>첨부파일</td>
				<td><input type="file" name="reloadFile">${notice.noticeFileName }</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="수정하기">
				</td>
			</tr>		
		</table>		
	</form>
</body>
</html>