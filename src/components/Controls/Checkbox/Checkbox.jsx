import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

function Checkbox({label, id, onStateChange}) {
  const dispatch = useDispatch();
  const ref = useRef();

  const handleChange = _ => dispatch( onStateChange(ref.current.checked) );

  return (
    <label htmlFor={id}>
      <span className="checkbox__wrapper">
        <input 
          type="checkbox" 
          name={id} 
          id={id}
          className='checkbox checkbox--true form__checkbox'
          onClick={ handleChange }
          ref={ref}
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

