import electronLogo from './assets/electron.svg'
import Versions from './components/Versions'

function App(): JSX.Element {
  const openWhatsApp = (): void => window.electron.ipcRenderer.send('open-whatsapp')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="text">Electron app to open WhatsApp</div>
      <p className="tip">Please click the button below to open whatsapp in a new window.</p>
      <div className="actions">
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={openWhatsApp}>
            Open WhatsApp
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
