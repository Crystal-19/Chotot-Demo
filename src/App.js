import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import 'assets/scss/global.scss'

import ScrollToTop from 'components/ScrollToTop'
import Header from 'components/Header'
import SideNav from 'components/BottomNavigation'
import ProtectedRoute from 'components/ProtectedRoute'

//Auth
import LogIn from 'pages/LogIn'
import SignUp from 'pages/SignUp'

//Products
import ProductDetail from 'pages/ProductDetail'
import MyProductPage from 'pages/MyProductsPage'
import ProductFilterByCategory from 'pages/ProductFilterByCategory'
import ProductFilterByName from 'pages/ProductFilterByName'
import CreateProduct from 'pages/CreateProduct'
import MyProfileUpdate from 'pages/MyProductsPage/MyProfileUpdate'

import Home from 'pages/Home'
import News from 'pages/News'
import NotFound from 'pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/my-products"
          element={
            <ProtectedRoute>
              <MyProductPage />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/category/:categoryId/products"
          element={<ProductFilterByCategory />}
        />
        <Route path="/name/:words/products" element={<ProductFilterByName />} />
        <Route
          path="/create-product"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile-update"
          element={
            <ProtectedRoute>
              <MyProfileUpdate />
            </ProtectedRoute>
          }
        />
      </Routes>
      <SideNav />
    </BrowserRouter>
  )
}
export default App
