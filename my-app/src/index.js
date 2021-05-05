import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '9c8b4d791758b9ad70bf345c4df2e51a';
// const nextDays = 'https://api.openweathermap.org/data/2.5/forecast/daily?';
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9c8b4d791758b9ad70bf345c4df2e51a

export  const getIndex = async(cityname) => {
  try{
    const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`)
    // const {days} = await axios.get(nextDays + `q=${cityname}&appid=${apiKey}`)
    console.log(data);
  }catch(error){
    throw error;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
