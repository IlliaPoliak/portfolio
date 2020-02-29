import React from 'react';
import styles from './Menu.module.css'
import Pages from '../Header/Pages/Pages';
import TimeWidget from '../Header/TimeWidget/TimeWidget';
import ExchangeRate from '../Header/ExchangeRate/ExchangeRate';
import DarkMode from '../Header/DarkMode/DarkMode';
import Lang from '../Header/Lang/Lang';


class Menu extends React.Component {

    state = { isShow: false }
    toggleMenu = () => this.setState({ isShow: !this.state.isShow })

    render(){
        return <div className={styles.menuWrapper}>
            <div className={ this.state.isShow ? styles.menu + ' ' + styles.show : styles.menu}>
                <div className={styles.contentWrapper}>
                    <Pages />

                    <TimeWidget />
                    <ExchangeRate />
                    <DarkMode />
                    <Lang />
                </div>
            </div>

            <div onClick={this.toggleMenu}>
                { this.state.isShow 
                ? <span className={styles.menuIcon}>&times;</span> 
                : <span className={styles.menuIcon}>&equiv;</span>
                } 
            </div>
        </div>
    }
}

export default Menu;