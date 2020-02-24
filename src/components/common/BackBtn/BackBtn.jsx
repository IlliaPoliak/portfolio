import React from 'react';
import { Link } from 'react-router-dom'
import styles from './BackBtn.module.css'
import { connect } from 'react-redux';

const BackBtn = ({darkMode}) => <div className={styles.backBtnWrapper}>
    <Link 
        to='/works' 
        className={darkMode ? styles.backBtn : `${styles.backBtn} ${styles.darkModeStyle}`}>
        <span>&#10144;</span>&nbsp;Go back
    </Link>
</div> 

export default connect(state => ({
	darkMode: state.app.darkMode
}), {})(BackBtn)