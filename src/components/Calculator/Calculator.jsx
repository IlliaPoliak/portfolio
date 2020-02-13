import React, { useRef, useState } from 'react';
import { evaluate } from 'mathjs'
import styles from './Calculator.module.css'
import CalcBtns from './CalcBtns'
import MoreBtns from './MoreBtns'
import BackBtn from '../common/BackBtn/BackBtn';

const Calculator = () => {

    let [result, setResult] = useState('')
    let [moreBtns, setMoreBtns] = useState(false)

    const ref = useRef()
    
    const handleClickButton = e => {
        const value = e.target.id //|| e.key
        const resultRef = ref.current
        
        switch (value) {
            case 'C': resultRef.value = ''
                setResult('')
                break;
            case 'CE': case 'Backspace': resultRef.value = resultRef.value.slice(0, -1)
                break;
            case 'log10':
            case 'sin':
            case 'cos':
            case 'tan':
            case 'sqrt':
            case 'cbrt': resultRef.value += value + '('
                break;
            case '!':
            case 'pi':
            case 'e':
            case '.':
            case '(':
            case ')': resultRef.value += value
                break;
            case '^':
            case '+':
            case '-':
            case '*':
            case '/': 
            case '%':
                resultRef.value.endsWith('+') ||
                resultRef.value.endsWith('-') ||
                resultRef.value.endsWith('*') ||
                resultRef.value.endsWith('/') ||
                resultRef.value.endsWith('^') ||
                resultRef.value.endsWith('%')
                ? resultRef.value = resultRef.value.substr(0, resultRef.value.length - 1) + value
                : resultRef.value += value
                if (value === '%') calculate(value)
                break;
            case '=': calculate()
                break;
            default: resultRef.value[0] === '0' && resultRef.value[1] !== '.' 
                    ? resultRef.value = value
                    : resultRef.value += value
                break;
        }
    }

    const calculate = (sign = '=') => {
        try {
            ref.current.classList.remove('calculatingError')
            let res = 0
            let expression = ref.current.value

            if (sign === '%'){
                const regex = /(-|\+|\*|\/)?(\d+)?(\.)?(\d+)?%/
                const percentIndex = expression.search(regex) === -1 ? false : expression.search(regex)
                if (percentIndex){
                    const express = expression.slice(0, percentIndex) || 0
                    const sign = expression.slice(percentIndex, percentIndex+1) || '+'
                    const percent = expression.slice(percentIndex+1, -1)
                    
                    if (sign === '+' || sign === '-'){
                        res = `${evaluate(express)} ${sign} ${percent / 100 * evaluate(express) }`
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

            setResult(res)
        } catch (e) {
            ref.current.classList.add('calculatingError')
            console.log(e.message)
        }
    }

    return (
        <div className={styles.calculator}>
            <input
                ref={ref}
                type="text"
                disabled
                className={styles.resultInput}
                value={result}
            />

            <CalcBtns handleClickButton={handleClickButton} />
            {moreBtns && 
            <MoreBtns handleClickButton={handleClickButton} />}

            <input
                className={styles.more}
                type="button"
                value={moreBtns ? 'Less' : 'More'}
                onClick={() => setMoreBtns(!moreBtns)}
            />

            <BackBtn />
        </div>
    )
}

export default Calculator