import React from 'react'

function Form({children}) {
  const handleSubmit = e => {
    e.preventDefault();

    console.log(children);
  }

  return (
    <form 
      className="form form--registration" 
      onSubmit={ handleSubmit }
    >{children}
    </form>
  )
}

export default Form

