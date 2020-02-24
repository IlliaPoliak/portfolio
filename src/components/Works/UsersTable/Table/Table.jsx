import React, { useState, useEffect } from 'react'
import './Table.css'
import TableRow from '../TableRow/TableRow'
import Checkbox from '../Checkbox/Checkbox'
import Search from '../Search/Search';
import _ from 'lodash';

export default ({ usersData, setEditMode, deleteUser, checkUser, uncheckUser, checkAllUsers, uncheckAllUsers, USD, currency, convertCurrency, currentPage, pageSize, setMessage }) => {

    const allUsersChecked = usersData.every(({ isChecked }) => isChecked)
    const handleChangeExchangeRates = () => currency === 'USD' ? convertCurrency('EUR') : convertCurrency('USD')
    const handleChangeCheckbox = () => !allUsersChecked ? checkAllUsers() : uncheckAllUsers()
    const handleChangeSearchInput = text => setSearchText(text)
    let [usersList, setUsersList] = useState(usersData)

    // searching
    let filteredData = {}
    let [searchText, setSearchText] = useState('')
    let [matchesCount, setMatchesCount] = useState(0)

    useEffect(() => {
        let count = 0

        filteredData = usersData.filter(user => {
            if (user.firstName.toUpperCase().includes(searchText.toUpperCase())
                || user.lastName.toUpperCase().includes(searchText.toUpperCase())) {
                count++
                return user
            }
        })

        setMatchesCount(count)
        setUsersList(filteredData)
    }, [searchText, usersData])

    // sorting
    let [sortDirection, setSortDirection] = useState('asc')
    let [sortField, setSortField] = useState('id')
    let arrow = sortDirection === 'asc' ? <span>&uarr;</span> : <span>&darr;</span>

    useEffect(() => setUsersList(_.orderBy(usersList, sortField, sortDirection)), [sortDirection, sortField])

    const onSort = e => {
        setSortField(e.target.id)
        setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')
    }

    // pagination borders
    const leftBorder = currentPage * pageSize - pageSize + 1
    const rightBorder = currentPage * pageSize

    const tableFields = { id: '№', firstName: 'ФИО', dateOfBirth: 'Возраст (Лет)', height: 'Рост', weight: 'Вес', salary: 'Зарплата' }

    return (
        <>
            <Search onChange={handleChangeSearchInput} />
            { usersData.length !== matchesCount && <span className='matches-count'>Найдено: {matchesCount}</span> }

            <table className='table'>
                <thead>
                    <tr className='thead'>
                        <th>
                            <Checkbox
                                id='selectAllUsers'
                                checkedValue={allUsersChecked}
                                onChange={handleChangeCheckbox}
                            />
                        </th>
                        {
                            Object.keys(tableFields).map(key => {
                                if (key === 'salary') {
                                    const currencyHeader = <small className='currency' onClick={handleChangeExchangeRates}>({currency})</small>
                                    
                                    if (key === sortField) {
                                        return <th key={key} id={key} onClick={e => onSort(e)}>{tableFields[key]}{currencyHeader}{arrow}</th>
                                    } else {
                                        return <th key={key} id={key} onClick={e => onSort(e)}>{tableFields[key]}{currencyHeader}</th>
                                    }
                                } else {
                                    if (key === sortField) {
                                        return <th key={key} id={key} onClick={e => onSort(e)}>{tableFields[key]} {arrow}</th>
                                    } else {
                                        return <th key={key} id={key} onClick={e => onSort(e)}>{tableFields[key]}</th>
                                    } 
                                }
                            })
                        }
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {usersList.map((user, i) => {
                        if (i + 1 >= leftBorder && i + 1 <= rightBorder) {
                            return (
                                <TableRow
                                    key={user.id}
                                    user={user}
                                    setEditMode={setEditMode}
                                    deleteUser={deleteUser}
                                    checkUser={checkUser}
                                    uncheckUser={uncheckUser}
                                    USD={USD}
                                    currency={currency}
                                    convertCurrency={convertCurrency}
                                    setMessage={setMessage}
                                />
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}
