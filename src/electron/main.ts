import { app, BrowserWindow, Tray, Menu, globalShortcut } from 'electron'
import { state } from './electronState'
import { Logger } from '@pleahmacaka/logger'

const isDev: boolean = process.env.VITE_DEV_SERVER_URL !== undefined

const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL as string

async function createWindow() {
    const win = new BrowserWindow({
        title: "vite-react-electron",
        width: 800,
        height: 800,
        alwaysOnTop: true,
        transparent: true,
        autoHideMenuBar: true,
        skipTaskbar: true,
        frame: false
    })


    const url = isDev ?
        new URL(VITE_DEV_SERVER_URL as string) :
        new URL("./dist/index.html")

    url.protocol = "flyo:"

    if (isDev) await win.loadURL(url.toString())
    else await win.loadFile(url.toString())
}

async function createTray() {
    const tray = new Tray("./public/icon.ico")
    tray.setToolTip("vite-react-electron")
    tray.setContextMenu(Menu.buildFromTemplate([
        {
            label: "Exit",
            click: () => {
                app.quit()
            }
        }
    ]))
}

async function buildElectron() {
    await createTray()
    await createWindow()

    await registerShortcuts()
}

async function registerShortcuts() {
    globalShortcut.register("CommandOrControl+`", () => {
        if (state.isShowing) {
            BrowserWindow.getAllWindows()[0].hide()
            state.isShowing = false
            Logger.info("Hiding window")
        } else {
            BrowserWindow.getAllWindows()[0].show()
            state.isShowing = true
            Logger.info("Showing window")
        }
    })
}

app.whenReady().then(async () => {
    await buildElectron()

    app.on("activate", async () => {
        Logger.info("App is activate")
    })
})