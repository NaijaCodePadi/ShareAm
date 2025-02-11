import { addUsers } from "../../../../variables/mock_variables/mock_call_interface.js";

const asideBox = document.getElementById("aside-box");
const activitiesBtn = document.getElementById("activities-btn");
const tabs = document.querySelectorAll(".tab");
const tabsContents = document.querySelectorAll(".tab-content");
const emojiOverlay = document.getElementById("emoji-btn");
const emojiOverlayWrapper = document.getElementById("emoji-overlay-wrapper");
const inputAttachments = document.getElementById("attach-icon");
const attachListWrapper = document.getElementById("attach-list-wrapper");
const AddUserPopup = document.getElementById("add-user-popup");
const addUserIcon = document.getElementById("add-icon");
const eachUserWrapper = document.getElementById("each-user-wrapper");
const sidebarContainer = document.getElementById("sidebar-container");
const addUser = document.querySelector(".add-user");
const copyMeetingLink = document.querySelector(".copy-meeting-link");
const copyMeetingLinkTxt = document.querySelector(".copy-meeting-link-txt");
const callBtn = document.getElementById("call-btn");
const callInterfaceMouseControl = document.getElementById(
  "call-interface-mouse-control"
);
const usersDisplayWrapper = document.getElementById("users-display");
const actionButtonsWrapper = document.getElementById("action-btns-wrapper");

// const rateCallContainer = document.getElementById("rate-call-container");

const handleSharescreenMouseEnter = () => {
  usersDisplayWrapper.style.display = "block";
  actionButtonsWrapper.style.display = "block";
};

callInterfaceMouseControl.addEventListener(
  "mouseenter",
  handleSharescreenMouseEnter
);

const handleSharescreenMouseLeave = () => {
  usersDisplayWrapper.style.display = "none";
  actionButtonsWrapper.style.display = "none";
};

callInterfaceMouseControl.addEventListener(
  "mouseleave",
  handleSharescreenMouseLeave
);

// ------- ADD USER POPUP -------- //
const handleAddUserPopup = () => {
  addUsers.forEach((item) => {
    const addUserList = document.createElement("ul");
    addUserList.classList.add("each-user");
    addUserList.innerHTML = `
                  <div>
                      <span class="prof-pic">
                       ${
                         item.image
                           ? `
                            <img
                                src="${item.image}"
                                alt="User Profile Pic"
                            />
                            `
                           : `
                            <div class="user-profile-pic-placeholder">NU</div>`
                       } 
                      </div>
                      </span>
                      <p class="username-txt">${item.name}</p>
                      <span class="online-status-vidoe-icon">
                      <div class="online-stat">
                        <p class="online-status-mode" style="background-color: ${
                          item.status === "active" ? "#3cea43" : "orange"
                        }">
                        </p>
                        <p class="online-status-text">${item.statusText}</p>
                      </div>
                      <div class="video-icon">
                      ${
                        item.videoIcon
                          ? `<svg
                          width="32"
                          height="31"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.49072 6H15.4907C16.5907 6 17.4907 6.9 17.4907 8V16C17.4907 17.1 16.5907 18 15.4907 18H4.49072C3.39072 18 2.49072 17.1 2.49072 16V8C2.49072 6.9 3.39072 6 4.49072 6Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M22.4907 17.5L17.4907 14.5V9.5L22.4907 6.5V17.5Z"
                            fill="#388E3C"
                          />
                        </svg>`
                          : `<svg
                          width="35"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.3462 4.5H3.11371C2.71589 4.5 2.33436 4.65804 2.05305 4.93934C1.77175 5.22064 1.61371 5.60218 1.61371 6V18C1.61021 18.0725 1.61021 18.145 1.61371 18.2175L15.3462 4.5ZM22.2087 6.0825C22.0895 6.02555 21.9573 6.00111 21.8256 6.01165C21.6939 6.02218 21.5674 6.06732 21.4587 6.1425L17.3637 9.045V7.83L22.6137 2.58L21.5337 1.5L1.61371 21.42L2.69371 22.5L5.69371 19.5H15.8637C16.2615 19.5 16.6431 19.342 16.9244 19.0607C17.2057 18.7794 17.3637 18.3978 17.3637 18V14.955L21.4287 17.8575C21.5407 17.9372 21.6723 17.9846 21.8094 17.9946C21.9464 18.0045 22.0836 17.9766 22.2059 17.9139C22.3282 17.8513 22.4309 17.7562 22.5028 17.6391C22.5747 17.522 22.6131 17.3874 22.6137 17.25V6.75C22.614 6.61228 22.5764 6.47714 22.5049 6.35939C22.4335 6.24165 22.331 6.14585 22.2087 6.0825Z"
                            fill="#E4E4E4"
                          />
                        </svg>`
                      }
                      </div>
                      </span>
                    </div>
    `;
    eachUserWrapper.appendChild(addUserList);
  });
};
handleAddUserPopup();

