import React from 'react';
import styles from './Description.module.css'
const { mark, title } = styles

export const descriptionText = {
    en: <>
        <h2 className={title}>About me</h2>
        <p><span>Hi,</span> my name is <span className={mark}>Ilia Poliak</span> and I'm <span className={mark}>Frontend Developer</span>. I graduated from Pryazovskyi State Technical University with a Bachelor's degree of Computer Science. I like to program and solve complex tasks. I'm sociable, responsible and I like to learn new technologies. I speak languages:  <span className={mark}>English (Intermediate), Русский, Українська</span></p>
        <p>This SPA app is my portfolio. The application is written using React in conjunction with Redux. In development, I use technologies such as:</p>
        <ul>
            <li>ES 6-10</li>
            <li>TypeScript</li>
            <li>React + Redux</li>
            <li>Redux Thunk</li>
            <li>React-Router</li>
            <li>Redux Form</li>
            <li>Axios</li>
            <li>HTML5 + CSS3 (Sass)</li>
            <li>Git</li>
            <li>Lodash</li>
            <li>Chart.js</li>
            <li>Material-UI, etc.</li>
        </ul>
        <p>Below are some of my work.</p>
        <p>Here's a <a href="https://github.com/IlyaPolyak" target="_blank" rel="noopener noreferrer">link</a> to my GitHub, where you can look the code of my projects.</p>
    </>,
    ru: <>
        <h2 className={title}>Немного обо мне</h2>
        <p><span>Привет,</span> меня зовут <span className={mark}>Илья Поляк</span> и я <span className={mark}>Frontend Developer</span>. Закончил Приазовский государственный технический университет со степенью "Бакалавр Компьютерных Наук". Люблю программировать и решать сложные задачи. Коммуникабельный, ответственный, люблю изучать новые технологии. Владею языками:  <span className={mark}>English (Intermediate), Русский, Українська</span></p>
        <p>Это SPA приложение является моим портфолио. Приложение написано с помощью React в связке с Redux. В разработке я использую такие технологии, как:</p>
        <ul>
            <li>ES 6-10</li>
            <li>TypeScript</li>
            <li>React + Redux</li>
            <li>Redux Thunk</li>
            <li>React-Router</li>
            <li>Redux Form</li>
            <li>Axios</li>
            <li>HTML5 + CSS3 (Sass)</li>
            <li>Git</li>
            <li>Lodash</li>
            <li>Chart.js</li>
            <li>Material-UI и др.</li>
        </ul>
        <p>Ниже представлены некоторые мои работы.</p>
        <p>Вот <a href="https://github.com/IlyaPolyak" target="_blank" rel="noopener noreferrer">ссылка</a> на мой GitHub, где вы можете ознакомиться с кодом моих проектов.</p>
    </>,
    uk: <>
        <h2 className={title}>Дещо про мне</h2>
        <p><span>Привіт,</span> мене звати <span className={mark}>Ілля Поляк</span> і я <span className={mark}>Frontend Developer</span>. Я закінчив Приазовский державний технічний університет зі степінню "Бакалавр Комп'ютерных Наук". Люблю програмувати та розв'язувати складні задачі. Комунікабельний, відповідальний, люблю вивчати нові технології. Володію:  <span className={mark}>English (Intermediate), Русский, Українська</span>.</p>
        <p>Цей SPA додаток є моїм портфоліо. Додаток написаний за допомогою React у сполученні із Redux. В розробці я використовую такі технології, як:</p>
        <ul>
            <li>ES 6-10</li>
            <li>TypeScript</li>
            <li>React + Redux</li>
            <li>Redux Thunk</li>
            <li>React-Router</li>
            <li>Redux Form</li>
            <li>Axios</li>
            <li>HTML5 + CSS3 (Sass)</li>
            <li>Git</li>
            <li>Lodash</li>
            <li>Chart.js</li>
            <li>Material-UI та ін.</li>
        </ul>
        <p>Нижче представлені деякі мої роботы.</p>
        <p>Ось <a href="https://github.com/IlyaPolyak" target="_blank" rel="noopener noreferrer">посилання</a> на мій GitHub, де ви можете ознайомитися із кодом моїх проектів.</p>
    </>,
}