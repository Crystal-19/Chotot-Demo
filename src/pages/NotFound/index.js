import React from 'react'
import {Link} from 'react-router-dom'

import './styles.scss'

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="not-found">
        <h1> Page Not Found </h1>
        <button variant="primary">
          <Link className="back" to="/">
            Go Home
          </Link>
        </button>
      </div>
    </div>
  )
}
export default NotFound
