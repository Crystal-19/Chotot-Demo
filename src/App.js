import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepgae from 'pages/Home'
import Newspgae from 'pages/News'
import Contactpgae from 'pages/Contact'

import './App.scss'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href='/' > Home </a>
          </li>
          <li>
            <a href='/news' > News </a>
          </li>
          <li>
            <a href='/contact' > Contact </a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={ < Homepgae />} />
        <Route path='/news' element={ < Newspgae />} />
        <Route path='/contact' element={ < Contactpgae />} />
      </Routes>
    </div>
  )
}

export default App
