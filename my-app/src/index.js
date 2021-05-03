import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";


const CountryWeather = () => {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("Helsinki");
  const [country, setCountry] = useState ("FIN");

  const getweatherData = (city,country) =>{
    axios({
      method : "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=Helsinki,fin&APPID=9c8b4d791758b9ad70bf345c4df2e51a` 
    })
    // les curlyB are in the then ()
    Then((response) => {                       
      console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
};

return(

<input type="text" value={city} onChange= {(e) => setCity (e.target.value)}/>
);

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
