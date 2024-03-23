document.getElementById('darkmode-toggle').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
})
document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
})