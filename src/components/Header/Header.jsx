import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {

    return(
        <header className={styles.header + ' ' + styles.darkMode}>
            <nav>
                <ul className={styles.navigation}>
                    <li>
                        <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/works" activeClassName={styles.active}>Works</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" activeClassName={styles.active}>Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header