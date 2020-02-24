import React from 'react';
import styled from 'styled-components'

export default ({onChange}) => (
	<Input 
		className='searchInput'
		type="text" 
		placeholder="Поиск" 
		onChange={e => onChange(e.target.value)} 
	/>
)

const Input = styled.input`
	width: 335px;
    height: 42px;
    border-radius: 4px;
    border: solid 1px #c6c6c6;
    background-color: #ffffff;
    padding: 13px 24px;
    box-sizing: border-box;
    margin: 20px 0 10px 0;
`