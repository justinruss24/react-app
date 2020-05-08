import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const TODAY_WEATHER = "TODAY_WEATHER";
export const SET_ERROR = "SET_ERROR";


export const getWeather = () => dispatch => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?zip=97203,us&appid=044e456b7e84b87b106612db89e145a7"
      )
      .then((res) => {
        // console.log(res);
        dispatch({
          type: TODAY_WEATHER,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("sorrey", error);
        dispatch({
          type: SET_ERROR,
          payload: "Sorry, unable to retrieve weather",
        });
      });
}