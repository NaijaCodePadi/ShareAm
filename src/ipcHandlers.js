const path = require("path");

const {
  BrowserWindow,
  ipcMain,
  nativeTheme,
  desktopCapturer,
} = require("electron");
function registerIPCMainHandlers() {
  ipcMain.handle("dark-mode:toggle", () => {
    nativeTheme.themeSource = nativeTheme.shouldUseDarkColors
      ? "light"
      : "dark";
    return nativeTheme.shouldUseDarkColors;
  });

  ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = "system";
  });

  ipcMain.handle("minimize-window", async () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.minimize();
      return true; // Return true to indicate success or any other relevant data
    }
    return false; // Return false or any error indication if there is no focused window
  });

  ipcMain.handle("maximize-window", async () => {
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

  ipcMain.handle("close-window", async () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.close();
      return true; // Return true to indicate success or any other relevant data
    }
    return false; // Return false or any error indication if there is no focused window
  });

  ipcMain.handle("show-value:toggle", async (event, newValue) => {
    console.log("New value:", newValue);
    return newValue;
  });

  // For screen sharing
  ipcMain.handle("get-sources", async () => {
    // console.log('get-sources handler called');
    const sources = await desktopCapturer.getSources({
      types: ["window", "screen", "audio"],
    });
    return sources;
  });

  ipcMain.on("open-call-interface-window", () => {
    const newWindow = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 600,
      minHeight: 600,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        contextIsolation: true,
        nodeIntegration: false,
      },
    });

    newWindow.loadFile(
      path.join(__dirname, "/screens/dashboard/call_interface.html")
    );
  });
}
module.exports = { registerIPCMainHandlers };
