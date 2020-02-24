import React from 'react';
import styles from './Description.module.css'

const Description = ({darkMode}) => {
    const {description, descWrapper, darkModeStyle} = styles

    return (
        <div className={description}>
            <div className={darkMode ? descWrapper : `${descWrapper} ${darkModeStyle}`}>
                <p><span>Hi</span>, I am Ilia Poliak and I'm Frontend Developer. Я бакалавр компьютерных наук. Люблю программировать и решать сложные задачи. Владею языками: English (Intermediate), Русский, Українська</p>
                <p>This SPA is my portfolio. Это приложение написано на React в связке с Redux. Я также использовал другие библиотеки, такие как:</p>
                <ul>
                    <li>ES 6-10</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React-Router</li>
                    <li>Redux Form</li>
                    <li>Git</li>
                    <li>Axios</li>
                    <li>HTML5, CSS3 (Sass), Material-UI и др.</li>
                </ul>
                <p>Ниже представлены некоторые мои работы.</p>
                <p>Вот <a href="https://github.com/IlyaPolyak" target="_blank" rel="noopener noreferrer">ссылка</a> на мой GitHub.</p>
            </div>
        </div>
    )
}

export default Description