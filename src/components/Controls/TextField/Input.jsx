import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { setEmail, setName, setPhone } from '../../../redux/actions';

function Input({ label, type, id, placeholder, checkFor }) {  
  const dispatch = useDispatch();
  const ref = useRef();

  const handleFocus = _ => {
    console.log('focus')
  }
  
  const handleBlur = _ => {
    switch(checkFor.toLowerCase()) {
      case 'name':
        return dispatch(setName(ref.current.value));
      
      case 'email':
          return dispatch(setEmail(ref.current.value));

      case 'phone':
          return dispatch(setPhone(ref.current.value));

      default: return;
    }
  }

  useEffect(() => {
    if( checkFor.toLowerCase() === 'phone' ) {
      const allowed = '0123456789-()+';
      const input = ref.current;
      const numMask = /\d+/g;

      const handleInput = e => {
        // backspace
        if(e.inputType === 'deleteContentBackward') return;

        // if character is not a number
        if(allowed.indexOf(e.data) === -1) {
          ref.current.value = ref.current.value.slice(0, -1);
          return;
        } else {
          // if value starts with +, -, (, )
          if(/\D/.test(e.data)) return;

          // if value contain numbers
          if(ref.current.value.match(numMask).join('').length > 11) {
            ref.current.value = ref.current.value.slice(0, -1);
            return;  
          }
        }
      }

      input.addEventListener('input', handleInput);
      
      return () => input.removeEventListener('input', handleInput);
    }
  }, []);

  return (
    <label htmlFor={id}>
      <p className="text text--regular input__label">{label}</p>
      <input 
        type={type} 
        name={id} 
        id={id}
        placeholder={placeholder}
        className='input form__input'
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
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

