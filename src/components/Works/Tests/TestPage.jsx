import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import styles from './TestPage.module.css'
import AddTestForm from './AddTestForm';
import Tests from './Tests';
import BackBtn from '../../common/BackBtn/BackBtn';
import ControlBtn from '../../common/ControlBtn/ControlBtn';
import { addTest } from '../../../store/actions'


const TestPage = props => {

    let [userAnswer, setUserAnswer] = useState([])
    let [endOfTest, setEndOfTest] = useState(false)
    let [startTest, setStartTest] = useState(false)
    let [addTest, setAddTest] = useState(false)
    let [correct, setCorrect] = useState(0)

    useEffect(() => {
        if (userAnswer.length === props.tests.length) {
            setEndOfTest(true)
        }
    }, [userAnswer, props.tests.length])

    const checkingAnswer = (question, answer, e) => {

        const check = userAnswer.some(item => item.question_id === question.id)

        if (!check) {
            if (question.answer === answer) {
                e.target.classList += ' ' + styles.true
                setCorrect(correct + 1)
            } else {
                e.target.classList += ' ' + styles.false
            }

            setUserAnswer([
                ...userAnswer, {
                    question_id: question.id,
                    user_answer: answer
                }
            ])
        } else {
            console.log('You already answered!')
        }
    }

    const repeatTest = () => {
        setCorrect(0)
        setUserAnswer([])
        setEndOfTest(false)
    }

    const start = () => {
        setStartTest(true)
        setCorrect(0)
        setEndOfTest(false)
        setUserAnswer([])
        setAddTest(false)
    }

    const finish = () => {
        setStartTest(false)
        setEndOfTest(false)
    }

    const addQuestion = () => {
        setStartTest(false)
        setAddTest(true)
    }

    const closeAddForm = () => setAddTest(false)

    const handleSubmit = (data, e) => {
        e.preventDefault()

        if (data.question !== '' && data.answer !== '' && data.variants.a !== '' && data.variants.b !== '' && data.variants.c !== '' && data.variants.d !== '') {
            props.addTest(data)
            setAddTest(false)
        }
    }

    return (
        <div className={props.darkMode ? `${styles.testBlock} ${styles.darkModeStyles}` : styles.testBlock}>

            {!startTest && !addTest && <div className={styles.buttons}>
                <ControlBtn func={start}>Начать тест</ControlBtn>
                <ControlBtn func={addQuestion}>Добавить вопрос</ControlBtn>
            </div>}

            {startTest && <div className={styles.resultData}>
                <Tests tests={props.tests} checkingAnswer={checkingAnswer} darkMode={props.darkMode} />
                <ControlBtn func={finish}>Закончить тест</ControlBtn>
            </div>
            }
            {endOfTest &&
                <div className={styles.resultData}>
                    <h3>Результаты:</h3>
                    <p>Всего: {props.tests.length} </p>
                    <p>Правильных: {correct}</p>
                    <p>Неправильных: {props.tests.length - correct}</p>

                    <ControlBtn func={repeatTest}>Повторить</ControlBtn>
                </div>
            }
            {addTest && <AddTestForm handleSubmit={handleSubmit} nextId={props.tests.length} closeAddForm={closeAddForm} />}

            <BackBtn />
        </div>
    )
}

export default connect(state => ({
	tests: state.testing.tests,
	darkMode: state.app.darkMode
}), { addTest })(TestPage)
