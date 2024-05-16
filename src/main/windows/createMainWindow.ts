import { createWindow, windowSize } from '.'
import { getLoadURL } from '../utils'

export function createMainWindow(icon: string): void {
  const mainWindow = createWindow({
    width: windowSize.width,
    height: windowSize.height,
    show: false,
    autoHideMenuBar: true,
    icon
  })

  mainWindow.loadURL(getLoadURL())

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
}
