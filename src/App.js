import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import Picture from './components/Picture'

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(function (res) {      
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(function (error) {      
      console.log(error);
    })
    return () => {     
    }
  }, [])

  

  return (
    <div className="App">
      <h1>NASA'S Picture of the Day</h1>
      <Picture key={nasaData.url} nasaData={nasaData}/>
    </div>
  );
}

export default App;
