import { createWindow, windowSize } from '.'

export function createWhatsAppWindow(): void {
  const whatsAppWindow = createWindow({
    width: windowSize.width,
    height: windowSize.height,
    show: true,
    autoHideMenuBar: true
  })

  const customUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
  whatsAppWindow.webContents.userAgent = customUserAgent

  whatsAppWindow.loadURL('https://web.whatsapp.com', { userAgent: customUserAgent })
}
