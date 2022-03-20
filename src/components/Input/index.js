import React from 'react'

import './styles.scss'

const Input = ({id, type}) => {
  return (
    <div className="input-container">
      <input id={id} type={type} placeholder={id} required />
      <label htmlFor={id}>{id}</label>
    </div>
  )
}
export default Input
