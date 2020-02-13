import React from 'react'
import './Checkbox.css'

export default ({ id, checkedValue, onChange }) => <>
    <input 
        type='checkbox' 
        id={id}
        name={id}
        checked={checkedValue}
        name='selectAllUsers' 
        onChange={ () => onChange() } 
    />
    <label htmlFor={id} />
</>