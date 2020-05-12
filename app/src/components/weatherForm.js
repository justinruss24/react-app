import React from 'react';
import { connect } from "react-redux";

import { getWeather } from "../actions/actions";

const WeatherForm = props => {

    function showTemp(){
        document.getElementById("temp1").classList.remove("temp");
    } 

    const handleGetWeather = e => {
        e.preventDefault();
        props.getWeather();
        showTemp();
    };

    return (
        <div>
            {props.isFetchingData ? (
                <div>Is the tee box calling?</div>
            ) : (
                    <div>
                        <button onClick={handleGetWeather}>Check the Weather</button>
                    </div>
                )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
    };
};

export default connect(
    mapStateToProps,
    { getWeather }
)(WeatherForm);