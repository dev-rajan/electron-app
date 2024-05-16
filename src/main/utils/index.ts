import { electronApp } from '@electron-toolkit/utils'
import { join } from 'path'

export function setAppUserModelId(id: string): void {
  electronApp.setAppUserModelId(id)
}

export function watchWindowShortcuts(): void {
  // shortcuts
}

export function getLoadURL(): string {
  if (process.env['ELECTRON_RENDERER_URL']) {
    return process.env['ELECTRON_RENDERER_URL']
  } else {
    return `file://${join(__dirname, '../renderer/index.html')}`
  }
}
