

//  FOR CHANGING THEME
document.getElementById('darkmode-toggle').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
})
document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
})


document.getElementById('minimize-button').addEventListener('click', async () => {
  await window.electronAPI.minimizeWindow();
});
document.getElementById('maximize-button').addEventListener('click', async () => {
  await window.electronAPI.maximizeWindow();
});
document.getElementById('close-button').addEventListener('click', async () => {
  await window.electronAPI.closeWindow();
});
