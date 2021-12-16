import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

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
            <Link to='/' > Home </Link>
          </li>
          <li>
            <Link to='/news' > News </Link>
          </li>
          <li>
            <Link to='/contact' > Contact </Link>
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
