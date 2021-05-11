import logo from './logo.svg';
import './App.css';
import {getIndex} from './index';
import  React, { useState,useEffect } from 'react';
import axios from 'axios';



//creating my flags:
function App() {
  const [index, setIndex] = useState(null);
  // valeur initiale entre ()
  const [city, setCity] = useState('Kigali');
  const [laoding, setLaoding] = useState(false);
  const baseUrl = 'https://pro.openweathermap.org/data/2.5/weather?';
  const foreCastUrl= 'https://pro.openweathermap.org/data/2.5/forecast/daily?';
  const apiKey = '9c8b4d791758b9ad70bf345c4df2e51a';
  const [newDatas, setNewDatas]= useState(null);

  // les states dans react servent à afficher des valeurs dans mon html
  
  // const nextDays = 'https://api.openweathermap.org/data/2.5/forecast/daily?';
  // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9c8b4d791758b9ad70bf345c4df2e51a
  
  const getIndex = async(cityname) => {
    try{
      const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`)
      // const {days} = await axios.get(nextDays + `q=${cityname}&appid=${apiKey}`)
      console.log(data);
      setNewDatas(data);
      console.log(newDatas);
    }catch(error){
      throw error;
    }
  }



//creating my function try-catch : 
const getData = async () => {
  try {
    const data = await getIndex(city);
    // setNewDatas(data);
    console.log (data);
    // console.log(index);
    // console.log(index.name);
  } catch (error) {
   console.log(error.message);
  }
}

// creating my useEffet:
useEffect(() => {
    getData();
},[]);

// what is displayed in the server
return (
    <div className="App">
      <div className="card">
        <h2 className ="title"><i className="fab fa-cloudversify"></i>Forecast</h2>
        <div className="search-form">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="enter your city name"/>
          <button type="button" onClick={() => getData()}>Search</button>
      </div>
      <div className="main-container">
        <h4>Live weather condition</h4>
        <div className="weather-icon">
          <i className="fa fa-sun"></i>
        </div>
        <h3>{newDatas.weather[0].main}</h3>
        {/* lorsque j'utilise un state dans mon htlm il faut absolument des accolades */}
        <div className="temperature">
          <h1>25&deg;C</h1>
        </div>
        <div className="location">
          <h3><i className="fa fa-street-view">{newDatas && newDatas.name}|{newDatas && newDatas.sys.country}</i></h3>
           {/* pour que le changement des villes et pays se fasse il faut un UseState */}
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
