import React from 'react'
import styles from './Lang.module.css'
import { connect } from 'react-redux'
import { setLang } from '../../../store/actions'


const Lang = ({ lang, setLang }) => {

    const changeLang = e => setLang(e.target.value)

    return (
        <div className={styles.langBlock}>
            <div className={styles.selectWrapper}>
                <select name="lang" id="lang" onChange={changeLang}>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="uk">UK</option>
                </select>
                <div className={styles.selectArrow}></div>
            </div>

        </div>
    )
}

export default connect(state => ({
    lang: state.app.lang
}), { setLang })(Lang)
