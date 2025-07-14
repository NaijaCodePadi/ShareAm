import { callInterfaceChatSample } from "../../../../variables/mock_variables/mock_call_interface.js";
import { presentTime } from "../../../../utils/date_time.js";
import { getFileExtensionSafe, fileBytesToSize, fileNameWithExtention } from "../../../../utils/getFileInfo.js";

const chatBubblesWrapper = document.getElementById("chat-bubbles-wrapper");
const chatSubmission = document.getElementById("chat-submit");
const cameraIcon = document.getElementById("cam-icon");
const captureButtonWrapper = document.getElementById("capture-btn-wrapper");
const captureButton = document.getElementById("capture-btn");
const activateCamWrapper1 = document.getElementById("activate-cam-wrapper1");
const activateCamWrapper2 = document.getElementById("activate-cam-wrapper2");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const retake = document.getElementById("retake");
const done = document.getElementById("done");
const capturedImage = document.getElementById("captured-img");
const choosenFileInfo = document.getElementById("choosen-file-info")
const photoOverlayWrapper = document.getElementById("photo-overlay-wrapper");
const closeIcons = document.querySelectorAll("#close-icon");

let documentInput = document.getElementById("document-input");
let videoInput = document.getElementById("video-input");
let photoInput = document.getElementById("photo-input");

let fileType;
let stream;
let tracks;

// ------ Message Tab -------- //

const handleChatBubble = () => {
  callInterfaceChatSample.forEach((item) => {
    // Handle "sent" messages
    if (Object.keys(item).pop() === "sent") {
      const { type, attachment, text } = item.sent.message;
      const deliveryTime = item.sent.deliveryTime;

      const sentChat = document.createElement("div");
      sentChat.classList.add("sent-chat");

      // Create media HTML
      let mediaHTML = "";
      if (type === "photo") {
        mediaHTML = `<img class="chat-bubble-photo" src="${attachment}" alt="sent image" />`;
      } else if (type === "video") {
        mediaHTML = `<video class="chat-bubble-video" src="${attachment}" controls></video>`;
      } else if (type === "document") {
        mediaHTML = `<i class='fas fa-file'></i>`;
      }

      sentChat.innerHTML = `
        <p class="you-username desktop-msg-subtitle-txt">You</p>
        <div class="you-text-and-time-wrapper">
          <div>
            <div class="chat-bubble-media-container">${mediaHTML}</div>
            <p class="user-text desktop-sent-txt">${text || ""}</p>
          </div>
          <div class="time-tick-wrapper">
            <p class="user-text-delivery-time desktop-sent-date-txt">${deliveryTime}</p>
            <img src="../../assets/icons/double-tick.svg" class="double-tick" alt="tick" />
          </div>
        </div>
      `;

      chatBubblesWrapper.appendChild(sentChat);
      sentChat.scrollTop = sentChat.scrollHeight;
    } else if (Object.keys(item).pop() === "received") {
      const {
        name,
        username,
        image,
        message: { type, attachment, text },
        deliveryTime,
      } = item.received;

      const receivedChat = document.createElement("div");
      receivedChat.classList.add("received-chat");

      // Create profile picture HTML
      const profilePicHTML = image
        ? `<img src="${image}" alt="User Profile Pic" />`
        : `<div class="user-profile-pic-placeholder">NU</div>`;

      // Create name HTML
      const nameHTML = name
        ? `<p class="desktop-msg-subtitle-txt">${name}</p>`
        : `<p class="desktop-msg-subtitle-txt">${username}</p>`;

      // Create media HTML
      let mediaHTML = "";
      if (type === "photo") {
        mediaHTML = `<img src="${attachment}" alt="received image" />`;
      } else if (type === "video") {
        mediaHTML = `<video src="${attachment}" controls></video>`;
      } else if (type === "document") {
        mediaHTML = `<i class='fas fa-file'></i>`;
      }

      receivedChat.innerHTML = `
        <div class="user-message-box">
          <div class="profile-pic">${profilePicHTML}</div>
          <div class="userName">${nameHTML}</div>
        </div>
        <div class="text-and-time-wrapper">
          <div>
            <div class="chat-bubble-media-container">${mediaHTML}</div>
            <p class="user-text desktop-sent-txt">${text || ""}</p>
          </div>
          <p class="user-text-delivery-time desktop-sent-date-txt">${deliveryTime}</p>
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

  const messageObject = {
    sent: {
      message: {
        text: messageText,
        type: fileType || "",
        attachment: capturedImage.src || "",
      },
      deliveryTime: presentTime(),
    },
  };

  if (messageObject.sent.message.text !== "" || messageObject.sent.message.attachment !== "") {
    callInterfaceChatSample.push(messageObject);
  } else {
    return
  }

  handleChatBubble();
  updateScroll();
  messageText = "";
  input.value = "";
  fileType = "";
  photoOverlayWrapper.style.display = "none";
};

chatSubmission.addEventListener("submit", handleSendingMessage);

const updateScroll = () => {
  let chatScroll = document.getElementById("chat-wrap");
  chatScroll.scrollTop = chatScroll.scrollHeight;
};
updateScroll();

// ----------------ACTIVATE CAMERA -----------------//

cameraIcon.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
  captureButtonWrapper.style.display = "block";
  activateCamWrapper1.style.display = "block";
  activateCamWrapper2.style.display = "none";
});

captureButton.addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  fileType = "photo";
  // Convert canvas to an image
  photo.src = canvas.toDataURL("image/png");
  photo.style.display = "block";

  activateCamWrapper1.style.display = "none";
  activateCamWrapper2.style.display = "block";
});

retake.addEventListener("click", () => {
  activateCamWrapper1.style.display = "block";
  activateCamWrapper2.style.display = "none";
});

done.addEventListener("click", () => {
  if (stream) {
    tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
  }
  capturedImage.src = canvas.toDataURL("image/png");
  activateCamWrapper2.style.display = "none";
  photoOverlayWrapper.style.display = "block";
});

closeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    photoOverlayWrapper.style.display = "none";
    capturedImage.src = "";
    fileType = "";
    if (stream) {
      tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
    }
    activateCamWrapper1.style.display = "none";
    activateCamWrapper2.style.display = "none";
  });
});


const handleFileUpload = (event) => {
  const videoExtensions = ["mpg", "mp2", "mpeg", "mpe", "mpv", "mp4"];
  const imageExtensions = ["gif", "jpg", "jpeg", "png"];
  const documentExtensions = ["pdf", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "txt", "csv"];



  const file = event.target.files[0]; // Get the first selected file
  if (file) {
    // choosenFileInfo.textContent = `${fileNameWithExtention(file)} (${fileBytesToSize(file)})`;

    if (choosenFileInfo) {
      choosenFileInfo.textContent = `${fileNameWithExtention(file)} (${fileBytesToSize(file)})`;
    } else {
      console.warn('Target element not found!');
    }

    const fileExtension = getFileExtensionSafe(file.name);


    console.log('File extension:', fileExtension);
    // console.log('Selected file:', file); // Log file metadata
    console.log('File name:', file.name);
    console.log('File size:', file.size, 'bytes');
    console.log('File type:', file.type);

    // Example: Read the file content (if it's a text file)
    const reader = new FileReader();
    reader.onload = function () {
      console.log('File content:', reader.result);
      // You can now use reader.result in your code
    };
    reader.readAsText(file); // Or readAsDataURL(file) for images

  }

};

documentInput.addEventListener("change", handleFileUpload);
videoInput.addEventListener("change", handleFileUpload);
photoInput.addEventListener("change", handleFileUpload);
