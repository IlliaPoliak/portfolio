import React, { useRef, useState, useEffect } from 'react';
import styles from './Redactor.module.css'
import noImg from './img/noimage.png'
import BackBtn from '../../common/BackBtn/BackBtn';
import ControlBtn from '../../common/ControlBtn/ControlBtn';

const Redactor = ({darkMode}) => {

    const defaults = {
        sepia: 0,
        blur: 0,
        brightness: 50,
        contrast: 50,
        grayscale: 0,
        hueRotate: 0,
        invert: 0,
        opacity: 100,
        saturate: 50
    }

    const filePictureInput = useRef()
    const pictureImg = useRef()

    let [sepia, setSepia] = useState(defaults.sepia)
    let [blur, setBlur] = useState(defaults.blur)
    let [brightness, setBrightness] = useState(defaults.brightness)
    let [contrast, setContrast] = useState(defaults.contrast)
    let [grayscale, setGrayscale] = useState(defaults.grayscale)
    let [hueRotate, setHueRotate] = useState(defaults.hueRotate)
    let [invert, setInvert] = useState(defaults.invert)
    let [opacity, setOpacity] = useState(defaults.opacity)
    let [saturate, setSaturate] = useState(defaults.saturate)

    const setDefaultValues = () => {
        setSepia(defaults.sepia)
        setBlur(defaults.blur)
        setBrightness(defaults.brightness)
        setContrast(defaults.contrast)
        setGrayscale(defaults.grayscale)
        setHueRotate(defaults.hueRotate)
        setInvert(defaults.invert)
        setOpacity(defaults.opacity)
        setSaturate(defaults.saturate)
    }

    const handleRange = e => {
        const value = e.target.value

        switch (e.target.name) {
            case 'sepia': setSepia(value)
                break
            case 'blur': setBlur(value)
                break
            case 'brightness': setBrightness(value)
                break
            case 'contrast': setContrast(value)
                break
            case 'grayscale': setGrayscale(value)
                break
            case 'hueRotate': setHueRotate(value)
                break
            case 'invert': setInvert(value)
                break
            case 'opacity': setOpacity(value)
                break
            case 'saturate': setSaturate(value)
                break
            default: break
        }
    }

    const loadingPicture = () => {
        const file = filePictureInput.current.files[0]

        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            setDefaultValues()
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => pictureImg.current.src = window.URL.createObjectURL(file))
        }
    }

    useEffect(() => {
        pictureImg.current.style.filter = `
            sepia(${sepia}%)
            blur(${Math.round(blur / 2)}px)
            brightness(${brightness * 2}%)
            contrast(${contrast * 2}%)
            grayscale(${grayscale}%)
            hue-rotate(${hueRotate * 3.6}deg)
            invert(${invert}%)
            opacity(${opacity}%)
            saturate(${saturate * 2}%)
        `
    }, [sepia, blur, brightness, contrast, grayscale, hueRotate, invert, opacity, saturate])

    return <>
        <div className={darkMode ? `${styles.redactorBlock} ${styles.darkModeStyles}` : styles.redactorBlock}>
            <div className={styles.interface}>
                <label className={styles.picture}>
                    <input ref={filePictureInput} type="file" name="picture" onChange={loadingPicture} />
                    <img ref={pictureImg} src={noImg} alt="edit"></img>
                </label>

                <div className={styles.controls}>
                    <label>
                        <span className={styles.rangeTitle}>Sepia</span>
                        <input type="range" name="sepia" onChange={handleRange} value={sepia} /><span>{sepia}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Blur</span>
                        <input type="range" name="blur" onChange={handleRange} value={blur} /><span>{blur}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Brightness</span>
                        <input type="range" name="brightness" onChange={handleRange} value={brightness} /><span>{brightness}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Contrast</span>
                        <input type="range" name="contrast" onChange={handleRange} value={contrast} /><span>{contrast}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Grayscale</span>
                        <input type="range" name="grayscale" onChange={handleRange} value={grayscale} /><span>{grayscale}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Hue rotate</span>
                        <input type="range" name="hueRotate" onChange={handleRange} value={hueRotate} /><span>{hueRotate}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Invert</span>
                        <input type="range" name="invert" onChange={handleRange} value={invert} /><span>{invert}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Opacity</span>
                        <input type="range" name="opacity" onChange={handleRange} value={opacity} /><span>{opacity}</span>
                    </label>
                    <label>
                        <span className={styles.rangeTitle}>Saturate</span>
                        <input type="range" name="saturate" onChange={handleRange} value={saturate} /><span>{saturate}</span>
                    </label>
                    
                    <ControlBtn func={setDefaultValues}>Reset</ControlBtn>
                </div>
            </div>
        </div>
        <BackBtn />
    </>
}

export default Redactor