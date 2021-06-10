import React from 'react'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
    display:flex;
    justify-content:center;
`

const StyledPicture = styled.img`
    width:40%;
    margin: 20px;
    
    &:hover {
        border-radius: 50%;
    }

`

export default function Picture(props) {
    const {nasaData} = props
    return (
        <StyledImageContainer>
            <StyledPicture src={nasaData.hdurl} alt='astronomy for today'/>
        </StyledImageContainer>
    )
}
