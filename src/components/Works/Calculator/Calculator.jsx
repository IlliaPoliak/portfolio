import React, { useRef, useState } from 'react';
import { evaluate } from 'mathjs'
import styles from './Calculator.module.css'
import CalcBtns from './CalcBtns'
import MoreBtns from './MoreBtns'
import BackBtn from '../../common/BackBtn/BackBtn';

const Calculator = () => {

    let [moreBtns, setMoreBtns] = useState(false)
    let [inputValue, setInputValue] = useState('')
    let [isError, setIsError] = useState(false)

    const ref = useRef()

    const handleClickButton = e => {
        const value = e.target.id //|| e.key
        const resultRef = ref.current

        switch (value) {
            case 'C': 
                resultRef.value = ''
                setInputValue('')
                break;
            case 'CE': case 'Backspace': 
                setInputValue(inputValue.slice(0, -1))
                break;
            case 'log10':
            case 'sin':
            case 'cos':
            case 'tan':
            case 'sqrt':
            case 'cbrt': 
                setInputValue(inputValue + value + '(')
                break;
            case '!':
            case 'pi':
            case 'e':
            case '.':
            case '(':
            case ')': 
                setInputValue(inputValue + value)
                break;
            case '^':
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                if (value === '%') {
                    resultRef.value += value
                    calculate(value)} 
                else { setInputValue(inputValue + value) }
                break;
            case '=': calculate()
                break;
            default: resultRef.value[0] === '0' && resultRef.value[1] !== '.'
                ? setInputValue(value)
                : setInputValue(inputValue + value)
                break;
        }
    }

    const calculate = (sign = '=') => {
        try {
            setIsError(false)
            let res = 0
            let expression = ref.current.value

            if (sign === '%') {
                const regex = /(-|\+|\*|\/)?(\d+)?(\.)?(\d+)?%/
                const percentIndex = expression.search(regex) === -1 ? false : expression.search(regex)
                if (percentIndex) {
                    const express = expression.slice(0, percentIndex) || 0
                    const sign = expression.slice(percentIndex, percentIndex + 1) || '+'
                    const percent = expression.slice(percentIndex + 1, -1)

                    if (sign === '+' || sign === '-') {
                        res = `${evaluate(express)} ${sign} ${percent / 100 * evaluate(express)}`
                    } else {
                        res = `${evaluate(express)} ${sign} ${percent / 100}`
                    }

                    res = evaluate(res)
                    res = Number.isInteger(res) ? res : +res.toFixed(12)
                }
            } else {
                res = evaluate(expression)
                res = Number.isInteger(res) ? res : +res.toFixed(12)
                res = res === Infinity ? '∞' : res === -Infinity ? '-∞' : res
            }

            setInputValue(res)
        } catch (e) {
            setIsError(true)
            console.log(e.message)
        }
    }

    return <>
        <div className={styles.calculatorWrapper}>
            <div className={styles.calculator}>
                <input
                    ref={ref}
                    type="text"
                    disabled
                    className={isError? `${styles.resultInput} ${styles.calculatingError}` : styles.resultInput}
                    value={inputValue}
                />

                <CalcBtns handleClickButton={handleClickButton} />
                {moreBtns &&
                    <MoreBtns handleClickButton={handleClickButton} />}
            </div>
            <div 
                    className={styles.more}
                    onClick={() => setMoreBtns(!moreBtns)}
                >
                    {moreBtns ? <div className={styles.moreBtns}>Less <div>&lsaquo;</div></div> : <span className={styles.moreBtns}>More <div>&rsaquo;</div></span>}
                </div>
        </div>
        <BackBtn />
    </>
}

export default Calculator