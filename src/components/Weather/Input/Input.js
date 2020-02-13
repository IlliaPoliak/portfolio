import React from 'react';
import './Input.module.css';

const Input = props => (
	<form onSubmit={props.getWeather} className='form'>
		<input type='text' name='city' placeholder='City' className='input-city' />
		<button className='get-btn'>Get Weather</button>
	</form>
);

export default Input;