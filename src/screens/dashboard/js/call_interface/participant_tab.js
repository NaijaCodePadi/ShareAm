import { participants } from "../../../../variables/mock_variables/mock_call_interface.js";

const participantWrapper = document.querySelector(".participant-wrapper");
const totalParticipants = document.getElementById("total-participants");
const participantsOnScreenDisplay = document.getElementById("users-display");
let previousIndexClicked = null; // Moved to global scope

// ------- Participant Tab -------- //
const handleEachParticiantsList = () => {
  participants.forEach((item, index) => {
    const participantsList = document.createElement("ul");
    participantsList.classList.add("participant-list");
    participantsList.innerHTML = `
                      <li class="each-participant">
                        <div class="participant-profile-wrapper">
                          <div class="participant-profile-picture">
                           ${
                             item.image
                               ? `
                                <img
                                    src="${item.image}"
                                    alt="User Profile Pic"
                                />
                                `
                               : `
                                <div class="participant-profile-pic-placeholder">NU</div>`
                           }
                          </div>
                            <span
                              class="online-status" style="background-color: ${
                                item.status === "active" ? "#3cea43" : "orange"
                              }">
                            </span>
                        </div>

                        <div class="participant-txt-mic-wrapper">
                        <div class="mic-ellipsis">
                          <span class="participant-microphone">
                          ${
                            item.microphone
                              ? `<div class="mic-on">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="16"
                                      width="12"
                                      viewBox="0 0 384 512"

                                    >
                                      <path
                                        fill="#dadada"
                                        d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z"
                                      />
                                    </svg>
                                  </div>
                                `
                              : `<div class="mic-off">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="15"
                                      width="18"
                                      viewBox="0 0 640 512"
                                    >
                                      <path
                                      fill="#dadada"
                                      d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 21.2-5.1 41.1-14.2 58.7L416 300.8 416 96c0-53-43-96-96-96s-96 43-96 96l0 54.3L38.8 5.1zM344 430.4c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128l0-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6z"/>
                                    </svg>
                                  </div>
                                `
                          }
                          </span>
                          <span class="ellipsis-menu" data-index="${index}">
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="#DAD9D9"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <g id="SVGRepo_iconCarrier">
                                  <title />
                                  <g id="Complete">
                                    <g id="F-More">
                                      <path
                                        d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z"
                                        id="Vertical"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <ul class="menu-list menu-close">
                              <div class="menu-list-box">
                                <li class="menu-txt">View profile</li>
                                <li class="menu-txt">Mute</li>
                                <li class="menu-txt">Chat</li>
                              </div>  
                            </ul>
                        </div> 

                        <div class="participant-txt">
                         <p class="participant-name-txt">${item.name}</p>
                         <p class="parti-online-status-text">${
                           item.statusText
                         }</p>
                        </div>
                        </div>  
                      </li>
    `;
    participantWrapper.appendChild(participantsList);
  });

  // Add event listener for ellipsis menu
  document.querySelectorAll(".ellipsis-menu").forEach((menu) => {
    menu.addEventListener("click", (e) => {
      const index = e.target.closest(".ellipsis-menu").dataset.index;
      toggleMenuList(index);
    });
  });
};

// Toggle menu visibility
const toggleMenuList = (index) => {
  const menuContents = document.querySelectorAll(".menu-list");

  console.log(`Toggling menu for index: ${index}`);
  console.log(menuContents[index]);

  if (previousIndexClicked !== null && previousIndexClicked !== index) {
    menuContents[previousIndexClicked].classList.add("menu-close");
    menuContents[previousIndexClicked].classList.remove("menu-open");
  }

  if (previousIndexClicked === index) {
    menuContents[index].classList.toggle("menu-close");
    menuContents[index].classList.toggle("menu-open");
    previousIndexClicked = menuContents[index].classList.contains("menu-close")
      ? null
      : index;
  } else {
    menuContents[index].classList.remove("menu-close");
    menuContents[index].classList.add("menu-open");
    previousIndexClicked = index;
  }
};

handleEachParticiantsList();

//------ TOTAL NUMBER OF PARTICIPANTS --------//
const getTotalParticipants = () => {
  totalParticipants.textContent = participants.length;
};
getTotalParticipants();

