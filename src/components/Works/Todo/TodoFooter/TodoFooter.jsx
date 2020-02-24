import React from 'react';
import styles from './TodoFooter.module.css';

const FILTERS_BTN = [
    { id: 'all', text: 'All' },
    { id: 'active', text: 'Active' },
    { id: 'completed', text: 'Completed' }
]

const Footer = ({ activeFilter, changeFilter }) => (
    <div className={styles.header}>
        <div className={styles.btnGroup}>
            {FILTERS_BTN.map(({text, id}) => {
                return <button 
                onClick={()=>{changeFilter(id)}}
                key={id}
                className={ id === activeFilter ? styles.filterBtn + ' ' + styles.active : styles.filterBtn}
                >{text}</button>
            })}
        </div>
    </div>
);

export default Footer;