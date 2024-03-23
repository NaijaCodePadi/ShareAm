// window.addEventListener('DOMContentLoaded', () => {
//     const link = document.querySelector('#theme-link');
//     const toggleThemeButton = document.getElementById('toggle-theme');
//     toggleThemeButton.addEventListener('click', () => {
//         ipcRenderer.send('toggle-theme');
//     });

//     ipcRenderer.on('theme-changed', (event, theme) => {
//         if (theme === 'dark') {us
//             link.setAttribute('href', './css/dark.css');
//         } else if (theme === 'light') {
//             link.setAttribute('href', './css/light.css');
//         }
//     });
// });