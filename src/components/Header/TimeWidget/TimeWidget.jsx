import React, { useState, useEffect } from 'react'
import styles from './TimeWidget.module.css'
import {connect} from 'react-redux'

const TimeWidget = ({lang}) => {

    let [time, setTime] = useState('')

    const date = new Date()
    const weekDay = date.toLocaleString(lang, { weekday: 'short' })
    const localeDate = date.toLocaleString(lang, { year: 'numeric', month: 'short', day: 'numeric' })
    const localeTime = date.toLocaleString(lang, { hour: 'numeric', minute: 'numeric', second: 'numeric' })


    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(localeTime)
        }, 1000)

        return () => clearTimeout(timer)
    }, [time, localeTime])



    return (
        <div className={styles.timeBlock}>
            <span>{`${weekDay}, ${time}`}</span>
            <span>{localeDate}</span>

        </div>
    )
}

export default connect(state => ({
    lang: state.app.lang
}), {})(TimeWidget)