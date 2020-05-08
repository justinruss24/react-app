import { FETCH_DATA, GET_WEATHER, SET_ERROR } from "../actions/actions.js";

const initialState = {
    weather: [],
    isFetchingData: false,
    error: ""
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                isFetchingData: true,
                weather: {},
            };
        case GET_WEATHER:
            return {
                weather: action.payload,
                isFetchingData: false,
            }
        case SET_ERROR:
            return {
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};