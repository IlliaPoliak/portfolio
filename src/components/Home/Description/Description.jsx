import React, {useRef, useEffect} from 'react';
import styles from './Description.module.css'
import { connect } from 'react-redux'
import { descriptionText } from './descriptionText'

const Description = ({ darkMode, lang }) => {
    
    const block = useRef()

    const toggleAnimation = () => {
        if (window.pageYOffset > block.current.offsetTop - 800) {
            block.current.classList.add(styles.animation)
        } else {
            block.current.classList.remove(styles.animation)
        }
    }

    useEffect(() => {
        if (window.pageYOffset <= block.current.offsetTop){
            block.current.classList.add(styles.animation)
        } 
        window.addEventListener('scroll', toggleAnimation)
        return () => window.removeEventListener('scroll', toggleAnimation)
    }, [])
    
    
    return(
    <div className={styles.description} ref={block}>
        <div className={darkMode ? styles.descWrapper : `${styles.descWrapper} ${styles.darkModeStyle}`}>
            {descriptionText[lang]}
        </div>
    </div>
)}

export default connect(state => ({
    lang: state.app.lang
}), {})(Description)