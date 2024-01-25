// chat.js

	/** 채팅위젯 플로팅 버튼 */
	document.addEventListener('DOMContentLoaded', function() {
		var btnChatOpen = document.querySelector(".btn-chat_open");
		var floating = document.getElementById("floating");
		var chatLayer = document.querySelector(".chat_layer");

		btnChatOpen.addEventListener('click', function() {
			floating.classList.toggle('float_on'); // 플로팅 끄고켜기
			chatLayer.classList.toggle('on'); // 채팅레이어 끄고켜기
		});
	});


	/** 메시지 전송하기 */
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

			// 메시지 입력후에 채팅인풋 비우기
            chatInput.value = '';
        }

    }

	/** 엔터 누를때도 메시지 전송하기 */
	document.getElementById('chatInput').addEventListener('keydown', handleKeyPress);
	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			sendChat();
		}
	}

