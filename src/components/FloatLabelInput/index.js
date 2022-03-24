import React from 'react'

import './styles.scss'

const FloatLabelInput = ({id, onChange, ...props}) => {
  return (
    <div className="input-container">
      <input
        onChange={onChange}
        id={id}
        placeholder="hide"
        required
        {...props}
      />
      <label htmlFor={id}>{id}</label>
    </div>
  )
}
export default FloatLabelInput
