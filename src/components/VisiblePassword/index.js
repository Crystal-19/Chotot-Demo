import React from 'react'
import {Icon} from 'semantic-ui-react'

const PasswordInput = ({setVisiblePassword, visiblePassword, setPassword, password, placeholder}) => {
  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <div className="password-input-container">
      <input
        placeholder={placeholder}
        type={visiblePassword ? 'text' : 'password'}
        onChange={e => setPassword(e.target.value)}
        value={password}
        required
      />
      <Icon
        onClick={handleVisiblePassword}
        name={visiblePassword ? 'eye slash outline' : 'eye'}
      />
    </div>
  )
}
export default PasswordInput
