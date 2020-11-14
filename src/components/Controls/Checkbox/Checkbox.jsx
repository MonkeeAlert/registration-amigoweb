import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { toggleCheckbox } from '../../../redux/actions';

function Checkbox({label, id}) {
  const dispatch = useDispatch();

  const handleChange = _ => dispatch(toggleCheckbox());

  return (
    <label htmlFor={id}>
      <span className="checkbox__wrapper">
        <input 
          type="checkbox" 
          name={id} 
          id={id}
          className='checkbox checkbox--true form__checkbox'
          onClick={ handleChange }
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

