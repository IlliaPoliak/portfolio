import React from 'react';
import styles from './BackBtn.module.css'
import { connect } from 'react-redux';

const BackBtn = ({ darkMode }) => <div className={styles.backBtnWrapper} onClick={() => window.history.back()}>
    <div className={darkMode ? styles.backBtn : `${styles.backBtn} ${styles.darkModeStyle}`}>
        <span>&#10144;</span>&nbsp;Go back
    </div>
</div>

export default connect(state => ({
    darkMode: state.app.darkMode
}), {})(BackBtn)