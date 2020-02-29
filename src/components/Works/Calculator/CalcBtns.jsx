import React from 'react';
import styles from './Calculator.module.css'

const CalcBtns = (props) => {

    const buttons = [
        'C', 'CE', '/', '*',
        '7', '8', '9', '-',
        '4', '5', '6', '+',
        '1', '2', '3', '%',
        '.', '0', '=',
    ]

    return <div className={styles.btnsWrapper}>
        {buttons.map(btn => (
            <div
                className={btn === '=' ? `${styles.calculateBtn} ${styles.equal}` : styles.calculateBtn}
                id={btn}
                key={btn}
                onClick={props.handleClickButton}
            >
                {btn === '/' ? <>&#247;</> 
                : btn === '*' ? <>&#215;</> 
                : btn === '-' ? <>&#8722;</> 
                : btn}
            </div>
        ))}
    </div>
}

export default CalcBtns