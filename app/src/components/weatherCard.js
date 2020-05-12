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
      { (
            <div>
                <h3 id="temp1" className="temp">{decider}°F</h3>
            </div>
          )
      }
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