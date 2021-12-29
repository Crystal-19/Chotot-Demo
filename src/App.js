import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import 'assets/scss/global.scss'

import Home from 'pages/Home'
import News from 'pages/News'
import NotFound from 'pages/NotFound'
import Footer from 'components/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App
