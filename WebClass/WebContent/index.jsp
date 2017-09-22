<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>첫번째 JSP</title>
</head>
<body>
<%-- 선언부 --%>
<% private static final String DEFAULT_NAME = "Guest"; --%>
<%-- 스크립틀릿 --%>
<%
	String name = request.getParameter("name");
	if(name == null) name = DEFAULT_NAME;

%>
<%-- 표현식 --%>
<%%>




</body>
</html>