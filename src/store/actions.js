import { 
    SET_LOADING_STATUS, 
    SET_ERROR, 
    SET_USERS_DATA, 
    SET_EDIT_MODE, 
    SET_SALARY, 
    DELETE_USER, 
    CHECK_USER, 
    CHECK_ALL_USERS, 
    UNCHECK_ALL_USERS, 
    UNCHECK_USER, 
    DELETE_CHECKED_USERS,
    SET_EXCHANGE_RATES,
    CONVERT_CURRENCY,
    TOGGLE_DELETE_ALERT,
    SET_MESSAGE,
    SET_REG_DATA, ADD_TEST
} from '../constants'


export const setRegData = data => ({
    type: SET_REG_DATA,
    payload: data
})

export const addTest = data => ({
    type: ADD_TEST,
    payload: data
})

export const toggleIsLoading = bool => ({ type: SET_LOADING_STATUS, payload: bool })
export const setErrorMessage = error => ({ type: SET_ERROR, payload: error })
export const setMessage = message => ({ type: SET_MESSAGE, payload: message })

export const setUsersData = data => ({ type: SET_USERS_DATA, payload: data })
export const setExchangeRates = data => ({ type: SET_EXCHANGE_RATES, payload: data })
export const convertCurrency = currency => ({ type: CONVERT_CURRENCY, payload: currency })

export const setEditMode = (bool, user) => ({ type: SET_EDIT_MODE, payload: { bool, user } })
export const setSalary = (userId, salary) => ({ type: SET_SALARY, payload: { userId, salary } })
export const toggleDeleteAlert = (bool, user) => ({ type: TOGGLE_DELETE_ALERT, payload: { bool, user } })

export const deleteUser = userId => ({ type: DELETE_USER, payload: userId })
export const checkUser = userId => ({ type: CHECK_USER, payload: userId })
export const uncheckUser = userId => ({ type: UNCHECK_USER, payload: userId })

export const checkAllUsers = () => ({ type: CHECK_ALL_USERS })
export const uncheckAllUsers = () => ({ type: UNCHECK_ALL_USERS })
export const deleteCheckedUsers = () => ({ type: DELETE_CHECKED_USERS })
