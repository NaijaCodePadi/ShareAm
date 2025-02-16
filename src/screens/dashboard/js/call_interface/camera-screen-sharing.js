const activateCameraIcon = document.getElementById("camera-icon");
const cameraVideo = document.getElementById("camera-video");
const shareScreenVideo = document.getElementById("share-screen-video");
const animationWave = document.getElementById("animation-wave");
const callInterfaceMouseControl = document.getElementById(
  "call-interface-mouse-control"
);
const usersDisplayWrapper = document.getElementById("users-display");
const actionButtonsWrapper = document.getElementById("action-btns-wrapper");

// ---------- ACTIVATION OF CAMERA AND SHARING OF SCREEN ---------- //
let localStream;
let cameraEnabled = sessionStorage.getItem("cameraState") === "true";
let isShareScreen;

const handleWavePhoto = () => {
  if (cameraEnabled || isShareScreen) {
    animationWave.style.display = "none";
  } else {
    animationWave.style.display = "block";
  }
};

const startScreenSharing = async () => {
  if (shareScreenVideo.srcObject === null) {
    try {
      const sources = await window.shareScreen.getSources();
      const screenSource = sources.find(
        (source) => source.name === "Entire screen"
      );

      if (screenSource) {
        cameraVideo.style.display = "none";

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            mandatory: {
              chromeMediaSource: "desktop",
              chromeMediaSourceId: screenSource.id,
              maxFrameRate: 60,
            },
          },
        });
        shareScreenVideo.srcObject = stream;
        isShareScreen = true;
        handleWavePhoto();
      }
    } catch (error) {
      console.error("Error starting screen sharing:", error);
    }
  } else {
    shareScreenVideo.srcObject = null;
    cameraVideo.style.display = "block";
    isShareScreen = false;
    handleWavePhoto();
  }
};

document
  .getElementById("share-screen-btn")
  .addEventListener("click", startScreenSharing);

// Activates camera
const handleCameraActivation = async () => {
  try {
    if (cameraEnabled) {
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      cameraVideo.srcObject = localStream;
      handleWavePhoto();
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
    } else {
      if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0];
        if (videoTrack) videoTrack.stop();
      }
      cameraVideo.srcObject = null;
      handleWavePhoto();
      activateCameraIcon.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"  width="24"
                  height="19" fill="#acacac" viewBox="0 0 640 512">
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2l0-256c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9l0 17.1 0 128 0 5.8-32-25.1L416 128c0-35.3-28.7-64-64-64L113.9 64 38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5l0 256c0 35.3 28.7 64 64 64l256 0c23.4 0 43.9-12.6 55-31.3z"/>
              </svg>`;
    }
  } catch (error) {
    console.error("Error toggling camera:", error);
  }
};

// Toggle camera
const handleCameraToggle = () => {
  cameraEnabled = !cameraEnabled;
  sessionStorage.setItem("cameraState", cameraEnabled);
  handleCameraActivation();
};

activateCameraIcon.addEventListener("click", handleCameraToggle);

document.addEventListener("DOMContentLoaded", () => {
  cameraEnabled = sessionStorage.getItem("cameraState") === "true";
  handleCameraActivation();
});

// ------- MOUSE HOVER EFFECT -------- //
const handleSharescreenMouseEnter = () => {
  if (cameraEnabled || isShareScreen) {
    usersDisplayWrapper.style.display = "block";
    actionButtonsWrapper.style.display = "block";
  }
};

callInterfaceMouseControl.addEventListener(
  "mouseenter",
  handleSharescreenMouseEnter
);

const handleSharescreenMouseLeave = () => {
  if (cameraEnabled || isShareScreen) {
    usersDisplayWrapper.style.display = "none";
    actionButtonsWrapper.style.display = "none";
  }
};

callInterfaceMouseControl.addEventListener(
  "mouseleave",
  handleSharescreenMouseLeave
);
