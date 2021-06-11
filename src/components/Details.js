import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    width: 40%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    padding: 5%;

    &:hover {
        transform: scale(1.1);        
    }
    
`

const Styledh4 = styled.h4 `
    text-decoration: underline;
    color:white;

    transition: each 0.2s ease-in-out;
        &:hover {
        transition: each 0.2s ease-in-out;
        color: lightskyblue;
        transform: scale(1.5)
        }
`

const StyledExplanation = styled.p `
    line-height: 35px;

    &:hover {
        color: pink;
    }
    
`

const StyledCopyright = styled.p `
    &:hover {
        color: purple;
        transform: scale(1.5);
    }
`

export default function Details(props) {
    const {nasaData} = props
    return (
        <StyledDetails>
            <Styledh4>Explanation: </Styledh4>
            <StyledExplanation>{nasaData.explanation}</StyledExplanation>
            <StyledCopyright>Copyright: {nasaData.copyright}</StyledCopyright>
        </StyledDetails>
    )
}
