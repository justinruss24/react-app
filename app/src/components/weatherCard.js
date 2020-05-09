import React from 'react';
import { connect } from "react-redux";
import { getWeather } from "../actions/actions.js";


const Weather = props => {

    function converter(num) {
        return Math.floor((num - 273.15) * 9/5 + 32);
    }
    const temp = props.weather.temp;

    const decider = converter(temp);

    return (
      <>
        {props.error ? (
          <div className="error">{props.error}</div>
        ) : (
          <div>
              <h3>{decider}</h3>
          </div>
          //   <h2>Grab your sticks!</h2>
          // console.log(props.weather)
        )}
      </>
    );
};

const mapStateToProps = state => {
    return {
        weather: state.weather,
        error: state.error
    }
};

export default connect(mapStateToProps, { getWeather })(Weather);