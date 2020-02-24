import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Pages.module.css'
import { connect } from 'react-redux'

const Pages = ({lang}) => {

    const en = { home: 'Home', works: 'Works', contacts: 'Contacts' }
    const ru = { home: 'Главная', works: 'Работы', contacts: 'Контакты' }
    const uk = { home: 'Головна', works: 'Роботи', contacts: 'Контакти' }

    const obj = lang === 'en' ? en : lang === 'ru' ? ru : lang === 'uk' ? uk : false

    return (
        <nav>
            <ul className={styles.navigation}>
                {Object.entries(obj).map(([key, value]) => (
                    <li key={key}>
                        <NavLink exact to={`/${key === 'home' ? '' : key}`} activeClassName={styles.active}>{value}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default connect(state => ({
    lang: state.app.lang
}), {})(Pages)