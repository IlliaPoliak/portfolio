import React from 'react'
import styles from './Works.module.css'
import { projects } from './projects'
import Work from './Work/Work'

const Works = ({page}) => (
    <div className={page ? styles.works : `${styles.works} ${styles.page}`}>
        {projects.map(({ work, description }) => <Work key={work} work={work} description={description}/>)}
    </div>
)


export default Works