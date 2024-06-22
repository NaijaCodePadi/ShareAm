import { chatSample } from './../../../variables/mock_variables/mock_dashboard.js';
// Get the parent element where the list will be rendered
const chatList = document.getElementById('chat-wrapper');
const favoriteList = document.getElementById('favorite-wrapper');

// Loop through the items and create the HTML structure for each item
chatSample.forEach((item) => {
    const chatItem = document.createElement('div');
    chatItem.classList.add('section-2-div1-new-user-div');
    chatItem.innerHTML = `
        ${item.image ? `<img src="${item.image}" class="user-profile-pic" alt="" />`
            : `<div class="user-profile-pic-placeholder">NU</div>`}

        ${item.name ? `<p>${item.name}</p>`
            : `<p>${item.username}</p>`}

        ${item.varified ? `<img src="../../assets/icons/images__2_-removebg-preview 1.svg" alt="" />`
            : ``}
    `;
    chatList.appendChild(chatItem);
});

chatSample.forEach((item) => {
    const favoriteItem = document.createElement('div');
    favoriteItem.classList.add('section-2-div1-new-user-div');
    favoriteItem.innerHTML = `
        ${item.image ? `<img src="${item.image}" class="user-profile-pic" alt="" />`
            : `<div class="user-profile-pic-placeholder">NU</div>`}

        ${item.name ? `<p>${item.name}</p>`
            : `<p>${item.username}</p>`}

        ${item.varified ? `<img src="../../assets/icons/images__2_-removebg-preview 1.svg" alt="" />`
            : ``}
    `;
    favoriteList.appendChild(favoriteItem);
});