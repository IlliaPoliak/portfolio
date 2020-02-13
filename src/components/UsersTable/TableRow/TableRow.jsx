import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import { EditIcon, DeleteIcon } from '../Icons/Icons'

export default ({ user, setEditMode, deleteUser, checkUser, uncheckUser, USD, currency, setMessage }) => {

    const handleOnChangeCheckbox = (isChecked) => {
        isChecked ? uncheckUser(user.id) : checkUser(user.id)
    }

    const weight = Math.floor(user.weight / 2.2046)
    const [foots, inch] = user.height.split(/\D/)
    const smHeight = Math.floor(foots * 30 + inch * 2.54)
    const year = new Date(Date.now()).getYear() - new Date(user.dateOfBirth).getYear()
    const salary = currency === 'USD' ? <span>${user.salary}</span> : <span>&#8364;{Math.floor(user.salary / USD)}</span>

    return (
        <tr>
            <td>
                <Checkbox
                    id={'user' + user.id}
                    checkedValue={user.isChecked}
                    onChange={() => handleOnChangeCheckbox(user.isChecked)}
                />
            </td>
            <td>
                {user.id + 1}
            </td>
            <td>
                {`${user.firstName} ${user.lastName}`}
            </td>
            <td>
                {year}
            </td>
            <td>
                {smHeight} см
            </td>
            <td>
                {weight} кг
                </td>
            <td>
                {salary}
            </td>
            <td>
                <EditIcon onClick={ () => setEditMode(true, user) } />
            </td>
            <td>
                <DeleteIcon onClick={ () => {
                    deleteUser(user.id)
                    setMessage(true)
                    setTimeout(()=>setMessage(false), 800)
                }} />
            </td>
        </tr>
    )
}
