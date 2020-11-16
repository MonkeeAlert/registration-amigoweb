import React, { useRef } from 'react'
import { useStore } from 'react-redux';

function Form({children}) {
  const store = useStore();
  const ref = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    let error = Object.values(store.getState().errors.registration).filter( i => i === true || i === null).length > 0; 
    if(error) return false;
    else {
      console.log(store.getState().registration);
      return false;
    }
  }

  return (
    <form 
      className="form form--registration" 
      onSubmit={ handleSubmit }
      ref={ref}
    >{children}
    </form>
  )
}

export default Form

