import { load } from 'redux-localstorage-simple';
import { SET_LOADING_STATUS, SET_ERROR, SET_MESSAGE, SET_DARK_MODE, SET_LANG } from '../../constants'

const LOCAL_STORAGE = load({namespace: 'portfolio-app'})

let initialState = {
    isLoading: false,
    isError: null,
    operationSuccess: false,
    darkMode: LOCAL_STORAGE && LOCAL_STORAGE.app && LOCAL_STORAGE.app.darkMode ? LOCAL_STORAGE.app.darkMode : false,
    lang: LOCAL_STORAGE &&  LOCAL_STORAGE.app && LOCAL_STORAGE.app.lang ? LOCAL_STORAGE.app.lang : 'en'
}

export const app = (state = initialState, action) => {
    switch (action.type) {

        case SET_LOADING_STATUS:
            return { ...state, isLoading: action.payload }

        case SET_ERROR:
            return { ...state, isError: action.payload }

        case SET_MESSAGE:
            return { ...state, operationSuccess: action.payload }

        case SET_DARK_MODE:
            return { ...state, darkMode: action.payload}

        case SET_LANG: 
            return { ...state, lang: action.payload}

        default: return state;
    }
}
