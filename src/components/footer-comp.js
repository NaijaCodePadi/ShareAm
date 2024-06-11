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

        .footer-container {
            display: flex;
            height: 7vh;
            padding-right: 3vw;
            align-items: center;
            background-image: url("../../assets/icons/video-conference.svg"),
                url("../../assets/icons/worldwide-location.svg"),
                url("../../assets/icons/chat-room.svg"),
                url("../../assets/icons/Man-On-Phone.svg"),
                url("../../assets/icons/video-conference.svg"),
                url("../../assets/icons/worldwide-location.svg"),
                url("../../assets/icons/chat-room.svg"),
                url("../../assets/icons/Man-On-Phone.svg"),
                url("../../assets/icons/video-conference.svg"),
                url("../../assets/icons/worldwide-location.svg"),
                url("../../assets/icons/chat-room.svg"),
                url("../../assets/icons/Man-On-Phone.svg");

            background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
                no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;

            background-position: top 1vh right 2vw, top 4vh right 12vw, top 1vh right 20vw,
                top 3.7vh right 27vw, top 3vh right 34vw, top 4vh right 45vw,
                top 3vh right 52vw, top 2vh right 60vw, top 2vh right 70vw,
                top 3.5vh right 80vw, top 4vh right 90vw, top 3.7vh right 97vw;
            background-size: 30px;
        }

        .section4-text {
            text-align: right;
            margin-left: auto;
        }

        .section4-text p {
            color: #e4edf6;
            font-family: Poppins-medium;
            font-size: 1rem;
            font-weight: 500;
        }

        @media (prefers-color-scheme: light) {
            .footer-container {
                background-color: #22074a;
            }
        }

        @media (prefers-color-scheme: dark) {
            .footer-container {
                background-color: #1f201f;
            }
        }

    </style>

    <footer class="footer-container">
          <div class="section4-text">
          <p>
            <slot name="text"></slot>
          </p>
          </div>
    </footer>
`;

class FooterComp extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("footer-comp", FooterComp);
