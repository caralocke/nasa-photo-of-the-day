import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.img`

`

export default function picture({nasaData}) {
    return (
        <div>
            <img src={nasaData.url}/>
        </div>
    )
}
