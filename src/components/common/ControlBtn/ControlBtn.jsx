import React from 'react'
import styled from 'styled-components'

export default ({func, children}) => <ControlBtn onClick={func}>{children}</ControlBtn>

const ControlBtn = styled.button`
    padding: 10px;
    background-color: var(--blu-sky-color);
    border: 2px solid #f6f6f6;
    font-weight: bold;
    color: #f6f6f6;
    width: 140px;
    transition: all 0.2s ease; 

    &:hover{
        cursor: pointer;
        background-color: rgb(75, 75, 75);
    }

    &:active{
        background-color: rgba(43, 43, 43, 0.59);
    }
`