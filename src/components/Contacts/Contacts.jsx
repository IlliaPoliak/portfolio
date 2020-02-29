import React, {useRef, useEffect} from 'react'
import styles from './Contacts.module.css'
import { connect } from 'react-redux'

import GitHub from '../../assets/icons/github-512.png'
import Telegram from '../../assets/icons/telegram-512.png'
import Instagram from '../../assets/icons/instagram-512.png'
import Facebook from '../../assets/icons/fb-512.png'


const Contacts = ({ darkMode, lang }) => {
    const contactText = {
        'en': <>
            <h2>Contact me!</h2>
            <p>I'm available for freelance or office work.<br /> Write me if you have any suggestions:</p>
        </>,
        'ru': <>
            <h2>Свяжитесь со мной!</h2>
            <p>Я рассмотрю предложение работы на фрилансе либо офисе.<br /> Пишите, если есть предложения:</p>
        </>,
        'uk': <>
            <h2>Зв'яжіться зі мною!</h2>
            <p>Я роздивлюся пропозицію роботы на фрілансі або у офісі.<br /> Пишіть, якщо є пропозиції:</p>
        </>,
    }

    const block = useRef()

    const toggleAnimation = () => {
        if (window.pageYOffset > block.current.offsetTop - 400) {
            block.current.classList.add(styles.animation)
        }  
        if (window.pageYOffset < block.current.offsetTop - 800){
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
    <div className={styles.contactsBlock} ref={block}>
        <div className={darkMode ? styles.contactsWrapper : `${styles.contactsWrapper} ${styles.darkModeStyle}`}>
            {contactText[lang]}
            <a href='mailto:polakilyaser@gmail.com' className={styles.email}>polakilyaser@gmail.com</a>
            <div className={styles.iconsWrapper}>
                <a href='https://github.com/IlyaPolyak' target='_blank' rel="noopener noreferrer"><img src={GitHub} className={styles.fa} alt='github'></img>GitHub</a>
                <a href='https://t.me/ilya_polyak' target='_blank' rel="noopener noreferrer"><img src={Telegram} className={styles.fa} alt='telegram'></img>Telegram</a>
                <a href='https://www.instagram.com/mr_ilyushkin/' target='_blank' rel="noopener noreferrer"><img src={Instagram} className={styles.fa} alt='instagram'></img>Instagram</a>
                <a href='https://www.facebook.com/ilya.polyak.3' target='_blank' rel="noopener noreferrer"><img src={Facebook} className={styles.fa} alt='facebook'></img>Facebook</a>
            </div>
        </div>
    </div>
)}

export default connect(state => ({
    darkMode: state.app.darkMode,
    lang: state.app.lang
}), {})(Contacts)