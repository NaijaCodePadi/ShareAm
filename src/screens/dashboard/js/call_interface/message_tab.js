import { callInterfaceChatSample } from "../../../../variables/mock_variables/mock_call_interface.js";
import { presentTime } from "../../../../utils/date_time.js";

const chatBubblesWrapper = document.getElementById("chat-bubbles-wrapper");
const chatSubmission = document.getElementById("chat-submit");

// ------ Message Tab -------- //
const handleChatBubble = () => {
  callInterfaceChatSample.forEach((item) => {
    if (Object.keys(item).pop() === "sent") {
      const sentChat = document.createElement("div");
      sentChat.classList.add("sent-chat");
      sentChat.innerHTML = `
          <p class="you-username desktop-msg-subtitle-txt">You</p>
          <div class="you-text-and-time-wrapper">
            <p class="user-text desktop-sent-txt">
               ${item.sent.message}
            </p>
            <div class="time-tick-wrapper">
              <p class="user-text-delivery-time desktop-sent-date-txt">
                ${item.sent.deliveryTime}
              </p>
              <img src="../../assets/icons/double-tick.svg" class="double-tick" alt="" />
            </div>
          </div>
  `;
      chatBubblesWrapper.appendChild(sentChat);
      sentChat.scrollTop = sentChat.scrollHeight;
    } else {
      const receivedChat = document.createElement("div");
      receivedChat.classList.add("received-chat");
      receivedChat.innerHTML = `
                <div class="user-message-box">
                  <div class="profile-pic">
                      ${
                        item.received.image
                          ? `
                            <img
                              src="${item.received.image}"
                              alt="User Profile Pic"
                            />
                          `
                          : `
                        <div class="user-profile-pic-placeholder">NU</div>`
                      } 
                  </div>
                      <p class="userName">${
                        item.received.name
                          ? `<p class="desktop-msg-subtitle-txt">${item.received.name}</p>`
                          : `<p class="desktop-msg-subtitle-txt">${item.received.username}</p>`
                      }</p>
                </div>

                <div class="text-and-time-wrapper">
                  <p class="user-text desktop-sent-txt">
                    ${item.received.message}
                  </p>
                  <p class="user-text-delivery-time desktop-sent-date-txt">
                    ${item.received.deliveryTime}
                  </p>
                </div>
    `;
      chatBubblesWrapper.appendChild(receivedChat);
    }
  });
};
handleChatBubble();

// ------- SENDER MESSAGE ------- //
const handleSendingMessage = (e) => {
  e.preventDefault();
  let input = document.getElementById("messages");
  let messageText = input.value.trim();
  if (messageText === "") {
    return;
  }
  presentTime();
  const messageObject = {
    sent: {
      message: messageText,
      deliveryTime: presentTime(),
    },
  };
  callInterfaceChatSample.push(messageObject);
  handleChatBubble();
  updateScroll();
  messageText = "";
  input.value = "";

  let attachFile = document.getElementById("attach-input");
  let file = attachFile.value.trim();
};

chatSubmission.addEventListener("submit", handleSendingMessage);

const updateScroll = () => {
  let chatScroll = document.getElementById("chat-wrap");
  chatScroll.scrollTop = chatScroll.scrollHeight;
};
updateScroll();
