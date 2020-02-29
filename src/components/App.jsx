import React, { Suspense, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styles from './App.module.css'

import Header from './Header/Header';
import Home from './Home/Home'
import Footer from './Footer/Footer';
import Works from './Works/Works'
import Contacts from './Contacts/Contacts'
import Loader from './common/Loader/Loader';
import PageNotFound from './404/PageNotFound'
import UpBtn from './common/UpBtn/UpBtn';
import Menu from './Menu/Menu';

const TestPage = React.lazy(() => import('./Works/Tests/TestPage'));
const Register = React.lazy(() => import('./Works/Register/Register'));
const Calculator = React.lazy(() => import('./Works/Calculator/Calculator'));
const Redactor = React.lazy(() => import('./Works/Redactor/Redactor'));
const TextRedactor = React.lazy(() => import('./Works/TextRedactor/TextRedactor'));
const Weather = React.lazy(() => import('./Works/Weather/Weather'));
const Todo = React.lazy(() => import('./Works/Todo/Todo'));
const UsersTable = React.lazy(() => import('./Works/UsersTable/UsersTable'));


const App = props => {

	let [burgerMenu, setBurgerMenu] = useState(false)
	const handleResize = e => e.target.innerWidth < 768 ? setBurgerMenu(true) : setBurgerMenu(false)

	useEffect(()=>{
		window.addEventListener('resize', handleResize)
		return ()=>window.removeEventListener('resize', handleResize)
	}, [])

	const handleSubmit = formData => {
		alert(JSON.stringify(formData))
	}

	const { mainContent, darkModeStyle } = styles

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			{burgerMenu ? <Menu /> : <Header />}
			
			<main className={props.darkMode ? `${mainContent} ${darkModeStyle}` : mainContent}>
				<Suspense fallback={<Loader />}>
					<Switch>
						<Route exact path="/"><Home darkMode={props.darkMode} /></Route>
						<Route exact path="/works" component={Works} />
						<Route exact path="/contacts" component={Contacts} />

						<Route path="/works/tests" component={TestPage} />
						<Route path="/works/tests/start" component={TestPage} />
						<Route path="/works/tests/add" component={TestPage} />
						<Route path="/works/tests/delete" component={TestPage} />
						<Route path="/works/tests/edit" component={TestPage} />
						
						<Route path="/works/register"><Register onSubmit={handleSubmit} /></Route>
						<Route path="/works/calculator" component={Calculator} />
						<Route path="/works/redactor" component={Redactor} />
						<Route path="/works/text-redactor" component={TextRedactor} />
						<Route path="/works/weather" component={Weather} />
						<Route path="/works/todo" component={Todo} />
						<Route path="/works/users-table" component={UsersTable} />
						<Route path="*" component={PageNotFound} />
					</Switch>
				</Suspense>
				<UpBtn darkMode={props.darkMode} />
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default connect(state => ({ darkMode: state.app.darkMode }), {})(App);
