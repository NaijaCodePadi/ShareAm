const template = document.createElement("template");
template.innerHTML = `
    <style>
        
        *{
            padding: 0;
            margin: 0;
        }

        @font-face {
            font-family: poppins-bold;
            src: url(../assets/fonts/Poppins-Bold.ttf);
        }

        @font-face {
            font-family: poppins-regular;
            src: url(../assets/fonts/Poppins-Regular.ttf);
        }

        @font-face {
            font-family: poppins-medium;
            src: url(../assets/fonts/Poppins-Medium.ttf);
        }

        @font-face {
            font-family: Rubik;
            src: url(../assets/fonts/Rubik-Italic-VariableFont_wght.ttf);
        }

        .popup-notification-container {
            height: 49px;
            /* margin-top: 2vh; */
            display: block;
        }
    
        .popup-notification {
            display: flex;
            width: 100%;
            height: 49px;
            align-items: center;
            justify-content: center;
            padding: 0 1vw;
            gap: 3vw;
            border-radius: 18px;
        }
    
        .verified-icon {
            height: 40px;
        }
        
        .popup-message {
            height: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8vw;
        }

        .popup-txt {
            color: #000;
            font-family: poppins-regular;
            font-size: 1rem;
            font-weight: 600;
        }
        
        .close-popup-btn {
            height: 28px;
            cursor: pointer;
        }

        @media (prefers-color-scheme: dark) {
            .popup-notification {background: linear-gradient(
                90deg,
                #f1f1f1 1.22%,
                rgba(228, 208, 249, 0) 100%
            );
            }
        }

        @media (prefers-color-scheme: light) {
            .popup-notification {background: linear-gradient(
                90deg,
                #a0a0f6 1.22%,
                rgba(228, 208, 249, 0) 100%
                );
            }
        }
      
    </style>

    <div class="popup-notification-container">
        <div class="popup-notification">
            <div class="verified-icon">
                <svg
                width="40"
                height="40"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle cx="22.5" cy="22.5" r="22" stroke="#22074A" />
                <path
                    d="M32 15.918L11.4286 36.4996L2 27.0664L4.41714 24.648L11.4286 31.6458L37 10L32 15.918Z"
                    fill="#22074A"
                />
                </svg>
            </div>

            <div class="popup-message">
                <div class="popup-txt">
                    <slot name="message"></slot>
                </div>
                <div class="close-popup-btn">
                    <svg
                        width="21"
                        height="28"
                        viewBox="0 0 21 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M12.792 20.5L10.376 16.74L8.184 20.5H5.656L9.176 14.868L5.608 9.332H8.184L10.6 13.076L12.776 9.332H15.304L11.8 14.948L15.368 20.5H12.792Z"
                        fill="black"
                        />
                        <rect
                        x="0.5"
                        y="1"
                        width="20"
                        height="27"
                        stroke="black"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
`

class ToastPopUp extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "closed" })
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define("toast-popup", ToastPopUp);