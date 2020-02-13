import React, { useRef, useState, useEffect } from 'react';
import styles from './TextRedactor.module.css'
import BackBtn from '../common/BackBtn/BackBtn';

const TextRedactor = props => {
    const redactorText = useRef()

    let [strike, setStrike] = useState(false)
    let [bold, setBold] = useState(false)
    let [italic, setItalic] = useState(false)
    let [underline, setUnderline] = useState(false)

    let [left, setLeft] = useState(false)
    let [center, setCenter] = useState(false)
    let [right, setRight] = useState(false)
    let [justify, setJustify] = useState(false)

    const redactingText = e => {
        switch (e.target.innerText){
            case 'Ab': 
                setUnderline(false)
                setStrike(!strike)
                break
            case 'B': setBold(!bold)
                break
            case 'I': setItalic(!italic)
                break
            case 'U': 
                setStrike(false)
                setUnderline(!underline)
                break
            case 'Left': 
                setCenter(false)
                setRight(false)
                setJustify(false)
                setLeft(!left)
                break
            case 'Center': 
                setRight(false)
                setJustify(false)
                setLeft(false)
                setCenter(!center)
                break
            case 'Right': 
                setCenter(false)
                setJustify(false)
                setLeft(false)
                setRight(!right)
                break
            case 'Justify': 
                setCenter(false)
                setRight(false)
                setLeft(false)
                setJustify(!justify)
                break
            default: break
        }
    }

    const selectFontSize = e => redactorText.current.style.fontSize = e.target.value + 'px'
    const selectFontFamily = e => redactorText.current.style.fontFamily = e.target.value

    useEffect(()=>{
        const style = redactorText.current.style

        style.textDecorationLine = strike ? 'line-through' : underline ? 'underline' : 'none'
        style.fontWeight = bold ? 'bold' : 'normal'
        style.fontStyle = italic ? 'italic' : 'normal'
        style.textAlign = left ? 'start' : center ? 'center' : right ? 'end' : justify ? 'justify' : 'start'

    }, [strike, underline, bold, italic, left, center, right, justify])

    return(
        <div className='TextRedactor'>
            <h2 className='redactorTitle'>Text Redactor</h2>

            <div className='areaWrapper'>
                
                <div className={styles.panel}>
                    <span onClick={redactingText} className={styles.controlBtn + ' ' + styles.bold}>B</span>
                    <span onClick={redactingText} className={styles.controlBtn + ' ' + styles.italic}>I</span>
                    <span onClick={redactingText} className={styles.controlBtn + ' ' + styles.underline}>U</span>
                    <span onClick={redactingText} className={styles.controlBtn + ' ' + styles.lineThrough}>Ab</span>
                    <span className={styles.pipe}>|</span>
                    <span onClick={redactingText} className={styles.controlBtn}>Left</span>
                    <span onClick={redactingText} className={styles.controlBtn}>Center</span>
                    <span onClick={redactingText} className={styles.controlBtn}>Right</span>
                    <span onClick={redactingText} className={styles.controlBtn}>Justify</span>
                    <span className={styles.pipe}>|</span>
                    
                    <select onChange={selectFontSize} className={styles.select}>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option selected value="14">14</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="28">28</option>
                        <option value="32">32</option>
                    </select>

                    <select onChange={selectFontFamily} className={styles.select}>
                        <option value="'Times New Roman', Times, serif">Times New Roman</option>
                        <option value="Arial, Helvetica, sans-serif">Arial</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Calibri">Calibri</option>
                        <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">Verdana</option>
                        <option value="'Lucida Grande',Verdana, monospace">Lucida</option>
                        <option value="'Courier New', Courier, monospace">Courier</option>
                    </select>
                </div>

                <textarea 
                    name="insertText" 
                    ref={redactorText}
                    autoFocus
                    rows="10" 
                    defaultValue='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci unde asperiores dolorem minus quas ducimus corrupti et vero obcaecati porro nihil aut labore facere, nostrum sit, enim nulla in suscipit?'
                />
        
            </div>

            <BackBtn />
        </div>
    )
}

export default TextRedactor