import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    width: 800px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
    
`

const Styledh4 = styled.h4 `
    text-decoration: underline;
    color:white;

    transition: each 0.2s ease-in-out;
        &:hover {
        transition: each 0.2s ease-in-out;
        color: blue;
        }
`

const StyledExplanation = styled.p `
    line-height: 30px;
    
`

export default function Details(props) {
    const {nasaData} = props
    return (
        <StyledDetails>
            <Styledh4>Explanation: </Styledh4>
            <StyledExplanation>{nasaData.explanation}</StyledExplanation>
            <p>Copyright: {nasaData.copyright}</p>
        </StyledDetails>
    )
}
