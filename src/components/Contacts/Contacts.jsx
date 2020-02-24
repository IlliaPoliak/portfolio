import React from 'react'
import styles from './Contacts.module.css'

import GitHub from '../../assets/icons/github-512.png'
import Telegram from '../../assets/icons/telegram-512.png'
import Instagram from '../../assets/icons/instagram-512.png'
import Facebook from '../../assets/icons/fb-512.png'

const Contacts = ({darkMode}) => {

    const { contactsBlock, fa, contactsWrapper, email, iconsWrapper, darkModeStyle } = styles

    return (
        <div className={contactsBlock}>
            <div className={darkMode ? contactsWrapper : `${contactsWrapper} ${darkModeStyle}` }>
                <h2>Contact me!</h2>
                <p>I'm available for freelance or office work.<br/>Write me if you have any suggestions:</p>
                <a href='mailto:polakilyaser@gmail.com' className={email}>polakilyaser@gmail.com</a>
                <div className={iconsWrapper}>
                    <a href='https://github.com/IlyaPolyak' target='_blank' rel="noopener noreferrer"><img src={GitHub} className={fa} alt='github'></img>GitHub</a>
                    <a href='https://t.me/ilya_polyak' target='_blank' rel="noopener noreferrer"><img src={Telegram} className={fa} alt='telegram'></img>Telegram</a>
                    <a href='https://www.instagram.com/mr_ilyushkin/' target='_blank' rel="noopener noreferrer"><img src={Instagram} className={fa} alt='instagram'></img>Instagram</a>
                    <a href='https://www.facebook.com/ilya.polyak.3' target='_blank' rel="noopener noreferrer"><img src={Facebook} className={fa} alt='facebook'></img>Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Contacts