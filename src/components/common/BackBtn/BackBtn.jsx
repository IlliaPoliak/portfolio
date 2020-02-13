import React from 'react';
import { Link } from 'react-router-dom'
import styles from './BackBtn.module.css'

const BackBtn = props => <div className={styles.backBtnWrapper}>
    <Link to='/' className={styles.backBtn}>Go back</Link>
</div> 

export default BackBtn