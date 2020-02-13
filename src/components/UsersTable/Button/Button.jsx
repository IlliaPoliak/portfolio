import React from 'react'
import styled from 'styled-components'
import { LIGHT_BLUE } from '../../../constants'

export default ({ onClick, floatRight, children, disabled, width }) => (
    <Button 
        onClick={() => onClick()}
        style={{float: floatRight ? 'right' : 'left', width: width || '222px'}}
        disabled={disabled || false}
    >
        {children}
    </Button>
)

const Button = styled.button`
    font-family: Verdana;
    font-weight: bold;
    letter-spacing: 0.2px;
    text-align: center;
    color: #ffffff;
    border: none;
    height: 48px;
    border-radius: 4px;
    box-shadow: 0 12px 18px -6px rgba(0, 59, 133, 0.24), 0 8px 5px -6px rgba(0, 48, 109, 0.43);
    background-color: ${LIGHT_BLUE};
    outline: none;

    &:hover{
        background-color: #4e9cff;
        cursor: pointer;
    }

    &:active{
        background-color: #1f61b4;
    }

    &:disabled{
        background-color: #aaaaaa;
        cursor: not-allowed;
    }
`