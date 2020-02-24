import React from 'react'
// import './Checkbox.css'
import styles from './Checkbox.module.css'

export default ({ id, checkedValue, onChange }) => <>
    <input 
        type='checkbox' 
        id={id}
        name={id}
        checked={checkedValue}
        name='selectAllUsers' 
        onChange={ () => onChange() } 
        className={styles.checkbox}
    />
    <label htmlFor={id} />
</>