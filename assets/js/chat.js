// chat.js

	/** 
	 * 채팅위젯(플로팅버튼) 위치 
	 * */
	document.addEventListener("DOMContentLoaded", function() {
		var floatChat = document.querySelector(".float_chat");
	
		// 버튼위치 설정
		var newX = 16; // 원하는 X 좌표
		var newY = 32; // 원하는 Y 좌표
	
		// 버튼의 스타일 속성 변경
		floatChat.style.position = "fixed";
		floatChat.style.right = newX + "px";
		floatChat.style.bottom = newY + "px";
	});

	/** 
	 * 채팅 레이어 열고 닫기
	 * */
	document.addEventListener('DOMContentLoaded', function() {
		var btnChatOpen = document.querySelector(".btn-chat_open"); // 채팅위젯버튼
		var chatLayer = document.querySelector(".chat_layer"); // 채팅레이어

		btnChatOpen.addEventListener('click', function() {
			chatLayer.classList.toggle('on'); // 채팅레이어 끄고켜기
		});
	});

	/** 
	 * 메시지 전송하기 
	 * */
	function sendChat() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim(); // 공백제거
		
        if (message !== '') {
            // 전송한 메시지를 화면에 출력하기
            const chatBox = document.getElementById('chatBubble');
			const chatScroll = document.getElementById('chatScroll');
			chatBox.innerHTML += '<div class="chat_list"><div class="chat_bubble"><div class="chat_bubble_box"><div class="chat_bubble_box-txt"><p>' + message + '</p></div></div></div></div>';

			// 스크롤을 아래로 내리기
			function scrollDown() {
				chatScroll.scrollTop = document.body.scrollHeight;
			}
			scrollDown();

			// 메시지 입력후에 입력란 비우기
            chatInput.value = '';
        }
    }

	/** 
	 * 엔터 누를때도 메시지 전송하기 
	 * */
	document.getElementById('chatInput').addEventListener('keydown', handleKeyPress);
	function handleKeyPress(event) {
		if (event.key === 'Enter') { 
			sendChat();
		}
	}

