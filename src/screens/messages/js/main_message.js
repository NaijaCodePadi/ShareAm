
import { msgSample } from "../../../variables/mock_variables/mock_message.js";

const chatDiv = document.querySelector(".left-side-div2-bottom");



msgSample.forEach((item) => {
  const chatContain = document.createElement("div");
  chatContain.classList.add("user-div");


  chatContain.innerHTML = `
        <div class="user-details-div1">
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
        <div class="user-details-div2">
            <div class="user-details">
                <section>
                    <p class="
                        friends-display-name-text
                    ">${item.name ? item.name : item.username}</p>
                    
                    ${
                      item.verified
                        ? `
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                        >
                            <path
                                d="M18.7835 9.00013L16.7447 6.84467L17.0288 3.9939L14.0123 3.3604L12.433 0.888184L9.59195 2.01613L6.75092 0.888184L5.17165 3.35267L2.15514 3.97845L2.43925 6.83695L0.400391 9.00013L2.43925 11.1556L2.15514 14.0141L5.17165 14.6476L6.75092 17.1121L9.59195 15.9764L12.433 17.1044L14.0123 14.6399L17.0288 14.0064L16.7447 11.1556L18.7835 9.00013ZM7.99596 12.6466L4.82069 9.70317L6.05738 8.55977L7.99596 10.3598L12.8842 5.82488L14.1209 6.96828L7.99596 12.6466Z"
                                fill="#5858FA"
                            />
                        </svg>
                        `
                        : ``
                    }
                    
                </section>

                <p class="date-text">${item.deliveryTime}</p>
            </div>

            <div>
                ${
                  item.dispearing
                    ? `
                    <svg
                        // fill="#0490ec"
                        viewBox="0 0 24 24"
                        id="Layer_1"
                        data-name="Layer 1"
                        width="14px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                        <path
                            d="M24,12A12,12,0,0,1,0,12a1,1,0,0,1,2,0A10,10,0,1,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12ZM10.277,11H8a1,1,0,0,0,0,2h2.277A1.994,1.994,0,1,0,13,10.277V7a1,1,0,0,0-2,0v3.277A2,2,0,0,0,10.277,11ZM1.827,8.784a1,1,0,1,0-1-1A1,1,0,0,0,1.827,8.784ZM4.221,5.207a1,1,0,1,0-1-1A1,1,0,0,0,4.221,5.207ZM7.779,2.841a1,1,0,1,0-1-1A1,1,0,0,0,7.779,2.841Z"
                        ></path>
                        </g>
                    </svg>
                `
                    : ``
                }
                <p class="message-text">${item.lastChat}</p>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                class="bookmark"
            >
                <g clip-path="url(#clip0_531_1267)">
                    <path
                    d="M3.64258 4.05137C3.64258 3.23744 3.93809 2.45684 4.46411 1.8813C4.99012 1.30576 5.70356 0.982422 6.44746 0.982422L17.667 0.982422C18.4109 0.982422 19.1243 1.30576 19.6503 1.8813C20.1763 2.45684 20.4718 3.23744 20.4718 4.05137V24.7668C20.4718 24.9056 20.4373 25.0417 20.3721 25.1608C20.3069 25.2798 20.2134 25.3773 20.1016 25.4428C19.9898 25.5083 19.8638 25.5394 19.7371 25.5328C19.6104 25.5261 19.4877 25.482 19.3821 25.4051L12.0572 21.0856L4.73227 25.4051C4.62668 25.482 4.504 25.5261 4.3773 25.5328C4.25061 25.5394 4.12464 25.5083 4.01282 25.4428C3.901 25.3773 3.80751 25.2798 3.74231 25.1608C3.67711 25.0417 3.64264 24.9056 3.64258 24.7668V4.05137ZM6.44746 2.5169C6.07551 2.5169 5.71879 2.67857 5.45578 2.96634C5.19277 3.25411 5.04502 3.64441 5.04502 4.05137V23.3336L11.6687 19.525C11.7838 19.4412 11.919 19.3965 12.0572 19.3965C12.1954 19.3965 12.3306 19.4412 12.4457 19.525L19.0694 23.3336V4.05137C19.0694 3.64441 18.9216 3.25411 18.6586 2.96634C18.3956 2.67857 18.0389 2.5169 17.667 2.5169H6.44746Z"
                    fill-opacity="0.9"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_531_1267">
                    <rect
                        width="22.439"
                        height="24.5516"
                        fill="white"
                        transform="translate(0.837891 0.982422)"
                    />
                    </clipPath>
                </defs>
            </svg>
        
        </div>
       
    `;

  chatDiv.appendChild(chatContain);
});



const divs = document.querySelectorAll(".user-div")

divs.forEach((div, index) => {
    div.addEventListener("click", ()=> {

        divs.forEach(d => d.classList.remove('active'))
        div.classList.add("active")
        console.log(index)
    
    })
})

