import { load } from 'redux-localstorage-simple';
import { ADD_TEST } from '../../constants'

const LOCAL_STORAGE = load({ namespace: 'portfolio-app' })
const initialTests = [{
    id: 1,
    question: 'Какого цвета небо?',
    answer: 'b',
    variants: {
        a: 'Красное',
        b: 'Синее',
        c: 'Зеленое',
        d: 'Белое'
    }
},
{
    id: 2,
    question: 'Какого цвета трава?',
    answer: 'c',
    variants: {
        a: 'Красное',
        b: 'Синее',
        c: 'Зеленое',
        d: 'Белое'
    }
},
{
    id: 3,
    question: 'Какого цвета солнце?',
    answer: 'd',
    variants: {
        a: 'Красное',
        b: 'Синее',
        c: 'Зеленое',
        d: 'Белое'
    }
}]

const tests = LOCAL_STORAGE && LOCAL_STORAGE.testing && LOCAL_STORAGE.testing.tests 
? LOCAL_STORAGE.testing.tests 
: initialTests 

let initialState = {
    tests: [ ...tests ]
}

export const testing = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TEST:
            return { ...state, tests: [...state.tests, action.payload] }

        default: return state;
    }
}