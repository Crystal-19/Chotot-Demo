import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'

import './styles.scss'

const NotFound = () => {
  return (
    <>
    <Header />
    <div className='not-found'>
      <h1> Page Not Found </h1>
      <button variant='primary'>
        <Link className='back' to='/'> Go Home </Link>
      </button>

    </div>
    </>
  )
}
export default NotFound
