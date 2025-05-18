const activeMicIcon = document.getElementById("active-mic-icon");
const waveShadow1 = document.querySelector(".wave-shadow-1");
const lineWave = document.querySelectorAll(".line-wave");

let micEnabled;
let localStream = null;
let audioContext = null;
let analyser = null;
let microphone = null;
let isVisualizing = false;


// When the form data is received from main process
window.electronAPI.onReceiveFormData((formData) => {
  sessionStorage.setItem("callData", JSON.stringify(formData));
  sessionStorage.setItem("micState", formData.micState);
  sessionStorage.setItem("cameraState", formData.cameraState);

  micEnabled = formData.micState === "true";
  handleMicrophoneActivation(); // ✅ Activate microphone immediately based on state
});


async function initAudioProcessing() {
  try {
    if (!localStream) return;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    microphone = audioContext.createMediaStreamSource(localStream);
    microphone.connect(analyser);

    isVisualizing = true;
    visualizeAudio();
  } catch (err) {
    console.error("Error initializing audio processing:", err);
  }
}

function visualizeAudio() {
  if (!analyser) return;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  function update() {
    if (!isVisualizing) return;

    analyser.getByteFrequencyData(dataArray);
    const maxVolume = Math.max(...dataArray);

    if (maxVolume > 50) {
      let lineHeight = maxVolume / 2.55;

      lineWave.forEach((span) => {
        let variation = Math.random() * 20 - 10;
        span.style.height = `${lineHeight + variation}%`;
      });

      const shadowSize = maxVolume / 2.55;
      waveShadow1.style.height = `${100 + shadowSize}px`;
      waveShadow1.style.width = `${100 + shadowSize}px`;
      const borderWidth = Math.max(5, 20 - shadowSize / 10);
      waveShadow1.style.border = `${borderWidth}px solid rgb(${Math.floor(
        shadowSize * 2
      )}, 0, 255)`;
      waveShadow1.style.boxShadow = `0px 0px 15px 7px inset rgb(${Math.floor(
        shadowSize * 2
      )}, 0, 255)`;
    } else {
      lineWave.forEach((span) => {
        span.style.height = "20%";
      });

      waveShadow1.style.height = "100px";
      waveShadow1.style.width = "100px";
    }

    requestAnimationFrame(update);
  }

  update();
}

async function handleMicrophoneActivation() {
  try {
    if (micEnabled) {
      localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      initAudioProcessing();

      activeMicIcon.innerHTML = `<svg
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
                    </svg>`;
    } else {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
        localStream = null;
      }
      isVisualizing = false;

      activeMicIcon.innerHTML = `<svg
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
      lineWave.forEach((span) => {
        span.style.height = "20%";
      });
      waveShadow1.style.height = "100px";
      waveShadow1.style.width = "100px";
    }
  } catch (error) {
    console.error("Error toggling microphone:", error);
  }
}

const handleMicToggle = () => {
  micEnabled = !micEnabled;
  sessionStorage.setItem("micState", micEnabled);
  handleMicrophoneActivation();
};

activeMicIcon.addEventListener("click", handleMicToggle);
