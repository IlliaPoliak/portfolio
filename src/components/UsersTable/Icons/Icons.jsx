import React from 'react'
import styled from 'styled-components'
import { LIGHT_BLUE } from '../../../constants'

export const EditIcon = ({onClick}) => {
    return (
        <Icon 
            className='editIcon' 
            onClick={ () => onClick() }
            xmlns="http://www.w3.org/2000/svg" 
            width="15" height="15" 
            viewBox="0 0 15 15">

            <path fillRule="nonzero" d="M12.414.586L14 2.172A2 2 0 0 1 14 5l-9.586 9.586H0v-4.414L9.586.586a2 2 0 0 1 2.828 0zM8.25 4.75L2 11v1.586h1.586l6.249-6.25L8.249 4.75zM11 2L9.664 3.336 11.25 4.92l1.336-1.335L11 2z" />
        </Icon> 
    )
}

export const DeleteIcon = ({onClick}) => {
    return (
        <Icon 
            className='deleteIcon' 
            onClick={ () => onClick() }
            xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" 
            viewBox="0 0 16 16">

            <path fillRule="nonzero" d="M3 5v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5h2v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5h2zm4 0v8H5V5h2zm4 0v8H9V5h2zM9.382 0a2 2 0 0 1 1.789 1.106l.447.894H16v2h-5.618l-1-2H6.618l-1 2H0V2h4.382l.447-.894A2 2 0 0 1 6.618 0z" />
        </Icon>
    )
}

const Icon = styled.svg`
    fill: "#4C4C4C";

    &:hover{
        fill: ${LIGHT_BLUE};
        cursor: pointer
    } 
`
