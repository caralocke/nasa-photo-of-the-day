import React from 'react'

export default function Date(props) {
    const {nasaData} = props
    return (
        <div>
            <h2>Date: {nasaData.date}</h2>
        </div>
    )
}
