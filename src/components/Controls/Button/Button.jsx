import React from 'react'
import PropTypes from 'prop-types'

function Button({color, text, isFluid, type = 'button'}) {
  return (
    <button 
      type={type} 
      className={`button button--disabled ${isFluid ? 'button--fluid' : null}`}
      // className={`button button--${color ? color : 'primary'}`}
    >{text}
    </button>
  )
}

Button.propTypes = {
  color   : PropTypes.string,
  isFluid : PropTypes.bool,
  text    : PropTypes.string,
  type    : PropTypes.string
}

export default Button