// ------------ Users display ----------//
const handleParticipantsOnScreenDisplay = () => {
  participants.slice(0, 2).forEach((item) => {
    const listenerDisplay = document.createElement("div");
    listenerDisplay.classList.add("listener-display");
    listenerDisplay.innerHTML = `
          <div class="call-participants">
            
              ${
                item.image
                  ? `
                              <img
                                  src="${item.image}"
                                  alt="User Profile Pic"
                              />
                              `
                  : `
                              <div class="user-img-display">NU</div>`
              }
            ${
              item.speaking
                ? `
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="15"
                  height="15"
                  x="0"
                  y="0"
                  viewBox="0 0 384 384"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class="microphone"
                >
                  <rect
                    width="384"
                    height="384"
                    rx="76.8"
                    ry="76.8"
                    fill="#04fe3b"
                    shape="rounded"
                    transform="matrix(1,0,0,1,0,0)"
                  ></rect>
                  <g
                    transform="matrix(0.5599999999999996,0,0,0.5599999999999996,84.48000000000009,84.48000000000009)"
                  >
                    <path
                      d="M176 288c0 8.832 7.168 16 16 16s16-7.168 16-16V96c0-8.832-7.168-16-16-16s-16 7.168-16 16zM16 96c-8.832 0-16 7.168-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16V112c0-8.832-7.168-16-16-16zM152 256V128c0-8.832-7.168-16-16-16s-16 7.168-16 16v128c0 8.832 7.168 16 16 16s16-7.168 16-16zM80 240c8.832 0 16-7.168 16-16v-64c0-8.832-7.168-16-16-16s-16 7.168-16 16v64c0 8.832 7.168 16 16 16zM264 256V128c0-8.832-7.168-16-16-16s-16 7.168-16 16v128c0 8.832 7.168 16 16 16s16-7.168 16-16zM368 96c-8.832 0-16 7.168-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16V112c0-8.832-7.168-16-16-16zM304 144c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16s16-7.168 16-16v-64c0-8.832-7.168-16-16-16zM176 368c0 8.832 7.168 16 16 16s16-7.168 16-16v-16c0-8.832-7.168-16-16-16s-16 7.168-16 16zM192 48c8.832 0 16-7.168 16-16V16c0-8.832-7.168-16-16-16s-16 7.168-16 16v16c0 8.832 7.168 16 16 16zm0 0"
                      fill="#000000"
                      opacity="1"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </svg>`
                : `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="15"
                  height="15"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class="microphone"
                >
                  <rect
                    width="30"
                    height="30"
                    rx="4.8"
                    ry="4.8"
                    fill="#fe0000"
                    shape="rounded"
                    transform="matrix(0.85,0,0,0.85,1.8000000000000007,1.8000000000000007)"
                  ></rect>
                  <g transform="matrix(0.6500000000000006,0,0,0.6500000000000006,4.199912548065181,4.200000000000001)">
                    <g fill="#000">
                      <path
                        d="M5.847 12c0 3.314 2.548 6 5.692 6 1.23 0 2.369-.41 3.3-1.11l.678.716A6.393 6.393 0 0 1 11.54 19c-3.669 0-6.642-3.134-6.642-7 0-.552-.425-1-.95-1S3 11.448 3 12c0 4.633 3.322 8.448 7.592 8.945l-.001.055v1H8.693c-.524 0-.949.448-.949 1s.425 1 .949 1h5.693c.524 0 .949-.448.949-1s-.425-1-.949-1h-1.898v-1l-.001-.055a8.274 8.274 0 0 0 4.383-1.913l2.51 2.646c.37.39.971.39 1.342 0 .37-.39.37-1.024 0-1.414L4.62 3.293a.915.915 0 0 0-1.342 0c-.37.39-.37 1.024 0 1.414l2.569 2.707zM6.478 3.251l10.368 10.927c.25-.675.387-1.41.387-2.178V6c0-3.314-2.55-6-5.693-6-2.205 0-4.116 1.32-5.062 3.251zM17.569 14.94l1.409 1.485A9.337 9.337 0 0 0 20.078 12c0-.552-.425-1-.949-1s-.949.448-.949 1c0 1.05-.219 2.046-.612 2.94z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                </svg>`
            }
            
          </div>
    `;
    participantsOnScreenDisplay.appendChild(listenerDisplay);
  });
};
handleParticipantsOnScreenDisplay();
