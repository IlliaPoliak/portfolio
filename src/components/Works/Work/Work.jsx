import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Work.module.css'

const Work = ({work, description, page}) => {

    const { workBlockWrapper, homeWorkBlockWrapper, workBlock, desc, imgWrapper, image, link } = styles

    return (
        <Link to={`/works/${work}`} className={link}>
            <div className={ workBlockWrapper + ' ' + homeWorkBlockWrapper }>
                <h2>{work.toUpperCase()}</h2>
                <div className={workBlock}>
                    <div className={desc}>{description}</div>
                    <div className={imgWrapper}>
                        <img src={require(`../../../assets/${work}.png`)} alt='calc' className={image} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Work