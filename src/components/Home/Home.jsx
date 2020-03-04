import React from 'react';
import Title from './Title/Title';
import Description from './Description/Description';
import Contacts from '../Contacts/Contacts';
import Works from '../Works/Works';

const Home = ({darkMode}) => (
    <div style={{width: '100%'}}>
        <Title />
        <Description darkMode={darkMode} />
        <Works />
        <Contacts darkMode={darkMode} />
    </div>
)

export default Home