import React from 'react'

import './styles.scss'

const FloatLabelInput = ({id, setValue, ...props}) => {
  return (
    <div className="input-container">
      <input
        onChange={e => setValue(e.target.value)}
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
