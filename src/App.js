import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import Picture from './components/Picture'
import Details from './components/Details'
import Date from './components/Date'
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log('res.data:', res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(`Here's where you messed up: \n`, err)
    })
  },[])
  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <Date key={nasaData.date} nasaData={nasaData}/>
      <Picture key={nasaData.hdurl} nasaData={nasaData}/>
      <Details key={nasaData.explanation} nasaData={nasaData}/>
    </div>
  );
}

export default App;
