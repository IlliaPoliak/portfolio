import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.2px;
    margin: 0;
    background-color: 'grey';
    color: ${({darkMode}) => darkMode};
`

export default ({darkMode, children}) => (
    <Title darkMode={darkMode ? 'white' : 'black'} className='title'>{children}</Title>
)

