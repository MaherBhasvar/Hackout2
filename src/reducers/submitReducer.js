import { SHOW_JOURNEY } from '../actions/types'

const initialState = {
    newData: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_JOURNEY:
            return {
                ...state,
                newData: action.payload,
            }
        default:
            return state
    }
}