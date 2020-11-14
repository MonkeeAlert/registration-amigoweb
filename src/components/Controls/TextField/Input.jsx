import React from 'react'
import PropTypes from 'prop-types'

function Input({label, type, id, placeholder}) {
  return (
    <label htmlFor={id}>
      <p className="text text--regular input__label">{label}</p>
      <input 
        type={type} 
        name={id} 
        id={id}
        placeholder={placeholder}
        className='input form__input'
      />
      <p className="text text--error"></p>
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType(
    [ PropTypes.string, PropTypes.number ]
  ).isRequired,
}

export default Input

