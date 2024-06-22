const template = document.createElement("template");
template.innerHTML = `
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
/* **************************** GENERAL CSS FOR SIDEBAR  ****************************************/

/* **************************** GENERAL CSS FOR SIDEBAR  ****************************************/

.sidebar-nav {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  padding: 7vh 1vw 0vh 1vw;
  background-image: url("../../assets/icons/worldwide-location.svg"),
    url("../../assets/icons/chat-room.svg"),
    url("../../assets/icons/video-conference.svg"),
    url("../../assets/icons/worldwide-location.svg"),
    url("../../assets/icons/chat-room.svg"),
    url("../../assets/icons/video-conference.svg"),
    url("../../assets/icons/worldwide-location.svg"),
    url("../../assets/icons/chat-room.svg"),
    url("../../assets/icons/video-conference.svg"),
    url("../../assets/icons/chat-room.svg"),
    url("../../assets/icons/video-conference.svg"),
    url("../../assets/icons/worldwide-location.svg");
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
    no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: top 5vh right 1.5vw, top 10vh right 10vw,
    top 18vh right 5vw, top 27vh right 11vw, top 35vh right 1vw,
    top 45vh right 7vw, top 57vh right 12vw, top 64vh right 2vw,
    top 78vh right 5vw, top 82vh right 11vw, top 90vh right 13vw,
    top 94vh right 2vw;
  background-size: 5vh 5vw;
}

.profile-pic {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #d9d9d9;
  border: 1.4px solid #cfdae2;
  position: relative;
  text-decoration: none;
  margin: auto;
}

.profile-pic-intials {
  height: fit-content;
  width: fit-content;
}

#green-circle {
  position: absolute;
  right: 3%;
  bottom: 7%;
  width: 12px;
  height: 12px;
  background-color: #3cea43;
  border-radius: 100%;
  border: 0.5px solid #ffffff;
}

.sidebar-nav svg {
  color: #a9a9a9;
}

.hamburger {
  margin-left: 1vw;
  height:22px;
}

.hamburger :hover svg {
  color: #fffcfc;
}

.nav-link-container {
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  width: fit-content;
  margin: auto;
  margin-top: 0;
}

.nav-link-container a {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1vh 1vw;
  border-radius: 12px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

#hamburger-icon {
  cursor: pointer;  
}

.menu-link {
  padding: 1.7vh 1vw;
}

.menu-text {
  margin-left:1vw;
}

.display-text {
  /* ---------------JavaScript will be used to change the dispaly from block to none when the menu-text ----------------- */
  display: none;
}

.section4-share-am-div {
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 1.2vh;
}

.shaream-logo {
  height: 6vh;
}

.icon-span {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* -----------------------------------------Texts stlyes ----------------------------------------- */

.intial-txt {
  color: #fff;
  font-family: Poppins-bold;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
}

.shaream-txt {
  color: #fff;
  font-family: Poppins-bold;
  font-size: 1.6rem;
  font-weight: 800;
}

.shaream-txt > span {
  color: #6f3fe3;
}

.active-menu {
  border-radius: 12px;
  font-family: Rubik;
  font-size: 1rem;
  font-weight: 700;
}

.nav-texts {
  font-family: Rubik;
  font-size: 1rem;
  font-weight: 500;
}


/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1200px) {
}

/* Large devices (laptops/desktops, 1085px and down) */
@media only screen and (max-width: 1085px) {
  .profile-pic {
    width: 50px;
    height: 50px;
  }

  #green-circle {
    position: absolute;
    left: 73%;
    right: 2%;
    bottom: 3%;
    width: 10px;
    height: 10px;
  }

  .nav-link-container a {
    width: 150px;
  }
}

/* Large devices (laptops/desktops, 998px and down) */
@media only screen and (max-width: 998px) {
  .nav-link-container a {
    width: 140px;
  }
}

/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
  .profile-pic {
    width: 45px;
    height: 45px;
  }

  #green-circle {
    position: absolute;
    left: 73%;
    right: 2%;
    bottom: 3%;
    width: 10px;
    height: 10px;
  }

  #hamburger-icon {
    display: none;
  }

  .nav-link-container a {
    width: fit-content;
  }

  .menu-text,
  .shaream-txt {
    display: none;
  }

  .shaream-logo {
    height: 8vh;
  }

  .sidebar-nav {
    width: 12vw;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #green-circle {
    position: absolute;
    right: 2%;
    left: 73%;
    bottom: 3%;
    width: 9px;
    height: 9px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/*/-- DARK AND LIGHT MODE --/*/

@media (prefers-color-scheme: dark) {
  .sidebar-nav {
    background-color: #1f201f;
  }

  .nav-link-container a:hover {
    background-color: #373737;
    color: #fffcfc;
    border-radius: 12px;
  }

  .nav-link-container a:hover svg {
    color: #fffcfc;
  }

  a.active-menu {
    background-color: #373737;
    color: #fffcfc;
  }

  a.active-menu svg {
    color: #fffcfc;
  }

  .nav-texts {
    color: #a9a9a9;
  }
}

@media (prefers-color-scheme: light) {
  .sidebar-nav {
    background-color: #22074a;
  }

  .nav-link-container a:hover {
    background-color: #ffffff;
    color: rgba(34, 32, 32, 0.9);
    border-radius: 12px;
  }

  .nav-link-container a:hover svg {
    color: rgba(34, 32, 32, 0.9);
  }

  a.active-menu {
    background-color: #ffffff;
    color: rgba(34, 32, 32, 0.9);
  }

  a.active-menu svg {
    color: rgba(34, 32, 32, 0.9);
  }

  .nav-texts {
    color: rgba(169, 169, 169, 0.9);
  }
}


</style>

 <nav class="sidebar-nav">
          <a href="" class="profile-pic">
            <p class="profile-pic-intials intial-txt">NU</p>
            <span id="green-circle"></span>
          </a>

          <div class="hamburger">
            <span id="hamburger-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="17"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </span>
          </div>

          <div class="nav-link-container">
            <a
              class="menu-link nav-texts"
              id="dashboard"
              href="../dashboard/dashboard.html"
            >
              <div class="icon-span">
                <span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.375 22.7495C1.85417 22.7495 1.41146 22.5672 1.04688 22.2026C0.682292 21.8381 0.5 21.3953 0.5 20.8745V8.68701C0.5 8.39535 0.567708 8.11409 0.703125 7.84326C0.838542 7.57243 1.02083 7.35368 1.25 7.18701L9.375 1.09326C9.54167 0.968262 9.71875 0.874512 9.90625 0.812012C10.0938 0.749512 10.2917 0.718262 10.5 0.718262C10.7083 0.718262 10.9062 0.749512 11.0938 0.812012C11.2813 0.874512 11.4583 0.968262 11.625 1.09326L19.75 7.18701C19.9792 7.35368 20.1615 7.57243 20.2969 7.84326C20.4323 8.11409 20.5 8.39535 20.5 8.68701V20.8745C20.5 21.3953 20.3177 21.8381 19.9531 22.2026C19.5885 22.5672 19.1458 22.7495 18.625 22.7495H13V13.9995H8V22.7495H2.375Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> Home</span>
              </div>
            </a>

            <a class="menu-link nav-texts" id="profile" href="../settings/profile.html">
              <div class="icon-span">
                <span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 9.46924C9.125 9.46924 8 9.03174 7.125 8.15674C6.25 7.28174 5.8125 6.15674 5.8125 4.78174C5.8125 3.40674 6.25 2.28174 7.125 1.40674C8 0.531739 9.125 0.0942383 10.5 0.0942383C11.875 0.0942383 13 0.531739 13.875 1.40674C14.75 2.28174 15.1875 3.40674 15.1875 4.78174C15.1875 6.15674 14.75 7.28174 13.875 8.15674C13 9.03174 11.875 9.46924 10.5 9.46924ZM0.5 19.5005V16.563C0.5 15.7713 0.697917 15.0942 1.09375 14.5317C1.48958 13.9692 2 13.5422 2.625 13.2505C4.02083 12.6255 5.35938 12.1567 6.64063 11.8442C7.92188 11.5317 9.20833 11.3755 10.5 11.3755C11.7917 11.3755 13.0729 11.5369 14.3438 11.8599C15.6146 12.1828 16.9479 12.6463 18.3438 13.2505C18.9896 13.5422 19.5104 13.9692 19.9062 14.5317C20.3021 15.0942 20.5 15.7713 20.5 16.563V19.5005H0.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> My profile </span>
              </div>
            </a>

            <a class="menu-link nav-texts" id="callInterface" href="../dashboard/view.html">
              <div class="icon-span">
                <span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.58785 0.5L1.07882 0.5C0.482986 0.5 0 0.945833 0 1.49583L0 7.50417C0 8.05417 0.482986 8.5 1.07882 8.5H7.58785C8.18368 8.5 8.66667 8.05417 8.66667 7.50417V1.49583C8.66667 0.945833 8.18368 0.5 7.58785 0.5ZM11.8625 1.28542L9.38889 2.86042V6.13958L11.8625 7.7125C12.341 8.01667 13 7.70625 13 7.175V1.82292C13 1.29375 12.3432 0.98125 11.8625 1.28542Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> Call Interface </span>
              </div>
            </a>

            <a class="menu-link nav-texts" id="message" href="../messages/list.html">
              <div class="icon-span">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="20"
                    viewBox="0 0 20 17"
                    fill="none"
                    class="icon"
                  >
                    <path
                      d="M17.5 0.5L2.5 0.5C1.12109 0.5 0 1.62103 0 2.99985L0 14.2492C0 15.628 1.12109 16.749 2.5 16.749H6.25L6.25 20.0301C6.25 20.4129 6.6875 20.6355 6.99609 20.409L11.875 16.749H17.5C18.8789 16.749 20 15.628 20 14.2492V2.99985C20 1.62103 18.8789 0.5 17.5 0.5Z"
                      fill="currentColor"
                      fill-opacity="0.9"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> Message </span>
              </div>
            </a>

            <a
              class="menu-link nav-texts"
               id="contact"
              href="../settings/contact_settings.html"
            >
              <div class="icon-span">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 32 28"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g
                      transform="matrix(0.9999999999999973,2.449293598294702e-16,-2.449293598294702e-16,0.9999999999999973,4.085620730620576e-14,3.019806626980426e-14)"
                    >
                      <path
                        d="M24 3H8C5.243 3 3 5.243 3 8v16c0 2.757 2.243 5 5 5h16c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5zm-7.997 4.826c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zM22 24.522H10a1 1 0 0 1-1-1c0-3.86 3.141-7 7-7s7 3.14 7 7a1 1 0 0 1-1 1z"
                        fill="currentColor"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> Contacts</span>
              </div>
            </a>

            <a class="menu-link nav-texts"  id="calendar" href="../dashboard/calendar.html">
              <div class="icon-span">
                <span>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 14.376V12.501H17.75V14.376H5.25ZM5.25 20.001V18.126H13.9688V20.001H5.25ZM2.125 25.001C1.625 25.001 1.1875 24.8135 0.8125 24.4385C0.4375 24.0635 0.25 23.626 0.25 23.126V3.75098C0.25 3.25098 0.4375 2.81348 0.8125 2.43848C1.1875 2.06348 1.625 1.87598 2.125 1.87598H4.15625V0.000976562H6.1875V1.87598H16.8125V0.000976562H18.8438V1.87598H20.875C21.375 1.87598 21.8125 2.06348 22.1875 2.43848C22.5625 2.81348 22.75 3.25098 22.75 3.75098V23.126C22.75 23.626 22.5625 24.0635 22.1875 24.4385C21.8125 24.8135 21.375 25.001 20.875 25.001H2.125ZM2.125 23.126H20.875V9.68848H2.125V23.126Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text">Calendar</span>
              </div>
            </a>

            <a class="menu-link nav-texts" id="notification" href="../settings/notification.html">
              <div class="icon-span">
                <span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.4375 21.2505C1.16667 21.2505 0.942708 21.1619 0.765625 20.9849C0.588542 20.8078 0.5 20.5838 0.5 20.313C0.5 20.0422 0.588542 19.8182 0.765625 19.6411C0.942708 19.464 1.16667 19.3755 1.4375 19.3755H3.125V9.81299C3.125 8.10466 3.64063 6.55778 4.67188 5.17236C5.70312 3.78695 7.0625 2.91716 8.75 2.56299V1.65674C8.75 1.17757 8.92188 0.781738 9.26562 0.469238C9.60938 0.156738 10.0208 0.000488281 10.5 0.000488281C10.9792 0.000488281 11.3906 0.156738 11.7344 0.469238C12.0781 0.781738 12.25 1.17757 12.25 1.65674V2.56299C13.9375 2.91716 15.3021 3.78695 16.3437 5.17236C17.3854 6.55778 17.9062 8.10466 17.9062 9.81299V19.3755H19.5625C19.8333 19.3755 20.0573 19.464 20.2344 19.6411C20.4115 19.8182 20.5 20.0422 20.5 20.313C20.5 20.5838 20.4115 20.8078 20.2344 20.9849C20.0573 21.1619 19.8333 21.2505 19.5625 21.2505H1.4375ZM10.5 25.0005C9.83333 25.0005 9.25 24.7557 8.75 24.2661C8.25 23.7765 8 23.188 8 22.5005H13C13 23.188 12.7552 23.7765 12.2656 24.2661C11.776 24.7557 11.1875 25.0005 10.5 25.0005Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> Notifications</span>
              </div>
            </a>

            <a class="menu-link nav-texts" id="settings" href="../settings/settings.html">
              <div class="icon-span">
                <span>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.53125 14.234H6.46875C6.35417 14.234 6.25261 14.1976 6.16406 14.1248C6.07552 14.052 6.02083 13.9583 6 13.8439L5.75 12.2676C5.55208 12.1947 5.34375 12.0959 5.125 11.971C4.90625 11.8462 4.71354 11.7161 4.54688 11.5809L3.09375 12.252C2.97917 12.304 2.86458 12.3118 2.75 12.2754C2.63542 12.239 2.54688 12.1635 2.48438 12.0491L1.45313 10.2231C1.39063 10.119 1.375 10.0098 1.40625 9.89533C1.4375 9.78088 1.5 9.68724 1.59375 9.6144L2.9375 8.63117C2.91667 8.53753 2.90365 8.43088 2.89844 8.31123C2.89323 8.19158 2.89063 8.08493 2.89063 7.99129C2.89063 7.89765 2.89323 7.791 2.89844 7.67135C2.90365 7.55169 2.91667 7.44505 2.9375 7.35141L1.59375 6.36817C1.5 6.29534 1.4375 6.2017 1.40625 6.08725C1.375 5.9728 1.39063 5.86355 1.45313 5.7595L2.48438 3.9335C2.54688 3.81905 2.63542 3.74361 2.75 3.7072C2.86458 3.67078 2.97917 3.67859 3.09375 3.73061L4.54688 4.40171C4.71354 4.26645 4.90625 4.13639 5.125 4.01153C5.34375 3.88668 5.55208 3.79304 5.75 3.73061L6 2.13871C6.02083 2.02426 6.07552 1.93062 6.16406 1.85778C6.25261 1.78495 6.35417 1.74854 6.46875 1.74854H8.53125C8.64583 1.74854 8.7474 1.78495 8.83594 1.85778C8.92448 1.93062 8.97917 2.02426 9 2.13871L9.25 3.715C9.44792 3.78783 9.65886 3.88408 9.88281 4.00373C10.1068 4.12338 10.2969 4.25604 10.4531 4.40171L11.9063 3.73061C12.0208 3.67859 12.1354 3.67078 12.25 3.7072C12.3646 3.74361 12.4531 3.81905 12.5156 3.9335L13.5469 5.7439C13.6094 5.84794 13.6276 5.95979 13.6016 6.07945C13.5755 6.1991 13.5104 6.29534 13.4063 6.36817L12.0625 7.32019C12.0833 7.42424 12.0964 7.53609 12.1016 7.65574C12.1068 7.77539 12.1094 7.88724 12.1094 7.99129C12.1094 8.09533 12.1068 8.20458 12.1016 8.31903C12.0964 8.43348 12.0833 8.54273 12.0625 8.64678L13.4063 9.6144C13.5 9.68724 13.5625 9.78088 13.5938 9.89533C13.625 10.0098 13.6094 10.119 13.5469 10.2231L12.5156 12.0491C12.4531 12.1635 12.3646 12.239 12.25 12.2754C12.1354 12.3118 12.0208 12.304 11.9063 12.252L10.4531 11.5809C10.2865 11.7161 10.0964 11.8488 9.88281 11.9788C9.66927 12.1089 9.45833 12.2051 9.25 12.2676L9 13.8439C8.97917 13.9583 8.92448 14.052 8.83594 14.1248C8.7474 14.1976 8.64583 14.234 8.53125 14.234ZM7.5 10.0202C8.0625 10.0202 8.54167 9.8225 8.9375 9.42712C9.33333 9.03175 9.53125 8.55314 9.53125 7.99129C9.53125 7.42944 9.33333 6.95083 8.9375 6.55546C8.54167 6.16008 8.0625 5.96239 7.5 5.96239C6.9375 5.96239 6.45833 6.16008 6.0625 6.55546C5.66667 6.95083 5.46875 7.42944 5.46875 7.99129C5.46875 8.55314 5.66667 9.03175 6.0625 9.42712C6.45833 9.8225 6.9375 10.0202 7.5 10.0202Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> Settings</span>
              </div>
            </a>

            <a class="menu-link nav-texts" href="../modal/auth_modal.html">
              <div class="icon-span">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 23 24"
                    fill="none"
                    class="icon"
                  >
                    <path
                      d="M6.57143 13.3518C7.00714 13.3518 7.42501 13.1788 7.7331 12.8707C8.0412 12.5626 8.21429 12.1447 8.21429 11.709C8.21429 11.2733 8.0412 10.8554 7.7331 10.5473C7.42501 10.2392 7.00714 10.0661 6.57143 10.0661C6.13572 10.0661 5.71785 10.2392 5.40975 10.5473C5.10166 10.8554 4.92857 11.2733 4.92857 11.709C4.92857 12.1447 5.10166 12.5626 5.40975 12.8707C5.71785 13.1788 6.13572 13.3518 6.57143 13.3518ZM11.5 13.3518C11.9357 13.3518 12.3536 13.1788 12.6617 12.8707C12.9698 12.5626 13.1429 12.1447 13.1429 11.709C13.1429 11.2733 12.9698 10.8554 12.6617 10.5473C12.3536 10.2392 11.9357 10.0661 11.5 10.0661C11.0643 10.0661 10.6464 10.2392 10.3383 10.5473C10.0302 10.8554 9.85714 11.2733 9.85714 11.709C9.85714 12.1447 10.0302 12.5626 10.3383 12.8707C10.6464 13.1788 11.0643 13.3518 11.5 13.3518ZM18.0714 11.709C18.0714 12.1447 17.8983 12.5626 17.5902 12.8707C17.2822 13.1788 16.8643 13.3518 16.4286 13.3518C15.9929 13.3518 15.575 13.1788 15.2669 12.8707C14.9588 12.5626 14.7857 12.1447 14.7857 11.709C14.7857 11.2733 14.9588 10.8554 15.2669 10.5473C15.575 10.2392 15.9929 10.0661 16.4286 10.0661C16.8643 10.0661 17.2822 10.2392 17.5902 10.5473C17.8983 10.8554 18.0714 11.2733 18.0714 11.709ZM23 11.709C23 18.0603 17.8513 23.209 11.5 23.209C5.14871 23.209 0 18.0603 0 11.709C0 5.3577 5.14871 0.208984 11.5 0.208984C17.8513 0.208984 23 5.3577 23 11.709ZM21.3571 11.709C21.3571 6.26538 16.9436 1.85184 11.5 1.85184C6.05639 1.85184 1.64286 6.26538 1.64286 11.709C1.64286 17.1526 6.05639 21.5661 11.5 21.5661C16.9436 21.5661 21.3571 17.1526 21.3571 11.709Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-span">
                <span class="menu-text"> More</span>
              </div>
            </a>
          </div>

          <div class="section4-share-am-div">
            <img
              class="shaream-logo"
              src="../../assets/icons/001 1.svg"
              alt=""
            />
            <h1 class="shaream-txt menu-text">Share<span>Am</span></h1>
          </div>
          
        </nav>
      
`;

