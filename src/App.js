import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import Picture from './components/Picture'
import Details from './components/Details'
import Date from './components/Date'
import "./App.css";
import styled from 'styled-components' 

const StyledApp = styled.div `
width: 100%;
margin: 0 auto;
display: flex;
align-items:center;
flex-direction:column;
justify-content:center;
background-image:url(${`https://wallpaperaccess.com/full/977410.jpg`});
background-size: cover;
background-position: center;
`
const StyledH1 = styled.h1`
  color:white;

  &:hover {
    transform: scale(1.5);
    color: hotpink;
  }
`


function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log('res:\n', res)
      console.log('res.data:', res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(`Here's where you messed up: \n`, err)
    })
  },[])
  return (
    <StyledApp>
      <StyledH1>{nasaData.title}</StyledH1>
      <Date key={nasaData.date} nasaData={nasaData}/>
      <Picture key={nasaData.hdurl} nasaData={nasaData}/>
      <Details key={nasaData.explanation} nasaData={nasaData}/>
    </StyledApp>
  );
}

export default App;
