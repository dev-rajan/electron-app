import { BrowserWindow } from 'electron'
import { join } from 'path'

import { WindowOptions } from '../interfaces/windows'

export const windowSize = { width: 1366, height: 768 }

export function createWindow(options: WindowOptions): BrowserWindow {
  return new BrowserWindow({
    width: options.width,
    height: options.height,
    show: options.show ?? false,
    autoHideMenuBar: options.autoHideMenuBar ?? true,
    icon: options.icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
}
