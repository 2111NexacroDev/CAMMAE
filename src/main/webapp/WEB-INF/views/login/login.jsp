<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="/login/login.kh" method="post">
        <table>
        	<tr>
        		<td>
        		<input type="radio" name="login_type" value="student" checked="checked">학생
				<input type="radio" name="login_type" value="professor">교수
				<input type="radio" name="login_type" value="manager">관리자
				</td>
        	</tr>
            <tr>
                <td><input type="text" name="user-id"></td>
            </tr>
            <tr>
                <td><input type="password" name="user-pwd"></td>
            </tr>
            <tr>
                <td><input type="submit" value="로그인"></td>
            </tr>
            <tr>
                <td><input type="button" value="비밀번호 찾기"></td>
            </tr>
        </table>
   </form>
</body>
</html>