import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styles from './App.module.css'
import { setRegData, addTest } from '../store/actions'

// import Menu from './Menu/Menu.jsx'
import Home from './Home/Home'
import TestPage from './Tests/TestPage'
import Register from './Register/Register'
import Calculator from './Calculator/Calculator'
import Redactor from './Redactor/Redactor'
import TextRedactor from './TextRedactor/TextRedactor'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Weather from './Weather/Weather.jsx';
import Todo from './Todo/Todo';
import UsersTable from './UsersTable/UsersTable';


const App = props => {

	const handleSubmit = formData => {
		props.setRegData(formData)
		alert(JSON.stringify(formData))
	}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Header />
			<main className={styles.mainContent}>
				<Switch>
					<Route exact path="/">
						<Home regData={props.regData} />
					</Route>
					<Route path="/tests">
						<TestPage tests={props.tests} addTest={props.addTest} />
					</Route>
					<Route path="/register">
						<Register onSubmit={handleSubmit} />
					</Route>
					<Route path="/calculator">
						<Calculator />
					</Route>
					<Route path="/redactor">
						<Redactor />
					</Route>
					<Route path="/text-redactor">
						<TextRedactor />
					</Route>
					<Route path="/weather">
						<Weather />
					</Route>
					<Route path="/todo">
						<Todo />
					</Route>
					<Route path="/users-table">
						<UsersTable />
					</Route>
					
				</Switch>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default connect(state => ({
	regData: state.register.regData,
	tests: state.testing.tests
}), {
	setRegData,
	addTest
})(App);
