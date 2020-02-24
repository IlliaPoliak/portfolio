import React from 'react';
import styles from './Info.module.css'

const Info = props => (
	<div>
		{props.info.city &&
			<div className={styles.paramsInfo}>
				<p>City: {props.info.city}</p>
				<p>Temperature: {props.info.temp}</p>
				<p>Sunrise: {props.info.sunrise}</p>
				<p>Sunset: {props.info.sunset}</p>
				<p>Wind speed: {props.info.wind}</p>
			</div>
		}
		<p className={styles.errorInfo}>{props.info.error}</p>
	</div>
);

export default Info;