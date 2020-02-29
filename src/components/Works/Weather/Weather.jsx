import React from 'react';
import Input from './Input/Input';
import styles from './Weather.module.css';
import Info from './Info/Info';
import BackBtn from '../../common/BackBtn/BackBtn';


const API_KEY = '2852372ee74f14a8e216bd6ac515418d';

class Weather extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		wind: undefined,
		error: undefined
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		if (city) {
			const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
			const data = await api_url.json();

			if (api_url.ok) {

				let sunset = data.sys.sunset;
				let sunrise = data.sys.sunrise;
				let sunset_date = new Date(sunset * 1000).toLocaleTimeString()
				let sunrise_date = new Date(sunrise * 1000).toLocaleTimeString()

				this.setState({
					temp: data.main.temp,
					city: data.name,
					country: data.sys.country,
					sunrise: sunrise_date,
					sunset: sunset_date,
					wind: data.wind.speed,
					error: undefined
				});
			} else {
				this.setState({
					temp: undefined,
					city: undefined,
					country: undefined,
					sunrise: undefined,
					sunset: undefined,
					wind: undefined,
					error: 'Undefined city'
				});
			}
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				sunrise: undefined,
				sunset: undefined,
				wind: undefined,
				error: 'Enter city'
			});
		}
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.main}>
					<div className={styles.title + ' ' + styles.shadowImg}>
						<h2 className={styles.appTitle}>Weather App</h2>
						<p className={styles.aboutApp}>Weather in your city</p>
					</div>
					<div className={styles.infoWrapper}>
						<Input getWeather={this.gettingWeather} />
						<Info  info={this.state}/>
					</div>
				</div>

				<BackBtn />
			</div>
		);
	}
}

export default Weather;