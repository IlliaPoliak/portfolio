import React, { useState, useEffect } from 'react';
import styles from './Tests.module.css'
import AddTestForm from './AddTestForm';
import Tests from './Tests';
import BackBtn from '../common/BackBtn/BackBtn';


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
                e.target.classList += styles.true
                setCorrect(correct + 1)
            } else {
                e.target.classList += styles.false
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

    const finish = () => setStartTest(false)

    const addQuestion = () => {
        setStartTest(false)
        setAddTest(true)
    }

    const closeAddForm = () => setAddTest(false)

    const handleSubmit = (data, e) => {
        e.preventDefault()

        if (data.question !== '' && data.answer!== '' && data.variants.a !== '' && data.variants.b !== '' && data.variants.c !== '' && data.variants.d !== ''){
            props.addTest(data)
            setAddTest(false)
        }
    }

    return (
        <div>
            <h2>Test</h2>

            <div>
                <button onClick={start}>Начать тест</button>
                <button onClick={addQuestion}>Добавить вопрос</button>
            </div>

            <div>
                {startTest && !endOfTest && 
                    <div>
                        <Tests tests={props.tests} checkingAnswer={checkingAnswer} ></Tests>
                        <button onClick={finish}>Закончить тест</button>
                    </div>
                }
                {endOfTest &&
                    <div>
                        <h3>Результаты:</h3>
                        <p>Всего: {props.tests.length} </p>
                        <p>Правильных ответов: {correct}</p>
                        <p>Неправильных ответов: {props.tests.length - correct}</p>

                        <button onClick={repeatTest}>Повторить</button>
                    </div>
                }
                {addTest && <AddTestForm handleSubmit={handleSubmit} nextId={props.tests.length + 1} closeAddForm={closeAddForm} />}
            </div>

            <BackBtn />
        </div>
    )
}

export default TestPage;
