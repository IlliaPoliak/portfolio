import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	setEditMode, setSalary, toggleDeleteAlert, setMessage,
	deleteUser, checkUser, uncheckUser, checkAllUsers, uncheckAllUsers, deleteCheckedUsers, 
	convertCurrency
} from '../../../store/actions'
import { getUsersData } from '../../../store/thunks'
import styles from './UsersTable.module.css'

import Loader from '../../common/Loader/Loader'
import Error from '../../common/Error/Error'
import Message from '../../common/Message/Message'

import Table from './Table/Table'
import Popup from './Popup/Popup'
import Title from './Title/Title'
import Button from './Button/Button'
import Alert from './Alert/Alert'
import Pagination from './Pagination/Pagination'
import BackBtn from '../../common/BackBtn/BackBtn';

class App extends Component {

	componentDidMount() {
		this.props.getUsersData()
	}

	state = {
		currentPage: 1,
		pageSize: 6,
	}

	handlePageNumberClick = page => {
		this.setState({
			currentPage: page
		})
	}

	nextPageNumber = () => {
		this.setState({
			currentPage: this.state.currentPage + 1
		})
	}

	prevPageNumber = () => {
		this.setState({
			currentPage: this.state.currentPage - 1
		})
	}

	render() {
		let { 
			isLoading, isError, usersData, editMode, setEditMode, userData, setSalary, toggleDeleteAlert, deleteAlert, darkMode,
			deleteUser, checkUser, uncheckUser, checkAllUsers, uncheckAllUsers, deleteCheckedUsers, 
			USD, currency, convertCurrency, operationSuccess, setMessage
		} = this.props

		let totalItemsCount = usersData ? usersData.length : 0
		debugger
		return (
			<div className={styles.app}>
				{	isLoading ? <Loader />

					: isError ? <Error errorMessage={isError} /> 

					: usersData &&  
					<div className={styles.tableWrapper}>

						<Title darkMode={darkMode}>Таблица пользователей</Title>

						<Table 
							usersData={usersData} 
							setEditMode={setEditMode} 
							deleteUser={deleteUser} 
							checkUser={checkUser} 
							uncheckUser={uncheckUser} 
							checkAllUsers={checkAllUsers} 
							uncheckAllUsers={uncheckAllUsers} 
							USD={USD}
							currency={currency}
							convertCurrency={convertCurrency}
							setMessage={setMessage}
							currentPage={this.state.currentPage}
							pageSize={this.state.pageSize}
						/>

						<Button 
							disabled={ usersData.some( ({isChecked}) => isChecked ) ? false : true}
							onClick={ () => toggleDeleteAlert(true) }  
							floatRight
						>Удалить выбранные</Button>

						<Pagination 
							totalItemsCount={totalItemsCount}
							currentPage={this.state.currentPage}
							pageSize={this.state.pageSize}
							handlePageNumberClick={this.handlePageNumberClick}
							nextPageNumber={this.nextPageNumber}
							prevPageNumber={this.prevPageNumber}
						/>

						{editMode && <Popup userData={userData} setEditMode={setEditMode} setSalary={setSalary} USD={USD} currency={currency} />}
						{deleteAlert && <Alert userData={userData} toggleDeleteAlert={toggleDeleteAlert} deleteCheckedUsers={deleteCheckedUsers} />}
						<Message message='Success operation' display={operationSuccess} />
					</div>
				}
				<BackBtn />
			</div>
		);
	}
}

export default connect(
	state => ({
		isLoading: state.app.isLoading,
		isError: state.app.isError,
		operationSuccess: state.app.operationSuccess,
		usersData: state.table.usersData,
		editMode: state.table.editMode,
		deleteAlert: state.table.deleteAlert,
		userData: state.table.userData,
		USD: state.table.USD,
		currency: state.table.currency,
		darkMode: state.app.darkMode
	}), { 
		getUsersData, setEditMode, setSalary, toggleDeleteAlert, setMessage,
		deleteUser, checkUser, uncheckUser, checkAllUsers, uncheckAllUsers, deleteCheckedUsers, 
		convertCurrency
	}
)(App)
