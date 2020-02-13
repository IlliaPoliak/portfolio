import React, { useState } from 'react'
import './Popup.css'
import Button from '../Button/Button'
import Title from '../Title/Title'

export default ({ userData, setEditMode, setSalary, USD, currency }) => {

    let [salaryValue, setSalaryValue] = useState(currency === 'USD' ? userData.salary : Math.floor(userData.salary / USD))

    return (
        <div className='popupContainer'>
            <div className='popup'>
                <div className='popupContent'>

                    <Title>Редактирование зарплаты</Title>

                    <div className='popupInfo'>
                        <div className='recipient'>Получатель:</div>
                        <div>{userData.firstName + ' ' + userData.lastName}</div>
                    </div>

                    <input 
                        className='salaryInput'
                        type="number" 
                        value={salaryValue} 
                        onChange={ e => e.target.value ? setSalaryValue(e.target.value) : true }
                    />

                    <Button 
                        onClick={e => {
                        setEditMode(false, null)
                        setSalary(userData.id, currency === 'USD' ? salaryValue : Math.ceil(salaryValue * USD) )
                    }}>
                        Изменить зарплату
                    </Button>
                </div>

                <span onClick={() => setEditMode(false, null)} className='btnClosePopup'>&times;</span>
                
            </div>
        </div>

    )
}
