import { chatSample } from './../../../../variables/mock_variables/mock_dashboard.js';
// Get the parent element where the list will be rendered
const chatList = document.getElementById('chat-wrapper');
const favoriteList = document.getElementById('favorite-wrapper');
const date = document.getElementById("date-txt");
const time = document.getElementById("time-txt");
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

const getYear = () => {
    return new Date().getFullYear()
}
const year = getYear()

const getMonth = () => {
    const month = new Date().getMonth();
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        default:
            return 'December';
    }
};
const month = getMonth();

const getDateNum = () => {
    return new Date().getDate();
}
const dateNum = getDateNum();

const getDay = () => {
    const day = new Date().getDay();
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednessday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        default:
            return 'Saturday';
    }
}
const day = getDay();

const getHour = () => {
    const hour = new Date().getHours();
    switch (hour) {
        case 0:
            return "00";
        case 1:
            return "01";
        case 2:
            return "02";
        case 3:
            return "03";
        case 4:
            return "04";
        case 5:
            return "05";
        case 6:
            return "06";
        case 7:
            return "07";
        case 8:
            return "08";
        case 9:
            return "09";
        case 10:
            return "10";
        case 11:
            return "11";
        case 12:
            return "12";
        case 13:
            return "01";
        case 14:
            return "02";
        case 15:
            return "03";
        case 16:
            return "04";
        case 17:
            return "05";
        case 18:
            return "06";
        case 19:
            return "07";
        case 20:
            return "08";
        case 21:
            return "09";
        case 22:
            return "10";
        default:
            return "11";
    }
};
const hour = getHour();


const getMinutes = () => {
    const minutes = new Date().getMinutes();
    switch (minutes) {
        case 0:
            return "00";
        case 1:
            return "01";
        case 2:
            return "02";
        case 3:
            return "03";
        case 4:
            return "04";
        case 5:
            return "05";
        case 6:
            return "06";
        case 7:
            return "07";
        case 8:
            return "08";
        case 9:
            return "09";
        case 10:
            return "10";
        case 11:
            return "11";
        case 12:
            return "12";
        case 13:
            return "13";
        case 14:
            return "14";
        case 15:
            return "15";
        case 16:
            return "16";
        case 17:
            return "17";
        case 18:
            return "18";
        case 19:
            return "19";
        case 20:
            return "20";
        case 21:
            return "21";
        case 22:
            return "22";
        case 23:
            return "23";
        case 24:
            return "24";
        case 25:
            return "25";
        case 26:
            return "26";
        case 27:
            return "27";
        case 28:
            return "28";
        case 29:
            return "29";
        case 30:
            return "30";
        case 31:
            return "31";
        case 32:
            return "32";
        case 33:
            return "33";
        case 34:
            return "34";
        case 35:
            return "35";
        case 36:
            return "36";
        case 37:
            return "37";
        case 38:
            return "38";
        case 39:
            return "39";
        case 40:
            return "40";
        case 41:
            return "41";
        case 42:
            return "42";
        case 43:
            return "43";
        case 44:
            return "44";
        case 45:
            return "45";
        case 46:
            return "46";
        case 47:
            return "47";
        case 48:
            return "48";
        case 49:
            return "49";
        case 50:
            return "50";
        case 51:
            return "51";
        case 52:
            return "52";
        case 53:
            return "53";
        case 54:
            return "54";
        case 55:
            return "55";
        case 56:
            return "56";
        case 57:
            return "57";
        case 58:
            return "58";
        default:
            return "59";
    }
};
const minutes = getMinutes();


const presentTime = () => {
    let timeDesignation;
    if (new Date().getHours() <= 11) {
        timeDesignation = "AM"
    } else {
        timeDesignation = "PM"
    }
    time.innerText = `${hour}:${minutes} ${timeDesignation}`;
    date.innerText = `${day}, ${month} ${dateNum}, ${year}`;
}
presentTime()