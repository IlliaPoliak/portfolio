import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {


    return(
        <footer className={styles.footer + ' ' + styles.darkMode}>
            &copy; Ilia Poliak, 2020
        </footer>
    )
}

export default Footer