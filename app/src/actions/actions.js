import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const GET_WEATHER = "GET_WEATHER";
export const SET_ERROR = "SET_ERROR";


export const getWeather = () => dispatch => {
    axios.get('http://www.metaweather.com/api/location/search/?query=portland/consolidated_weather')
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_WEATHER, payload: res.data });
        })
        .catch(error => {
            console.log("sorrey", error)
            dispatch({ type: SET_ERROR, payload: "Sorry, unable to retrieve weather" })
        })
}