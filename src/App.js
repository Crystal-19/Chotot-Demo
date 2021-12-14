import React from 'react'
import logo from './logo.svg'
import './App.scss'
import Home from './pages/Home' 

// import {
//   Home,
//   HomeHeader,
//   HomeHeader1,
//   HomeHeader2,
//   HomeHeader3,
// } from "./pages/Home/index";

// import * as HomeModule from './pages/Home/index';

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
