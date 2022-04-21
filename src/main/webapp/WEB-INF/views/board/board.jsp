<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>질의응답게시판 상세페이지</title>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
.left {
	width: 32%;
	float: left;
}
.center {
	width: 50%;
	float: left;
}
.c-main {
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 600px;
	padding: 30px 30px 30px 30px;
}
h3 {
	color: #10412C;
}
.btn {
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}
/* 댓글 */
#rQuestionWriter {
	width: 80%;
	float: left;
}
#rQuestionDate {
	width: 20%;
	float: left;
}
#rQuestionContent {
	width: 80%;
	float: left;
}
</style>
</head>