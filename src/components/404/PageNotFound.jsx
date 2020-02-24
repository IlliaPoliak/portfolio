import React from 'react'
import styles from './PageNotFound.module.css'

const PageNotFound = () => {

    return (
        <div className={styles.pageNotFoundBlock}>
            <span role="img" aria-label='not-found'>🙁</span>
            <div className={styles.errorWrapper}>
                <h1>
                    404
            </h1>
                <p>
                    Page not found
            </p>
            </div>
        </div>
    )
}

export default PageNotFound