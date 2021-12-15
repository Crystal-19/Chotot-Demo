import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Home from './pages/Home' 

function App() {
  return (
    <div className="App">
    <Home />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
