import React from 'react';
import styles from './Tests.module.css'

const Tests = ({tests, checkingAnswer}) => {

    return (
        <div>
            {tests.map(test => (
                <div key={test.id}>
                    <h3>{test.question}</h3>
                    {
                        Object.entries(test.variants).map(([key, value], i) => (
                            <div
                                key={test.id + value}
                                onClick={e => checkingAnswer(test, key, e)}
                            >
                                {key}. {value}
                            </div>)
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default Tests;
