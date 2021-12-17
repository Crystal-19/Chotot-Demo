import React from 'react'

import Header from 'components/Header'
const NotFound = () => {
  return (
    <>
    <Header />
    <div className='not-found' style={{background: 'gray'}}>
      <h1> Page Not Found </h1>
    </div>
    </>
  )
}
export default NotFound