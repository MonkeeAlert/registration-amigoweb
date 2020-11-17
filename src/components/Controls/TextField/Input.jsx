import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useStore } from 'react-redux';
import { findBranch } from '../../../utils/functions';

function Input({ label, type, id, placeholder, onInputChange, selector }) {  
  const dispatch = useDispatch();
  const ref = useRef();
  const store = useStore();
  const [error, setError] = useState(findBranch(store.getState(), selector).error);
  
  const handleBlur = _ => {
    dispatch( onInputChange(ref.current.value) );
    setError(findBranch(store.getState(), selector).error)
  }

  return (
    <label htmlFor={id}>
      <p className="text text--regular input__label">{label}</p>
      <input 
        type={type} 
        name={id} 
        id={id}
        placeholder={placeholder}
        className='input form__input'
        onBlur={handleBlur}
        ref={ref}
      />
      <p className="text text--error input__error">{error}</p>
    </label>
  )
}

Input.propTypes = {
  selector      : PropTypes.string.isRequired,
  onInputChange : PropTypes.func.isRequired,
  label         : PropTypes.string,
  id            : PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ]).isRequired,
}

export default Input

