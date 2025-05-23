import { emojiCategories } from "../../../../variables/mock_variables/mock_emoji.js";

const emojiOverlay = document.getElementById("emoji-btn");
const emojiOverlayWrapper = document.getElementById("emoji-overlay-wrapper");
const emojiTabContent = document.querySelectorAll(".emoji-tab-content");
const tabEmojis = document.querySelectorAll(".tab-emoji");
const getPeopleEmoji = document.getElementById("people");
const getAnimalsEmoji = document.getElementById("animals");
const getFoodEmoji = document.getElementById("food");
const getActivityEmoji = document.getElementById("activities");
const getTravelEmoji = document.getElementById("travel");
const getObjectsEmoji = document.getElementById("objects");
const getSymbolsEmoji = document.getElementById("symbols");
const getFlagsEmoji = document.getElementById("flags");

// -------- EMOJI OVERLAY ----------- //
emojiOverlay.addEventListener("click", (event) => {
  event.stopPropagation();
  if (window.getComputedStyle(emojiOverlayWrapper).display === "none") {
    emojiOverlayWrapper.style.display = "block";
  } else {
    emojiOverlayWrapper.style.display = "none";
  }
});

emojiOverlayWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (
    window.getComputedStyle(emojiOverlayWrapper).display === "block" &&
    !emojiOverlayWrapper.contains(event.target) &&
    !emojiOverlay.contains(event.target)
  ) {
    tabEmojis.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabEmojis[0].classList.add("active");
    emojiTabContent.forEach((content) => {
      content.classList.remove("active");
    });
    emojiTabContent[0].classList.add("active");
    emojiOverlayWrapper.style.display = "none";
  }
});

//-------- EMOJI CATEGORY TAB --------//
const handleEmojiTabs = () => {
  tabEmojis.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabEmojis.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      emojiTabContent.forEach((content) => {
        content.classList.remove("active");
      });
      emojiTabContent[index].classList.add("active");
    });
  });
};
handleEmojiTabs();

//-------- EMOJI CATEGORY CONTENT --------//
const handleEmojiCategoryDisplay = () => {
  emojiCategories.forEach((item) => {
    if (item.title === "Smileys & People") {
      item.emojis.forEach((person) => {
        const peopleEmoji = document.createElement("span");
        peopleEmoji.classList.add("emoji");
        peopleEmoji.innerHTML = person;
        getPeopleEmoji.appendChild(peopleEmoji);
      });
    } else if (item.title === "Animals & Nature") {
      item.emojis.forEach((animal) => {
        const animalEmoji = document.createElement("span");
        animalEmoji.classList.add("emoji");
        animalEmoji.innerHTML = animal;
        getAnimalsEmoji.appendChild(animalEmoji);
      });
    } else if (item.title === "Food & Drink") {
      item.emojis.forEach((food) => {
        const foodEmoji = document.createElement("span");
        foodEmoji.classList.add("emoji");
        foodEmoji.innerHTML = food;
        getFoodEmoji.appendChild(foodEmoji);
      });
    } else if (item.title === "Activity & Sports") {
      item.emojis.forEach((activity) => {
        const activityEmoji = document.createElement("span");
        activityEmoji.classList.add("emoji");
        activityEmoji.innerHTML = activity;
        getActivityEmoji.appendChild(activityEmoji);
      });
    } else if (item.title === "Travel & Places") {
      item.emojis.forEach((travel) => {
        const travelEmoji = document.createElement("span");
        travelEmoji.classList.add("emoji");
        travelEmoji.innerHTML = travel;
        getTravelEmoji.appendChild(travelEmoji);
      });
    } else if (item.title === "Objects") {
      item.emojis.forEach((object) => {
        const objectEmoji = document.createElement("span");
        objectEmoji.classList.add("emoji");
        objectEmoji.innerHTML = object;
        getObjectsEmoji.appendChild(objectEmoji);
      });
    } else if (item.title === "Symbols") {
      item.emojis.forEach((symbol) => {
        const symbolEmoji = document.createElement("span");
        symbolEmoji.classList.add("emoji");
        symbolEmoji.innerHTML = symbol;
        getSymbolsEmoji.appendChild(symbolEmoji);
      });
    } else if (item.title === "Flags") {
      item.emojis.forEach((flag) => {
        const flagEmoji = document.createElement("span");
        flagEmoji.classList.add("emoji");
        flagEmoji.innerHTML = flag;
        getFlagsEmoji.appendChild(flagEmoji);
      });
    }
  });
};

handleEmojiCategoryDisplay();

//-------- EMOJI CLICK --------//
const emojiBoxes = document.querySelectorAll(".emoji-box");
const formInput = document.getElementById("messages");

const handleEmojiPicker = () => {
  emojiBoxes.forEach((box) => {
    box.addEventListener("click", function (e) {
      if (e.target.classList.contains("emoji")) {
        const emoji = e.target.textContent;
        const cursorPos = formInput.selectionStart;
        const textBefore = formInput.value.substring(0, cursorPos);
        const textAfter = formInput.value.substring(cursorPos);
        formInput.value = textBefore + emoji + textAfter;
        formInput.focus();
        formInput.selectionStart = formInput.selectionEnd =
          cursorPos + emoji.length;
      }
    });
  });
};

handleEmojiPicker();
