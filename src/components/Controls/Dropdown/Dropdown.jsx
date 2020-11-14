import React from 'react'
import PropTypes from 'prop-types'
import { generateId } from '../../../utils/functions'

function Dropdown({id, values, defaultValue}) {
  return (
    <select id={id} className='input form__input'>
      { defaultValue ? <option>{defaultValue}</option> : null }
      { values.map( v => <option key={generateId()} value={v}>{v}</option> ) }
    </select>
  )
}

Dropdown.propTypes = {
  id: PropTypes.oneOfType(
    [ PropTypes.string, PropTypes.number ]
  ).isRequired,
  values: PropTypes.array,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number  
  ])
}

export default Dropdown

