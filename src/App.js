import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import 'assets/scss/global.scss'

import ScrollToTop from 'components/ScrollToTop'
import Header from 'components/Header'
import Home from 'pages/Home'
import News from 'pages/News'
import NotFound from 'pages/NotFound'
import SideNav from 'components/BottomNavigation'
import LogIn from 'pages/LogIn'
import SignUp from 'pages/SignUp'
import ProductDetail from 'pages/ProductDetail'
import MyProductPage from 'pages/MyProductsPage'
import ProductFilterByCategory from 'components/productFilterByCategory'

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/my-products" element={<MyProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/products-filter-by-category"
            element={<ProductFilterByCategory />}
          />
        </Routes>
      </BrowserRouter>
      <SideNav />
    </div>
  )
}
export default App
