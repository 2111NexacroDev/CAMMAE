<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학과 리스트</title>
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

h3{
	color : #10412C;
}

.btn{
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	margin-right: 5px;
}

/* .right {
	width: 20%;
	float: left;
} */
</style>
</head>

<body>
	<div class="center">
		<h3 id="b-title">학과 리스트</h3>
			<table width="600px" border="1">
				<thead>
				<tr>
					<th>단과대학</th>
			
				</tr>
				<thead>
				<tbody>
				
				<c:forEach items="${uList }" var="university">
				<tr>
				
				<c:url var="uDetail" value="/board/list.kh">
					<c:param name="universityCode" value="${university.universityCode}"></c:param>
				</c:url>

					<td><a href="${uDetail}">${university.universityName }</a></td>
					
					
					
				</tr>
			
				</c:forEach>
				</tbody>
			</table>
			
			
	</div>

</body>


</html>