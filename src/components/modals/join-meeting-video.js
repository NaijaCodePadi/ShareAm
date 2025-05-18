const template = document.createElement("template");
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    @font-face {
      font-family: poppins-bold;
      src: url(../../assets/fonts/Poppins-Bold.ttf);
    }
    @font-face {
      font-family: poppins-regular;
      src: url(../../assets/fonts/Poppins-Regular.ttf);
    }
    @font-face {
      font-family: poppins-medium;
      src: url(../../assets/fonts/Poppins-Medium.ttf);
    }
    @font-face {
      font-family: Rubik;
      src: url(../../assets/fonts/Rubik-VariableFont_wght.ttf);
    }
    html {
      font-size: 16px;
    }
    body {
      user-select: none;
      font-family: poppins-regular;
    }

    #localVideo {
      border-radius: 11px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    #mic-wrap, #video-wrap {
      background-color: #1a71ff;
      height: 9vh;
      width:5vw;
      border-radius: 18px;
      cursor: pointer;
      border: none;
    }

    #end-call-wrap {
      color: #fff;
      background-color: #ff4949;
      padding: 3vh 3vw;
      border-radius: 18px;
      cursor: pointer;
      border: none;
    }
      
    .blue-btn-txt {
      color: #fff;
      font-family: Poppins-regular;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .video-display {
      width: 40vw;
      height: 60vh;
      position: relative;
      border-radius: 18px;
    }

    .btns-wrapper {
      height: 100px;
      width: 100%;
      position: absolute;
      bottom: 0;
    }

    .call-btns {
      display: flex;
      justify-content: space-evenly;
      margin-top: 1vh;
    }

    .wave {
        width: 3.7vw;
        height: 7vh;
        padding: 1vh 0.3vw;
        border-radius: 4px;
        background-color: #979797;
        position: absolute;
        right: 4%;
        top: 4%;
        display: inline-flex;
        gap: 0.4vw;
        justify-content: center;
        align-items: center;
    }

    .wave div {
        width: 0.5vw;
        background-color: #000;
        border-radius: 4px;
        height: 20%;
    }

    .line-wave {
        height: 20%;
    }

    @media only screen and (max-width: 1200px) {
        .wave {
            width: 4vw;
            height: 7vh;
        }
    }

    @media only screen and (max-width: 1085px) {
        .wave {
            width: 5vw;
            height: 7vh;
        }
    }

    @media only screen and (max-width: 992px) {
        .wave {
            width: 5.5vw;
            height: 7vh;
        }
    }

    @media only screen and (max-width: 768px) {
        .wave {
            width: 7vw;
            height: 6vh;
        }
    }

    @media only screen and (max-width: 600px) {
        .wave {
            width: 9vw;
            height: 6vh;
        }
    }

    @media (prefers-color-scheme: light) {
        .video-display {
            background: radial-gradient(circle at -65% -65%, #910bfa, #22074a);
        }
    }   
      
    @media (prefers-color-scheme: dark) {      
      .video-display {
        background-color: #1f201f;
      }
    }   
  </style>

    <div class="video-display">
      <video id="localVideo" autoplay muted></video>
        <div class="wave">
            <div class="span-1 line-wave"></div>
            <div class="span-2 line-wave"></div>
            <div class="span-3 line-wave"></div>
            <div class="span-4 line-wave"></div>
        </div>
        <div class="btns-wrapper">
            <div class="call-btns">
            <button 
                id="mic-wrap" 
                type="button"
            >
                <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="32"
              height="34"
              x="-1"
              y="-1"
              viewBox="0 0 24 24"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >

            <g transform="matrix(0.6500000000000006,0,0,0.6500000000000006,4.199912548065181,4.200000000000001)">
            <g fill="#000">
            <path
              d="M5.847 12c0 3.314 2.548 6 5.692 6 1.23 0 2.369-.41 3.3-1.11l.678.716A6.393 6.393 0 0 1 11.54 19c-3.669 0-6.642-3.134-6.642-7 0-.552-.425-1-.95-1S3 11.448 3 12c0 4.633 3.322 8.448 7.592 8.945l-.001.055v1H8.693c-.524 0-.949.448-.949 1s.425 1 .949 1h5.693c.524 0 .949-.448.949-1s-.425-1-.949-1h-1.898v-1l-.001-.055a8.274 8.274 0 0 0 4.383-1.913l2.51 2.646c.37.39.971.39 1.342 0 .37-.39.37-1.024 0-1.414L4.62 3.293a.915.915 0 0 0-1.342 0c-.37.39-.37 1.024 0 1.414l2.569 2.707zM6.478 3.251l10.368 10.927c.25-.675.387-1.41.387-2.178V6c0-3.314-2.55-6-5.693-6-2.205 0-4.116 1.32-5.062 3.251zM17.569 14.94l1.409 1.485A9.337 9.337 0 0 0 20.078 12c0-.552-.425-1-.949-1s-.949.448-.949 1c0 1.05-.219 2.046-.612 2.94z"
              fill="#acacac"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
            </g>
            </g>
            </svg>
            </button>

            <button 
                class="blue-btn-txt"
                id="end-call-wrap" 
                type="button"
            >
                End
            </button>

            <button 
                type="button"
                id="video-wrap"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg" width="24"
                height="19" fill="#acacac" viewBox="0 0 640 512">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2l0-256c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9l0 17.1 0 128 0 5.8-32-25.1L416 128c0-35.3-28.7-64-64-64L113.9 64 38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5l0 256c0 35.3 28.7 64 64 64l256 0c23.4 0 43.9-12.6 55-31.3z"/>
                </svg>
            </button>
            </div>
        </div>
    </div>
`;

class joinVideo extends HTMLElement {
  localStream;
  micEnabled = false;
  cameraEnabled = false;
  activeMicIcon;
  isVisualizing = false;

  audioContext;
  analyser;
  microphone;
  lineWave;
  constructor() {
    super();
    this.shadowRootRef = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    this.shadowRootRef.append(clone);
    this.lineWave = this.shadowRootRef.querySelectorAll(".line-wave");
    this.activeMicIcon = this.shadowRootRef.getElementById("mic-wrap");
    this.micEnabled = sessionStorage.getItem("micState");
    this.cameraEnabled = sessionStorage.getItem("cameraState");
  }

  connectedCallback() {
    const toogleVideoButton = this.shadowRootRef.getElementById("video-wrap");
    const toggleMicButton = this.shadowRootRef.getElementById("mic-wrap");
    sessionStorage.setItem("cameraState", this.cameraEnabled);
    sessionStorage.setItem("micState", this.micEnabled);

    if (toogleVideoButton) {
      toogleVideoButton.addEventListener("click", this.handleActivateCamera);
    } else {
      console.error("Video button not found");
    }

    if (toggleMicButton) {
      toggleMicButton.addEventListener("click", this.handleActivateMic);
    } else {
      console.error("Mic button not found");
    }
  }

  // Function to initialize audio processing
  initAudioProcessing = async () => {
    try {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();

      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;

      this.microphone = this.audioContext.createMediaStreamSource(
        this.localStream
      );
      this.microphone.connect(this.analyser);

      this.visualizeAudio();
    } catch (err) {
      console.error("Error initializing audio processing:", err);
    }
  };

  visualizeAudio = () => {
    if (!this.isVisualizing) return;

    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    const update = () => {
      if (!this.isVisualizing) return;

      this.analyser.getByteFrequencyData(dataArray);
      const maxVolume = Math.max(...dataArray);

      if (maxVolume > 50) {
        let lineHeight = maxVolume / 2.55;

        this.lineWave.forEach((span) => {
          let variation = Math.random() * 20 - 10;
          span.style.height = `${lineHeight + variation}%`;
        });
      } else {
        this.lineWave.forEach((span) => {
          span.style.height = "20%";
        });
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  handleActivateMic = async () => {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const activeMicIcon = this.shadowRootRef.getElementById("mic-wrap");
    const audioTrack = this.localStream.getAudioTracks()[0];
    if (audioTrack) {
      this.micEnabled = !this.micEnabled;
      audioTrack.enabled = this.micEnabled;

      activeMicIcon.innerHTML = this.micEnabled
        ? `<svg
                      width="30"
                      height="32"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.50024 2.62256C7.79576 2.62256 7.12014 2.90209 6.62199 3.39965C6.12385 3.89722 5.84399 4.57206 5.84399 5.27573V8.99017C5.84399 9.69383 6.12385 10.3687 6.62199 10.8662C7.12014 11.3638 7.79576 11.6433 8.50024 11.6433C9.20473 11.6433 9.88035 11.3638 10.3785 10.8662C10.8766 10.3687 11.1565 9.69383 11.1565 8.99017V5.27573C11.1565 4.57206 10.8766 3.89722 10.3785 3.39965C9.88035 2.90209 9.20473 2.62256 8.50024 2.62256ZM4.25024 8.45953C4.39114 8.45953 4.52627 8.51544 4.62589 8.61495C4.72552 8.71447 4.78149 8.84943 4.78149 8.99017C4.78149 9.9753 5.17329 10.9201 5.87069 11.6167C6.56809 12.3133 7.51397 12.7046 8.50024 12.7046C9.48652 12.7046 10.4324 12.3133 11.1298 11.6167C11.8272 10.9201 12.219 9.9753 12.219 8.99017C12.219 8.84943 12.275 8.71447 12.3746 8.61495C12.4742 8.51544 12.6093 8.45953 12.7502 8.45953C12.8911 8.45953 13.0263 8.51544 13.1259 8.61495C13.2255 8.71447 13.2815 8.84943 13.2815 8.99017C13.2817 10.165 12.8484 11.2988 12.0643 12.1745C11.2802 13.0503 10.2004 13.6067 9.03149 13.7372V14.8271C9.03149 14.9679 8.97552 15.1028 8.8759 15.2024C8.77627 15.3019 8.64114 15.3578 8.50024 15.3578C8.35935 15.3578 8.22422 15.3019 8.12459 15.2024C8.02497 15.1028 7.96899 14.9679 7.96899 14.8271V13.7372C6.80004 13.6067 5.72028 13.0503 4.9362 12.1745C4.15213 11.2988 3.71877 10.165 3.71899 8.99017C3.71899 8.84943 3.77497 8.71447 3.87459 8.61495C3.97422 8.51544 4.10935 8.45953 4.25024 8.45953Z"
                       fill="#DAD9D9"
                      />
                    </svg>`
        : `<svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="32"
              height="34"
              x="-1"
              y="-1"
              viewBox="0 0 24 24"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >

            <g transform="matrix(0.6500000000000006,0,0,0.6500000000000006,4.199912548065181,4.200000000000001)">
            <g fill="#000">
            <path
              d="M5.847 12c0 3.314 2.548 6 5.692 6 1.23 0 2.369-.41 3.3-1.11l.678.716A6.393 6.393 0 0 1 11.54 19c-3.669 0-6.642-3.134-6.642-7 0-.552-.425-1-.95-1S3 11.448 3 12c0 4.633 3.322 8.448 7.592 8.945l-.001.055v1H8.693c-.524 0-.949.448-.949 1s.425 1 .949 1h5.693c.524 0 .949-.448.949-1s-.425-1-.949-1h-1.898v-1l-.001-.055a8.274 8.274 0 0 0 4.383-1.913l2.51 2.646c.37.39.971.39 1.342 0 .37-.39.37-1.024 0-1.414L4.62 3.293a.915.915 0 0 0-1.342 0c-.37.39-.37 1.024 0 1.414l2.569 2.707zM6.478 3.251l10.368 10.927c.25-.675.387-1.41.387-2.178V6c0-3.314-2.55-6-5.693-6-2.205 0-4.116 1.32-5.062 3.251zM17.569 14.94l1.409 1.485A9.337 9.337 0 0 0 20.078 12c0-.552-.425-1-.949-1s-.949.448-.949 1c0 1.05-.219 2.046-.612 2.94z"
              fill="#acacac"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
            </g>
            </g>
            </svg>`;
      sessionStorage.setItem("micState", this.micEnabled);

      if (this.micEnabled) {
        if (!this.audioContext) {
          this.initAudioProcessing();
        }
        this.isVisualizing = true;
        this.visualizeAudio();
      } else {
        this.isVisualizing = false;
        this.lineWave.forEach((span) => {
          span.style.height = "20%";
        });

      }
    }
  };

  handleActivateCamera = async () => {
    try {
      const localVideo = this.shadowRootRef.getElementById("localVideo");
      const activateCameraIcon =
        this.shadowRootRef.getElementById("video-wrap");
      if (!this.cameraEnabled) {
        this.localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        localVideo.srcObject = this.localStream;
        localVideo.style.transform = "scaleX(-1)";
        this.cameraEnabled = true;
        activateCameraIcon.innerHTML = `<svg
              width="24"
              height="19"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.58785 0.5L1.07882 0.5C0.482986 0.5 0 0.945833 0 1.49583L0 7.50417C0 8.05417 0.482986 8.5 1.07882 8.5H7.58785C8.18368 8.5 8.66667 8.05417 8.66667 7.50417V1.49583C8.66667 0.945833 8.18368 0.5 7.58785 0.5ZM11.8625 1.28542L9.38889 2.86042V6.13958L11.8625 7.7125C12.341 8.01667 13 7.70625 13 7.175V1.82292C13 1.29375 12.3432 0.98125 11.8625 1.28542Z"
                fill="#DAD9D9"
              />
            </svg>`;
        sessionStorage.setItem("cameraState", this.cameraEnabled);
      } else {
        if (this.localStream) {
          const videoTrack = this.localStream.getVideoTracks()[0];
          if (videoTrack) videoTrack.stop();
        }
        localVideo.srcObject = null;
        localVideo.style.transform = "";
        this.cameraEnabled = false;
        activateCameraIcon.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg" width="24"
              height="19" fill="#acacac" viewBox="0 0 640 512">
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2l0-256c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9l0 17.1 0 128 0 5.8-32-25.1L416 128c0-35.3-28.7-64-64-64L113.9 64 38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5l0 256c0 35.3 28.7 64 64 64l256 0c23.4 0 43.9-12.6 55-31.3z"/>
            </svg>`;
        sessionStorage.setItem("cameraState", this.cameraEnabled);
      }
    } catch (error) {
      console.error("Error toggling camera:", error);
    }
  };
}

customElements.define("join-video", joinVideo);
