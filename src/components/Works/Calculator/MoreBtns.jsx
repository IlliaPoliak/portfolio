import React from 'react';
import styles from './Calculator.module.css'

const MoreBtns = (props) => {

    const moreButtons = [
        'sqrt', 'cbrt', '(', ')',
        'pi', 'e', 'sin', 'cos',
        'tan', 'log10', '!', '^'
    ]

    return (
        moreButtons.map( btn => (
            <div
                className={styles.calculateBtn}
                id={btn}
                key={btn}
                onClick={props.handleClickButton}
            >
                {btn === 'pi' ? <>&#960;</> 
                : btn === 'cbrt' ? <><sup style={{fontSize: 10}}>3</sup>&#8730;</> 
                : btn === 'sqrt' ? <>&#8730;</> 
                : btn}
            </div>
        ))
    )
}

export default MoreBtns