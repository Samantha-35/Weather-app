import logo from './logo.svg';
import './App.css';
import {getIndex} from './index';
import  React, { useState,useEffect } from 'react';


//creating my flags:
function App() {
  const [index, setIndex] = useState(null);
  const [city, setCity] = useState('Kigali');
  const [laoding, setLaoding] = useState(false);

//creating my function try-catch : 
const getData = async () => {
  try {
    const data = await getIndex(city);
    setIndex(data);
    console.log (data);
  } catch (error) {
   console.log(error.message);
  }
}

// creating my useEffet:
useEffect(() => {
    getData();
},[]);

return (
    <div className="App">
      <div className="card">
        <h2 className ="title"><i class="fab fa-cloudversify"></i>Forecast</h2>
        <div className="search-form">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="enter your city name"/>
          <button type="button" onClick={() => getData()}>Search</button>
      </div>
      <div className="main-container">
        <h4>Live weather condition</h4>
        <div className="weather-icon">
          <i className="fa fa-sun"></i>
        </div>
        <h3>Sunny</h3>
        <div className="temperature">
          <h1>25&deg;C</h1>
        </div>
        <div className="location">
          <h3><i className="fa fa-street-view"></i>Kigali | Rwanda</h3>
        </div>
      </div>
      </div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          <code>Hi there!</code> 
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
