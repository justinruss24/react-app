import React from "react";
import styled from 'styled-components';

const TimeDiv = styled.div `
    margin-bottom: 2%;
    color: white;
    font-size: 3rem;
    margin-top: -10%;
`

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
console.log(Date.now());

const Time = () => {
    return (
        <TimeDiv>
            <h1>{time}</h1>
        </TimeDiv>
    )
}

export default Time;