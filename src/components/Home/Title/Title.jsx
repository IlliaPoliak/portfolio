import React from 'react';
import styles from './Title.module.css'
import photo from '../../../assets/photo.png'

const Title = props => {
    const title = `Ilia Poliak`.toUpperCase()
    const subTitle = `Frontend Developer`.toUpperCase()

    return (
        <div className={styles.presentation}>
            <div className={styles.titleInfo}>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </div>
            <div className={styles.photoWrapper}>
                <img src={photo} alt='Ilia Poliak' />
            </div>
        </div>
    )
}

export default Title