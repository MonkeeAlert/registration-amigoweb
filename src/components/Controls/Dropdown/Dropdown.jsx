import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { generateId } from '../../../utils/functions'
import { useDispatch } from 'react-redux';

function Dropdown({id, values, label, onItemChange }) {
  const [ placeholder, changePlaceholder ] = useState(values[0]);
  const select = useRef();
  const dispatch = useDispatch();
  
  const toggleList = e => {
    if(e.target !== select.current.children[0]) return closeList();
    else {
      if(select.current.children[1].classList.contains('select__list--visible')) return closeList()  
      else return openList()
    }
  }

  useEffect(() => {
    window.addEventListener('click', toggleList);
    dispatch( onItemChange(placeholder) );
    
    return () => {
      window.removeEventListener('click', toggleList);
    }
  })
  
  const openList = _ => {
    select.current.children[0].classList.add('select__placeholder--opened');
    select.current.children[1].classList.add('select__list--visible');
  };
  const closeList = _ => {
    select.current.children[0].classList.remove('select__placeholder--opened');
    select.current.children[1].classList.remove('select__list--visible');
  };
  
  const chooseItem = e => {
    changePlaceholder(e.target.getAttribute('data-value'));
  } 

  return (
    <>
    <p className="text text--regular input__label">{label ? label : 'Список'}</p>
    <div ref={select} id={id} className="select">
      <p className="input form__input select__placeholder">{ placeholder }</p>
      <ul className={`select__list`}>
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
  label        : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  onItemChange : PropTypes.func.isRequired
}

export default Dropdown;