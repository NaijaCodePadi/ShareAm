const chatBox = document.getElementById('chat-box');
const activitiesBtn = document.getElementById('activities-btn');

const handleChatBoxToggle = () => {
    chatBox.classList.toggle("display-chat-box");
};

activitiesBtn.addEventListener("click", handleChatBoxToggle);
