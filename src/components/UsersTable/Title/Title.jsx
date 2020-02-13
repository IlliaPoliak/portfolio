import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.2px;
    margin: 0;
    background-color: 'grey'
`

export default ({children}) => (
    <Title className='title'>{children}</Title>
)