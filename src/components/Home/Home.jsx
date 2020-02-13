import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { works } from './works'

const Home = props => {

    return (
        <div className={styles.works}>
            {
                works.map(({ work, description }) => (
                    <Link to={`/${work}`} key={work}>
                        <div className={styles.workBlockWrapper}>
                            <h2>{work.toUpperCase()}</h2>
                            <div className={styles.workBlock}>
                                <p>{description}</p>
                                <div className={styles.imgWrapper}>
                                    <img src={require(`../../assets/${work}.png`)} alt='calc' />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Home