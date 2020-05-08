import React from 'react';
import { connect } from "react-redux";


const Weather = props => {
    return (
        <>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    // console.log(props)
                    props.weather.map(weather =>
                        <div className="weather">
                            {/* <h2>Weather</h2> */}
                            <p>{weather.main['temp']}</p>
                            <p>{weather.weather['main']}</p>
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