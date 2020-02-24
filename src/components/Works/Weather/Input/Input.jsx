import React from 'react';
import styles from './Input.module.css';

const Input = props => (
	<form onSubmit={props.getWeather} className={styles.form}>
		<input type='text' name='city' placeholder='City' className={styles.inputCity} />
		<button className={styles.getBtn}>Get Weather</button>
	</form>
);

export default Input;