import React from 'react'
import PropTypes from 'prop-types'

function Checkbox({label, id}) {
  return (
    <label htmlFor={id}>
      <span className="checkbox__wrapper">
        <input 
          type="checkbox" 
          name={id} 
          id={id}
          className='checkbox checkbox--true form__checkbox'
        />
        <span className="checkbox checkbox--fake "></span>
      </span>
      <span className="text text--regular checkbox__text">{label}</span>
    </label>
  )
}


Checkbox.propTypes = {
  label: PropTypes.oneOfType(
    [ 
      PropTypes.string, 
      PropTypes.element 
    ]
  ),
  id: PropTypes.oneOfType(
    [ PropTypes.string, PropTypes.number ]
  ).isRequired,
}

export default Checkbox

