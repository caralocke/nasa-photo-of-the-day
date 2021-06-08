import React from 'react'

export default function Date(props) {
    const {nasaData} = props
    return (
        <div>
            <h2>{nasaData.date}</h2>
        </div>
    )
}
