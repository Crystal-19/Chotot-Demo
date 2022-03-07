import React from 'react'
import useAuth from 'hooks/useAuth.js'

const News = () => {
  const {token} = useAuth()

  return (
    <div className='header-container my-container'>
      <h1> Authenticated as {token} </h1>
    </div>
  )
}
export default News
