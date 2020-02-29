import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './Work.module.css'
import { connect } from 'react-redux'

const Work = ({work, description, lang}) => {

    const { workBlockWrapper, workBlock, desc, imgWrapper, image, link, animation } = styles

    const toggleAnimation = () => {
        const elem = document.querySelector(`.block-${work}`)

        if (window.pageYOffset > elem.offsetTop - 700) {
            elem.classList.add(animation)
        } else {
            elem.classList.remove(animation)
        }
    }

    useEffect(() => {
        const elem = document.querySelector(`.block-${work}`)

        if (window.pageYOffset <= elem.offsetTop){
            elem.classList.add(animation)
        } 
        window.addEventListener('scroll', toggleAnimation)

        return () => window.removeEventListener('scroll', toggleAnimation)
    }, [])

    return (
        <Link to={`/works/${work}`} className={link + ' block-'+ work }>
            <div className={ workBlockWrapper }>
                <h2>{work.toUpperCase()}</h2>
                <div className={workBlock}>
                    <div className={desc}>{description[lang]}</div>
                    <div className={imgWrapper}>
                        <img src={require(`../../../assets/${work}.png`)} alt='calc' className={image} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default connect(state => ({
    lang: state.app.lang
}), {})(Work)