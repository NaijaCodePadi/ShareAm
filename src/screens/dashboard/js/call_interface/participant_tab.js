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
                            <div > ${
                              item.handsUp
                                ? `<div class="hands-up">
                                    <svg
                                      width="15"
                                      height="20"
                                      viewBox="0 0 13 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.72977 16.0388C1.49986 16.0388 0.634224 14.317 0.475974 12.8725C0.401584 12.1908 0.304199 4.59073 0.304199 4.51364C0.304199 4.13763 0.400231 3.50192 1.0427 3.50192C1.64594 3.50192 1.91645 4.01184 1.91645 4.51634L1.97867 7.65969C1.98137 7.7706 2.07064 7.88286 2.18155 7.88286C2.29246 7.88286 2.38173 7.76925 2.38444 7.65834L2.46424 2.48615C2.46424 1.97759 2.73475 1.46226 3.33799 1.46226C3.94123 1.46226 4.21174 1.96812 4.21174 2.47398L4.27667 7.60288C4.27802 7.71379 4.36864 7.80171 4.47955 7.80171C4.59046 7.80171 4.68108 7.71244 4.68243 7.60153L4.75953 1.28373C4.75953 0.776516 5.03004 0.266602 5.63328 0.266602C6.23653 0.266602 6.50704 0.776516 6.50704 1.28102L6.58684 7.56501C6.58819 7.67592 6.67881 7.76519 6.78972 7.76519C6.90063 7.76519 6.99125 7.67592 6.99261 7.56501L7.05618 2.87839C7.05618 2.37118 7.32669 1.86127 7.92993 1.86127C8.53317 1.86127 8.80368 2.37118 8.80368 2.87569C8.81856 4.55557 8.85508 8.94192 8.84967 9.09881C8.83885 9.22325 8.88484 9.3044 8.92541 9.34904C8.97952 9.40855 9.05796 9.44236 9.14588 9.44236C9.34065 9.44236 9.53407 9.28817 9.58817 9.24083C9.82892 9.03254 10.0359 8.70657 10.255 8.36167C10.5282 7.93156 10.8122 7.48521 11.1152 7.36213C11.3533 7.2661 11.6414 7.21199 11.9281 7.21199C12.388 7.21199 12.6761 7.34725 12.7248 7.4798C12.9358 8.0614 12.6815 8.28457 12.0363 8.77826L11.9119 8.87429C11.2721 9.36797 10.8569 10.3729 10.489 11.2589C10.3388 11.62 10.1982 11.9622 10.0521 12.2489C9.96418 12.4221 9.88844 12.6263 9.80052 12.8616C9.33253 14.1276 8.62109 16.0388 4.72977 16.0388Z"
                                        fill="#DAD9D9"
                                      />
                                      <path
                                        d="M5.63244 0.470709C5.94218 0.470709 6.30331 0.683061 6.30331 1.28766L6.38311 7.59329C6.38582 7.81511 6.56706 8.01799 6.78888 8.01799C7.0107 8.01799 7.19194 7.81511 7.19465 7.59329L7.25822 2.88909C7.25822 2.51443 7.43405 2.07214 7.92909 2.07214C8.42412 2.07214 8.59996 2.50631 8.59996 2.88368C8.62025 5.26418 8.65 8.85658 8.64594 9.08922C8.63242 9.28669 8.70816 9.41383 8.77444 9.48822C8.86776 9.59102 9.00031 9.64647 9.14504 9.64647C9.40203 9.64647 9.63331 9.47064 9.71988 9.3949C9.98227 9.16767 10.1973 8.82953 10.4246 8.4711C10.6694 8.08562 10.9466 7.65009 11.1901 7.55136C11.4011 7.46615 11.6703 7.4161 11.9273 7.4161C12.3033 7.4161 12.5007 7.51619 12.5359 7.55677C12.6874 7.97877 12.5684 8.11673 11.9124 8.61718L11.7879 8.71321C11.1049 9.23935 10.6788 10.2714 10.3015 11.1816C10.154 11.5401 10.0134 11.8768 9.87136 12.1568C9.77804 12.3408 9.69553 12.5599 9.61032 12.7912C9.38309 13.4012 9.1004 14.1613 8.42277 14.7619C7.60853 15.4855 6.39934 15.8358 4.72623 15.8358C3.02606 15.8358 0.944471 15.3178 0.673959 12.8493C0.613094 12.2921 0.529235 6.64109 0.503536 4.51486C0.503536 3.97654 0.710478 3.70333 1.0662 3.70333C1.37594 3.70333 1.76412 3.91568 1.76412 4.51486V4.52298L1.79929 7.62845C1.80335 7.84892 1.95754 8.01664 2.178 8.01664H2.17936C2.40118 8.01664 2.58107 7.84757 2.58377 7.6271L2.66357 2.46573C2.66357 2.09108 2.83941 1.6569 3.33444 1.6569C3.82948 1.6569 4.00531 2.09513 4.00531 2.4752L4.06618 7.60276C4.07159 7.82593 4.20008 8.00447 4.47059 8.00447C4.74111 8.00447 4.87771 7.82593 4.88042 7.60411L4.96022 1.28224C4.96022 0.683061 5.32271 0.470709 5.63244 0.470709ZM5.63244 0.0649414C4.96292 0.0649414 4.5558 0.610023 4.5558 1.28224L4.47871 7.5987L4.41379 2.47114C4.41379 1.79892 4.00667 1.25384 3.33715 1.25384C2.66763 1.25384 2.26051 1.79892 2.26051 2.47114L2.18071 7.63116L2.11714 4.51621C2.11714 3.84399 1.70867 3.29891 1.0405 3.29891C0.370985 3.29891 0.0991211 3.84399 0.0991211 4.51621C0.0991211 4.51621 0.196505 12.196 0.272249 12.894C0.398037 14.0436 1.04862 16.2416 4.72758 16.2416C9.47506 16.2416 9.68336 13.4201 10.2338 12.3408C10.7465 11.3358 11.1928 9.68435 12.0368 9.03376C12.7077 8.51573 13.2027 8.206 12.916 7.41069C12.8199 7.14559 12.4006 7.00898 11.9286 7.00898C11.631 7.00898 11.3118 7.06308 11.04 7.17399C10.4178 7.42692 9.97957 8.63341 9.45748 9.08651C9.3601 9.17037 9.23295 9.23935 9.14774 9.23935C9.08553 9.23935 9.04495 9.20283 9.05306 9.11086C9.06118 9.01753 9.00708 2.87691 9.00708 2.87691C9.00708 2.20469 8.59996 1.65961 7.93044 1.65961C7.26092 1.65961 6.8538 2.20469 6.8538 2.87691L6.79023 7.56353L6.70908 1.28224C6.70908 0.60867 6.30196 0.0649414 5.63244 0.0649414Z"
                                        fill="#DAD9D9"
                                      />
                                      <mask
                                        id="mask0_1047_265"
                                        style="mask-type: luminance"
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="6"
                                        width="13"
                                        height="11"
                                      >
                                        <path
                                          d="M12.4408 7.31449C12.1338 6.97229 11.3574 6.81134 10.6095 7.1062C9.98051 7.35371 9.2623 9.70176 9.2623 9.70176L8.73886 8.83612C8.73886 8.83612 -0.124462 11.7441 0.00132633 12.8938C0.127114 14.0435 1.04821 16.2414 4.72717 16.2414C9.47465 16.2414 9.68295 13.4199 10.2334 12.3406C10.7461 11.3356 11.3912 8.99843 12.1838 8.74956C12.6978 8.58995 12.7005 7.60259 12.4408 7.31449Z"
                                          fill="white"
                                        />
                                      </mask>
                                      <g mask="url(#mask0_1047_265)">
                                        <path
                                          d="M9.19125 8.89404C7.71561 9.45671 6.84591 10.8458 6.31165 12.6677C6.23861 12.9193 6.4699 12.9923 6.55917 12.7461C7.48702 10.1925 9.78773 9.34985 9.78773 9.34985L9.19125 8.89404Z"
                                          fill="#DAD9D9"
                                        />
                                      </g>
                                    </svg>
                                  </div>`
                                : ""
                            }

                            </div>
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
                  width="30"
                  height="25"
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
                  width="28"
                  height="25"
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
