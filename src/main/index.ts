import { app, BrowserWindow, ipcMain } from 'electron'

import { setAppUserModelId, watchWindowShortcuts } from './utils'
import { createMainWindow } from './windows/createMainWindow'
import { createWhatsAppWindow } from './windows/createWhatsAppWindow'

import icon from '../../resources/icon.png?asset'

app.whenReady().then(() => {
  setAppUserModelId('com.electron')

  app.on('browser-window-created', () => {
    watchWindowShortcuts()
  })

  ipcMain.on('open-whatsapp', createWhatsAppWindow)

  createMainWindow(icon)

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow(icon)
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
