import React from 'react';
import { connect } from "react-redux";
import "../App.css";

const Weather = props => {
    return (
        <>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.weather.map(weather =>
                        <div className="weather">
                            <h2>Weather</h2>
                            <p>{weather.applicable_date}</p>
                        </div>)
                )}
        </>
    )
};

const mapStateToProps = state => {
    return {
        weather: state.weather,
        error: state.error
    }
};

export default connect(mapStateToProps, {})(Weather);