import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.img`
    width:800px;
    
    &:hover {
        border-radius: 50%;
        transform: scale(1.1)
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
