import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import styles from './TestPage.module.css'
import BackBtn from '../../common/BackBtn/BackBtn';


const TestPage = props => {


    return (
        <div className={props.darkMode ? `${styles.testBlock} ${styles.darkModeStyles}` : styles.testBlock}>


            <div className={styles.resultData}>
                <div className={styles.testsWrapper}>
                    {tests.map(test => (
                        <div key={test.id} className={styles.testWrapper}>
                            <h3 className={darkMode ? styles.whiteQuestion : ''}>{test.question}</h3>
                            <div className={styles.variantsWrapper}>
                                {Object.entries(test.variants).map(([key, value], i) => (
                                    <div
                                        key={test.id + value}
                                        className={styles.test}
                                    >
                                        {key}) {value}
                                    </div>)
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* <ControlBtn func={}>Закончить тест</ControlBtn> */}
            </div>


            <BackBtn />
        </div>
    )
}

export default connect(state => ({
    tests: state.testing.tests,
    darkMode: state.app.darkMode
}), {})(TestPage)
