import types from "../types"

const initialState = {
    fetching: false,
    spaceXValues: []
}

export default function (state = { ...initialState }, action) {
    switch (action.type) {
        case types.GET_ALL_DATA:
            return { ...state, fetching: true }

        case types.GET_ALL_DATA_SUCCESS:
            return { ...state, fetching: false, spaceXValues: [...action.payload] }

        case types.GET_ALL_DATA_FAILED:
            return { ...state, fetching: false }

        default:
            return state
    }
}