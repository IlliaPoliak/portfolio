import React from 'react';
import styles from './TodoInput.module.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
   <div className={styles.inputWrapper}>
       <input 
            autoFocus
            className={styles.input}
            placeholder='Click to add task'
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
       />
   </div>
);

export default ToDoInput;