class SideBar extends HTMLElement {

  menuText;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  static get observedAttribute() {
    return ["active"];
  }

  get active() {
    return this.getAttribute("active");
  }
  set active(value) {
    return this.setAttribute("active", value);
  }

  connectedCallback() {

    const hamburger = this.shadowRoot.getElementById("hamburger-icon");
    this.menuText = this.shadowRoot.querySelectorAll(".menu-text");
    hamburger.addEventListener("click", this.handleMenuToggle);

    switch (this.active) {
      case "dashboard":
        const dashboard = this.shadowRoot.getElementById("dashboard");
        dashboard.setAttribute("class", "active-menu");
        break;
      case "profile":
        const profile = this.shadowRoot.getElementById("profile");
        profile.setAttribute("class", "active-menu");
        break;
      case "callInterface":
        const callInterface = this.shadowRoot.getElementById("callInterface");
        callInterface.setAttribute("class", "active-menu");
        break;
      case "message":
        const message = this.shadowRoot.getElementById("message");
        message.setAttribute("class", "active-menu");
        break;
      case "contact":
        const contact = this.shadowRoot.getElementById("contact");
        contact.setAttribute("class", "active-menu");
        break;
      case "calendar":
        const calender = this.shadowRoot.getElementById("calendar");
        calender.setAttribute("class", "active-menu");
        break;
      case "notification":
        const notification = this.shadowRoot.getElementById("notification");
        notification.setAttribute("class", "active-menu");
        break;
      default:
        const settings = this.shadowRoot.getElementById("settings");
        settings.setAttribute("class", "active-menu");
        break;
    }
  }

  handleMenuToggle = () => {
    this.menuText.forEach(span => {
      span.classList.toggle('display-text');
    })
  }
}

customElements.define("side-bar", SideBar);
