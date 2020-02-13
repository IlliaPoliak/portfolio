import { SET_REG_DATA } from '../../constants'

let initialState = {
    regData: null
    // {
    //     login: '',
    //     email: '',
    //     sex: null,
    //     employed: null,
    //     status: null,
    //     password: '',
    //     repeat: ''
    // },
}

export const register = (state = initialState, action) => {
    switch (action.type) {

        case SET_REG_DATA:
            return { ...state, regData: {...action.payload} }


        default: return state;
    }
}