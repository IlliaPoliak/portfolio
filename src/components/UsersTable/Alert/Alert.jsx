import React from 'react'
import './Alert.css'
import Button from '../Button/Button'
import Title from '../Title/Title'

export default ({ toggleDeleteAlert, deleteCheckedUsers }) => {

    return (
        <div className='popupContainer'>
            <div className='alert'>
                <Title>Удалить?</Title>

                <div className='alertBtnsWrapper'>
                    <Button 
                        width='100px'
                        onClick={() => toggleDeleteAlert(false)}>
                        Нет
                    </Button>

                    <Button 
                        width='100px'
                        onClick={() => {
                        deleteCheckedUsers()
                        toggleDeleteAlert(false)
                    }}>
                        Да
                    </Button>
                </div>

                <span onClick={() => toggleDeleteAlert(false)} className='btnClosePopup'>&times;</span>

            </div>
        </div>
    )
}
