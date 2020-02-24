import React, { useState, useEffect } from 'react'
import styles from './ExchangeRate.module.css'


const ExchangeRate = props => {

    let [currency, setCurrency] = useState(null)
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(response => response.json())
            .then(data => setCurrency(data))
    }, [])

    useEffect(() => {
        if (currency && counter < currency.length){
            const timer = setInterval(() => {
                if (counter === currency.length){
                    setCounter(0) 
                } else {
                    setCounter(counter++)        
                }
            }, 1500)

            return () => clearInterval(timer)
        } 
    }, [currency, counter])

    return (
        <div className={styles.exchangeBlock}>
            { currency && 
                <span>{`1 ${currency[counter].ccy} = ${parseFloat(currency[counter].buy).toFixed(3)} / ${parseFloat(currency[counter].sale).toFixed(3)} ${currency[counter].base_ccy}`}</span>
            }
        </div>
    )
}

export default ExchangeRate