import React, { useEffect, useRef} from 'react'
import styles from './UbBtn.module.css'

const Arrow = () => (
    <svg x="0px" y="0px" width="960px" height="560px" viewBox="0 0 960 560" enableBackground="new 0 0 960 560">
		<g id="Rounded_Rectangle_33_copy_4_1_">
			<path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937 c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937 c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
		</g>
	</svg>
)

export default ({darkMode}) => {
	const arrow = useRef()

	const handleScroll = () => {
		if(window.pageYOffset < 1600){
			arrow.current.classList.remove(styles.show)
		} else {
			arrow.current.classList.add(styles.show)
		}
	}

	useEffect(()=>{
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const smoothScroll = () => {
		let Element = document.getElementById('nav');
		let selectedPosY = 0;
		while (Element != null) {
			selectedPosY += Element.offsetTop;
			Element = Element.offsetParent;
		}
		window.scrollTo(0, selectedPosY);
	}
	
	return(
	<div 
		ref={arrow} 
		onClick={smoothScroll} 
		className={ darkMode ? styles.btn : `${styles.btn} ${styles.darkModeStyles}`}
	>
		<Arrow />
	</div>
)}
