import { app, BrowserWindow } from 'electron'

function createWindow() {
    const win = new BrowserWindow({
        title: "vite-react-electron",
        width: 800,
        height: 800,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        // },
        alwaysOnTop: true,
        transparent: true,
        autoHideMenuBar: true,
        skipTaskbar: true,
        frame: false
    })

    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
        win.loadFile('dist/index.html');
    }
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})