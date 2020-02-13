import React from 'react'
import './Message.css'

export default ({message, display}) => <div className={ 'message ' + (display ? 'show' : 'hidden')}><h2>{message}</h2></div>