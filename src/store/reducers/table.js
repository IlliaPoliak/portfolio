import { 
    SET_USERS_DATA, 
    SET_EDIT_MODE, 
    SET_SALARY, 
    DELETE_USER, 
    CHECK_USER, 
    UNCHECK_USER, 
    CHECK_ALL_USERS, 
    UNCHECK_ALL_USERS, 
    DELETE_CHECKED_USERS, 
    SET_EXCHANGE_RATES,
    CONVERT_CURRENCY,
    TOGGLE_DELETE_ALERT,
} from '../../constants'

let initialState = {
    usersData: null,
    editMode: false,
    deleteAlert: false,
    userData: null,
    USD: null,
    currency: 'USD',
}

export const table = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_DATA:
            return { ...state, usersData: action.payload }

        case SET_EXCHANGE_RATES:
            return { ...state, USD: action.payload }

        case SET_EDIT_MODE:
            return { ...state, editMode: action.payload.bool, userData: action.payload.user }

        case TOGGLE_DELETE_ALERT:
            return { ...state, deleteAlert: action.payload.bool, userData: action.payload.user }

        case SET_SALARY: 
            return { 
                ...state, 
                usersData: state.usersData.map((user)=>{
                    if (user.id === action.payload.userId) {
                        user.salary = action.payload.salary
                        return user
                    }
                    return user
                })  
            }

        case CONVERT_CURRENCY: 
            return { ...state, currency: action.payload}

        case DELETE_USER: 
            return { ...state, usersData: state.usersData.filter(user => user.id !== action.payload) }

        case DELETE_CHECKED_USERS: 
            return { ...state, usersData: state.usersData.filter(user => !user.isChecked) }

        case CHECK_USER: 
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.payload){
                        user.isChecked = true
                        return user
                    }
                    return user
                }),
            }

        case UNCHECK_USER: 
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.payload){
                        user.isChecked = false
                        return user
                    }
                    return user
                }),
            }

        case CHECK_ALL_USERS: 
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    user.isChecked = true
                    return user
                }),
            }

        case UNCHECK_ALL_USERS: 
            return { 
                ...state, 
                usersData: state.usersData.map(user => {
                    user.isChecked = false
                    return user
                }),
            }
        
        default: return state;
    }
}
