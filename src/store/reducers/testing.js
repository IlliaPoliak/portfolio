import { ADD_TEST } from '../../constants'

let initialState = {
    tests: [
        {
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
        }
    ]
}

export const testing = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TEST:
            return { ...state, tests: [...state.tests, action.payload] }


        default: return state;
    }
}