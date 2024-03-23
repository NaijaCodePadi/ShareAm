const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}
//setupTitlebar();

const createSplashWindow = () => {
  // Create the browser window.
  const splashWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    alwaysOnTop: true,
    center: true,
    resizable: false,
    skipTaskbar: true, // Set skipTaskbar to true
  });
  splashWindow.loadFile(path.join(__dirname, 'splash.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  return splashWindow;
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  const splashWindow = createSplashWindow();

  /// Create your mainWindow here
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      //  devTools: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.setIcon(path.join(__dirname, '/assets/images/logo_with_bg.png'));
  mainWindow.loadFile(path.join(__dirname, 'screens/authentication/login.html'));

  mainWindow.once('ready-to-show', () => {
    splashWindow.destroy();
    mainWindow.show();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
/*electron-forge start*/

ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
});