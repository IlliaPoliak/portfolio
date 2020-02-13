import { SET_LOADING_STATUS, SET_ERROR, SET_MESSAGE } from '../../constants'

let initialState = {
    isLoading: false,
    isError: null,
    operationSuccess: false
}

export const app = (state = initialState, action) => {
    switch (action.type) {

        case SET_LOADING_STATUS:
            return { ...state, isLoading: action.payload }

        case SET_ERROR:
            return { ...state, isError: action.payload }

        case SET_MESSAGE:
            return { ...state, operationSuccess: action.payload }

        default: return state;
    }
}
