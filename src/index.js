const { app, BrowserWindow } = require('electron');
const { registerIPCMainHandlers } = require('./ipcHandlers');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createSplashWindow = () => {
  const splashWindow = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    center: true,
    resizable: false,
    skipTaskbar: true
  });
  splashWindow.loadFile(path.join(__dirname, 'splash.html'));
  return splashWindow;
};

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    frame: false,
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 600,
    webPreferences: {
      // devTools: false, // Disable DevTools
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.setIcon(path.join(__dirname, '/assets/images/logo_with_bg.png'));
  mainWindow.loadFile(path.join(__dirname, '/screens/authentication/join_meeting.html'));
  // mainWindow.webContents.openDevTools();
  return mainWindow;
};

app.on('ready', () => {
  const splashWindow = createSplashWindow();
  const mainWindow = createMainWindow();
  mainWindow.once('ready-to-show', () => {
    splashWindow.destroy();
    mainWindow.show();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});




// Handle IPC messages for window actions
registerIPCMainHandlers();