// ------- DISPLAY ADD USER POPUP -------- //
const displayAddUserPopup = () => {
  if (AddUserPopup.classList.contains("display-add-user-popup")) {
    AddUserPopup.classList.remove("display-add-user-popup");
  } else {
    AddUserPopup.classList.add("display-add-user-popup");
  }
};
addUserIcon.addEventListener("click", displayAddUserPopup);

// -----------AsideBox toggle and display ------------ //
const handleChatBoxToggle = () => {
  asideBox.classList.toggle("display-aside-box");
};

handleChatBoxToggle();

activitiesBtn.addEventListener("click", handleChatBoxToggle);

const handleChatBoxDisplay = () => {
  if (
    window.innerWidth >= 992 &&
    asideBox.classList.contains("display-aside-box")
  ) {
    asideBox.classList.remove("display-aside-box");
  }
};
handleChatBoxDisplay();

window.addEventListener("resize", handleChatBoxDisplay);

//-------- MESSAGE AND PARTICIPANT TOGGLE --------//
const handleTab = () => {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      tabsContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabsContents[index].classList.add("active");
    });
  });
};
handleTab();

// ---------- COPY MEETING LINK ---------- //
const handleCopyMeetingLink = () => {
  const meetingToken = sessionStorage.getItem("meetingToken");
  navigator.clipboard.writeText(meetingToken);
  copyMeetingLinkTxt.textContent = "Meeting link copied";
  setTimeout(() => {
    copyMeetingLinkTxt.textContent = "Copy meeting link";
  }, 1000);
};
copyMeetingLink.addEventListener("click", handleCopyMeetingLink);

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
    emojiOverlayWrapper.style.display === "block" &&
    !emojiOverlay.contains(event.target)
  ) {
    emojiOverlayWrapper.style.display = "none";
  }
});

// -------- ATTACHMENT OVERLAY ----------- //
const displayAttachOverlay = () => {
  if (attachListWrapper.classList.contains("display-attach-list")) {
    attachListWrapper.classList.remove("display-attach-list");
  } else {
    attachListWrapper.classList.add("display-attach-list");
  }
};
inputAttachments.addEventListener("click", displayAttachOverlay);

const handleMeetingState = () => {
  const meetingToken = sessionStorage.getItem("meetingToken");

  if (meetingToken) {
    sidebarContainer.style.display = "none";
    addUser.style.display = "none";
  } else {
    sidebarContainer.style.display = "block";
    copyMeetingLink.style.display = "none";
  }
};
handleMeetingState();

async function gotojoinmeeting() {
  window.location.href = "../authentication/join_meeting.html";
}

const closeModal = (modal) => {
  modal.close();
  gotojoinmeeting();
};

const openModal = (modal) => {
  modal.open();
};

const handleEndCall = () => {
  const meetingToken = sessionStorage.getItem("meetingToken");

  if (meetingToken) {
    gotojoinmeeting();
    sessionStorage.removeItem("meetingToken");
  }
  // openModal(rateCallContainer);
};
callBtn.addEventListener("click", handleEndCall);

// const handleCallRating = () => {
//   const meetingToken = sessionStorage.getItem("meetingToken");
//   if (meetingToken) {
//     gotojoinmeeting();
//     // sessionStorage.removeItem("meetingToken");
//   }
//   // closeModal(rateCallContainer)
// }

// Ensure the event listener for the end call button is attached after the component is defined
// customElements.whenDefined('rate-call').then(() => {
//   const done = rateCall.shadowRoot.getElementById("done-btn");
//   if (done) {
//     done.addEventListener("click", handleCallRating);
//   } else {
//     console.error("Done button not found");
//   }
// });
