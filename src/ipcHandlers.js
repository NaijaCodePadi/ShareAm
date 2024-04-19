const { BrowserWindow, ipcMain, nativeTheme } = require('electron');
function registerIPCMainHandlers() {

    ipcMain.handle('dark-mode:toggle', () => {
        nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';
        return nativeTheme.shouldUseDarkColors;
      });
    
      ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system';
      });
    
    
    ipcMain.handle('minimize-window', async () => {
      const focusedWindow = BrowserWindow.getFocusedWindow();
      if (focusedWindow) {
        focusedWindow.minimize();
        return true; // Return true to indicate success or any other relevant data
      }
      return false; // Return false or any error indication if there is no focused window
    });
    
    ipcMain.handle('maximize-window', async () => {
      const focusedWindow = BrowserWindow.getFocusedWindow();
      if (focusedWindow) {
        if (focusedWindow.isMaximized()) {
          focusedWindow.unmaximize();
        } else {
          focusedWindow.maximize();
        }
        return true; // Return true to indicate success or any other relevant data
      }
      return false; // Return false or any error indication if there is no focused window
    });
    
    ipcMain.handle('close-window', async () => {
      const focusedWindow = BrowserWindow.getFocusedWindow();
      if (focusedWindow) {
        focusedWindow.close();
        return true; // Return true to indicate success or any other relevant data
      }
      return false; // Return false or any error indication if there is no focused window
    });
}
module.exports = { registerIPCMainHandlers };