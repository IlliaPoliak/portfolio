import {
    toggleIsLoading,
    setUsersData,
    setErrorMessage,
    setExchangeRates
} from './actions'


export const getUsersData = () => async dispatch => {
    try {
        dispatch(toggleIsLoading(true))

        // получаем данные пользователей
        let response = await fetch('https://api.myjson.com/bins/5z1rq')
        let data = await response.json()

        // получаем текущий курс валют
        let exchange = await fetch('https://api.exchangeratesapi.io/latest')
        let rates = await exchange.json()
        let usd = rates.rates.USD
        
        // добавляем ID, ставим USD валютой по умолчанию, добавляем флаг isChecked
        let newData = data.map( (user, i) => ({ id: i, ...user, salary: Math.floor(user.salary * usd), isChecked: false }) )

        dispatch(setUsersData(newData))
        dispatch(setExchangeRates(usd))
        dispatch(toggleIsLoading(false))

    } catch (e) {
        dispatch(toggleIsLoading(false))
        dispatch(setErrorMessage(e.message))
    }
}
