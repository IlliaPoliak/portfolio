import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Menu.module.css'


class Menu extends React.Component {

    state = {
        isShow: false
    }

    toggleMenu = () => this.setState({
        isShow: !this.state.isShow
    })

    render(){
        return <div className={styles.menuWrapper}>
           
            <nav className={ this.state.isShow ? styles.menu + ' ' + styles.show : styles.menu}>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName={styles.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tests" activeClassName={styles.active}>Tests</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" activeClassName={styles.active}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator" activeClassName={styles.active}>Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redactor" activeClassName={styles.active}>Redactor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/text-redactor" activeClassName={styles.active}>Text-Redactor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/weather" activeClassName={styles.active}>Weather</NavLink>
                    </li>
                </ul>
            </nav>

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
