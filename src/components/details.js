import React, {useState ,useEffect} from 'react'
import {BASE_URL, API_KEY} from '../constants'
import axios from 'axios'
import styled from 'styled-components'

const StyledInfo = styled.div`
    width: 60%;
    margin: 0 auto;
    font-family: Arial;

    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: hotpink;
    }
`

export default function details(props) {
    const {nasaData} = props


    return (
        <StyledInfo>
            <h2>{nasaData.title}</h2>
            <h3>{nasaData.date}</h3>
            <p>Image Credit: {nasaData.copyright}</p>            
            <p>{nasaData.explanation}</p>
        </StyledInfo>
    )
}
