import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styles from './App.module.css'
import { setRegData, addTest } from '../store/actions'

import Header from './Header/Header';
import Home from './Home/Home'
import Footer from './Footer/Footer';
import Works from './Works/Works'
import Contacts from './Contacts/Contacts'

import TestPage from './Works/Tests/TestPage'
import Register from './Works/Register/Register'
import Calculator from './Works/Calculator/Calculator'
import Redactor from './Works/Redactor/Redactor'
import TextRedactor from './Works/TextRedactor/TextRedactor'
import Weather from './Works/Weather/Weather';
import Todo from './Works/Todo/Todo';
import UsersTable from './Works/UsersTable/UsersTable';
import PageNotFound from './404/PageNotFound';


const App = props => {

	const handleSubmit = formData => {
		props.setRegData(formData)
		alert(JSON.stringify(formData))
	}

	const { mainContent, darkModeStyle } = styles

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Header />
			<main className={props.darkMode ? `${mainContent} ${darkModeStyle}` : mainContent}>
				<Switch>
					<Route exact path="/">
						<Home darkMode={props.darkMode} />
					</Route>
					<Route exact path="/works">
						<Works />
					</Route>
					<Route exact path="/contacts">
						<Contacts darkMode={props.darkMode} />
					</Route>
					<Route path="/works/tests">
						<TestPage tests={props.tests} addTest={props.addTest} darkMode={props.darkMode} />
					</Route>
					<Route path="/works/register">
						<Register onSubmit={handleSubmit} />
					</Route>
					<Route path="/works/calculator">
						<Calculator />
					</Route>
					<Route path="/works/redactor">
						<Redactor darkMode={props.darkMode} />
					</Route>
					<Route path="/works/text-redactor">
						<TextRedactor />
					</Route>
					<Route path="/works/weather">
						<Weather />
					</Route>
					<Route path="/works/todo">
						<Todo />
					</Route>
					<Route path="/works/users-table">
						<UsersTable />
					</Route>
					<Route path="*">
						<PageNotFound />
					</Route>

				</Switch>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default connect(state => ({
	regData: state.register.regData,
	tests: state.testing.tests,
	darkMode: state.app.darkMode
}), {
	setRegData,
	addTest
})(App);
