const { desktopCapturer } = require('electron');

//  FOR CHANGING THEME

if (document.getElementById('darkmode-toggle')) {
  document.getElementById('darkmode-toggle').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
  })
}
if (document.getElementById('reset-to-system')) {
  document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
  })
}

document.getElementById('minimize-button').addEventListener('click', async () => {
  await window.electronAPI.minimizeWindow();
});
document.getElementById('maximize-button').addEventListener('click', async () => {
  await window.electronAPI.maximizeWindow();
});
document.getElementById('close-button').addEventListener('click', async () => {
  await window.electronAPI.closeWindow();
});

document.addEventListener('DOMContentLoaded', async () => {
  const currentState = await window.showState.getState();
});








// let mediaRecorder;
// let recordedChunks = [];



// const startRecording = async () => {
//   try {
//     const sources = await desktopCapturer.getSources({ types: ['screen'] });

//     for (const source of sources) {
//       if (source.name === 'Entire Screen') {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           audio: false,
//           video: {
//             mandatory: {
//               chromeMediaSource: 'desktop',
//               chromeMediaSourceId: source.id,
//               minWidth: 1280,
//               maxWidth: 1280,
//               minHeight: 720,
//               maxHeight: 720
//             }
//           }
//         });

//         mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

//         mediaRecorder.ondataavailable = event => {
//           if (event.data.size > 0) {
//             recordedChunks.push(event.data);
//           }
//         };

//         mediaRecorder.onstop = () => {
//           const blob = new Blob(recordedChunks, { type: 'video/webm' });
//           const url = URL.createObjectURL(blob);
//           const a = document.createElement('a');
//           a.href = url;
//           a.download = 'recorded_video.webm';
//           document.body.appendChild(a);
//           a.click();
//           recordedChunks = [];
//         };

//         mediaRecorder.start();
//         break;
//       }
//     }
//   } catch (error) {
//     console.error('Error capturing screen:', error);
//   }
// };

// const stopRecording = () => {
//   mediaRecorder.stop();
// };