const template = document.createElement("template");
template.innerHTML = `
  <style>
   .desktop-msg-subtitle-txt {
        color: #dad9d9;
        font-family: Poppins-regular;
        font-size: 0.9rem;
        font-weight: 500;
        user-select: none;
        margin: 0;
    }
  </style>

  <p class="real-time-reading desktop-msg-subtitle-txt">
    REC 00:00:00
  </p>
`;

class TimeInterval extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).append(
      template.content.cloneNode(true)
    );
    this.state = false;
    this.timerInterval = null;
    this.seconds = 0; // Keep track of elapsed time
  }

  connectedCallback() {
    document.addEventListener("toggle", this.handleToggle);
  }

  handleToggle = (event) => {
    if (event.detail.name !== "recording") return;

    this.state = event.detail.state;
    this.state ? this.startTimer() : this.pauseTimer();
  };

  startTimer() {
    if (this.timerInterval) return; // Prevent multiple intervals

    const timerDisplay = this.shadowRoot.querySelector(".real-time-reading");
    if (!timerDisplay) return;

    this.timerInterval = setInterval(() => {
      this.seconds++;
      timerDisplay.textContent = `REC ${this.formatTime(this.seconds)}`;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    // No reset, so it resumes when turned on again
  }

  formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  }
}

customElements.define("time-interval", TimeInterval);
