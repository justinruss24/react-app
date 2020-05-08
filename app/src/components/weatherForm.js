import React from 'react';
import { connect } from "react-redux";

import { getWeather } from "../actions/actions";

const WeatherForm = props => {

    const handleGetWeather = e => {
        e.preventDefault();
        props.getWeather();
    };

    return (
        <div>
            {props.isFetchingData ? (
                <div>Is the tee box calling?</div>
            ) : (
                    <div>
                        <button onClick={handleGetWeather}>Golf Day?</button>
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