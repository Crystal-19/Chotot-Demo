import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import NotFound from 'components/NotFound'

import Product from 'pages/Products/components/Product'
import SignIn from 'pages/Sign_in/components/Sign_in'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'> Product </Link>
            </li>
            <li>
              <Link to='/signin'> Sign In </Link>
            </li>
          </ul>
        </nav>
      </div>


      <Routes>
        <Route path='*' element={ < NotFound />} />
        <Route path='/' element={ < Product />} />
        <Route path='/signin' element={ < SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
