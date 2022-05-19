<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>채팅</title>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.5/sockjs.min.js"></script>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
	var g_webSocket = null;
	window.onload = function() {
		g_webSocket = new WebSocket(
				"ws://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/websocket/chat.kh");

		g_webSocket.onmessage = function(message) {
			addLineToChatBox(message.data);
		};

		/**
		 * 웹소켓 사용자 연결 해제하는 경우 호출
		 */
		g_webSocket.onclose = function(message) {
			addLineToChatBox("Server is disconnected.");
		};

		/**
		 * 웹소켓 에러 발생하는 경우 호출
		 */
		g_webSocket.onerror = function(message) {
			addLineToChatBox("Error!");
		};
	}

	/**
	 * 채팅 박스영역에 내용 한 줄 추가
	 */
	function addLineToChatBox(_line) {
		if (_line == null) {
			_line = "";
		}

		var chatBoxArea = document.getElementById("chatBoxArea");
		chatBoxArea.value += _line + "\n";
		chatBoxArea.scrollTop = chatBoxArea.scrollHeight;
	}

	/**
	 * Send 버튼 클릭하는 경우 호출 (서버로 메시지 전송)
	 */
	function sendButton_onclick() {
		var inputMsgBox = document.getElementById("inputMsgBox");
		if (inputMsgBox == null || inputMsgBox.value == null
				|| inputMsgBox.value.length == 0) {
			return false;
		}

		var chatBoxArea = document.getElementById("chatBoxArea");

		if (g_webSocket == null || g_webSocket.readyState == 3) {
			chatBoxArea.value += "Server is disconnected.\n";
			return false;
		}
		var msgData = {
			"marketNo" : '${param.marketNo}',
			"cmd" : "CMD_MSG_SEND",
			"msg" : inputMsgBox.value
		}

		// 서버로 메시지 전송
		g_webSocket.send(JSON.stringify(msgData));
		inputMsgBox.value = "";
		inputMsgBox.focus();

		return true;
	}

	/**
	 * Disconnect 버튼 클릭하는 경우 호출
	 */
	function disconnectButton_onclick() {
		if (g_webSocket != null) {
			g_webSocket.close();
			window.close();

		}
	}

	/**
	 * inputMsgBox 키입력하는 경우 호출
	 */
	function inputMsgBox_onkeypress() {
		if (event == null) {
			return false;
		}

		// 엔터키 누를 경우 서버로 메시지 전송
		var keyCode = event.keyCode || event.which;
		if (keyCode == 13) {
			sendButton_onclick();

		}
	}
	//참여버튼
	function enterButton_onclick() {
		document.getElementById("chatContent").style.display = "block";
		document.getElementById("chatEnter").style.display = "none";

		var msgData = {
			"marketNo" : '${param.marketNo}',
			"cmd" : "CMD_ENTER",
			"msg" : inputMsgBox.value
		}

		// 서버로 메시지 전송
		g_webSocket.send(JSON.stringify(msgData));

	}
</script>
<style>


#enter {
	/* display: flex; */
	width: 100%;
	height: 100%;
}

#chatEnter {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

#chatTitle1 {
	font-size: 25px;
	font-weight: bold;
}

#chatTitle2 {
	font-size: 25px;
	font-weight: bold;
	float: left;
	width: 80%;
}

#chatExit {
	float: left;
	width: 20%;
	text-align: right;
	margin-top: 5.5px;
}

#inputArea {
	float: left;
	width: 87%;
}

#chatBoxArea {
	margin-top: 10px;
}

#inputArea {
	margin-top: 10px;
}

#sendBtnArea {
	float: left;
	width: 13%;
	text-align: right;
	margin-top: 80px;
}

.btn {
	border: 1px solid #10412C;
	background-color: #10412C;
	color: white;
	border-radius: 5px;
	padding: 5px 10px;
	font-size: 13px;
	font-weight: bold;
	
}
</style>
</head>
<body>
	<!-- 채팅방 참여 -->
	<div id="enter">
		<div id="chatEnter" align="center">
			<div id="chatTitle1">${chatRoom.marketTitle}</div>
			<br> <input id="enterButton" class="btn" value="입장하기"
				type="button" onclick="enterButton_onclick()">
		</div>
	</div>
	<!-- 채팅방 -->
	<div id="chatContent" style="display: none;">
		<div>
			<div id="chatTitle2">${chatRoom.marketTitle}</div>
			<div id="chatExit">
				<button id="disconnectButton" class="btn" value="Disconnect"
					type="button" onclick="disconnectButton_onclick()">나가기</button>
			</div>
		</div>
		<div>
			<textarea id="chatBoxArea" style="width: 99%;" rows="25" cols="50"
				readonly="readonly"></textarea>
		</div>
		<div>
			<div id="inputArea">
				<input id="inputMsgBox" type="text"
					style="width: 95%; height: 100px;"
					onkeypress="inputMsgBox_onkeypress()" placeholder="메시지를 입력하세요">
			</div>
			<div id="sendBtnArea">
				<button id="sendButton" class="btn" value="Send" type="button"
					onclick="sendButton_onclick()">전송</button>
			</div>
		</div>
	</div>




</body>
</html>


























