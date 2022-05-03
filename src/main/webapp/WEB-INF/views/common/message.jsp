<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


	<script>
		var message = "<c:out value='${message}'/>";
		var url = "<c:out value='${url}'/>";
		alert(message);
		location.href = url; 
	</script>
</body>
</html>