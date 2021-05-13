import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import Picture from './components/Picture'
import Details from './components/Details'
import styled from 'styled-components'

const StyledTop = styled.div`
  width: 60%;
  margin: 0 auto;
  font-family: 'Times New Roman', Times, serif;

  transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: hotpink;
    }
`

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
  }, [])

  

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <Picture key={nasaData.url} nasaData={nasaData}/>
      <Details key={nasaData.explanation} nasaData={nasaData}/>
    </div>
  );
}

export default App;
