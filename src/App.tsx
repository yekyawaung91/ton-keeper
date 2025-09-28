import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  return (
    <>
    <TonConnectUIProvider manifestUrl="http://localhost:5173/tonconnect-manifest.json">
      <header>
      <span>My App with React UI</span>
        <TonConnectButton />
      </header>
    </TonConnectUIProvider>
      
    </>
  )
}

export default App
