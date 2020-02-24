import React from 'react'
import {connect} from 'react-redux'
import {setDarkMode} from '../../../store/actions'
import styles from './DarkMode.module.css'


const DarkMode = ({darkMode, setDarkMode}) => {

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className={styles.modeBlock} >
            <span role="img" aria-label='sun' className={styles.sun}>☀</span>
            <label className={styles.switch} >
                <input type="checkbox" onChange={toggleDarkMode} checked={darkMode}/>
                <span className={styles.slider}></span>
            </label>
            <span role="img" aria-label='moon' className={styles.moon}>🌙</span>
        </div>
    )
}

export default connect(state => ({
    darkMode: state.app.darkMode
}), { setDarkMode })(DarkMode)
