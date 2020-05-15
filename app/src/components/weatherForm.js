import React from 'react';
import { connect } from "react-redux";

import { getWeather } from "../actions/actions";


const WeatherForm = props => {

    function byeBtn(){
        document.getElementById("btn").classList.add("seeYa");
    } 

    const handleGetWeather = e => {
        e.preventDefault();
        props.getWeather();
        byeBtn();
    };

    return (
        <div>
            {props.isFetchingData ? (
                <div>Is the tee box calling?</div>
            ) : (
                    <div>
                        <button className="myButton" id="btn" onClick={handleGetWeather}>Check Weather in Portland</button>
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