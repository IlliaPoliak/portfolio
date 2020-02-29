import React from 'react';
import styles from './TestPage.module.css'

const Tests = ({ tests, checkingAnswer, darkMode }) => (
    <div className={styles.testsWrapper}>
        {tests.map(test => (
            <div key={test.id} className={styles.testWrapper}>
                <h3 className={darkMode ? styles.whiteQuestion : ''}>{test.question}</h3>
                <div className={styles.variantsWrapper}>
                    {Object.entries(test.variants).map(([key, value], i) => (
                        <div
                            key={test.id + value}
                            onClick={e => checkingAnswer(test, key, e)}
                            className={styles.test}
                        >
                            {key}) {value}
                        </div>)
                    )}
                </div>
            </div>
        ))}
    </div>
)

export default Tests
