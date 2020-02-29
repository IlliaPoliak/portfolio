import React from 'react'
import styles from './Works.module.css'
import { projects } from './projects'
import Work from './Work/Work'

const Works = () => (
    <div className={styles.works}>
        {projects.map(({ work, description }) => <Work key={work} work={work} description={description} />)}
    </div>
)

export default Works