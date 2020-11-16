import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect, useStore } from 'react-redux';

function ConnectedButton({ errors, check, text, isFluid, type = 'button' }) {
  const store = useStore();
  const [isValid, setValidity] = useState(false);
  
  useEffect(_ => {
    for(let i in errors[check]) {
      if( store.getState().errors[check][i] !== false ) {
        setValidity(false);
        return;
      }
    }

    setValidity(true);
  });

  return(
    <button 
      type={type} 
      className={`button button--${isValid ? 'blue' : 'disabled'} ${isFluid ? 'button--fluid' : null}`}
    >{text}
    </button>
  )
}

ConnectedButton.propTypes = {
  isFluid : PropTypes.bool,
  text    : PropTypes.string.isRequired,
  type    : PropTypes.string
}

const mapStateToProps = state => ({ errors: state.errors });

export default connect(mapStateToProps)(ConnectedButton);

