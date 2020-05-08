import React from 'react';
import Weather from "./components/weatherCard.js";
import WeatherForm from "./components/weatherForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Should you golf today?</h2>
        <Weather />
        <WeatherForm />
      </header>
    </div>
  );
}

export default App;
