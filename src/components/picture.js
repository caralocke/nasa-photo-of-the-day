import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.div`
    width: 60%;
    padding: 10px;
    margin: 0 auto;
`

export default function picture({nasaData}) {
    return (
        <StyledPicture>
            <img src={nasaData.url}/>
        </StyledPicture>
    )
}
