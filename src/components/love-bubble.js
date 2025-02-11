const template = document.createElement("template");
template.innerHTML = `
    <style> 
      .heart-copy {
        position: absolute;
        width: 28px;
        height: 27px; 
        animation: bubble-up 2s ease-out forwards;
      }

      @keyframes bubble-up {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 1;
        }
        50% {
          transform: translate(0, -260px) scale(1.2);
          opacity: 0.8;
        }
        100% {
          transform: translate(0, -360px) scale(0.8);
          opacity: 0;
        }
      }
      
    </style>

    
    <span id="heart-container">
      <svg
        width="24"
        height="22"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="trigger-heart"
      >
        <path
          id="path-color"
          d="M15.5219 1.06294C13.682 -0.557503 10.9457 -0.266031 9.2569 1.53485L8.59548 2.23924L7.93407 1.53485C6.24863 -0.266031 3.50895 -0.557503 1.66906 1.06294C-0.439414 2.92281 -0.55021 6.26086 1.33668 8.27687L7.83334 15.2097C8.25303 15.6574 8.93459 15.6574 9.35427 15.2097L15.8509 8.27687C17.7412 6.26086 17.6304 2.92281 15.5219 1.06294Z"
          fill="#DAD9D9"
          fill-opacity="0.9"
        />
      </svg>
    </span>
`;

class LoveBubble extends HTMLElement {
  triggerHeart;
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  connectedCallback() {
    this.triggerHeart = this.shadowRoot.getElementById("trigger-heart");

    this.triggerHeart.addEventListener("click", this.handleTriggerHeart);
  }
  handleTriggerHeart = () => {
    const heartContainer = this.shadowRoot.getElementById("heart-container");
    const pathColor = this.shadowRoot.getElementById("path-color");

    pathColor.setAttribute("fill", "red");

    setTimeout(() => {
      pathColor.setAttribute("fill", "#DAD9D9");
    }, 2000);

    const heartCopy = this.triggerHeart.cloneNode(true);
    heartCopy.classList.add("heart-copy");

    const containerWidth = heartContainer.offsetWidth;
    const containerHeight = heartContainer.offsetHeight;

    const startX = Math.random() * containerWidth;

    heartCopy.style.right = `${Math.round(startX) + 10}%`;
    heartCopy.style.left = `${Math.round(startX) + 80}%`;

    heartContainer.appendChild(heartCopy);

    heartCopy.addEventListener("animationend", () => {
      heartCopy.remove();
    });
  };
}
customElements.define("love-bubble", LoveBubble);
