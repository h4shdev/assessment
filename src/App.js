import { useEffect } from 'react'
import './App.css'
import useMetaMask from './hooks/metamask';

function App() {
  
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connect} disabled={shouldDisable}>
          Connect to MetaMask
        </button>
        <div className="mt-2 mb-2">
          Connected Account: { isActive ? account : '' }
        </div>
        <button onClick={disconnect}>
          Disconnect MetaMask
        </button>
      </header>
    </div>
  );
}

export default App;