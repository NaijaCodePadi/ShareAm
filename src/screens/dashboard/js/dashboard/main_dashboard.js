import { chatSample } from './../../../../variables/mock_variables/mock_dashboard.js';
// import { presentDate, presentTime } from './date_time.js';

// Get the parent element where the list will be rendered
const chatList = document.getElementById('chat-wrapper');
const favoriteList = document.getElementById('favorite-wrapper');
const date = document.getElementById("date-txt");
const time = document.getElementById("time-txt");
// console.log(presentDate());
// const presentDate = presentDate()
// Update every minute
// const intervalTime = setInterval(presentTime, 1000 * 60);
// date.innerText = presentDate();
// time.innerText = presentTime();
// time.innerText = intervalTime
// setInterval(presentTime, 1000 * 60);
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

const presentTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const timeDesignation = hour < 12 ? "AM" : "PM";

    time.innerText = `${hour}:${minutes} ${timeDesignation}`;
    date.innerText = `${now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    })}`;
};

// Call the function initially
presentTime();

// Update every minute
setInterval(presentTime, 1000 * 60);
