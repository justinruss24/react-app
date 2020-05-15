import React from 'react';
import Weather from "./components/weatherCard.js";
import WeatherForm from "./components/weatherForm";
import './App.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGolfBall } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div `
display: flex;
align-items: center;
background-color: white;
flex-direction: column;
background-opacity: 50%;
border-radius: 20px;
padding: 2% 2% 0 2%;
margin-top: -15%;
`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>
          <FontAwesomeIcon icon={faGolfBall} size="4x" />
          <h2>Is Justin golfing today?</h2>
          <WeatherForm />
          <Weather />
        </Header>
      </header>
    </div>
  );
}

export default App;
