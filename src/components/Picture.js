import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.img`
    width:800px;
    height:600px;
    margin: 20px;
    
    &:hover {
        border-radius: 50%;
        width: 700px;
        height:500px;
    }

`

export default function Picture(props) {
    const {nasaData} = props
    return (
        <div>
            <StyledPicture src={nasaData.hdurl} alt='astronomy for today'/>
        </div>
    )
}
