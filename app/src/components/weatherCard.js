import React from 'react';
import { connect } from "react-redux";
import { getWeather } from "../actions/actions.js";



const Weather = props => {

    function converter(num) {
        return Math.floor((num - 273.15) * 9/5 + 32);
    }
    const temp = props.weather.temp;

    const decider = converter(temp);

    function canGolf(decider) {
       if ( isNaN(decider) ) {
           return <h4></h4>;
       } else if (decider > 55) {
         return (
           <div>
             <h3 id="temp1" className="temp">
               {decider}°F?!
             </h3>
             <h4>You bet your sweet ass he is.</h4>
           </div>
         );
       } else {
         return (
           <div>
             <h3 id="temp1" className="temp">
               {decider}°F
             </h3>
             <h4>Probably not.</h4>
           </div>
         );
       }
    }


    return (
      <>{
            canGolf(decider)
      }
      </>
    );
};

const mapStateToProps = state => {
    return {
      weather: state.weather,
      error: state.error,
      isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getWeather })(Weather);