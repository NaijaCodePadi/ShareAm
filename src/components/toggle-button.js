// const template = document.createElement("template");
// template.innerHTML = `
//   <style>
//     .toggle-btn {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       }

//     .switch {
//       position: relative;
//       display: inline-block;
//       width: 32px;
//       height: 14px;
//     }

//     .switch input {
//       opacity: 0;
//       width: 0;
//       height: 0;
//     }

//     .slider {
//       position: absolute;
//       cursor: pointer;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-color: #c7c7f9;
//       transition: 0.2s;
//       border-radius: 34px;
//     }

//     .slider:before {
//       position: absolute;
//       content: "";
//       height: 20px;
//       width: 20px;
//       left: 0px;
//       bottom: -3.1px;
//       background-color: #a9a9a9;
//       transition: 0.2s;
//       border-radius: 50%;
//     }

//     input:checked + .slider:before {
//       background-color: var(--toggle-color, #150aa1); /* Default blue */
//     }

//     input:checked + .slider {
//       box-shadow: 0 0 3px var(--toggle-color, #150aa1);
//     }

//     input:checked + .slider:before {
//       transform: translateX(13px);
//     }
//   </style>

//   <div class="toggle-btn">
//     <label class="switch">
//       <input type="checkbox" id="check">
//       <span class="slider round"></span>
//     </label>
//   </div>
// `;

// class ToggleButton extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" }).append(
//       template.content.cloneNode(true)
//     );
//     this.state = false; // Default state
//     this.timerInterval = null; // To store the interval reference
//     this.seconds = 0; // Timer count in seconds
//   }

//   static get observedAttributes() {
//     return ["name", "color"];
//   }

//   get name() {
//     return this.getAttribute("name");
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     if (name === "color") {
//       this.updateColor(newValue);
//     }
//   }

//   connectedCallback() {
//     this.check = this.shadowRoot.getElementById("check");
//     this.check.addEventListener("click", this.handleCheck);
//     this.updateColor(this.getAttribute("color"));
//   }

//   handleCheck = () => {
//     this.state = !this.state;
//     const value = { [this.name]: this.state };
//     console.log(value); // Logs the state change

//     // Find the timer display
//     const timerDisplay = document.querySelector(".real-time-reading");
//     if (timerDisplay) {
//       if (this.state) {
//         // Start the timer
//         this.startTimer(timerDisplay);
//       } else {
//         // Stop the timer
//         this.stopTimer();
//       }
//     }
//   };

//   updateColor(color) {
//     if (color) {
//       this.style.setProperty("--toggle-color", color);
//     }
//   }

//   startTimer(timerDisplay) {
//     if (this.timerInterval) return; // Avoid multiple intervals
//     this.timerInterval = setInterval(() => {
//       this.seconds++;
//       timerDisplay.textContent = `REC ${this.formatTime(this.seconds)}`;
//     }, 1000);
//   }

//   stopTimer() {
//     clearInterval(this.timerInterval);
//     this.timerInterval = null;
//   }

//   formatTime(seconds) {
//     const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const secs = String(seconds % 60).padStart(2, "0");
//     return `${hrs}:${mins}:${secs}`;
//   }
// }

// customElements.define("toggle-button", ToggleButton);

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .toggle-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      }

    .switch {
      position: relative;
      display: inline-block;
      width: 32px;
      height: 14px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #c7c7f9;
      transition: 0.2s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 0px;
      bottom: -3.1px;
      background-color: #a9a9a9;
      transition: 0.2s;
      border-radius: 50%;
    }

    input:checked + .slider:before {
      background-color: var(--toggle-color, #150aa1); /* Default blue */
    }

    input:checked + .slider {
      box-shadow: 0 0 3px var(--toggle-color, #150aa1);
    }

    input:checked + .slider:before {
      transform: translateX(13px);
    }
  </style>

  <div class="toggle-btn">
    <label class="switch">
      <input type="checkbox" id="check">
      <span class="slider round"></span>
    </label>
  </div>
`;

class ToggleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).append(
      template.content.cloneNode(true)
    );
    this.state = false; // Default state
  }

  static get observedAttributes() {
    return ["name", "color"];
  }

  get name() {
    return this.getAttribute("name");
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "color") {
      this.updateColor(newValue);
    }
  }

  connectedCallback() {
    this.check = this.shadowRoot.getElementById("check");
    this.check.addEventListener("click", this.handleCheck);
    this.updateColor(this.getAttribute("color"));
  }

  handleCheck = () => {
    this.state = !this.state;
    const value = { [this.name]: this.state };
    this.dispatchEvent(
      new CustomEvent(`${this.name}_value`, { detail: value })
    );
    console.log(value, this.name); // Logs the state change
  };

  updateColor(color) {
    if (color) {
      this.style.setProperty("--toggle-color", color);
    }
  }
}

customElements.define("toggle-button", ToggleButton);
