import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import Header from 'components/Header'

import './styles.scss'

const NotFound = () => {
  return (
    <>
    <Header />
    <div className='not-found'>
      <h1> Page Not Found </h1>
      <Button variant='primary'>
        <Link className='back' to='/'> Go Home </Link>
      </Button>
      
    </div>
    </>
  )
}
export default NotFound