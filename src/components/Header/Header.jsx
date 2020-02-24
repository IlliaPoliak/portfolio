import React from 'react';
import styles from './Header.module.css'
import TimeWidget from './TimeWidget/TimeWidget';
import ExchangeRate from './ExchangeRate/ExchangeRate';
import DarkMode from './DarkMode/DarkMode';
import Lang from './Lang/Lang';
import Pages from './Pages/Pages';

const Header = props => {

    return (
        <header className={styles.header + ' ' + styles.darkMode}>

            <div className={styles.leftSide}>
                <TimeWidget />
                <ExchangeRate />
            </div>

            <Pages />

            <div className={styles.rightSide}>
                <DarkMode />
                <Lang />
            </div>

        </header>
    )
}

export default Header