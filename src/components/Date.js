import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.h2 `
    color:white;

    &:hover {
        transform: scale(1.5);
        color: lightseagreen;
    }
`

export default function Date(props) {
    const {nasaData} = props
    return (
        <div>
            <StyledDate>Date: {nasaData.date}</StyledDate>
        </div>
    )
}
