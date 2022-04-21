<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="section">
						<div class="bbs">
							<table>
								
								<thead>
									<tr>
										<th>번호</th>
										<th>제목</th>
										<th>작성자</th>
										<th>내용</th>
										<th>자격증첨부</th>
										<th>수상이력첨부</th>
										<th>작성날짜</th>
										
									</tr>
								</thead>
								<tbody>
									<c:forEach items="${pList}" var="portfolio">
										<tr class="space">
											<td class="ta" id="no">${portfolio.port_no}</td>
											<c:url var="pDetail" value="/portfolio/adminDetail.kh">
												<c:param name="port_no" value="${portfolio.port_no}"></c:param>
											</c:url>
											<td class="ta" id="detail" style="text-align:left"><a href="${pDetail}">${portfolio.port_title }</a></td>
											<td class="ta" id="writer">${portfolio.port_name}</td>
											<td class="ta" id="content">${portfolio.port_content}</td>	
											<td class="ta" id="license">${portfolio.port_license}</td>
											<td class="ta" id="award_history">${portfolio.port_award_history}</td>
											<td class="ta" id="writeDate">${portfolio.port_writerDate}</td>		
										</tr>
									</c:forEach>
								</tbody>
							</table>
				
							<div class="paging">

								<c:if test="${pi.startNavi ==1 }">
									<a href="/portfolio/listView.kh?page=1"></a>
								</c:if>
								<c:if test="${pi.prev}">

									<a href="/portfolio/listView.kh?page=${pi.startNavi-1}">
									</a>

								</c:if>





								<c:forEach var="p" begin="${pi.startNavi }" end="${pi.endNavi }">
									<c:url var="pagination" value="/portfolio/listView.kh">
										<c:param name="page" value="${p }"></c:param>
									</c:url>

									<a href="${pagination }"><button class="on1">${p }</button></a>&nbsp;
																		
									</c:forEach>


								<c:if test="${pi.next && pi.endNavi > 0}">

									<a href="/portfolio/listView.kh?page=${pi.endNavi+1}"> 
									</a>

								</c:if>

							</div>
						</div>
					</div>


</body>
</html>