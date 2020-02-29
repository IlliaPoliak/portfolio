import React, {useRef} from 'react'
import styles from './Lang.module.css'
import { connect } from 'react-redux'
import { setLang } from '../../../store/actions'


const Lang = ({ lang, setLang }) => {
    const optionsBlock = useRef()

    const changeLang = e => {
        setLang(e.target.innerText.toLowerCase())
        optionsBlock.current.classList.toggle(styles.showOptionsBlock)
    }
    const handleClick = () => optionsBlock.current.classList.toggle(styles.showOptionsBlock)

    return (
        <div className={styles.langBlock}>
            <div className={styles.selectWrapper}>
                <div className={styles.select} onClick={handleClick}>{lang.toUpperCase()}</div>

                <div ref={optionsBlock} className={styles.optionsBlock}>
                    <div onClick={changeLang}>EN</div>
                    <div onClick={changeLang}>RU</div>
                    <div onClick={changeLang}>UK</div>
                </div>

                <div className={styles.selectArrow}></div>
            </div>

        </div>
    )
}

export default connect(state => ({
    lang: state.app.lang
}), { setLang })(Lang)
