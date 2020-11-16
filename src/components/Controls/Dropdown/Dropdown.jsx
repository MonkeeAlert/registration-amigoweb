import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { generateId } from '../../../utils/functions'
import { useDispatch } from 'react-redux';

function Dropdown({id, values, label, onItemChange }) {
  const [ placeholder, changePlaceholder ] = useState(label ? label : 'Список');
  const list = useRef();
  const dispatch = useDispatch();
  // let isListOpened = ; 
  
  const openList = _ => list.current.classList.toggle('select__list--visible');
  
  const chooseItem = e => {
    dispatch( onItemChange(e.target.getAttribute('data-value')) );
    changePlaceholder(e.target.getAttribute('data-value'));
    list.current.classList.remove('select__list--visible')
  } 

  return (
    <>
    <p className="text text--regular input__label">{label ? label : 'Список'}</p>
    <div id={id} className="select">
      <p onClick={ openList } className="input form__input select__placeholder">{ placeholder }</p>
      <ul ref={list} className={`select__list`}>
        { 
          values.map( v => {
            return(
              <li 
                onClick={ chooseItem }
                className="select__list-item" 
                key={generateId()} 
                data-value={v}
              >{v}</li>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}

Dropdown.propTypes = {
  id           : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  values       : PropTypes.array.isRequired,
  label        : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onItemChange : PropTypes.func.isRequired
}

export default Dropdown;